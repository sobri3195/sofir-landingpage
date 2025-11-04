import { useState } from 'react';
import { useScrollDirection } from '../hooks/useScrollDirection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useScrollDirection();

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Blocks (28)', href: '#blocks' },
    { label: 'Templates', href: '#templates' },
    { label: 'Payments', href: '#payments' },
    { label: 'Directory', href: '#directory' },
    { label: 'Membership', href: '#membership' },
    { label: 'Webhooks', href: '#webhooks' },
    { label: 'Loyalty', href: '#loyalty' },
    { label: 'Docs', href: '#docs' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    alert('Download akan segera tersedia!');
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <a href="#hero" aria-label="SOFIR Home">
              <svg width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="8" fill="#3B82F6"/>
                <path d="M12 18L18 12L24 18L18 24L12 18Z" fill="white"/>
                <text x="42" y="25" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="800" fill="#0F172A">SOFIR</text>
              </svg>
            </a>
          </div>
          
          <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`} id="main-nav">
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} onClick={handleNavClick}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="header__actions">
            <button className="btn btn--secondary" onClick={scrollToDemo}>Get Demo</button>
            <button className="btn btn--primary" onClick={handleDownload}>Download</button>
            <button 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              id="hamburger" 
              aria-label="Toggle menu" 
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
