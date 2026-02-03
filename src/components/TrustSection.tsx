import { Award, Users, Clock, Shield } from "lucide-react";

const stats = [
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Users, value: "5,000+", label: "Jobs Completed" },
  { icon: Award, value: "4.9", label: "Google Rating" },
  { icon: Shield, value: "100%", label: "Satisfaction Guaranteed" }
];

const credentials = [
  "Licensed & Insured in Colorado",
  "Background-Checked Technicians",
  "Upfront, Flat-Rate Pricing",
  "No Overtime Charges",
  "Lifetime Workmanship Warranty",
  "Same-Day Service Available"
];

const TrustSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Accent lines */}
      <div className="absolute top-0 left-0 w-1/3 h-1 bg-primary" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-primary" />
      
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-widest text-sm">Why Choose Us</span>
          <h2 className="font-display text-fluid-4xl mt-2 mb-4 text-white">
            WHY ARVADA TRUSTS US
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            For over 15 years, we've been the go-to drain cleaning experts for Arvada homeowners 
            and businesses. Here's what sets us apart.
          </p>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-sm flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Credentials */}
        <div className="bg-white/5 rounded-sm p-8 border border-white/10">
          <h3 className="font-display text-2xl text-center mb-8">OUR CREDENTIALS</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((credential) => (
              <div key={credential} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-white/80">{credential}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonial */}
        <blockquote className="mt-16 text-center">
          <p className="text-xl md:text-2xl text-white/90 italic max-w-3xl mx-auto">
            "Had a major backup on a Sunday evening. They arrived within the hour and had everything 
            flowing again before dinner. Truly the best drain service in Arvada!"
          </p>
          <footer className="mt-4">
            <cite className="text-primary font-medium not-italic">— Sarah M., Arvada Homeowner</cite>
            <div className="flex items-center justify-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent">★</span>
              ))}
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default TrustSection;
