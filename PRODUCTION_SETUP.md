# Production Environment Setup

## Required Environment Variables

### In Vercel Dashboard (Project Settings > Environment Variables):

**For your deployed project, set these variables:**

1. **DATABASE_URL**
   - Value: Your Neon database connection string
   - Example: `postgresql://username:password@host/database?sslmode=require`

2. **BETTER_AUTH_SECRET** 
   - Value: A secure random string (32+ characters)
   - Generate with: `openssl rand -base64 32`

3. **BETTER_AUTH_URL**
   - Value: Your deployed Vercel app URL
   - Example: `https://kyn0-ai.vercel.app`

4. **CORS_ORIGIN**
   - Value: Your frontend URL (same as BETTER_AUTH_URL for single deployment)
   - Example: `https://kyn0-ai.vercel.app`

5. **NEXT_PUBLIC_SERVER_URL**
   - Value: Your API base URL (same as BETTER_AUTH_URL for single deployment)
   - Example: `https://kyn0-ai.vercel.app`

6. **NODE_ENV**
   - Value: `production`

## Common Issues & Solutions

### 1. API Routes Not Working
- Check that environment variables are set in Vercel dashboard
- Verify the API routes are accessible at `/api/trpc` and `/api/auth`

### 2. CORS Errors
- Ensure CORS_ORIGIN matches your frontend URL exactly
- Check that credentials are included in requests

### 3. Database Connection Issues
- Verify DATABASE_URL is correct and accessible from Vercel
- Run `pnpm run db:push` to ensure schema is synced

### 4. Auth Not Working
- Check BETTER_AUTH_URL matches your deployed URL
- Verify BETTER_AUTH_SECRET is set and 32+ characters

## Testing Production API

After deployment, test these endpoints:

1. **Health Check**: `https://your-app.vercel.app/api`
2. **TRPC**: `https://your-app.vercel.app/api/trpc`
3. **Auth**: `https://your-app.vercel.app/api/auth`

## Debugging

Check Vercel function logs in the dashboard for error details.