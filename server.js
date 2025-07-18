import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

dotenv.config();

const env = process.env.NODE_ENV || 'development';
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
