import { Helmet } from "react-helmet-async";
import { Home, ShowerHead, Droplets, Building2, AlertTriangle, Wrench, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Home,
    title: "Kitchen Drain Cleaning",
    slug: "kitchen-drain-cleaning",
    description: "Grease buildup, food debris, and stubborn clogs removed fast. Keep your kitchen sink flowing freely with professional cleaning."
  },
  {
    icon: ShowerHead,
    title: "Bathroom Drain Cleaning",
    slug: "bathroom-drain-cleaning",
    description: "Hair, soap scum, and mineral deposits cleared from showers, tubs, and sinks. Restore full drainage to all bathroom fixtures."
  },
  {
    icon: Droplets,
    title: "Sewer Line Cleaning",
    slug: "sewer-line-cleaning",
    description: "Professional hydro-jetting and rooter service for main sewer lines. Prevent backups and keep your system flowing."
  },
  {
    icon: Building2,
    title: "Commercial Drain Service",
    slug: "commercial-drain-cleaning",
    description: "Restaurants, offices, and retail spaces. Minimize downtime with our fast, professional commercial drain solutions."
  },
  {
    icon: AlertTriangle,
    title: "Emergency Drain Service",
    slug: "emergency-drain-service",
    description: "Flooding? Backup? We're available 24/7 for urgent drain emergencies. 60-minute response guaranteed, no overtime charges."
  },
  {
    icon: Wrench,
    title: "Drain Camera Inspection",
    slug: "drain-camera-inspection",
    description: "HD video inspection to diagnose hidden problems. See exactly what's causing your drain issues before we repair."
  }
];

const ServicesIndex = () => {
  return (
    <>
      <Helmet>
        <title>Drain Cleaning Services Arvada CO | ArvadaDrainPro</title>
        <meta 
          name="description" 
          content="Complete drain cleaning services in Arvada. Kitchen, bathroom, sewer lines, commercial, emergency service, and camera inspection. Call (720) 555-1234." 
        />
        <link rel="canonical" href="https://arvadadrainpro.com/services/" />
      </Helmet>

      <Header />
      
      <main>
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground pt-32 pb-20">
          <div className="container-narrow">
            <nav className="text-sm text-white/60 mb-6">
              <a href="/" className="hover:text-primary">Home</a>
              <span className="mx-2">/</span>
              <span className="text-white">Services</span>
            </nav>
            
            <h1 className="font-display text-fluid-5xl mb-4">
              OUR DRAIN CLEANING SERVICES
            </h1>
            <p className="text-xl text-white/70 max-w-3xl">
              From simple clogs to complex sewer line issues, ArvadaDrainPro handles it all with 
              professional equipment, licensed technicians, and guaranteed results.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <a 
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="card-industrial p-8 group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h2 className="font-display text-2xl mb-3">{service.title}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Learn More →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <h2 className="font-display text-fluid-4xl mb-4">
              NOT SURE WHICH SERVICE YOU NEED?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Call us for a free diagnosis. We'll identify the problem and recommend the right solution.
            </p>
            <a 
              href="tel:+17205551234" 
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-sm hover:bg-secondary/90 hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call (720) 555-1234
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServicesIndex;
