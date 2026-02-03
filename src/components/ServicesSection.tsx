import { Droplets, Home, ShowerHead, Building2, AlertTriangle, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Kitchen Drain Cleaning",
    description: "Grease buildup, food debris, and stubborn clogs removed fast. Keep your kitchen sink flowing freely.",
    link: "/services/kitchen-drain-cleaning"
  },
  {
    icon: ShowerHead,
    title: "Bathroom Drain Cleaning",
    description: "Hair, soap scum, and mineral deposits cleared from showers, tubs, and sinks. Restore full drainage.",
    link: "/services/bathroom-drain-cleaning"
  },
  {
    icon: Droplets,
    title: "Sewer Line Cleaning",
    description: "Professional hydro-jetting and rooter service for main sewer lines. Prevent backups before they happen.",
    link: "/services/sewer-line-cleaning"
  },
  {
    icon: Building2,
    title: "Commercial Drain Service",
    description: "Restaurants, offices, and retail spaces. Minimize downtime with our fast commercial drain solutions.",
    link: "/services/commercial-drain-cleaning"
  },
  {
    icon: AlertTriangle,
    title: "Emergency Drain Service",
    description: "Flooding? Backup? We're available 24/7 for urgent drain emergencies. 60-minute response guaranteed.",
    link: "/services/emergency-drain-service"
  },
  {
    icon: Wrench,
    title: "Drain Camera Inspection",
    description: "HD video inspection to diagnose hidden problems. See exactly what's causing your drain issues.",
    link: "/services/drain-camera-inspection"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-widest text-sm">Our Services</span>
          <h2 className="font-display text-fluid-4xl mt-2 mb-4">
            DRAIN CLEANING SERVICES IN ARVADA
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From simple clogs to complex sewer line issues, our licensed technicians handle it all with 
            professional equipment and guaranteed results.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article 
              key={service.title}
              className="card-industrial p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-display text-xl mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              <a 
                href={service.link}
                className="inline-flex items-center text-primary font-medium text-sm hover:underline"
              >
                Learn More →
              </a>
            </article>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Not sure which service you need?</p>
          <a href="tel:+17205551234" className="btn-hero">
            Call For Free Diagnosis
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
