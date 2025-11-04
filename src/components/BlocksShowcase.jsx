import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const BlockCard = ({ icon, title, description }) => {
  const [cardRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={cardRef}
      className={`block-card ${isVisible ? 'visible' : ''}`}
    >
      <div className="block-card__icon">{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const BlocksShowcase = () => {
  const blocks = [
    { icon: '⚡', title: 'Action Block', description: 'Dynamic action buttons' },
    { icon: '🛒', title: 'Cart Summary', description: 'Shopping cart widget' },
    { icon: '⏱️', title: 'Countdown', description: 'Timer & deadlines' },
    { icon: '✍️', title: 'Create Post', description: 'Frontend posting' },
    { icon: '📊', title: 'Dashboard', description: 'User dashboard panel' },
    { icon: '🖼️', title: 'Gallery', description: 'Advanced media grid' },
    { icon: '🔐', title: 'Login / Register', description: 'Auth forms' },
    { icon: '🗺️', title: 'Map Block', description: 'Interactive maps' },
    { icon: '💬', title: 'Messages', description: 'Inbox & chat UI' },
    { icon: '🧭', title: 'Navbar', description: 'Custom navigation' },
    { icon: '📦', title: 'Order Block', description: 'Order management' },
    { icon: '🎯', title: 'Popup Kit', description: 'Modal & popups' },
    { icon: '📰', title: 'Post Feed', description: 'Dynamic post lists' },
    { icon: '🖨️', title: 'Print Template', description: 'Printable layouts' },
    { icon: '📝', title: 'Product Form', description: 'Frontend submission' },
    { icon: '💰', title: 'Product Price', description: 'Dynamic pricing' },
    { icon: '🔍', title: 'Quick Search', description: 'AJAX search bar' },
    { icon: '⭐', title: 'Review Stats', description: 'Rating display' },
    { icon: '📈', title: 'Ring Chart', description: 'Circular graphs' },
    { icon: '📊', title: 'Sales Chart', description: 'Revenue analytics' },
    { icon: '🔎', title: 'Search Form', description: 'Advanced search' },
    { icon: '🎠', title: 'Slider', description: 'Carousel & slides' },
    { icon: '🏷️', title: 'Term Feed', description: 'Category display' },
    { icon: '📅', title: 'Timeline', description: 'Event timeline' },
    { icon: '🎨', title: 'Timeline Style Kit', description: 'Timeline variants' },
    { icon: '👤', title: 'User Bar', description: 'Profile widget' },
    { icon: '📈', title: 'Visit Chart', description: 'Analytics display' },
    { icon: '🕐', title: 'Work Hours', description: 'Business hours' }
  ];

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="blocks" id="blocks">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">28 Gutenberg Blocks Kustom</h2>
          <p className="section-subtitle">Block native yang powerful untuk setiap kebutuhan</p>
        </div>
        
        <div className="blocks__grid">
          {blocks.map((block, index) => (
            <BlockCard 
              key={index}
              icon={block.icon}
              title={block.title}
              description={block.description}
            />
          ))}
        </div>
        
        <div className="blocks__cta">
          <button className="btn btn--primary btn--large" onClick={scrollToDemo}>
            Lihat Demo Blocks
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlocksShowcase;
