import { Phone, CheckCircle, Clock, Shield, Star, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { LucideIcon } from "lucide-react";
import heroImage from "@/assets/hero-service-page.jpg";

interface ServiceFAQ {
  question: string;
  answer: string;
}

interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  icon: LucideIcon;
  introText: string;
  benefits: string[];
  process: {
    step: string;
    description: string;
  }[];
  faqs: ServiceFAQ[];
  relatedServices: {
    title: string;
    slug: string;
  }[];
  priceRange?: string;
}

interface ServicePageLayoutProps {
  service: ServiceData;
}

const ServicePageLayout = ({ service }: ServicePageLayoutProps) => {
  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.metaDescription,
    "provider": {
      "@type": "Plumber",
      "@id": "https://arvadadrainpro.com/#business",
      "name": "ArvadaDrainPro"
    },
    "areaServed": {
      "@type": "City",
      "name": "Arvada"
    },
    "serviceType": service.title,
    ...(service.priceRange && {
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "price": service.priceRange,
          "unitText": "Starting from"
        }
      }
    })
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://arvadadrainpro.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://arvadadrainpro.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://arvadadrainpro.com/services/${service.slug}`
      }
    ]
  };

  const ServiceIcon = service.icon;

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={`https://arvadadrainpro.com/services/${service.slug}/`} />
        
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={`https://arvadadrainpro.com/services/${service.slug}/`} />
        
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-secondary text-secondary-foreground pt-32 pb-20 relative overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt={`Professional ${service.title.toLowerCase()} service in Arvada`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-secondary/85" />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-primary/30" />
          </div>
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
          
          <div className="container-narrow relative z-10">
            {/* Breadcrumb */}
            <nav className="text-sm text-white/60 mb-6">
              <a href="/" className="hover:text-primary">Home</a>
              <span className="mx-2">/</span>
              <a href="/services" className="hover:text-primary">Services</a>
              <span className="mx-2">/</span>
              <span className="text-white">{service.title}</span>
            </nav>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/20 rounded-sm flex items-center justify-center">
                  <ServiceIcon className="w-8 h-8 text-primary" />
                </div>
                
                <h1 className="font-display text-fluid-5xl leading-none">
                  {service.heroHeadline}
                </h1>
                
                <p className="text-xl text-white/70 max-w-xl">
                  {service.heroSubheadline}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+18448980295" className="btn-hero">
                    <Phone className="w-5 h-5" />
                    Call (844) 8980-295
                  </a>
                  <a href="#quote" className="btn-hero-secondary bg-transparent border-white text-white hover:bg-white hover:text-secondary">
                    Get Free Quote
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Same-Day Service</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                    <span>5-Star Rated</span>
                  </div>
                </div>
              </div>
              
              {/* Quick Quote Form */}
              <div className="bg-card text-card-foreground p-8 rounded-sm shadow-dramatic" id="quote">
                <h3 className="font-display text-2xl mb-2">GET YOUR FREE QUOTE</h3>
                <p className="text-muted-foreground mb-6">No obligation. Fast response.</p>
                
                <form action="https://formsubmit.co/ryanvamail@gmail.com" method="POST" className="space-y-4">
                  <input type="hidden" name="_subject" value={`Quote Request: ${service.title}`} />
                  <input type="hidden" name="_captcha" value="false" />
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name *" 
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number *" 
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea 
                    name="message"
                    placeholder="Describe your issue..."
                    rows={3}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                  <button type="submit" className="w-full btn-hero justify-center">
                    Request Free Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Intro & Benefits Section */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-display text-fluid-3xl mb-6">
                  PROFESSIONAL {service.title.toUpperCase()} IN ARVADA
                </h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p>{service.introText}</p>
                </div>
              </div>
              
              <div className="bg-muted p-8 rounded-sm">
                <h3 className="font-display text-2xl mb-6">WHY CHOOSE US</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-muted">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <span className="text-primary font-medium uppercase tracking-widest text-sm">Our Process</span>
              <h2 className="font-display text-fluid-4xl mt-2">HOW IT WORKS</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-card p-6 rounded-sm shadow-md h-full">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center font-display text-xl mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-display text-lg mb-2">{step.step}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                  {index < service.process.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary w-6 h-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <span className="text-primary font-medium uppercase tracking-widest text-sm">FAQ</span>
              <h2 className="font-display text-fluid-4xl mt-2">
                {service.title.toUpperCase()} QUESTIONS
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-sm px-6 data-[state=open]:border-primary transition-colors"
                  >
                    <AccordionTrigger className="text-left font-display text-lg hover:text-primary hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding bg-muted">
          <div className="container-narrow">
            <h2 className="font-display text-fluid-3xl mb-8 text-center">RELATED SERVICES</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.relatedServices.map((related) => (
                <a 
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="bg-card p-6 rounded-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border-l-4 border-l-primary"
                >
                  <h3 className="font-display text-lg mb-2">{related.title}</h3>
                  <span className="text-primary text-sm font-medium">Learn More →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <h2 className="font-display text-fluid-4xl mb-4">
              NEED {service.title.toUpperCase()}?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Don't wait for the problem to get worse. Call now for fast, professional service.
            </p>
            <a 
              href="tel:+18448980295" 
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-sm hover:bg-secondary/90 hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call (844) 8980-295
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServicePageLayout;
