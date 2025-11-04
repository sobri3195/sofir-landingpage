import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useCounter } from '../hooks/useCounter';

const Hero = () => {
  const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.3 });
  
  const blocksCount = useCounter(28, 2000, isHeroVisible);
  const gatewaysCount = useCounter(5, 2000, isHeroVisible);
  const phpCount = useCounter(100, 2000, isHeroVisible);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero__particles" aria-hidden="true"></div>
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__badge">
              <span className="badge">WP 6.3+</span>
              <span className="badge">PHP 8.0+</span>
              <span className="badge">FSE Ready</span>
              <span className="badge">Tanpa Build Process</span>
            </div>
            
            <h1 className="hero__title">
              Bangun Situs WordPress Modern, Cepat, & Terintegrasi
            </h1>
            
            <p className="hero__subtitle">
              SOFIR menggabungkan Gutenberg, FSE, pembayaran Indonesia, membership, direktori, webhook, dan <strong>28 block kustom</strong> dalam satu plugin ringan.
            </p>
            
            <div className="hero__actions">
              <button className="btn btn--primary btn--large" onClick={scrollToDemo}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                Coba Demo
              </button>
              <button className="btn btn--secondary btn--large" onClick={() => scrollToSection('templates')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                Lihat Template
              </button>
            </div>
            
            <div className="hero__stats">
              <div className="stat">
                <div className="stat__number">{blocksCount}</div>
                <div className="stat__label">Gutenberg Blocks</div>
              </div>
              <div className="stat">
                <div className="stat__number">{gatewaysCount}</div>
                <div className="stat__label">Payment Gateways</div>
              </div>
              <div className="stat">
                <div className="stat__number">{phpCount}</div>
                <div className="stat__label">% Native PHP</div>
              </div>
            </div>
          </div>
          
          <div className="hero__visual">
            <div className="mockup">
              <div className="mockup__window">
                <div className="mockup__header">
                  <span></span><span></span><span></span>
                </div>
                <div className="mockup__content">
                  <img 
                    src="data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='600' height='400' fill='%23F8FAFC'/%3E%3Crect x='20' y='20' width='560' height='60' rx='8' fill='%233B82F6' opacity='0.1'/%3E%3Crect x='40' y='35' width='120' height='30' rx='4' fill='%233B82F6'/%3E%3Crect x='20' y='100' width='180' height='280' rx='8' fill='white'/%3E%3Crect x='40' y='120' width='140' height='20' rx='4' fill='%23E2E8F0'/%3E%3Crect x='40' y='150' width='140' height='15' rx='4' fill='%23E2E8F0'/%3E%3Crect x='40' y='175' width='140' height='15' rx='4' fill='%23E2E8F0'/%3E%3Crect x='40' y='200' width='140' height='15' rx='4' fill='%233B82F6' opacity='0.3'/%3E%3Crect x='220' y='100' width='360' height='180' rx='8' fill='white'/%3E%3Crect x='240' y='120' width='100' height='15' rx='4' fill='%233B82F6'/%3E%3Crect x='240' y='145' width='320' height='120' rx='4' fill='%23F8FAFC'/%3E%3Crect x='220' y='300' width='170' height='80' rx='8' fill='%2310B981' opacity='0.1'/%3E%3Crect x='240' y='320' width='50' height='40' rx='4' fill='%2310B981'/%3E%3Crect x='410' y='300' width='170' height='80' rx='8' fill='%233B82F6' opacity='0.1'/%3E%3Crect x='430' y='320' width='50' height='40' rx='4' fill='%233B82F6'/%3E%3C/svg%3E" 
                    alt="SOFIR Dashboard Mockup" 
                    width="600" 
                    height="400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
