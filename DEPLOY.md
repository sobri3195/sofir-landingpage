# 🚀 Quick Deploy Guide

Super cepat deploy SOFIR Landing Page ke Netlify!

## ⚡ Cara Paling Cepat (3 Langkah)

### 1️⃣ Build Project
```bash
npm install
npm run build
```

### 2️⃣ Deploy ke Netlify

**Pilih salah satu:**

#### A. Drag & Drop (Paling Mudah)
1. Buka https://app.netlify.com/drop
2. Drag folder `dist/` ke browser
3. Done! ✅

#### B. Git Deploy (Auto-deploy)
```bash
# Push ke GitHub
git add .
git commit -m "Deploy to Netlify"
git push

# Di Netlify Dashboard:
# 1. New site from Git
# 2. Choose repo
# 3. Deploy! (auto-detects settings)
```

#### C. CLI Deploy
```bash
# Install CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### 3️⃣ Done! 🎉
Site live di: `https://your-site.netlify.app`

## 📋 Pre-Deploy Checklist

- [x] ✅ `netlify.toml` exists
- [x] ✅ `.nvmrc` exists (Node 18)
- [x] ✅ `public/_redirects` exists
- [x] ✅ Build successful: `npm run build`
- [x] ✅ Preview works: `npm run preview`

## 🔧 Build Settings (Auto-detected)

```toml
Build command: npm run build
Publish directory: dist
Node version: 18
```

## 🌐 Custom Domain

1. Site Settings → Domain Management
2. Add custom domain
3. Update DNS:
   - A record: `75.2.60.5`
   - CNAME www: `your-site.netlify.app`
4. Wait for DNS propagation (few minutes)

## 🐛 Troubleshooting

**Build fails?**
```bash
# Test locally first
npm install
npm run build
```

**404 on refresh?**
- Check: `netlify.toml` has redirects
- Check: `public/_redirects` exists

**Environment variables?**
- Site Settings → Environment variables
- Must start with `VITE_`

## 📚 Full Documentation

- Complete guide: [NETLIFY-DEPLOYMENT.md](NETLIFY-DEPLOYMENT.md)
- React setup: [README.md](README.md)
- Quick start: [QUICK-START-REACT.md](QUICK-START-REACT.md)

---

**That's it! 🚀 Your site is live on Netlify!**
