# Contributing to SOFIR Landing Page

First off, thank you for considering contributing to SOFIR Landing Page! It's people like you that make SOFIR such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [conduct@sofir.id](mailto:conduct@sofir.id).

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots or animated GIFs** if possible
- **Include browser and OS information**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior** and **explain which behavior you expected to see instead**
- **Explain why this enhancement would be useful**

### Pull Requests

#### Prerequisites

- Familiarity with HTML5, CSS3, and vanilla JavaScript
- Understanding of responsive web design
- Knowledge of accessibility best practices
- Git and GitHub workflow knowledge

#### Process

1. **Fork the repository** and create your branch from `main`

```bash
git clone https://github.com/yourusername/sofir-landing.git
cd sofir-landing
git checkout -b feature/your-feature-name
```

2. **Make your changes** following our coding standards

3. **Test your changes** thoroughly:
   - Test on multiple browsers (Chrome, Firefox, Safari, Edge)
   - Test on mobile devices (iOS, Android)
   - Validate HTML (https://validator.w3.org/)
   - Test accessibility (https://wave.webaim.org/)
   - Test performance (https://pagespeed.web.dev/)

4. **Commit your changes** with clear commit messages:

```bash
git add .
git commit -m "feat: add dark mode toggle"
```

**Commit Message Convention:**
- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting, missing semi colons, etc
- `refactor:` code restructuring
- `perf:` performance improvements
- `test:` adding tests
- `chore:` maintenance tasks

5. **Push to your fork**:

```bash
git push origin feature/your-feature-name
```

6. **Create a Pull Request** with a clear title and description

## Coding Standards

### HTML

- Use semantic HTML5 elements
- Maintain proper heading hierarchy (h1 → h2 → h3)
- Add ARIA labels for interactive elements
- Use descriptive `alt` attributes for images
- Keep attributes in logical order:
  1. `id`
  2. `class`
  3. `data-*`
  4. `aria-*`
  5. Other attributes

**Example:**
```html
<button 
  id="demo-button"
  class="btn btn--primary" 
  data-action="open-demo"
  aria-label="Open demo"
  onclick="handleDemo()"
>
  Try Demo
</button>
```

### CSS

- Use CSS custom properties for theming
- Follow mobile-first approach
- Use BEM-like naming convention
- Keep specificity low
- Group related properties
- Add comments for complex sections

**Example:**
```css
/* Component: Button */
.btn {
  /* Layout */
  display: inline-flex;
  align-items: center;
  
  /* Spacing */
  padding: 12px 24px;
  gap: var(--spacing-sm);
  
  /* Typography */
  font-size: var(--font-size-base);
  font-weight: 600;
  
  /* Visual */
  background: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--radius-md);
  
  /* Interaction */
  transition: all var(--transition-fast);
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

### JavaScript

- Use vanilla ES5 (no transpilation needed)
- Use IIFE pattern to avoid global scope pollution
- Implement debounce/throttle for performance
- Add comments for complex logic
- Handle errors gracefully
- Use feature detection, not browser detection

**Example:**
```javascript
(function() {
  'use strict';
  
  // Utility: Debounce function
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this;
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    };
  }
  
  // Event handler
  function handleScroll() {
    var scrollTop = window.pageYOffset;
    // Your logic here
  }
  
  // Attach with debounce
  window.addEventListener('scroll', debounce(handleScroll, 100));
})();
```

### Responsive Design

- Mobile-first breakpoints:
  - Mobile: 320px - 640px
  - Tablet: 641px - 1024px
  - Desktop: 1025px+

**Example:**
```css
/* Mobile first (default) */
.container {
  padding: 16px;
}

/* Tablet */
@media (min-width: 641px) {
  .container {
    padding: 24px;
  }
}

/* Desktop */
@media (min-width: 1025px) {
  .container {
    padding: 32px;
  }
}
```

### Accessibility

- Maintain WCAG AA compliance
- Ensure keyboard navigation works
- Use semantic HTML
- Add ARIA labels where needed
- Test with screen readers
- Ensure color contrast ratios
- Provide focus indicators

### Performance

- Lazy load images
- Minimize DOM manipulations
- Use event delegation
- Debounce/throttle scroll handlers
- Avoid layout thrashing
- Optimize images (WebP with fallbacks)
- Minimize repaints and reflows

## Testing Checklist

Before submitting a PR, ensure:

- [ ] Code follows style guidelines
- [ ] HTML validates (https://validator.w3.org/)
- [ ] CSS validates (https://jigsaw.w3.org/css-validator/)
- [ ] JavaScript has no console errors
- [ ] Works on Chrome, Firefox, Safari, Edge
- [ ] Works on mobile (iOS & Android)
- [ ] Responsive at 320px, 768px, 1024px, 1920px
- [ ] Accessibility tested (WAVE, axe)
- [ ] Performance score > 90 (PageSpeed Insights)
- [ ] No broken links
- [ ] Images optimized
- [ ] Git commit messages follow convention

## Project Structure

```
sofir-landing/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles (mobile-first)
├── js/
│   └── main.js         # Vanilla JavaScript (ES5)
├── favicon.svg         # Site favicon
├── manifest.json       # PWA manifest
├── robots.txt          # Search engine rules
├── sitemap.xml         # XML sitemap
├── .gitignore          # Git ignore rules
├── README.md           # Project documentation
├── DEPLOYMENT.md       # Deployment guide
├── CHANGELOG.md        # Version history
├── CONTRIBUTING.md     # This file
└── LICENSE             # MIT License
```

## Development Workflow

1. **Setup local development:**
```bash
# Clone your fork
git clone https://github.com/yourusername/sofir-landing.git
cd sofir-landing

# Start local server
python -m http.server 8000
# or
npx http-server -p 8000
```

2. **Make changes**
3. **Test thoroughly**
4. **Commit with clear messages**
5. **Push to your fork**
6. **Create Pull Request**

## Review Process

1. Automated checks run (if configured)
2. Code review by maintainers
3. Requested changes (if needed)
4. Approval and merge

## Getting Help

- **Documentation**: https://docs.sofir.id
- **Discord**: https://discord.gg/sofir
- **Email**: support@sofir.id
- **Issues**: https://github.com/sofir/landing-page/issues

## Recognition

Contributors will be:
- Listed in CHANGELOG.md
- Acknowledged in release notes
- Added to contributors list

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to SOFIR! 🎉
