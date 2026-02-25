# Vercel Deployment Guide

## Prerequisites

1. Install Vercel CLI: `npm i -g vercel`
2. Login to Vercel: `vercel login`

## Deployment Steps

### 1. Deploy Backend (API)

```bash
# Navigate to server directory
cd apps/server

# Deploy to Vercel
vercel --prod

# Set environment variables in Vercel dashboard or CLI:
vercel env add DATABASE_URL
vercel env add BETTER_AUTH_SECRET
vercel env add BETTER_AUTH_URL
vercel env add CORS_ORIGIN
```

### 2. Deploy Frontend (Web)

```bash
# Navigate to web directory
cd apps/web

# Deploy to Vercel
vercel --prod

# Set environment variables:
vercel env add NEXT_PUBLIC_API_URL
```

### 3. Environment Variables

Set these in your Vercel dashboard for both projects:

**Backend (apps/server):**
- `DATABASE_URL`: Your Neon database connection string
- `BETTER_AUTH_SECRET`: A secure random string (32+ characters)
- `BETTER_AUTH_URL`: Your backend Vercel URL (e.g., https://your-api.vercel.app)
- `CORS_ORIGIN`: Your frontend Vercel URL (e.g., https://your-app.vercel.app)

**Frontend (apps/web):**
- `NEXT_PUBLIC_API_URL`: Your backend Vercel URL

### 4. Database Setup

After deployment, run database migrations:

```bash
# Generate Prisma client
pnpm run db:generate

# Push schema to production database
pnpm run db:push
```

## Alternative: Single Project Deployment

You can also deploy both as a single Vercel project using the root `vercel.json` configuration.

```bash
# From project root
vercel --prod
```

This will deploy both frontend and backend together.