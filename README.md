# Portfolio Website

A React-based portfolio website with resume download functionality and email notifications.

<!-- Updated: Latest deployment with email notifications -->

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Email Configuration (Required for Resume Downloads)

To enable email notifications when someone downloads your resume, you need to configure Gmail SMTP:

1. **Create a Gmail App Password:**
   - Go to your Google Account settings
   - Navigate to Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"

2. **Set Environment Variables:**
   Create a `.env` file in the root directory with:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-digit-app-password
   ```

### 3. Add Your Resume PDF
Place your resume PDF file at `public/resume.pdf`

### 4. Run the Project

**Development Mode:**
```bash
npm run start
```

**Production Mode:**
```bash
npm run build
npm run server
```

## Features

- **Responsive Design:** Mobile-friendly navigation with burger menu
- **Resume Download System:** Captures visitor information and sends email notifications
- **Professional UI:** Modern design with animations and sound effects
- **Contact Integration:** LinkedIn connection and download tracking

## API Endpoints

- `POST /api/download-resume` - Handles resume download requests and sends email notifications

## Email Notifications

When someone downloads your resume, you'll receive an email with:
- Visitor's name and email
- Reason for download
- Download timestamp

## Production Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Set Environment Variables in Vercel Dashboard:**
   - `EMAIL_USER` = your-email@gmail.com
   - `EMAIL_PASS` = your-16-digit-app-password

### Option 2: Railway

1. **Connect your GitHub repo to Railway**
2. **Set Environment Variables:**
   - `EMAIL_USER` = your-email@gmail.com
   - `EMAIL_PASS` = your-16-digit-app-password

### Option 3: Traditional VPS

1. **Build the project:**
   ```bash
   npm run build
   npm run deploy:build
   ```

2. **Upload files to your server**
3. **Install dependencies:**
   ```bash
   npm install --production
   ```

4. **Set environment variables and run:**
   ```bash
   npm run server
   ```

## Development

The project uses:
- React with Vite for frontend
- Express.js for backend API
- Nodemailer for email notifications
- CORS for cross-origin requests

