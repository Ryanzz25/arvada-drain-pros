import { Helmet } from "react-helmet-async";
import { MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const areas = [
  { 
    name: "Arvada", 
    slug: "arvada", 
    description: "Our headquarters. Serving Olde Town, Candelas, Leyden Rock, and all Arvada neighborhoods.",
    primary: true 
  },
  { 
    name: "Wheat Ridge", 
    slug: "wheat-ridge", 
    description: "Expert service for Paramount Heights, Appleridge, and all Wheat Ridge communities." 
  },
  { 
    name: "Westminster", 
    slug: "westminster", 
    description: "Covering Bradburn, The Orchard, Legacy Ridge, and throughout Westminster." 
  },
  { 
    name: "Broomfield", 
    slug: "broomfield", 
    description: "Serving Interlocken, Broadlands, McKay Landing, and all Broomfield areas." 
  },
  { 
    name: "Golden", 
    slug: "golden", 
    description: "From historic downtown to Lookout Mountain foothills communities." 
  },
  { 
    name: "Lakewood", 
    slug: "lakewood", 
    description: "Citywide service including Green Mountain, Belmar, and Union Square." 
  },
  { 
    name: "Thornton", 
    slug: "thornton", 
    description: "Fast response to Eastlake, Todd Creek, and all Thornton neighborhoods." 
  },
  { 
    name: "Northglenn", 
    slug: "northglenn", 
    description: "Reliable service for Northglenn's established communities." 
  }
];

const AreasIndex = () => {
  return (
    <>
      <Helmet>
        <title>Service Areas | Drain Cleaning Near You | ArvadaDrainPro</title>
        <meta 
          name="description" 
          content="ArvadaDrainPro serves Arvada, Wheat Ridge, Westminster, Broomfield, Golden, Lakewood, Thornton, and Northglenn. Find drain cleaning near you. Call (720) 555-1234." 
        />
        <link rel="canonical" href="https://arvadadrainpro.com/areas/" />
      </Helmet>

      <Header />
      
      <main>
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground pt-32 pb-20">
          <div className="container-narrow">
            <nav className="text-sm text-white/60 mb-6">
              <a href="/" className="hover:text-primary">Home</a>
              <span className="mx-2">/</span>
              <span className="text-white">Areas We Serve</span>
            </nav>
            
            <h1 className="font-display text-fluid-5xl mb-4">
              AREAS WE SERVE
            </h1>
            <p className="text-xl text-white/70 max-w-3xl">
              ArvadaDrainPro provides professional drain cleaning throughout the Denver metro area's 
              northwest communities. Find your city below for local service information.
            </p>
          </div>
        </section>

        {/* Areas Grid */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-8">
              {areas.map((area) => (
                <a 
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className={`
                    relative p-8 rounded-sm transition-all duration-300 group
                    ${area.primary 
                      ? 'bg-primary text-primary-foreground shadow-lg hover:shadow-xl' 
                      : 'card-industrial hover:shadow-xl'
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div className={`
                      w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0
                      ${area.primary ? 'bg-white/20' : 'bg-primary/10'}
                    `}>
                      <MapPin className={`w-6 h-6 ${area.primary ? 'text-white' : 'text-primary'}`} />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl mb-2">{area.name}</h2>
                      <p className={`text-sm mb-4 ${area.primary ? 'text-white/80' : 'text-muted-foreground'}`}>
                        {area.description}
                      </p>
                      <span className={`
                        font-medium text-sm group-hover:underline
                        ${area.primary ? 'text-white' : 'text-primary'}
                      `}>
                        View {area.name} Service →
                      </span>
                    </div>
                  </div>
                  
                  {area.primary && (
                    <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-sm font-medium">
                      Headquarters
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Areas Note */}
        <section className="py-12 bg-muted">
          <div className="container-narrow text-center">
            <h2 className="font-display text-2xl mb-4">DON'T SEE YOUR AREA?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We serve many additional communities in the Denver metro area. Give us a call and 
              we'll let you know if we can help with your drain cleaning needs.
            </p>
            <a href="tel:+17205551234" className="btn-hero">
              <Phone className="w-5 h-5" />
              Call (720) 555-1234
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <h2 className="font-display text-fluid-4xl mb-4">
              READY FOR SERVICE?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              No matter where you are in our service area, we provide the same fast response, 
              professional service, and guaranteed results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+17205551234" 
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-sm hover:bg-secondary/90 hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call (720) 555-1234
              </a>
              <a 
                href="/#quote"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-4 text-lg font-semibold rounded-sm hover:bg-primary-foreground hover:text-primary transition-all"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AreasIndex;
