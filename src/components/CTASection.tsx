import { Phone, Clock, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(0,0,0,0.1) 35px,
            rgba(0,0,0,0.1) 70px
          )`
        }}
      />
      
      <div className="container-narrow relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-fluid-4xl mb-4">
            NEED DRAIN CLEANING IN ARVADA?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Don't let a clogged drain ruin your day. Our team is standing by to help — 
            24 hours a day, 7 days a week.
          </p>
          
          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free Estimates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No Overtime Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>60-Min Response</span>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+17205551234" 
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-sm transition-all duration-300 hover:bg-secondary/90 hover:scale-105 hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call (720) 555-1234
            </a>
            <a 
              href="#quote"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-4 text-lg font-semibold rounded-sm transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
