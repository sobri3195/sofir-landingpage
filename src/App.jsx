import { HelmetProvider } from 'react-helmet-async';
import SEOHead from './components/SEOHead';
import Header from './components/Header';
import MobileBottomNav from './components/MobileBottomNav';
import FloatingCTA from './components/FloatingCTA';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import BlocksShowcase from './components/BlocksShowcase';
import Templates from './components/Templates';
import Payments from './components/Payments';
import Directory from './components/Directory';
import Membership from './components/Membership';
import Authors from './components/Authors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './assets/styles.css';

function App() {
  return (
    <HelmetProvider>
      <SEOHead />
      
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      
      <Header />
      <MobileBottomNav />
      <FloatingCTA />
      <WhatsAppButton />
      
      <main id="main-content">
        <Hero />
        <Highlights />
        <BlocksShowcase />
        <Templates />
        <Payments />
        <Directory />
        <Membership />
        
        <Authors />
        
        <FAQ />
        
        {/* CTA Section */}
        <section className="cta" id="demo">
          <div className="container">
            <div className="cta__content">
              <h2 className="cta__title">Siap Memulai dengan SOFIR?</h2>
              <p className="cta__subtitle">Download sekarang dan bangun situs WordPress impian Anda</p>
              <div className="cta__actions">
                <button className="btn btn--primary btn--large">Download Gratis</button>
                <button className="btn btn--secondary btn--large">Lihat Dokumentasi</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </HelmetProvider>
  );
}

export default App;
