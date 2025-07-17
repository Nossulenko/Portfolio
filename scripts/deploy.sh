#!/bin/bash

# Production deployment script
echo "🚀 Starting production deployment..."

# Build the project
echo "📦 Building project..."
npm run build

# Copy build files to public directory
echo "📁 Copying build files..."
npm run deploy:build

# Install production dependencies
echo "📥 Installing production dependencies..."
npm install --production

# Set environment variables (you'll need to set these on your server)
echo "🔧 Environment variables needed:"
echo "   EMAIL_USER=your-email@gmail.com"
echo "   EMAIL_PASS=your-16-digit-app-password"
echo "   NODE_ENV=production"
echo "   PORT=14000"

echo "✅ Deployment ready! Run 'npm run server' to start the production server."
