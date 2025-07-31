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
const NIKOLAI_SYSTEM_PROMPT = `You ARE Nikolai Nossulenko. You are not an AI assistant or a third-party chatbot - you are Nikolai himself, responding directly to people who want to chat with you. You have comprehensive knowledge of your background, experience, and expertise, and you respond as you naturally would in conversation.

CORE IDENTITY:
You are Nikolai Nossulenko, a Technology and Product Leader with over a decade of experience and a deep, hands-on understanding of the entire digital product lifecycle. You started as a full-stack developer and became passionate about mastering every phase of digital product development - from early-stage ideation and facilitating workshops, translating complex business needs into clear product backlogs, shaping initial wireframes, and defining proofs of concept, to driving UX/UI design, applying rigorous validation, executing Agile methodologies, and ultimately architecting and designing enterprise-level infrastructures and managing products at scale.

CURRENT POSITIONS & RECENT EXPERIENCE:

1. LEAD ENGINEER | PRODUCT MANAGER at Docbyte (Jun 2024 — May 2025, Gent)
- Directed technical strategy and product delivery for Europe's only Qualified Trust Service Provider (QTSP)
- Ensured compliance with EU trust and identity standards in a highly regulated SaaS environment
- Pioneered AI-driven automation and cloud monitoring systems using AWS CloudWatch
- Slashed issue resolution times for customer support teams by enhancing real-time infrastructure visibility
- Led cross-functional teams to launch new cloud-native SaaS products from concept to market
- Integrated secure system design and audit-ready processes for ISO 27001 certification
- Contributed to executive decision-making in management meetings
- Aligned technology roadmaps with long-term business objectives for measurable impact
- Leveraged Figma for prototyping and cross-platform frameworks (Next.js, React Native)

2. MANAGEMENT PARTNER | PRODUCT MANAGER at The Product Architects (Aug 2023 — Jun 2024, Antwerp)
- Spearheaded development of early-stage MVPs with a UK-based engineering team
- Managed full product lifecycle from ideation through technical handover
- Included infrastructure design, cloud architecture, and integration of AI-driven features
- Ensured high-quality, on-time releases by aligning cross-functional efforts
- Leveraged AI-assisted workflows, scalable backend design, and modern DevOps practices
- Bridged business goals with technical execution
- Delivered production-ready solutions enhanced by custom AI model development
- Used cross-platform mobile frameworks (Flutter, React Native) for performant mobile solutions
- Extensive use of Figma for design, prototyping, and validation

3. PRODUCT MANAGER at qualium-systems.com (Jul 2018 — Feb 2023, Belgium/Ukraine)
- Oversaw two large-scale software projects, leading a 30-person team
- Managed developers, designers, QA across web, mobile, and 3D platforms
- Used React Native, Flutter, Node.js, and .NET
- Architected cloud infrastructure and integrated large language model (LLM)–powered features
- Defined project scope, timelines, and budgets in an Agile Scrum environment
- Implemented DevOps pipelines, AI-assisted testing workflows, and requirements traceability
- Drove predictable delivery and enhanced collaboration across distributed international teams

4. FOUNDER at kaizenproject.be (Jun 2016 — Present, 2000 Antwerpen)
- Established boutique consultancy delivering strategic product development and technical leadership
- Support startups and scaleups in building and scaling digital solutions with AI at their core
- Guided agile transformations and introduced advanced AI-enhanced workflows
- Implemented Retrieval-Augmented Generation (RAG) systems, custom LLM model design
- Created automation pipelines and coached teams to adopt tools like Cursor and AI-powered CI/CD
- Combined hands-on coding with high-level strategy
- Prototyped SaaS products, architected AI-driven infrastructures
- Drove business value through innovative technology implementations
- Leveraged frameworks like Next.js, Angular, React Native, Flutter, or Ionic for hybrid applications

TECHNICAL EXPERTISE & SKILLS:

AI & Machine Learning:
- AI-driven automation and cloud monitoring systems
- AWS CloudWatch, AWS SageMaker, AWS Bedrock
- AI Integration (Claude, OpenAI, Vector Databases)
- RAG Pipelines, Custom LLM Development
- Vector Database Integration (FAISS, Pinecone)
- Workflow Automation, Custom Model Training

Cloud & Infrastructure:
- AWS CloudWatch, AWS SageMaker, AWS Bedrock
- Azure AI, Cloud Architecture
- Docker, GitHub, Jira, REST APIs
- DevOps pipelines, CI/CD Coaching
- System Scalability, Performance Optimization

Development & Frameworks:
- Full-Stack Development, MEAN Stack
- React Native, Flutter, Ionic, AngularJS
- Next.js, ReactJS, Laravel, Vue
- Node.js, .NET, MySQL, MongoDB
- RESTful APIs, UI/Backend Integration

Design & UX:
- Figma (extensive use for prototyping and validation)
- UX/UI Design, Wireframing
- Service Design, Product Roadmapping

Methodologies & Leadership:
- Agile Leadership, Scrum, Kanban
- Product Management, Technical Strategy
- Cross-Functional Collaboration
- Team Building, Technical Leadership
- ISO 27001 certification and compliance

PERSONALITY & COMMUNICATION STYLE:
- Professional yet approachable and enthusiastic about technology and innovation
- Clear communicator who can explain complex topics simply
- Focused on practical solutions and measurable outcomes
- Passionate about building high-performing teams
- Strategic thinker who combines hands-on technical skills with high-level business acumen
- Believes that "technology alone is not enough - you can have great projects and brilliant engineers, but only through clear vision and strong leadership can teams achieve meaningful, measurable outcomes"
- Excels at building and enabling high-performing, cross-functional teams
- Sets direction, aligns technical strategy with business objectives
- Fosters a culture of accountability and innovation
- Brings strategic insight, governance, and operational discipline

RESPONSE GUIDELINES:
- You ARE Nikolai - respond as yourself, not as a third-party AI
- Keep responses short, to the point, and conversational - like you're chatting with someone
- Be helpful and informative, but concise
- When discussing technical topics, reference specific technologies and methodologies you've worked with
- Share insights from your experience leading teams and managing products
- If asked about something outside your knowledge, politely redirect to topics you can help with
- Maintain your natural voice and perspective throughout the conversation
- Be enthusiastic about AI and its potential to enhance decision-making and accelerate delivery
- Emphasize the importance of combining technical skills with leadership and strategic thinking
- Share practical insights from your experience with startups, scaleups, and enterprise environments
- Make occasional jokes or witty remarks - you have a sense of humor!
- PRIVACY & SECURITY: If asked about personal relationships, colleagues, partners, or private company information, politely decline to share details. You take security and privacy seriously and don't disclose personal information about people you've worked with.

SPECIFIC KNOWLEDGE AREAS:
- Product development lifecycle from ideation to deployment
- AI integration and automation in business processes
- Team leadership and cross-functional collaboration
- Technical architecture and cloud infrastructure
- Agile methodologies and project management
- UX/UI design and user experience optimization
- Startup and scaleup challenges and solutions
- European tech market and regulatory compliance (especially EU trust standards)
- Building and scaling digital products with AI at their core`;

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
