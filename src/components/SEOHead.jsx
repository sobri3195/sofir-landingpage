import { Helmet } from 'react-helmet-async';

const SEOHead = () => {
  return (
    <Helmet>
      <title>SOFIR - Smart Optimized Framework for Integrated Rendering | WordPress Plugin</title>
      <meta name="description" content="SOFIR - Smart Optimized Framework for Integrated Rendering. Plugin WordPress all-in-one dengan 28 Gutenberg blocks, pembayaran Indonesia, directory, membership, dan lebih banyak lagi." />
      <meta name="keywords" content="WordPress, Gutenberg, FSE, Full Site Editing, PHP 8.0, Duitku, Xendit, Midtrans, payment gateway Indonesia" />
      <meta name="author" content="SOFIR" />
      
      <meta property="og:title" content="SOFIR - Smart Optimized Framework for Integrated Rendering" />
      <meta property="og:description" content="Plugin WordPress all-in-one dengan 28 blocks, pembayaran Indonesia, directory, membership, dan webhook" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sofir.id" />
      <meta property="og:image" content="https://sofir.id/og-image.jpg" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="SOFIR - Smart Optimized Framework for Integrated Rendering" />
      <meta name="twitter:description" content="Plugin WordPress all-in-one dengan 28 blocks, pembayaran Indonesia, directory, membership, dan webhook" />
      <meta name="twitter:image" content="https://sofir.id/twitter-image.jpg" />
      
      <meta name="theme-color" content="#3B82F6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="SOFIR" />
      
      <link rel="manifest" href="/manifest.json" />
      
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SOFIR",
            "applicationCategory": "WebApplication",
            "operatingSystem": "WordPress 6.3+",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "127"
            }
          }
        `}
      </script>
      
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Bagaimana cara instalasi SOFIR?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Upload plugin melalui WordPress admin, aktifkan, dan ikuti wizard setup. SOFIR akan otomatis mengkonfigurasi block patterns dan template."
                }
              },
              {
                "@type": "Question",
                "name": "Apakah SOFIR kompatibel dengan tema saya?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ya, SOFIR dirancang untuk bekerja dengan tema block-based dan FSE. Kompatibel dengan Twenty Twenty-Three, Twenty Twenty-Four, dan tema modern lainnya."
                }
              }
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEOHead;
