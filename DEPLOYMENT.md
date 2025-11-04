# SOFIR Landing Page - Deployment Guide

Panduan lengkap untuk deploy SOFIR Landing Page ke berbagai platform.

## 📋 Pre-Deployment Checklist

Sebelum deploy, pastikan:

- [ ] Update semua URL dari placeholder ke URL production
- [ ] Compress/minify CSS dan JavaScript
- [ ] Optimize semua gambar (convert ke WebP jika memungkinkan)
- [ ] Test di multiple browsers dan devices
- [ ] Validate HTML, CSS, dan JavaScript
- [ ] Setup SSL certificate (HTTPS)
- [ ] Configure CDN untuk static assets
- [ ] Setup analytics (Google Analytics, dll)
- [ ] Test performance dengan Lighthouse/PageSpeed
- [ ] Update sitemap.xml dengan URL production
- [ ] Update robots.txt jika diperlukan

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)

**Langkah:**

1. Login ke [Netlify](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect Git repository atau drag & drop folder
4. Configure build settings (tidak perlu, karena static site)
5. Deploy!

**Custom Domain:**
```
1. Site settings → Domain management
2. Add custom domain
3. Configure DNS records
```

**Environment Variables:**
```
# Tidak diperlukan untuk static site
```

**Performance Settings:**
- Enable asset optimization
- Enable Brotli compression
- Configure redirects jika perlu

### Option 2: Vercel

**Langkah:**

1. Login ke [Vercel](https://vercel.com)
2. Click "New Project"
3. Import Git repository
4. Deploy

**vercel.json Configuration:**
```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    },
    {
      "source": "/(.*).(js|css|svg|jpg|png|webp)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Option 3: GitHub Pages

**Langkah:**

1. Push code ke GitHub repository
2. Go to Settings → Pages
3. Select branch (main atau gh-pages)
4. Select root folder
5. Save

**Custom Domain:**
```
1. Add CNAME file dengan domain name
2. Configure DNS di domain registrar
3. Enable "Enforce HTTPS" di GitHub settings
```

**GitHub Actions for Auto Deploy:**
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

### Option 4: Cloudflare Pages

**Langkah:**

1. Login ke [Cloudflare](https://pages.cloudflare.com)
2. Create a project
3. Connect Git repository
4. Configure build settings (kosongkan untuk static)
5. Deploy

**Benefits:**
- Global CDN
- DDoS protection
- Free SSL
- Fast edge network

### Option 5: AWS S3 + CloudFront

**Langkah:**

1. **Create S3 Bucket:**
```bash
aws s3 mb s3://sofir-landing
aws s3 website s3://sofir-landing --index-document index.html
```

2. **Upload Files:**
```bash
aws s3 sync . s3://sofir-landing --exclude ".git/*" --exclude "*.md"
```

3. **Set Bucket Policy:**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::sofir-landing/*"
    }
  ]
}
```

4. **Create CloudFront Distribution:**
- Origin: S3 bucket
- Viewer Protocol Policy: Redirect HTTP to HTTPS
- Compress Objects: Yes
- Price Class: Use all edge locations

5. **Configure Custom Domain:**
- Add CNAME record in Route 53 or DNS provider
- Request SSL certificate via ACM

### Option 6: Firebase Hosting

**Langkah:**

1. **Install Firebase CLI:**
```bash
npm install -g firebase-tools
```

2. **Login & Init:**
```bash
firebase login
firebase init hosting
```

3. **Configure firebase.json:**
```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**",
      "**/*.md"
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      },
      {
        "source": "**/*.@(css|js)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

4. **Deploy:**
```bash
firebase deploy
```

### Option 7: Traditional Web Hosting (cPanel)

**Langkah:**

1. **Compress Files:**
```bash
zip -r sofir-landing.zip . -x "*.git*" -x "*.md"
```

2. **Upload via FTP/SFTP:**
```bash
# Using SFTP
sftp user@your-server.com
put sofir-landing.zip
```

3. **Extract on Server:**
```bash
ssh user@your-server.com
unzip sofir-landing.zip -d /public_html/
```

4. **Set Permissions:**
```bash
chmod -R 755 /public_html/
```

5. **Configure .htaccess:**
```apache
# .htaccess
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType text/javascript "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType text/html "access plus 1 hour"
</IfModule>

# Security Headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

## 🔧 Post-Deployment Tasks

### 1. Configure DNS

**A Record:**
```
Type: A
Name: @
Value: [Server IP]
TTL: 3600
```

**CNAME Record (www):**
```
Type: CNAME
Name: www
Value: sofir.id
TTL: 3600
```

### 2. Setup SSL Certificate

**Let's Encrypt (Free):**
```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Generate Certificate
sudo certbot --nginx -d sofir.id -d www.sofir.id
```

**CloudFlare SSL:**
- Automatic via CloudFlare dashboard
- Choose "Full (strict)" for best security

### 3. Configure CDN

**CloudFlare CDN:**
1. Add site to CloudFlare
2. Update nameservers
3. Enable "Auto Minify" for HTML, CSS, JS
4. Enable "Brotli" compression
5. Set Cache Level to "Standard"

**BunnyCDN:**
```bash
# Pull Zone Configuration
Origin URL: https://sofir.id
CDN URL: https://cdn.sofir.id
```

### 4. Setup Analytics

**Google Analytics 4:**
```html
<!-- Add to <head> section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Plausible Analytics (Privacy-friendly):**
```html
<script defer data-domain="sofir.id" src="https://plausible.io/js/plausible.js"></script>
```

### 5. Setup Monitoring

**Uptime Monitoring:**
- UptimeRobot (free)
- Pingdom
- StatusCake

**Performance Monitoring:**
- Google Search Console
- Google PageSpeed Insights
- GTmetrix

## ⚡ Optimization Checklist

### HTML Optimization
- [ ] Minify HTML (remove comments, whitespace)
- [ ] Inline critical CSS
- [ ] Async/defer non-critical scripts
- [ ] Add resource hints (preconnect, prefetch)

### CSS Optimization
- [ ] Minify CSS
- [ ] Remove unused CSS
- [ ] Combine CSS files (optional)
- [ ] Use CSS sprites for icons (optional)

### JavaScript Optimization
- [ ] Minify JavaScript
- [ ] Remove console.log statements
- [ ] Bundle scripts (optional)
- [ ] Use defer/async attributes

### Image Optimization
- [ ] Convert to WebP format
- [ ] Compress images (TinyPNG, ImageOptim)
- [ ] Use responsive images (srcset)
- [ ] Lazy load images
- [ ] Use SVG for icons/logos

### Performance Tools

**Minification:**
```bash
# HTML Minifier
npm install -g html-minifier
html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html

# CSS Minifier
npm install -g clean-css-cli
cleancss -o styles.min.css styles.css

# JavaScript Minifier
npm install -g terser
terser main.js -o main.min.js --compress --mangle
```

**Image Optimization:**
```bash
# ImageMagick
convert image.jpg -quality 85 -strip image.webp

# cwebp
cwebp -q 85 image.jpg -o image.webp
```

## 🔒 Security Checklist

- [ ] Enable HTTPS (SSL/TLS)
- [ ] Add security headers
- [ ] Implement CSP (Content Security Policy)
- [ ] Regular backups
- [ ] Hide server information
- [ ] Rate limiting (if applicable)
- [ ] DDoS protection (CloudFlare, etc)

**Security Headers:**
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:;
```

## 📊 Monitoring & Analytics

### Performance Metrics to Monitor
- Page Load Time
- Time to First Byte (TTFB)
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)
- Time to Interactive (TTI)

### Business Metrics to Track
- Page views
- Unique visitors
- Bounce rate
- Average session duration
- Conversion rate (demo requests, downloads)
- Traffic sources
- Device/browser distribution

## 🆘 Troubleshooting

### Common Issues

**Site not loading:**
- Check DNS propagation (dnschecker.org)
- Verify SSL certificate
- Check server/hosting status

**Slow performance:**
- Enable compression (Gzip/Brotli)
- Optimize images
- Enable CDN
- Check database queries (if dynamic)

**CSS/JS not loading:**
- Check file paths (relative vs absolute)
- Verify file permissions
- Check .htaccess rules
- Clear CDN cache

## 📞 Support

For deployment issues or questions:
- Documentation: https://docs.sofir.id
- Email: support@sofir.id
- Community: https://community.sofir.id

---

**Last Updated:** January 2024
