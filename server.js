import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

// Load environment variables based on NODE_ENV
const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  dotenv.config({ path: '.env.development' });
} else {
  dotenv.config({ path: '.env.production' });
}
const port = process.env.PORT || 14000;
const host = process.env.HOST || '0.0.0.0';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(helmet());
app.use(morgan('common'));
app.use(cors());
app.use(express.json());

// Serve static files from dist directory
const distPath = join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
} else {
  console.warn('dist directory not found, static files may not be served correctly');
}

// Email configuration (optional)
let transporter = null;
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
}

// AI Chat configuration
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const NIKOLAI_SYSTEM_PROMPT = `You are Nikolai Nossulenko's AI clone. You have the following background and expertise:

PROFESSIONAL BACKGROUND:
- Technology and Product Leader with over a decade of experience
- Deep, hands-on understanding of the entire digital product lifecycle
- Started as a full-stack developer, became passionate about mastering every phase of digital product development
- Experience in early-stage ideation, facilitating workshops, translating complex business needs into clear product backlogs
- Expertise in UX/UI design, rigorous validation, Agile methodologies
- Architect and designer of enterprise-level infrastructures
- Product manager at scale

CURRENT ROLE:
- Lead Engineer | Product Manager at Docbyte (Jun 2024 — May 2025)
- Management Partner | Product Manager at The Product Architects (Aug 2023 — Jun 2024)
- Product Manager at qualium-systems.com (Jul 2018 — Feb 2023)

TECHNICAL EXPERTISE:
- AI-driven automation and cloud monitoring systems
- AWS CloudWatch, AWS SageMaker, AWS Bedrock
- AI Integration (Claude, OpenAI, Vector Databases)
- Docker, GitHub, Jira, REST APIs
- Figma, Next.js, React Native, Flutter
- ISO 27001 certification and compliance

PERSONALITY:
- Professional yet approachable
- Enthusiastic about technology and innovation
- Clear communicator who can explain complex topics simply
- Focused on practical solutions and measurable outcomes
- Passionate about building high-performing teams

RESPONSE STYLE:
- Be helpful and informative
- Draw from Nikolai's actual experience and expertise
- Keep responses conversational but professional
- If asked about something outside your knowledge, politely redirect to topics you can help with
- Always maintain Nikolai's voice and perspective`;

// API endpoint for resume download
app.post('/api/download-resume', async (req, res) => {
  try {
    const { firstName, lastName, email, reason } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !reason) {
      return res.status(400).json({
        error: 'All fields are required'
      });
    }

    // Send email notification (if configured)
    if (transporter && process.env.EMAIL_USER) {
      try {
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: 'Resume Download Request',
          html: `
            <h2>New Resume Download Request</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Reason for Download:</strong></p>
            <p>${reason}</p>
            <p><strong>Download Date:</strong> ${new Date().toLocaleString()}</p>
          `
        };

        await transporter.sendMail(mailOptions);
        console.log('Email notification sent successfully');
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue with download even if email fails
      }
    } else {
      console.log('Email notifications not configured - skipping email send');
    }

    // Log the download request
    console.log(`Resume downloaded by: ${firstName} ${lastName} (${email})`);

    res.json({
      success: true,
      message: 'Resume download processed successfully'
    });

  } catch (error) {
    console.error('Error processing resume download:', error);
    res.status(500).json({
      error: 'Failed to process download request'
    });
  }
});

// AI Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationHistory } = req.body;

    if (!message || !OPENAI_API_KEY) {
      return res.status(400).json({
        error: 'Message is required and OpenAI API key must be configured'
      });
    }

    // Prepare messages for OpenAI
    const messages = [
      { role: 'system', content: NIKOLAI_SYSTEM_PROMPT },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    // Call OpenAI API
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: messages,
        max_tokens: 500,
        temperature: 0.7
      })
    });

    if (!openaiResponse.ok) {
      throw new Error('OpenAI API request failed');
    }

    const data = await openaiResponse.json();
    const aiResponse = data.choices[0].message.content;

    res.json({
      response: aiResponse
    });

  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({
      error: 'Failed to process chat request'
    });
  }
});

// Handle client-side routing - serve index.html for all non-API routes
app.get('*', (req, res) => {
  const indexPath = join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Page not found');
  }
});

app.listen(port, host, error => {
  if (error) throw error;
  console.log(`Server environment "${env}".`);
  console.log(`Server listening at ${host}:${port}.`);
});
