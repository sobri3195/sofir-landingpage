# 🚀 Netlify Deployment Guide

Complete guide untuk deploy SOFIR Landing Page React ke Netlify.

## ⚡ Quick Deploy

### Method 1: Connect Git Repository (Recommended) ⭐

1. **Push ke Git Repository**
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Login ke Netlify**
   - Buka [https://app.netlify.com](https://app.netlify.com)
   - Login dengan GitHub/GitLab/Bitbucket

3. **Import Project**
   - Click "Add new site"
   - Click "Import an existing project"
   - Pilih Git provider (GitHub/GitLab/Bitbucket)
   - Authorize Netlify
   - Pilih repository SOFIR

4. **Configure Build Settings**
   Settings akan otomatis terdeteksi dari `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 (dari `.nvmrc`)

5. **Deploy!**
   - Click "Deploy site"
   - Wait 1-2 menit
   - Site akan live di `https://random-name.netlify.app`

6. **Custom Domain (Optional)**
   - Site settings → Domain management
   - Click "Add custom domain"
   - Follow DNS configuration steps

### Method 2: Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize (one time only)
netlify init

# Deploy to production
netlify deploy --prod

# Or deploy for preview
netlify deploy
```

### Method 3: Drag & Drop

```bash
# Build project
npm run build

# Buka Netlify Dashboard
# Drag & drop folder 'dist' ke Netlify
```

## 📋 Configuration Files

### netlify.toml

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### .nvmrc

```
18
```

Menentukan Node.js version untuk Netlify build.

### public/_redirects

```
/*    /index.html   200
```

SPA redirect rule (backup jika `netlify.toml` tidak ada).

## 🔧 Build Settings

### Automatic Detection

Netlify akan otomatis detect:
- ✅ Build command dari `netlify.toml`
- ✅ Publish directory
- ✅ Node version dari `.nvmrc`
- ✅ Package manager (npm)

### Manual Configuration (jika perlu)

Jika perlu configure manual:

1. **Build command**: `npm run build`
2. **Publish directory**: `dist`
3. **Base directory**: (leave empty)
4. **Node version**: 18

## 🌍 Environment Variables

Jika perlu environment variables:

### Di Netlify Dashboard

1. Site settings → Build & deploy → Environment
2. Add environment variables:
   - Key: `VITE_API_URL`
   - Value: `https://api.sofir.id`

### Di Local Development

Create `.env` file:
```bash
VITE_API_URL=https://api.sofir.id
VITE_GA_ID=G-XXXXXXXXXX
```

Access in code:
```jsx
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🚀 Deploy Contexts

Netlify supports different deploy contexts:

### Production
- Branch: `main` or `master`
- URL: `https://your-site.netlify.app`

### Deploy Preview
- Pull requests
- URL: `https://deploy-preview-123--your-site.netlify.app`

### Branch Deploy
- Other branches
- URL: `https://branch-name--your-site.netlify.app`

## 🔄 Continuous Deployment

Auto-deploy when:
- ✅ Push to `main` branch → Production deploy
- ✅ Create pull request → Deploy preview
- ✅ Push to other branch → Branch deploy

### Disable Auto Deploy

```toml
[build]
  ignore = "git diff --quiet HEAD^ HEAD src/"
```

## 🎯 Custom Domain

### Add Custom Domain

1. Site settings → Domain management
2. Click "Add custom domain"
3. Enter domain: `sofir.id` or `www.sofir.id`
4. Verify ownership

### DNS Configuration

**Option A: Netlify DNS (Recommended)**
1. Point nameservers to Netlify
2. Netlify manages all DNS records
3. Automatic HTTPS

**Option B: External DNS**
1. Add A record to `75.2.60.5` (Netlify Load Balancer)
2. Add CNAME for www to `your-site.netlify.app`
3. Configure HTTPS certificate

### HTTPS/SSL

- ✅ Automatic HTTPS (Let's Encrypt)
- ✅ Auto-renewal
- ✅ Force HTTPS redirect

## ⚡ Performance Optimization

### Netlify CDN

- ✅ Global CDN (automatically)
- ✅ Gzip/Brotli compression
- ✅ HTTP/2 support
- ✅ Cache headers (configured in `netlify.toml`)

### Asset Optimization

Netlify automatically:
- ✅ Compress images
- ✅ Minify JS/CSS (already done by Vite)
- ✅ Serve WebP images (if available)

### Prerendering (Optional)

For better SEO, enable prerendering:

```toml
[[plugins]]
  package = "@netlify/plugin-lighthouse"
```

## 🔍 Monitoring & Analytics

### Netlify Analytics

1. Site settings → Analytics
2. Enable Netlify Analytics ($9/month)
3. Get server-side analytics (no JS required)

### Custom Analytics

Add Google Analytics, Plausible, etc. in `src/components/SEOHead.jsx`

## 🐛 Debugging

### Build Logs

- Click on deploy in Netlify dashboard
- View full build logs
- Check for errors

### Common Issues

**Issue 1: Build fails with "command not found"**
```bash
# Solution: Check package.json scripts
"scripts": {
  "build": "vite build"
}
```

**Issue 2: 404 on page refresh**
```bash
# Solution: Check redirects
# File: netlify.toml or public/_redirects
/*    /index.html   200
```

**Issue 3: Environment variables not working**
```bash
# Solution: Must start with VITE_
VITE_API_URL=https://api.example.com
```

**Issue 4: Node version mismatch**
```bash
# Solution: Create .nvmrc
echo "18" > .nvmrc
```

## 📊 Build Status Badge

Add to README.md:

```markdown
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)
```

Get badge URL from: Site settings → Status badges

## 🔒 Security

### Headers

Already configured in `netlify.toml`:
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ X-XSS-Protection
- ✅ Referrer-Policy

### Additional Security

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
```

## 💰 Pricing

### Free Tier
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Unlimited sites
- ✅ HTTPS included
- ✅ Custom domain
- ✅ Deploy previews
- ✅ Form handling (100 submissions/month)

### Pro Tier ($19/month)
- ✅ 1TB bandwidth
- ✅ Faster builds
- ✅ More build minutes
- ✅ Role-based access
- ✅ Password protection

## 📝 Checklist

Before deploying, ensure:

- [ ] `npm run build` works locally
- [ ] `netlify.toml` configured
- [ ] `.nvmrc` created (Node 18)
- [ ] Environment variables set (if needed)
- [ ] `.gitignore` includes `dist/` and `node_modules/`
- [ ] Custom domain DNS configured (if using)
- [ ] Git repository pushed
- [ ] Site tested locally with `npm run preview`

## 🎉 Success!

Your site is now live on Netlify! 🚀

**Next Steps:**
1. ✅ Test all pages and features
2. ✅ Check performance (PageSpeed Insights)
3. ✅ Set up custom domain
4. ✅ Configure environment variables
5. ✅ Enable analytics
6. ✅ Share with the world!

## 📚 Resources

- [Netlify Docs](https://docs.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#netlify)
- [React Deployment](https://react.dev/learn/start-a-new-react-project#deploying-to-production)

---

**Happy Deploying! 🚀**

**Built with React ⚛️ | Powered by Vite ⚡ | Deployed on Netlify 🌍**
