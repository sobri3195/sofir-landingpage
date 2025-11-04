import { HelmetProvider } from 'react-helmet-async';
import SEOHead from './components/SEOHead';
import Header from './components/Header';
import MobileBottomNav from './components/MobileBottomNav';
import FloatingCTA from './components/FloatingCTA';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import BlocksShowcase from './components/BlocksShowcase';
import Payments from './components/Payments';
import Membership from './components/Membership';
import FAQ from './components/FAQ';
import './assets/styles.css';

function App() {
  return (
    <HelmetProvider>
      <SEOHead />
      
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      
      <Header />
      <MobileBottomNav />
      <FloatingCTA />
      
      <main id="main-content">
        <Hero />
        <Highlights />
        <BlocksShowcase />
        
        {/* Templates Section - Placeholder */}
        <section className="templates" id="templates">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Template Library & FSE</h2>
              <p className="section-subtitle">One-click import untuk memulai dengan cepat</p>
            </div>
            <div className="templates__placeholder">
              <p>Template library coming soon...</p>
            </div>
          </div>
        </section>
        
        <Payments />
        
        {/* Directory Section - Placeholder */}
        <section className="directory" id="directory">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Directory & Listing</h2>
              <p className="section-subtitle">Sistem directory dengan maps dan filter</p>
            </div>
          </div>
        </section>
        
        <Membership />
        
        {/* Webhooks Section */}
        <section className="webhooks" id="webhooks">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Webhooks & Integration</h2>
              <p className="section-subtitle">Bit Integration untuk otomasi workflow</p>
            </div>
          </div>
        </section>
        
        {/* Loyalty Section */}
        <section className="loyalty" id="loyalty">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Loyalty Program</h2>
              <p className="section-subtitle">Reward system untuk engagement</p>
            </div>
          </div>
        </section>
        
        {/* SEO Section */}
        <section className="seo" id="seo">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">SEO Optimized</h2>
              <p className="section-subtitle">Built-in SEO best practices</p>
            </div>
          </div>
        </section>
        
        {/* Performance Section */}
        <section className="performance" id="performance">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Performance First</h2>
              <p className="section-subtitle">Dioptimasi untuk kecepatan maksimal</p>
            </div>
          </div>
        </section>
        
        {/* Security Section */}
        <section className="security" id="security">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Security First</h2>
              <p className="section-subtitle">Keamanan yang solid</p>
            </div>
          </div>
        </section>
        
        {/* System Requirements */}
        <section className="requirements" id="requirements">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">System Requirements</h2>
              <p className="section-subtitle">Minimal requirement untuk menjalankan SOFIR</p>
            </div>
            <div className="requirements__grid">
              <div className="requirement-card">
                <h4>WordPress</h4>
                <p>6.3+</p>
              </div>
              <div className="requirement-card">
                <h4>PHP</h4>
                <p>8.0+</p>
              </div>
              <div className="requirement-card">
                <h4>MySQL</h4>
                <p>5.7+</p>
              </div>
            </div>
          </div>
        </section>
        
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
        
        {/* Footer */}
        <footer className="footer" id="docs">
          <div className="container">
            <div className="footer__content">
              <div className="footer__section">
                <h4>SOFIR</h4>
                <p>Smart Optimized Framework for Integrated Rendering</p>
              </div>
              <div className="footer__section">
                <h4>Links</h4>
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#blocks">Blocks</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#docs">Documentation</a></li>
                </ul>
              </div>
              <div className="footer__section">
                <h4>Support</h4>
                <ul>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Community</a></li>
                </ul>
              </div>
            </div>
            <div className="footer__bottom">
              <p>&copy; {new Date().getFullYear()} SOFIR. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </HelmetProvider>
  );
}

export default App;
