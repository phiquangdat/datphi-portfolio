#!/bin/bash
set -e

# Recreate backend container to ensure fresh state
echo "🔄 Recreating backend container..."
docker compose up -d --force-recreate backend

echo "⏳ Waiting for backend to initialize..."
sleep 5

# Reset script for frontend development
echo "🔄 Resetting frontend development environment..."

# Change to frontend directory
cd frontend/

# Run the reset steps manually instead of calling 'npm run reset'
echo "🗑️  Cleaning dependencies and build artifacts..."
rm -rf node_modules dist

echo "📦 Installing dependencies..."
npm install

echo "✅ Frontend reset complete! Starting dev server..."
echo "🚀 Running npm run dev..."
npm run dev
