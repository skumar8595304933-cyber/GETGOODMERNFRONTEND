# Vercel Deployment Setup Guide

## ⚠️ Important: Environment Variables

Your `.env` file is gitignored (as it should be), so you need to set environment variables in Vercel dashboard.

## Step-by-Step Setup

### 1. Set Environment Variable in Vercel Dashboard

1. Go to your Vercel project dashboard
2. Click on **Settings** → **Environment Variables**
3. Add a new variable:
   - **Key**: `REACT_APP_API_URL`
   - **Value**: `https://getgoodmernbackend.onrender.com`
   - **Environment**: Select all (Production, Preview, Development)
4. Click **Save**

### 2. Redeploy

After setting the environment variable:
- Go to **Deployments** tab
- Click the **⋯** (three dots) on the latest deployment
- Click **Redeploy**

## Alternative: Environment Variable Already in vercel.json

I've added the environment variable directly to `vercel.json` as a fallback. However, it's still recommended to set it in the Vercel dashboard for better control.

## Troubleshooting

If build still fails:

1. **Check Build Logs**: Look for the actual error message after the install step
2. **Memory Issues**: If you see memory errors, the build might be too large
3. **Timeout**: If build times out, check for infinite loops or large dependencies
4. **Missing Files**: Ensure all source files are committed to git

## Common Build Errors

### Error: "Module not found"
- **Solution**: Ensure all dependencies are in `package.json` and committed

### Error: "Cannot find module"
- **Solution**: Check import paths are correct (case-sensitive)

### Error: "Out of memory"
- **Solution**: Vercel provides 8GB, but if needed, optimize bundle size

### Error: "Build timeout"
- **Solution**: Check for infinite loops or optimize build process

## Verify Your Setup

✅ `package.json` has correct dependencies
✅ `vercel.json` is properly configured
✅ Environment variable is set (in dashboard or vercel.json)
✅ All source files are committed to git
✅ `.env` is in `.gitignore` (correct)

## Need Help?

If you're still getting errors, share the complete build log (especially the error message after the install step).
