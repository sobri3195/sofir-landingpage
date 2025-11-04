import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PaymentLogo = ({ name, color }) => {
  const [logoRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={logoRef}
      className={`payment-logo ${isVisible ? 'visible' : ''}`}
      style={{ borderColor: color }}
    >
      <span style={{ color: color }}>{name}</span>
    </div>
  );
};

const Payments = () => {
  const paymentGateways = [
    { name: 'Duitku', color: '#FF6B00' },
    { name: 'Xendit', color: '#1570EF' },
    { name: 'Midtrans', color: '#02B5A3' },
    { name: 'Stripe', color: '#635BFF' },
    { name: 'Manual', color: '#64748B' }
  ];

  const features = [
    {
      icon: '💳',
      title: 'Multi Payment Gateway',
      description: 'Integrasi dengan 5 payment gateway populer di Indonesia dan internasional'
    },
    {
      icon: '🔒',
      title: 'Secure Payment',
      description: 'PCI-DSS compliant dengan enkripsi end-to-end untuk keamanan maksimal'
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Payment flow yang dioptimasi untuk mobile dengan UX yang smooth'
    },
    {
      icon: '🔔',
      title: 'Real-time Webhook',
      description: 'Notifikasi instant untuk setiap transaksi melalui webhook'
    },
    {
      icon: '💰',
      title: 'Multiple Currency',
      description: 'Support IDR, USD, dan mata uang lainnya sesuai gateway'
    },
    {
      icon: '📊',
      title: 'Transaction Report',
      description: 'Dashboard lengkap untuk monitoring transaksi dan revenue'
    }
  ];

  return (
    <section className="payments" id="payments">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Payment Gateway Indonesia</h2>
          <p className="section-subtitle">Integrasi lengkap dengan payment gateway lokal dan internasional</p>
        </div>
        
        <div className="payment-logos">
          {paymentGateways.map((gateway, index) => (
            <PaymentLogo 
              key={index}
              name={gateway.name}
              color={gateway.color}
            />
          ))}
        </div>
        
        <div className="payment-features">
          <div className="payment-features__grid">
            {features.map((feature, index) => {
              const [featureRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
              
              return (
                <div 
                  key={index}
                  ref={featureRef}
                  className={`payment-feature-card ${isVisible ? 'visible' : ''}`}
                >
                  <div className="payment-feature-card__icon">{feature.icon}</div>
                  <h4 className="payment-feature-card__title">{feature.title}</h4>
                  <p className="payment-feature-card__description">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="payment-cta">
          <div className="payment-cta__content">
            <h3>Mulai Terima Pembayaran Online</h3>
            <p>Setup mudah dalam hitungan menit. Cukup masukkan API key dan mulai terima pembayaran.</p>
            <button className="btn btn--primary btn--large">Lihat Dokumentasi</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payments;
