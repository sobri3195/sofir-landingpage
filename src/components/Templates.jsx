import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const templates = [
  {
    id: 1,
    name: 'Business Startup',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    isPro: false,
    features: ['Header & Hero', 'Services Grid', 'Team Section', 'Contact Form']
  },
  {
    id: 2,
    name: 'E-Commerce Store',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
    isPro: true,
    features: ['Product Showcase', 'Shopping Cart', 'Payment Integration', 'User Reviews']
  },
  {
    id: 3,
    name: 'Creative Portfolio',
    category: 'Portfolio',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
    isPro: false,
    features: ['Portfolio Gallery', 'About Section', 'Skills Display', 'Contact Info']
  },
  {
    id: 4,
    name: 'Restaurant Menu',
    category: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    isPro: true,
    features: ['Menu Display', 'Online Booking', 'Gallery', 'Location Map']
  },
  {
    id: 5,
    name: 'Blog Magazine',
    category: 'Blog',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
    isPro: false,
    features: ['Post Grid', 'Categories', 'Author Bio', 'Newsletter']
  },
  {
    id: 6,
    name: 'Real Estate',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    isPro: true,
    features: ['Property Listings', 'Search Filter', 'Map View', 'Agent Contact']
  }
];

function Templates() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section className="templates" id="templates" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Templates</span>
          <h2 className="section-title">Template Library & FSE</h2>
          <p className="section-subtitle">One-click import untuk memulai dengan cepat. Semua template dioptimalkan untuk performa dan SEO.</p>
        </div>
        
        <div className={`templates__grid ${isVisible ? 'visible' : ''}`}>
          {templates.map((template, index) => (
            <div 
              key={template.id} 
              className="template-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="template-card__image">
                <img src={template.image} alt={template.name} loading="lazy" />
                {template.isPro && (
                  <span className="template-card__badge">Pro</span>
                )}
                <div className="template-card__overlay">
                  <button className="btn btn--primary btn--small">Import Template</button>
                  <button className="btn btn--secondary btn--small">Preview</button>
                </div>
              </div>
              <div className="template-card__content">
                <span className="template-card__category">{template.category}</span>
                <h3 className="template-card__name">{template.name}</h3>
                <ul className="template-card__features">
                  {template.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="templates__footer">
          <p>Dapatkan akses ke semua template premium dengan membership Pro</p>
          <button className="btn btn--primary">Lihat Semua Template</button>
        </div>
      </div>
    </section>
  );
}

export default Templates;
