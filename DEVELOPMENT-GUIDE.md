# SOFIR React - Development Guide

Panduan pengembangan untuk SOFIR Landing Page versi React.js

## 📋 Status Konversi

### ✅ Completed Components

1. **Header.jsx** - Fully functional
   - Sticky header dengan scroll detection
   - Mobile hamburger menu
   - Navigation links
   - CTA buttons

2. **MobileBottomNav.jsx** - Fully functional
   - Bottom navigation untuk mobile
   - Visibility controlled by scroll position
   - 5 nav items dengan icons

3. **FloatingCTA.jsx** - Fully functional
   - Floating action button
   - Appears after scrolling 500px
   - Smooth scroll to demo section

4. **Hero.jsx** - Fully functional
   - Hero section dengan animated counters
   - Intersection Observer untuk trigger animations
   - Responsive mockup image
   - CTA buttons

5. **Highlights.jsx** - Fully functional
   - 12 feature cards dengan icons
   - Scroll-triggered animations
   - Intersection Observer untuk setiap card

6. **BlocksShowcase.jsx** - Fully functional
   - 28 Gutenberg blocks grid
   - Scroll animations
   - CTA button

7. **FAQ.jsx** - Fully functional
   - Accordion dengan state management
   - Expandable/collapsible items
   - Smooth transitions

8. **SEOHead.jsx** - Fully functional
   - Meta tags (og, twitter, etc)
   - JSON-LD structured data
   - React Helmet Async

### 🚧 Placeholder Sections (To Be Developed)

Sections berikut sudah ada struktur dasarnya di `App.jsx` tapi perlu dikembangkan menjadi components terpisah:

#### 1. Templates Library
**File**: `src/components/Templates.jsx`

```jsx
// Features to implement:
- Template cards dengan preview images
- Skeleton loading
- Hover effects
- Import/Preview buttons
- Lazy loading images
```

**Data Structure**:
```jsx
const templates = [
  {
    title: 'Blog Template',
    description: 'Template modern untuk blog dengan post grid dan sidebar',
    preview: 'path/to/image.svg',
    category: 'blog'
  },
  // ... more templates
];
```

#### 2. Payments Section
**File**: `src/components/Payments.jsx`

```jsx
// Features to implement:
- Payment gateway logos (Duitku, Xendit, Midtrans, Stripe, Manual)
- Payment features list
- Integration code examples
- Animated cards on hover
```

#### 3. Directory Listing
**File**: `src/components/Directory.jsx`

```jsx
// Features to implement:
- Map integration (placeholder or actual Mapbox/Google Maps)
- Filter system (radius, category, "Open Now")
- Directory cards grid
- Search functionality
```

#### 4. Membership Pricing
**File**: `src/components/Membership.jsx`

```jsx
// Features to implement:
- 3 pricing tiers (Free, Basic, Pro)
- Feature comparison
- Highlighted "Popular" card
- CTA buttons untuk setiap tier
- Monthly/Yearly toggle (optional)
```

**Data Structure**:
```jsx
const pricingPlans = [
  {
    name: 'Free',
    price: 0,
    features: [
      { text: '10 Blocks', included: true },
      { text: 'Basic Templates', included: true },
      { text: 'Community Support', included: true },
      { text: 'Payment Gateway', included: false }
    ],
    cta: 'Get Started',
    popular: false
  },
  // ... more plans
];
```

#### 5. Webhooks & Integration
**File**: `src/components/Webhooks.jsx`

```jsx
// Features to implement:
- Webhook events list (registration, login, payment, post)
- Bit Integration logo/info
- Code examples
- Event trigger diagrams
```

#### 6. Loyalty Program
**File**: `src/components/Loyalty.jsx`

```jsx
// Features to implement:
- Point system explanation
- Rewards showcase
- Earning methods
- Gamification elements
```

#### 7. SEO Features
**File**: `src/components/SEOFeatures.jsx`

```jsx
// Features to implement:
- SEO features list
- Schema.org integration info
- Meta tags examples
- Performance metrics
```

#### 8. Performance Metrics
**File**: `src/components/Performance.jsx`

```jsx
// Features to implement:
- PageSpeed score display
- Performance optimizations list
- Before/after comparisons
- Lazy loading demo
```

#### 9. Security Features
**File**: `src/components/Security.jsx`

```jsx
// Features to implement:
- Security features list (CSRF, throttling, brute-force)
- Security badges
- Compliance info
```

#### 10. System Requirements
**File**: `src/components/SystemRequirements.jsx`

```jsx
// Already has basic structure, can be enhanced with:
- Detailed requirements table
- Compatibility checker
- Recommended vs Minimum specs
```

## 🎨 Component Development Pattern

### 1. Create Component File

```jsx
// src/components/YourComponent.jsx
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const YourComponent = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="your-section" id="your-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Your Title</h2>
          <p className="section-subtitle">Your subtitle</p>
        </div>
        
        {/* Your content */}
      </div>
    </section>
  );
};

export default YourComponent;
```

### 2. Import to App.jsx

```jsx
import YourComponent from './components/YourComponent';

function App() {
  return (
    // ...
    <YourComponent />
    // ...
  );
}
```

### 3. Add Styling (if needed)

Gunakan CSS classes yang sudah ada di `styles.css`, atau tambahkan baru:

```css
/* Di src/assets/styles.css */
.your-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface);
}
```

## 🪝 Custom Hooks Usage

### useScrollDirection

```jsx
import { useScrollDirection } from '../hooks/useScrollDirection';

function Component() {
  const { scrollDirection, isScrolled } = useScrollDirection();
  
  return (
    <div className={isScrolled ? 'scrolled' : ''}>
      {/* Content */}
    </div>
  );
}
```

### useIntersectionObserver

```jsx
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function Component() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  
  return (
    <div ref={ref} className={isVisible ? 'visible' : ''}>
      {/* Content */}
    </div>
  );
}
```

### useCounter

```jsx
import { useCounter } from '../hooks/useCounter';

function Component() {
  const [ref, isVisible] = useIntersectionObserver();
  const count = useCounter(100, 2000, isVisible);
  
  return (
    <div ref={ref}>
      <span>{count}</span>
    </div>
  );
}
```

## 📱 Responsive Design

Gunakan breakpoints yang sama dengan HTML version:

```css
/* Mobile First */
.component {
  /* Mobile styles */
}

/* Tablet */
@media (min-width: 768px) {
  .component {
    /* Tablet styles */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .component {
    /* Desktop styles */
  }
}

/* Large Desktop */
@media (min-width: 1280px) {
  .component {
    /* Large desktop styles */
  }
}
```

## ⚡ Performance Best Practices

1. **Lazy Loading Images**
```jsx
<img 
  src="placeholder.svg" 
  data-src="actual-image.jpg" 
  loading="lazy"
  alt="Description"
/>
```

2. **Memoization**
```jsx
import { memo } from 'react';

const ExpensiveComponent = memo(({ data }) => {
  // Component logic
});
```

3. **Code Splitting**
```jsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./components/HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

## 🧪 Testing (Future)

Untuk menambahkan testing:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest jsdom
```

```jsx
// Component.test.jsx
import { render, screen } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

## 📦 Additional Libraries (Optional)

### Animation Library
```bash
npm install framer-motion
```

### Form Handling
```bash
npm install react-hook-form
```

### State Management (jika dibutuhkan)
```bash
npm install zustand
# atau
npm install @tanstack/react-query
```

### Icons
```bash
npm install lucide-react
# atau
npm install react-icons
```

## 🐛 Debugging Tips

### React DevTools
Install React DevTools browser extension untuk debugging components

### Vite HMR Issues
Jika HMR tidak bekerja:
```bash
rm -rf node_modules/.vite
npm run dev
```

### CSS Not Loading
Pastikan import CSS di App.jsx:
```jsx
import './assets/styles.css';
```

## 🚀 Deployment Checklist

- [ ] Test semua sections
- [ ] Optimize images
- [ ] Check mobile responsiveness
- [ ] Test SEO meta tags
- [ ] Verify analytics integration
- [ ] Test on multiple browsers
- [ ] Run `npm run build`
- [ ] Test production build dengan `npm run preview`
- [ ] Deploy to hosting

## 🔗 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## 💡 Tips & Tricks

1. **Gunakan Fragment** untuk avoid extra DOM elements:
```jsx
<>
  <Component1 />
  <Component2 />
</>
```

2. **Destructuring Props** untuk cleaner code:
```jsx
const Component = ({ title, description, items }) => {
  // Use directly: title, description, items
};
```

3. **Optional Chaining** untuk safety:
```jsx
const data = apiResponse?.data?.items ?? [];
```

4. **Template Literals** untuk dynamic class names:
```jsx
<div className={`card ${isActive ? 'active' : ''} ${size}`}>
```

## 📞 Support

Untuk pertanyaan development, buat issue di repository atau hubungi tim development.
