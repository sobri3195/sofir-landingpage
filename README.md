# SOFIR Landing Page - React Version

Modern, responsive, and performant landing page built with **React.js** for **SOFIR** - Smart Optimized Framework for Integrated Rendering.

> 🚀 **Optimized for Netlify Deployment**

## 🎉 Features

- ⚛️ **React 18.3** with modern hooks
- ⚡ **Vite 5.4** for blazing fast builds
- 📱 **Mobile-First Design** - Fully responsive
- 🎨 **Modern UI/UX** - Clean and professional
- ♿ **Accessible** - WCAG AA compliant
- 🔍 **SEO Optimized** - react-helmet-async integration
- 🚀 **Performance** - Code splitting & lazy loading
- 📦 **Lightweight** - ~66KB total (gzipped)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Then open `http://localhost:5173` in your browser.

## 📦 Deployment to Netlify

### Option 1: Connect Git Repository (Recommended)

1. Push code to GitHub/GitLab/Bitbucket
2. Login to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. **Build settings** (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
netlify deploy --prod
```

### Option 3: Drag & Drop

```bash
# Build the project
npm run build

# Drag & drop the 'dist' folder to Netlify
```

The `netlify.toml` file is already configured with optimal settings.

## 📁 Project Structure

```
sofir-landing/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Sticky header
│   │   ├── Hero.jsx         # Hero with counters
│   │   ├── Highlights.jsx   # Feature cards
│   │   ├── BlocksShowcase.jsx  # 28 blocks
│   │   ├── Payments.jsx     # Payment gateways
│   │   ├── Membership.jsx   # Pricing tiers
│   │   ├── FAQ.jsx          # FAQ accordion
│   │   ├── MobileBottomNav.jsx  # Mobile nav
│   │   ├── FloatingCTA.jsx  # CTA button
│   │   └── SEOHead.jsx      # SEO meta tags
│   ├── hooks/               # Custom React hooks
│   │   ├── useScrollDirection.js
│   │   ├── useIntersectionObserver.js
│   │   └── useCounter.js
│   ├── assets/              # CSS and assets
│   │   └── styles.css       # Main styles
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── index-legacy.html        # Legacy HTML version
├── vite.config.js           # Vite configuration
├── netlify.toml             # Netlify configuration
├── package.json             # Dependencies
└── README.md                # This file
```

## 🎨 Components Overview

### Core Components

1. **Header** - Sticky header with mobile hamburger menu
2. **Hero** - Hero section with animated counters (28, 5, 100)
3. **Highlights** - 12 feature cards with hover effects
4. **BlocksShowcase** - Showcase of 28 Gutenberg blocks
5. **Payments** - Payment gateway logos display
6. **Membership** - 3 pricing tiers (Free, Basic, Pro)
7. **FAQ** - Accordion-style FAQ section
8. **MobileBottomNav** - Bottom navigation for mobile
9. **FloatingCTA** - Floating CTA button
10. **SEOHead** - SEO meta tags management

### Custom Hooks

1. **useScrollDirection** - Detect scroll direction & scrolled state
2. **useIntersectionObserver** - Trigger animations on viewport entry
3. **useCounter** - Animated counter with easing function

## 🎨 Customization

### Colors

Edit CSS variables in `src/assets/styles.css`:

```css
:root {
    --color-primary: #3B82F6;     /* Main brand color */
    --color-accent: #10B981;      /* Accent/success color */
    --color-dark: #0F172A;        /* Text color */
    --color-muted: #64748B;       /* Muted text */
    --color-surface: #F8FAFC;     /* Background surfaces */
}
```

### Content

Edit content directly in component files in `src/components/`.

### Adding New Components

1. Create component in `src/components/YourComponent.jsx`
2. Import in `src/App.jsx`
3. Add to the component tree

Example:
```jsx
// src/components/YourComponent.jsx
export default function YourComponent() {
  return (
    <section className="your-component">
      {/* Your content */}
    </section>
  );
}

// src/App.jsx
import YourComponent from './components/YourComponent';

// Add to JSX
<YourComponent />
```

## ⚡ Performance

### Build Output (Production)

- **CSS**: ~5.73 KB (gzipped)
- **JavaScript**: ~59.46 KB (gzipped)
- **Total**: ~66 KB (gzipped)

### Optimization Features

- ✅ Code splitting
- ✅ Tree shaking
- ✅ Lazy loading
- ✅ Asset optimization
- ✅ CSS minification
- ✅ JS minification
- ✅ Gzip compression (via Netlify)
- ✅ Cache headers configured

### Performance Metrics Targets

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **Time to Interactive**: < 3.5s

Test with:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators visible
- Color contrast WCAG AA compliant
- Screen reader friendly

## 🔍 SEO

Built-in SEO features via `react-helmet-async`:
- Dynamic meta tags
- Open Graph tags
- Twitter Card tags
- Schema.org structured data
- Semantic HTML elements
- Optimized heading hierarchy

## 📝 Environment Variables

If you need environment variables:

```bash
# .env
VITE_API_URL=https://api.example.com
```

Access in code:
```jsx
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🔧 Configuration Files

### netlify.toml

Netlify configuration with build settings, redirects, and headers.

### vite.config.js

Vite configuration for build optimization.

### package.json

Dependencies and scripts configuration.

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Copyright © 2024 SOFIR. All rights reserved.

This landing page is proprietary software. See LICENSE file for details.

## 💬 Support

- **Documentation**: https://docs.sofir.id
- **Email**: support@sofir.id
- **Community**: https://community.sofir.id

## 📚 Additional Documentation

- **Quick Start Guide**: [`QUICK-START-REACT.md`](QUICK-START-REACT.md)
- **Development Guide**: [`DEVELOPMENT-GUIDE.md`](DEVELOPMENT-GUIDE.md)
- **React Migration Details**: [`REACT-MIGRATION.md`](REACT-MIGRATION.md)
- **Deployment Guide**: [`DEPLOYMENT.md`](DEPLOYMENT.md)

## 🎯 Roadmap

- [ ] TypeScript migration
- [ ] Unit tests (Vitest)
- [ ] E2E tests (Playwright)
- [ ] Storybook integration
- [ ] Dark mode toggle
- [ ] Multi-language support (i18n)
- [ ] PWA features
- [ ] Server-side rendering (Next.js)

## 📝 Changelog

### Version 2.0.0 (2024) - React Release 🎉

- ✨ Complete React.js rewrite
- ✨ 10+ React components
- ✨ 3 custom hooks
- ✨ Vite build system
- ✨ Netlify optimized
- ✨ SEO with react-helmet-async
- ✨ Performance optimized (~66KB gzipped)
- ✨ Mobile-first responsive design
- ✨ All HTML version features preserved

---

**Made with ❤️ by the SOFIR Team**

**Built with React ⚛️ | Powered by Vite ⚡ | Deployed on Netlify 🚀**
