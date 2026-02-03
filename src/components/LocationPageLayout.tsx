import { Phone, CheckCircle, Clock, Shield, Star, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/hero-location-page.jpg";

interface LocationFAQ {
  question: string;
  answer: string;
}

interface LocationData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  introText: string;
  localInfo: string;
  neighborhoods: string[];
  landmarks: string[];
  commonIssues: string[];
  faqs: LocationFAQ[];
  nearbyAreas: {
    name: string;
    slug: string;
  }[];
}

interface LocationPageLayoutProps {
  location: LocationData;
}

const services = [
  { title: "Kitchen Drain Cleaning", slug: "kitchen-drain-cleaning", description: "Clear grease and food buildup from kitchen sinks" },
  { title: "Bathroom Drain Cleaning", slug: "bathroom-drain-cleaning", description: "Remove hair and soap from showers, tubs, sinks" },
  { title: "Sewer Line Cleaning", slug: "sewer-line-cleaning", description: "Hydro-jetting and rooter service for main lines" },
  { title: "Emergency Service", slug: "emergency-drain-service", description: "24/7 response for urgent drain emergencies" },
  { title: "Camera Inspection", slug: "drain-camera-inspection", description: "HD video diagnosis of hidden pipe problems" },
  { title: "Commercial Service", slug: "commercial-drain-cleaning", description: "Professional service for businesses" }
];

const LocationPageLayout = ({ location }: LocationPageLayoutProps) => {
  // LocalBusiness + Service Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://arvadadrainpro.com/#business",
    "name": "ArvadaDrainPro",
    "description": `Professional drain cleaning services in ${location.name}, Colorado. 24/7 emergency service, licensed technicians.`,
    "url": "https://arvadadrainpro.com",
    "telephone": "+1-844-898-0295",
    "areaServed": {
      "@type": "City",
      "name": location.name
    }
  };

  // Service Schema for this location
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Drain Cleaning ${location.name}`,
    "description": location.metaDescription,
    "provider": {
      "@id": "https://arvadadrainpro.com/#business"
    },
    "areaServed": {
      "@type": "City",
      "name": location.name
    },
    "serviceType": "Drain Cleaning"
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": location.faqs.map(faq => ({
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
        "name": "Areas",
        "item": "https://arvadadrainpro.com/areas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": location.name,
        "item": `https://arvadadrainpro.com/areas/${location.slug}`
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{location.metaTitle}</title>
        <meta name="description" content={location.metaDescription} />
        <link rel="canonical" href={`https://arvadadrainpro.com/areas/${location.slug}/`} />
        <meta name="geo.placename" content={location.name} />
        <meta name="geo.region" content="US-CO" />
        
        <meta property="og:title" content={location.metaTitle} />
        <meta property="og:description" content={location.metaDescription} />
        <meta property="og:url" content={`https://arvadadrainpro.com/areas/${location.slug}/`} />
        
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
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
              alt={`Drain cleaning service in ${location.name}, Colorado`}
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
              <a href="/areas" className="hover:text-primary">Areas</a>
              <span className="mx-2">/</span>
              <span className="text-white">{location.name}</span>
            </nav>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-sm text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  Serving {location.name}, CO
                </div>
                
                <h1 className="font-display text-fluid-5xl leading-none">
                  {location.heroHeadline}
                </h1>
                
                <p className="text-xl text-white/70 max-w-xl">
                  {location.heroSubheadline}
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
                    <span>60-Min Response</span>
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
                <p className="text-muted-foreground mb-6">Fast service in {location.name}.</p>
                
                <form action="https://formsubmit.co/ryanvamail@gmail.com" method="POST" className="space-y-4">
                  <input type="hidden" name="_subject" value={`Quote Request from ${location.name}`} />
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
                  <input 
                    type="text" 
                    name="address"
                    placeholder={`Address in ${location.name}`}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea 
                    name="message"
                    placeholder="Describe your drain issue..."
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

        {/* Intro & Local Info Section */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-fluid-3xl mb-6">
                  DRAIN CLEANING IN {location.name.toUpperCase()}
                </h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p>{location.introText}</p>
                  <p>{location.localInfo}</p>
                </div>
              </div>
              
              <div className="space-y-8">
                {/* Neighborhoods */}
                <div className="bg-muted p-6 rounded-sm">
                  <h3 className="font-display text-xl mb-4">NEIGHBORHOODS WE SERVE</h3>
                  <div className="flex flex-wrap gap-2">
                    {location.neighborhoods.map((neighborhood) => (
                      <span 
                        key={neighborhood} 
                        className="bg-background px-3 py-1 rounded-sm text-sm"
                      >
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Local Landmarks */}
                <div className="bg-muted p-6 rounded-sm">
                  <h3 className="font-display text-xl mb-4">NEAR YOU</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {location.landmarks.map((landmark) => (
                      <li key={landmark} className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                        {landmark}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Available Section */}
        <section className="section-padding bg-muted">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <span className="text-primary font-medium uppercase tracking-widest text-sm">Our Services</span>
              <h2 className="font-display text-fluid-4xl mt-2">
                DRAIN SERVICES IN {location.name.toUpperCase()}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <a 
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-card p-6 rounded-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border-l-4 border-l-primary"
                >
                  <h3 className="font-display text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                  <span className="text-primary text-sm font-medium">Learn More →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Common Issues Section */}
        <section className="section-padding bg-secondary text-secondary-foreground">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <span className="text-primary font-medium uppercase tracking-widest text-sm">Local Expertise</span>
              <h2 className="font-display text-fluid-4xl mt-2 text-white">
                COMMON DRAIN ISSUES IN {location.name.toUpperCase()}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {location.commonIssues.map((issue, index) => (
                <div key={index} className="flex items-start gap-4 bg-white/5 p-6 rounded-sm">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-white/90">{issue}</p>
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
                {location.name.toUpperCase()} DRAIN CLEANING QUESTIONS
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {location.faqs.map((faq, index) => (
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

        {/* Nearby Areas */}
        <section className="section-padding bg-muted">
          <div className="container-narrow">
            <h2 className="font-display text-fluid-3xl mb-8 text-center">ALSO SERVING NEARBY</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {location.nearbyAreas.map((area) => (
                <a 
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="bg-card px-6 py-3 rounded-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <span className="font-display">{area.name}</span>
                  <span className="text-primary ml-2">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <h2 className="font-display text-fluid-4xl mb-4">
              NEED DRAIN CLEANING IN {location.name.toUpperCase()}?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              We're your local drain cleaning experts. Fast response, fair prices, guaranteed results.
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

export default LocationPageLayout;
