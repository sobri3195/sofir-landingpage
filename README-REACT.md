# SOFIR Landing Page - React Version

Versi React.js dari landing page SOFIR WordPress Plugin.

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### Build untuk Production

```bash
npm run build
```

File production akan ada di folder `dist/`

### Preview Production Build

```bash
npm run preview
```

## 📁 Struktur Project

```
/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx
│   │   ├── MobileBottomNav.jsx
│   │   ├── FloatingCTA.jsx
│   │   ├── Hero.jsx
│   │   ├── Highlights.jsx
│   │   ├── BlocksShowcase.jsx
│   │   ├── FAQ.jsx
│   │   └── SEOHead.jsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useScrollDirection.js
│   │   ├── useIntersectionObserver.js
│   │   └── useCounter.js
│   ├── assets/              # CSS dan assets lainnya
│   │   └── styles.css
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Entry point
├── index-react.html         # HTML template
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies
```

## 🎯 Fitur React

### Custom Hooks

- **useScrollDirection**: Mendeteksi arah scroll dan status scrolled
- **useIntersectionObserver**: Intersection Observer untuk animasi scroll
- **useCounter**: Animated counter dengan easing

### Komponen Utama

1. **Header**: Sticky header dengan hamburger menu
2. **MobileBottomNav**: Bottom navigation untuk mobile
3. **FloatingCTA**: Floating CTA button yang muncul saat scroll
4. **Hero**: Hero section dengan animated counters
5. **Highlights**: Feature highlights dengan scroll animation
6. **BlocksShowcase**: Grid showcase untuk 28 Gutenberg blocks
7. **FAQ**: Accordion FAQ dengan state management
8. **SEOHead**: SEO meta tags dengan react-helmet-async

## 🔧 Technologies

- **React 18.3**: Modern React dengan hooks
- **Vite 5.4**: Lightning fast build tool
- **react-helmet-async**: SEO meta tags management
- **CSS Variables**: Menggunakan CSS yang sama dengan versi HTML

## 📝 Catatan Konversi

### Yang Sudah Dikonversi

- ✅ Header dengan mobile menu
- ✅ Mobile bottom navigation
- ✅ Floating CTA button
- ✅ Hero section dengan animated counters
- ✅ Highlights section
- ✅ 28 Blocks showcase
- ✅ FAQ accordion
- ✅ SEO meta tags dan structured data
- ✅ Scroll animations dengan Intersection Observer
- ✅ Responsive design (CSS sama dengan HTML version)

### Placeholder Sections

Beberapa section dibuat sebagai placeholder dan bisa dikembangkan lebih lanjut:

- Templates Library dengan skeleton loading
- Payments gateway logos
- Directory dengan maps integration
- Membership pricing table (structure sudah ada)
- Webhooks & Integration
- Loyalty Program
- SEO Features
- Performance Metrics
- Security Features
- System Requirements (basic version sudah ada)

### Cara Mengembangkan Placeholder

Untuk mengembangkan section placeholder, buat component baru di `src/components/` dan import ke `App.jsx`. Contoh:

```jsx
// src/components/Templates.jsx
export default function Templates() {
  return (
    <section className="templates" id="templates">
      {/* Template cards */}
    </section>
  );
}

// Di App.jsx
import Templates from './components/Templates';

function App() {
  return (
    // ...
    <Templates />
    // ...
  );
}
```

## 🎨 Styling

CSS menggunakan file yang sama dengan versi HTML (`styles.css`), sehingga:
- Semua CSS variables tetap sama
- Design sistem konsisten
- Animasi dan transitions sama
- Mobile-first approach tetap terjaga

## 🔍 SEO

SEO sudah diimplementasikan dengan:
- React Helmet Async untuk meta tags
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data (SoftwareApplication & FAQPage)
- Semantic HTML

## 📱 Responsive

- Mobile-first design
- Breakpoints mengikuti CSS yang ada
- Touch-friendly interactions
- Bottom navigation untuk mobile
- Hamburger menu untuk tablet/mobile

## ⚡ Performance

- Code splitting otomatis dengan Vite
- Lazy loading images (lewat CSS)
- Intersection Observer untuk animasi
- Throttled scroll handlers
- React.memo bisa ditambahkan untuk optimisasi lebih lanjut

## 🚀 Deployment

### Netlify

```bash
npm run build
# Upload folder dist/ ke Netlify
```

### Vercel

```bash
vercel --prod
```

### GitHub Pages

```bash
npm run build
# Push folder dist/ ke branch gh-pages
```

## 📄 License

MIT License - Same as original HTML version

## 🤝 Contributing

Silakan fork dan submit PR untuk improvement!

## 📞 Support

Untuk pertanyaan dan support, hubungi tim SOFIR.
