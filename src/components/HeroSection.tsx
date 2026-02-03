import { Phone, Clock, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-drain-service.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] bg-secondary text-secondary-foreground pt-32 pb-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional drain cleaning service in Arvada" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/85" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-primary/30" />
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-sm text-sm font-medium animate-fade-up">
              <Star className="w-4 h-4 fill-primary" />
              Rated 5 Stars on Google
            </div>
            
            {/* Main headline */}
            <h1 className="font-display text-fluid-5xl leading-none animate-fade-up animation-delay-100">
              DRAIN CLEANING IN{" "}
              <span className="text-primary">ARVADA</span>
              <br />
              <span className="text-fluid-4xl text-white/80">Fast, Reliable & Guaranteed</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/70 max-w-xl animate-fade-up animation-delay-200">
              Clogged drains ruining your day? Our licensed technicians arrive in 60 minutes or less. 
              No overtime charges, upfront pricing, 100% satisfaction guaranteed.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-300">
              <a href="tel:+18448980295" className="btn-hero">
                <Phone className="w-5 h-5" />
                Call (844) 8980-295
              </a>
              <a href="#quote" className="btn-hero-secondary bg-transparent border-white text-white hover:bg-white hover:text-secondary">
                Get Free Quote
              </a>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-4 animate-fade-up animation-delay-400">
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
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>
          
          {/* Right - Quick Quote Form */}
          <div className="bg-card text-card-foreground p-8 rounded-sm shadow-dramatic animate-fade-up animation-delay-300" id="quote">
            <h3 className="font-display text-2xl mb-2">GET YOUR FREE QUOTE</h3>
            <p className="text-muted-foreground mb-6">No obligation. Response within 30 minutes.</p>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name *" 
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number *" 
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <select 
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all text-muted-foreground"
                  defaultValue=""
                >
                  <option value="" disabled>Select Service Needed</option>
                  <option value="kitchen">Kitchen Drain Cleaning</option>
                  <option value="bathroom">Bathroom Drain Cleaning</option>
                  <option value="sewer">Sewer Line Cleaning</option>
                  <option value="floor">Floor Drain Cleaning</option>
                  <option value="emergency">Emergency Service</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <textarea 
                  placeholder="Describe your drain issue..."
                  rows={3}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full btn-hero justify-center"
              >
                Request Free Quote
              </button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-4 text-center">
              🔒 Your information is secure and never shared.
            </p>
          </div>
        </div>
      </div>
      
      {/* Diagonal bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{
        clipPath: 'polygon(0 100%, 100% 0, 100% 100%)'
      }} />
    </section>
  );
};

export default HeroSection;
