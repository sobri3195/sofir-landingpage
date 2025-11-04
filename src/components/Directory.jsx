import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const features = [
  {
    id: 1,
    icon: '🗺️',
    title: 'Interactive Maps',
    description: 'Integrasi Google Maps dengan marker custom dan clustering untuk menampilkan lokasi bisnis.'
  },
  {
    id: 2,
    icon: '🔍',
    title: 'Advanced Filters',
    description: 'Filter multi-level berdasarkan kategori, lokasi, rating, dan custom fields.'
  },
  {
    id: 3,
    icon: '📋',
    title: 'Grid & List Views',
    description: 'Tampilan grid dan list yang responsif dengan lazy loading untuk performa optimal.'
  },
  {
    id: 4,
    icon: '⭐',
    title: 'Rating & Reviews',
    description: 'Sistem rating dan review terintegrasi dengan moderasi otomatis.'
  },
  {
    id: 5,
    icon: '📱',
    title: 'Mobile Optimized',
    description: 'Desain mobile-first dengan touch gestures dan responsive layout.'
  },
  {
    id: 6,
    icon: '🔗',
    title: 'SEO Friendly',
    description: 'Schema markup otomatis untuk meningkatkan visibilitas di search engine.'
  }
];

const useCases = [
  {
    id: 1,
    icon: '🍽️',
    title: 'Restaurant Directory',
    description: 'Buat directory restoran lengkap dengan menu, jam operasional, dan sistem booking.',
    color: '#F59E0B'
  },
  {
    id: 2,
    icon: '🏠',
    title: 'Real Estate Listings',
    description: 'Platform listing properti dengan pencarian advanced dan virtual tour integration.',
    color: '#3B82F6'
  },
  {
    id: 3,
    icon: '🏢',
    title: 'Business Directory',
    description: 'Directory bisnis lokal dengan profil lengkap, kontak, dan peta lokasi.',
    color: '#10B981'
  },
  {
    id: 4,
    icon: '🎓',
    title: 'Education Portal',
    description: 'Portal pendidikan dengan directory sekolah, kursus, dan informasi lengkap.',
    color: '#8B5CF6'
  },
  {
    id: 5,
    icon: '🏥',
    title: 'Healthcare Finder',
    description: 'Cari rumah sakit, klinik, dan praktisi kesehatan terdekat dengan mudah.',
    color: '#EF4444'
  },
  {
    id: 6,
    icon: '🎭',
    title: 'Events & Venues',
    description: 'Listing tempat acara dan event dengan kalender dan sistem booking terintegrasi.',
    color: '#EC4899'
  }
];

function Directory() {
  const [activeTab, setActiveTab] = useState('features');
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section className="directory" id="directory" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Directory</span>
          <h2 className="section-title">Directory & Listing</h2>
          <p className="section-subtitle">Sistem directory lengkap dengan maps, filter, dan listing untuk berbagai kebutuhan bisnis.</p>
        </div>
        
        <div className="directory__tabs">
          <button 
            className={`directory__tab ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button 
            className={`directory__tab ${activeTab === 'usecases' ? 'active' : ''}`}
            onClick={() => setActiveTab('usecases')}
          >
            Use Cases
          </button>
        </div>
        
        {activeTab === 'features' && (
          <div className={`directory__content ${isVisible ? 'visible' : ''}`}>
            <div className="directory__grid">
              {features.map((feature, index) => (
                <div 
                  key={feature.id} 
                  className="directory-card"
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <div className="directory-card__icon">{feature.icon}</div>
                  <h3 className="directory-card__title">{feature.title}</h3>
                  <p className="directory-card__description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'usecases' && (
          <div className={`directory__content ${isVisible ? 'visible' : ''}`}>
            <div className="directory__list">
              {useCases.map((useCase, index) => (
                <div 
                  key={useCase.id} 
                  className="usecase-card"
                  style={{ '--delay': `${index * 0.1}s`, '--color': useCase.color }}
                >
                  <div className="usecase-card__icon">{useCase.icon}</div>
                  <div className="usecase-card__content">
                    <h3 className="usecase-card__title">{useCase.title}</h3>
                    <p className="usecase-card__description">{useCase.description}</p>
                  </div>
                  <button className="btn btn--secondary btn--small">Learn More</button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="directory__cta">
          <div className="directory__cta-content">
            <h3>Butuh Custom Directory Solution?</h3>
            <p>Tim kami siap membantu mengembangkan directory sesuai kebutuhan spesifik Anda</p>
            <button className="btn btn--primary">Hubungi Kami</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Directory;
