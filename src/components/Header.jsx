import { useState, useEffect } from 'react';
import { useScrollDirection } from '../hooks/useScrollDirection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { isScrolled } = useScrollDirection();

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Blocks', href: '#blocks' },
    { label: 'Payments', href: '#payments' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Authors', href: '#authors' },
    { label: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80;
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      const headerHeight = 80;
      const targetPosition = demoSection.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownload = () => {
    window.open('https://wordpress.org/plugins/', '_blank');
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <a href="#hero" aria-label="SOFIR Home">
              <img src="/logo.svg" alt="SOFIR" style={{ height: '36px' }} />
            </a>
          </div>
          
          <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`} id="main-nav">
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className={activeSection === item.href.substring(1) ? 'active' : ''}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
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
