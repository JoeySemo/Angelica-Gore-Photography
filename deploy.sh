#!/bin/bash
# Deployment script for Angelica Gore Photography
# Run this after authenticating with GitHub and Vercel CLI

set -e  # Exit on error

echo "🚀 Angelica Gore Photography - Deployment Script"
echo "=================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Must run from project root directory"
    exit 1
fi

echo "📋 Step 1: Checking GitHub CLI authentication..."
if ! gh auth status > /dev/null 2>&1; then
    echo "⚠️  GitHub CLI not authenticated. Running authentication..."
    gh auth login
else
    echo "✅ GitHub CLI authenticated"
fi

echo ""
echo "📋 Step 2: Creating GitHub repository..."
if gh repo create "JoeySemo/Angelica Gore Photography" --public --source=. --remote=origin --push; then
    echo "✅ GitHub repository created and code pushed"
else
    echo "⚠️  Repository may already exist or push failed. Continuing..."
fi

echo ""
echo "📋 Step 3: Checking Vercel CLI authentication..."
if ! vercel whoami > /dev/null 2>&1; then
    echo "⚠️  Vercel CLI not authenticated. Running authentication..."
    vercel login
else
    echo "✅ Vercel CLI authenticated"
fi

echo ""
echo "📋 Step 4: Deploying to Vercel..."
echo "This will deploy your site to production."
vercel --prod

echo ""
echo "📋 Step 5: Adding custom domain..."
echo "Adding verdantmission.org to Vercel project..."
vercel domains add verdantmission.org

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📝 Next Steps:"
echo "1. Configure DNS at Porkbun (see walkthrough.md for details)"
echo "2. Wait for DNS propagation (15 min - 48 hours)"
echo "3. Visit https://verdantmission.org to verify"
echo ""
echo "🎉 Your photography website is ready!"
