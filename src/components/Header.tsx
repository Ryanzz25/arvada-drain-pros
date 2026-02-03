import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary text-secondary-foreground">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container-narrow flex items-center justify-between text-sm">
          <span className="hidden sm:inline">24/7 Emergency Drain Cleaning in Arvada</span>
          <a 
            href="tel:+17205551234" 
            className="flex items-center gap-2 font-semibold hover:underline"
          >
            <Phone className="w-4 h-4" />
            (720) 555-1234
          </a>
        </div>
      </div>
      
      {/* Main nav */}
      <nav className="container-narrow py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-display text-2xl md:text-3xl tracking-wider">
            ARVADA<span className="text-primary">DRAIN</span>PRO
          </a>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/services" className="font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="#areas" className="font-medium hover:text-primary transition-colors">
              Areas Served
            </a>
            <a href="#about" className="font-medium hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#faq" className="font-medium hover:text-primary transition-colors">
              FAQ
            </a>
            <a 
              href="tel:+17205551234" 
              className="btn-hero text-base py-3 px-6"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="/services" className="font-medium hover:text-primary transition-colors">
                Services
              </a>
              <a href="#areas" className="font-medium hover:text-primary transition-colors">
                Areas Served
              </a>
              <a href="#about" className="font-medium hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#faq" className="font-medium hover:text-primary transition-colors">
                FAQ
              </a>
              <a 
                href="tel:+17205551234" 
                className="btn-hero text-base py-3 px-6 w-full text-center"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
