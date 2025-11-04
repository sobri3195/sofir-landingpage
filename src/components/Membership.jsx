import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PricingCard = ({ plan, isPopular }) => {
  const [cardRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={cardRef}
      className={`pricing-card ${isPopular ? 'pricing-card--featured' : ''} ${isVisible ? 'visible' : ''}`}
    >
      {isPopular && <div className="pricing-card__badge">Paling Populer</div>}
      
      <h3 className="pricing-card__name">{plan.name}</h3>
      
      <div className="pricing-card__price">
        <span className="pricing-card__currency">Rp</span>
        <span className="pricing-card__amount">
          {plan.price.toLocaleString('id-ID')}
        </span>
        {plan.period && <span className="pricing-card__period">/{plan.period}</span>}
      </div>
      
      <p className="pricing-card__description">{plan.description}</p>
      
      <ul className="pricing-card__features">
        {plan.features.map((feature, index) => (
          <li 
            key={index}
            className={feature.included ? 'included' : 'excluded'}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              {feature.included ? (
                <polyline points="20 6 9 17 4 12"/>
              ) : (
                <line x1="18" y1="6" x2="6" y2="18"/>
              )}
            </svg>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <button className={`btn ${isPopular ? 'btn--primary' : 'btn--secondary'} btn--large`}>
        {plan.cta}
      </button>
    </div>
  );
};

const Membership = () => {
  const pricingPlans = [
    {
      name: 'Free',
      price: 0,
      description: 'Untuk mencoba dan proyek kecil',
      features: [
        { text: '10 Gutenberg Blocks', included: true },
        { text: 'Template Dasar', included: true },
        { text: 'Community Support', included: true },
        { text: 'Payment Gateway', included: false },
        { text: 'Directory & Maps', included: false },
        { text: 'Membership System', included: false },
        { text: 'Webhooks', included: false },
        { text: 'Priority Support', included: false }
      ],
      cta: 'Mulai Gratis',
      popular: false
    },
    {
      name: 'Basic',
      price: 500000,
      period: 'tahun',
      description: 'Untuk bisnis yang sedang berkembang',
      features: [
        { text: '28 Gutenberg Blocks', included: true },
        { text: 'Semua Template', included: true },
        { text: 'Payment Gateway (5 Provider)', included: true },
        { text: 'Directory & Maps', included: true },
        { text: 'Membership System', included: true },
        { text: 'Webhooks & Integration', included: true },
        { text: 'Email Support', included: true },
        { text: 'White Label', included: false }
      ],
      cta: 'Pilih Basic',
      popular: true
    },
    {
      name: 'Pro',
      price: 1500000,
      period: 'tahun',
      description: 'Untuk bisnis enterprise',
      features: [
        { text: 'Semua Fitur Basic', included: true },
        { text: 'White Label', included: true },
        { text: 'Custom Development', included: true },
        { text: 'Priority Support (24/7)', included: true },
        { text: 'Dedicated Account Manager', included: true },
        { text: 'Advanced Analytics', included: true },
        { text: 'Multi-site License', included: true },
        { text: 'Lifetime Updates', included: true }
      ],
      cta: 'Pilih Pro',
      popular: false
    }
  ];

  return (
    <section className="membership" id="membership">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Pilihan Membership</h2>
          <p className="section-subtitle">Tiga tier membership untuk setiap kebutuhan bisnis Anda</p>
        </div>
        
        <div className="pricing-table">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index}
              plan={plan}
              isPopular={plan.popular}
            />
          ))}
        </div>
        
        <div className="membership__note">
          <p>💳 Semua harga sudah termasuk PPN • 🔒 Pembayaran aman dengan Midtrans • 🔄 30 hari garansi uang kembali</p>
        </div>
      </div>
    </section>
  );
};

export default Membership;
