import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AreasSection from "@/components/AreasSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  // Schema markup for LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://arvadadrainpro.com/#business",
    "name": "ArvadaDrainPro",
    "description": "Professional drain cleaning services in Arvada, Colorado. 24/7 emergency service, licensed technicians, and guaranteed results.",
    "url": "https://arvadadrainpro.com",
    "telephone": "+1-720-555-1234",
    "email": "info@arvadadrainpro.com",
    "priceRange": "$$",
    "image": "https://arvadadrainpro.com/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Arvada",
      "addressRegion": "CO",
      "postalCode": "80002",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.8028",
      "longitude": "-105.0875"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Arvada" },
      { "@type": "City", "name": "Wheat Ridge" },
      { "@type": "City", "name": "Westminster" },
      { "@type": "City", "name": "Broomfield" },
      { "@type": "City", "name": "Golden" },
      { "@type": "City", "name": "Lakewood" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://facebook.com/arvadadrainpro",
      "https://google.com/maps?cid=arvadadrainpro"
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does drain cleaning cost in Arvada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most residential drain cleaning services in Arvada range from $125 to $350, depending on the severity and location of the clog. We provide upfront pricing before any work begins."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you respond to a drain emergency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer 60-minute emergency response throughout Arvada and surrounding areas. Our technicians are available 24 hours a day, 7 days a week."
        }
      },
      {
        "@type": "Question",
        "name": "What causes most drain clogs in Arvada homes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common causes are grease and food buildup in kitchen drains, hair and soap scum in bathroom drains, tree root intrusion in sewer lines, and mineral buildup from Arvada's hard water."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer warranties on drain cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer a 30-day satisfaction guarantee on all drain cleaning services. If the same drain clogs again within 30 days, we'll return and clear it at no additional charge."
        }
      }
    ]
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Drain Cleaning Arvada",
    "description": "Professional drain cleaning services for residential and commercial properties in Arvada, Colorado. Kitchen drains, bathroom drains, sewer lines, and emergency services.",
    "provider": {
      "@id": "https://arvadadrainpro.com/#business"
    },
    "areaServed": {
      "@type": "City",
      "name": "Arvada"
    },
    "serviceType": "Drain Cleaning"
  };

  return (
    <>
      <Helmet>
        <title>Drain Cleaning Arvada CO | 24/7 Emergency Service | ArvadaDrainPro</title>
        <meta 
          name="description" 
          content="Professional drain cleaning in Arvada, CO. 60-minute emergency response, licensed technicians, upfront pricing. Kitchen, bathroom, sewer drains. Call (720) 555-1234." 
        />
        <meta name="keywords" content="drain cleaning Arvada, Arvada drain cleaning, emergency drain service Arvada, clogged drain Arvada, sewer cleaning Arvada CO" />
        <link rel="canonical" href="https://arvadadrainpro.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Drain Cleaning Arvada CO | 24/7 Emergency Service" />
        <meta property="og:description" content="Professional drain cleaning in Arvada. 60-minute response, licensed technicians, guaranteed results. Call (720) 555-1234." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arvadadrainpro.com/" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Drain Cleaning Arvada CO | ArvadaDrainPro" />
        <meta name="twitter:description" content="24/7 emergency drain cleaning in Arvada. Licensed, insured, guaranteed." />
        
        {/* Geo tags */}
        <meta name="geo.region" content="US-CO" />
        <meta name="geo.placename" content="Arvada" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>
      
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AreasSection />
        <TrustSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
