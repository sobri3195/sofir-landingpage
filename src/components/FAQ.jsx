import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const FAQItem = ({ question, answer, isOpen, onToggle, delay }) => {
  const [itemRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <div 
      ref={itemRef}
      className={`faq-item ${isOpen ? 'open' : ''} ${isVisible ? 'visible' : ''}`}
      style={{ '--delay': `${delay}s` }}
    >
      <button className="faq-item__question" onClick={onToggle}>
        <span>{question}</span>
        <svg 
          className="faq-item__icon" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      {isOpen && (
        <div className="faq-item__answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Bagaimana cara instalasi SOFIR?',
      answer: 'Upload plugin melalui WordPress admin, aktifkan, dan ikuti wizard setup. SOFIR akan otomatis mengkonfigurasi block patterns dan template.'
    },
    {
      question: 'Apakah SOFIR kompatibel dengan tema saya?',
      answer: 'Ya, SOFIR dirancang untuk bekerja dengan tema block-based dan FSE. Kompatibel dengan Twenty Twenty-Three, Twenty Twenty-Four, dan tema modern lainnya.'
    },
    {
      question: 'Apakah SOFIR memerlukan build process?',
      answer: 'Tidak! SOFIR menggunakan native PHP 8.0+ dengan ES5 JavaScript murni. Tidak ada Webpack, Babel, atau build tool lainnya yang dibutuhkan.'
    },
    {
      question: 'Bagaimana cara mengintegrasikan payment gateway?',
      answer: 'SOFIR menyediakan integrasi built-in untuk Duitku, Xendit, Midtrans, Stripe, dan manual payment. Cukup masukkan API key di settings.'
    },
    {
      question: 'Apakah ada biaya tambahan?',
      answer: 'SOFIR tersedia dalam versi Free (dengan fitur inti) dan Pro (dengan fitur advanced). Tidak ada biaya bulanan, hanya one-time purchase.'
    },
    {
      question: 'Bagaimana performa SOFIR?',
      answer: 'SOFIR dioptimasi untuk kecepatan dengan lazy loading, resource hints, dan minimal dependencies. Target PageSpeed 90+.'
    }
  ];

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Pertanyaan Umum (FAQ)</h2>
          <p className="section-subtitle">Temukan jawaban untuk pertanyaan Anda</p>
        </div>
        
        <div className="faq__list">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
