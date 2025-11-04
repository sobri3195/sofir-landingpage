# 🚀 Quick Start Guide - SOFIR React Version

Panduan cepat untuk mulai menggunakan SOFIR Landing Page versi React.js.

## ⚡ 5 Menit Setup

### 1. Install Dependencies
```bash
cd /home/engine/project
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Buka browser di `http://localhost:5173`

### 3. Build untuk Production
```bash
npm run build
```

File production ada di folder `dist/`

## 📦 Apa yang Sudah Tersedia?

### ✅ Components yang Siap Pakai

1. **Header** - Sticky navigation dengan mobile menu
2. **Hero** - Section hero dengan animated counters
3. **Highlights** - 12 feature cards dengan animations
4. **Blocks** - 28 Gutenberg blocks showcase
5. **Payments** - Payment gateway integration display
6. **Membership** - 3 pricing tiers (Free, Basic, Pro)
7. **FAQ** - 6 FAQ items dengan accordion
8. **Mobile Nav** - Bottom navigation untuk mobile
9. **Floating CTA** - Floating action button

### 🎨 Styling

- Semua CSS dari versi HTML sudah tersedia
- Mobile-first responsive design
- Smooth animations
- Dark/light mode ready (tinggal implementasi)

### 🪝 Custom Hooks

- `useScrollDirection` - Deteksi scroll
- `useIntersectionObserver` - Scroll animations
- `useCounter` - Animated counters

## 🎯 Cara Menambahkan Component Baru

### Langkah 1: Buat File Component

```bash
touch src/components/YourComponent.jsx
```

### Langkah 2: Tulis Component

```jsx
// src/components/YourComponent.jsx
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const YourComponent = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section ref={ref} className={`your-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2>Your Title</h2>
        <p>Your content</p>
      </div>
    </section>
  );
};

export default YourComponent;
```

### Langkah 3: Import di App.jsx

```jsx
// src/App.jsx
import YourComponent from './components/YourComponent';

function App() {
  return (
    <HelmetProvider>
      {/* ... other components */}
      <YourComponent />
    </HelmetProvider>
  );
}
```

### Langkah 4: Tambahkan Styling (opsional)

```css
/* src/assets/styles.css */
.your-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface);
}
```

## 🔧 Customization

### Mengubah Warna

Edit CSS variables di `src/assets/styles.css`:

```css
:root {
  --color-primary: #3B82F6;      /* Biru utama */
  --color-accent: #10B981;       /* Hijau accent */
  --color-dark: #0F172A;         /* Hitam */
  /* ... more colors */
}
```

### Mengubah Konten

Edit langsung di component files:

**Hero Title:**
```jsx
// src/components/Hero.jsx
<h1 className="hero__title">
  Judul Baru Anda
</h1>
```

**Pricing:**
```jsx
// src/components/Membership.jsx
const pricingPlans = [
  {
    name: 'Free',
    price: 0,
    // Edit pricing data
  }
];
```

**FAQ:**
```jsx
// src/components/FAQ.jsx
const faqs = [
  {
    question: 'Pertanyaan baru?',
    answer: 'Jawaban baru'
  }
];
```

### Menambahkan Logo

Replace logo SVG di `Header.jsx`:

```jsx
<svg width="120" height="36">
  {/* Your logo SVG */}
</svg>
```

## 🚀 Deployment

### Netlify (Recommended)

1. Push ke GitHub
2. Connect repository di Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### Vercel

```bash
npm i -g vercel
vercel --prod
```

### GitHub Pages

```bash
# 1. Build
npm run build

# 2. Deploy
gh-pages -d dist
```

### Traditional Hosting

1. Run `npm run build`
2. Upload folder `dist/` ke hosting
3. Point domain ke `index-react.html`

## 📱 Testing

### Local Testing

```bash
# Development
npm run dev

# Production preview
npm run build
npm run preview
```

### Browser Testing

Test di:
- Chrome (Desktop & Mobile)
- Firefox
- Safari (Desktop & Mobile)
- Edge

### Performance Testing

```bash
# Install Lighthouse CI
npm i -g @lhci/cli

# Run Lighthouse
lhci autorun --collect.url=http://localhost:5173
```

## 🐛 Troubleshooting

### Port sudah digunakan

```bash
# Kill process
lsof -ti:5173 | xargs kill -9

# Or gunakan port lain
npm run dev -- --port 3000
```

### Node modules error

```bash
# Clear dan reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build error

```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run build
```

### CSS tidak load

Pastikan import di `App.jsx`:
```jsx
import './assets/styles.css';
```

## 💡 Tips

### 1. Gunakan Components Seexisting

Copy patterns dari components yang sudah ada:

```jsx
// Copy pattern dari HighlightCard
const YourCard = ({ icon, title, description }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div ref={ref} className={isVisible ? 'visible' : ''}>
      {/* Your content */}
    </div>
  );
};
```

### 2. Reuse CSS Classes

Gunakan CSS classes yang sudah ada:

```jsx
<section className="section-class" id="section-id">
  <div className="container">
    <div className="section-header">
      <h2 className="section-title">Title</h2>
      <p className="section-subtitle">Subtitle</p>
    </div>
  </div>
</section>
```

### 3. Lazy Load Images

```jsx
<img 
  src="placeholder.svg"
  data-src="actual-image.jpg"
  loading="lazy"
  alt="Description"
/>
```

### 4. Optimize Performance

```jsx
import { memo } from 'react';

const ExpensiveComponent = memo(({ data }) => {
  return <div>{/* Component */}</div>;
});
```

## 📚 Learn More

- **React Tutorial**: https://react.dev/learn
- **Vite Guide**: https://vitejs.dev/guide/
- **Development Guide**: See `DEVELOPMENT-GUIDE.md`
- **Full Documentation**: See `README-REACT.md`
- **Migration Details**: See `REACT-MIGRATION.md`

## 🆘 Need Help?

1. Check `DEVELOPMENT-GUIDE.md` untuk detailed guide
2. Check `REACT-MIGRATION.md` untuk perbedaan vs HTML version
3. Lihat existing components untuk reference
4. Open issue di repository

## ✨ Features Roadmap

Yang bisa ditambahkan:

- [ ] Dark mode toggle
- [ ] Multi-language (i18n)
- [ ] Blog integration
- [ ] Contact form
- [ ] Admin dashboard
- [ ] User authentication
- [ ] E-commerce features
- [ ] Live chat widget

## 🎉 Happy Coding!

Anda sekarang siap untuk develop SOFIR Landing Page dengan React!

Mulai dengan:
```bash
npm run dev
```

Dan mulai customize sesuai kebutuhan Anda! 🚀
