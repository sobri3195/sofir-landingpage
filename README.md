# SOFIR Landing Page

Modern, responsive, and performant landing page for **SOFIR** - Smart Optimized Framework for Integrated Rendering.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Mobile-First**: Fully responsive from 320px to 4K screens
- **Performance Optimized**: Native ES5 JavaScript, no build process required
- **Accessibility**: WCAG AA compliant with proper ARIA labels
- **SEO Ready**: Schema.org markup, Open Graph, and Twitter Cards
- **Fast Loading**: Lazy loading images, optimized assets, minimal dependencies
- **Vanilla Stack**: Pure HTML/CSS/JS - no frameworks required

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Browser Support](#browser-support)
- [Customization](#customization)
- [Deployment](#deployment)
- [Performance](#performance)
- [License](#license)

## 🏃 Quick Start

1. **Clone or download** this repository
2. **Open** `index.html` in your browser
3. **Done!** No build process required

For local development with live reload:

```bash
# Using Python 3
python -m http.server 8000

# Using PHP
php -S localhost:8000

# Using Node.js http-server
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

## 📁 Project Structure

```
sofir-landing/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles (mobile-first)
├── js/
│   └── main.js         # Vanilla JavaScript (ES5)
├── favicon.svg         # Site favicon
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

Graceful degradation for older browsers:
- IE11: Basic functionality (no animations)
- Older mobile browsers: Fallback styles

## 🎨 Customization

### Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --color-primary: #3B82F6;     /* Main brand color */
    --color-accent: #10B981;      /* Accent/success color */
    --color-dark: #0F172A;        /* Text color */
    --color-muted: #64748B;       /* Muted text */
    --color-surface: #F8FAFC;     /* Background surfaces */
}
```

### Typography

Change fonts by editing the Google Fonts import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

And update the font family variable:

```css
:root {
    --font-family: 'Inter', sans-serif;
}
```

### Content

All content is in `index.html`. Edit the text directly in the HTML structure.

### Images

Replace placeholder SVG images with real images:
- Update `data-src` attributes for lazy-loaded images
- Optimize images for web (WebP format recommended)
- Use responsive images with `srcset` for best performance

## 🚀 Deployment

### Static Hosting (Recommended)

Deploy to any static hosting service:

- **Netlify**: Drag & drop the folder
- **Vercel**: Connect Git repository or use CLI
- **GitHub Pages**: Push to `gh-pages` branch
- **Cloudflare Pages**: Connect repository
- **AWS S3 + CloudFront**: Upload to S3 bucket
- **Firebase Hosting**: Use Firebase CLI

### Traditional Hosting

Upload files via FTP/SFTP to your web server:
- Upload all files maintaining the folder structure
- Ensure `index.html` is in the root or desired directory
- Set up HTTPS (recommended for production)

### WordPress Integration

To integrate into WordPress:

1. Create a custom page template
2. Copy HTML sections into template
3. Enqueue CSS and JS files properly
4. Convert to WordPress functions for dynamic content

## ⚡ Performance

### Optimization Checklist

- ✅ Minified CSS (production)
- ✅ Minified JavaScript (production)
- ✅ Lazy loading images
- ✅ Optimized SVGs
- ✅ Resource hints (preconnect, prefetch)
- ✅ Async/defer script loading
- ✅ Critical CSS inline (optional)
- ✅ GZIP/Brotli compression
- ✅ CDN for static assets

### Performance Metrics

Target metrics:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **Time to Interactive**: < 3.5s
- **Page Weight**: < 500KB (initial load)

### Testing

Test your site performance:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

## 📱 Mobile Optimization

- Touch-friendly buttons (min 44×44px)
- Optimized font sizes for readability
- Bottom navigation for easy thumb access
- Reduced animations for better performance
- Optimized images for mobile networks

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators visible
- Color contrast WCAG AA compliant
- Skip to content link
- Screen reader friendly

## 🔧 Development

### CSS Architecture

- Mobile-first approach
- CSS custom properties (variables)
- BEM-like naming convention
- Modular component structure
- Progressive enhancement

### JavaScript

- Vanilla ES5 (no transpilation needed)
- Feature detection
- Progressive enhancement
- Event delegation
- Debounced scroll handlers
- Intersection Observer for animations

## 📊 SEO

Built-in SEO features:
- Semantic HTML5 elements
- Schema.org structured data (JSON-LD)
- Open Graph tags
- Twitter Card tags
- Optimized meta descriptions
- Heading hierarchy
- XML sitemap ready
- Robots.txt ready

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

Copyright © 2024 SOFIR. All rights reserved.

This landing page is proprietary software. See LICENSE file for details.

## 💬 Support

- **Documentation**: https://docs.sofir.id
- **Email**: support@sofir.id
- **Community**: https://community.sofir.id

## 🎯 Roadmap

Future enhancements:
- [ ] Dark mode toggle
- [ ] Multi-language support (i18n)
- [ ] Blog integration
- [ ] Newsletter signup
- [ ] Live chat widget
- [ ] Video backgrounds
- [ ] Interactive demos
- [ ] Customer testimonials carousel

## 📝 Changelog

### Version 1.0.0 (2024)
- Initial release
- Complete landing page structure
- 28 Gutenberg blocks showcase
- Payment gateway integration info
- Directory and listing features
- Membership and loyalty sections
- Full responsive design
- Performance optimized

---

**Made with ❤️ by the SOFIR Team**
