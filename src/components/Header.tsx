import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const locations = [
  { name: "Arvada", slug: "arvada" },
  { name: "Wheat Ridge", slug: "wheat-ridge" },
  { name: "Westminster", slug: "westminster" },
  { name: "Broomfield", slug: "broomfield" },
  { name: "Golden", slug: "golden" },
  { name: "Lakewood", slug: "lakewood" },
  { name: "Thornton", slug: "thornton" },
  { name: "Northglenn", slug: "northglenn" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary text-secondary-foreground">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container-narrow flex items-center justify-between text-sm">
          <span className="hidden sm:inline">24/7 Emergency Drain Cleaning in Arvada</span>
          <a 
            href="tel:+18448980295" 
            className="flex items-center gap-2 font-semibold hover:underline"
          >
            <Phone className="w-4 h-4" />
            (844) 8980-295
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
            <a href="/" className="font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="/services" className="font-medium hover:text-primary transition-colors">
              Services
            </a>
            
            {/* Areas Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium hover:text-primary transition-colors focus:outline-none">
                Areas Served
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-secondary border-border min-w-[180px] z-50"
                sideOffset={8}
              >
                <DropdownMenuItem asChild>
                  <a 
                    href="/areas" 
                    className="cursor-pointer text-secondary-foreground hover:bg-primary/20 hover:text-primary font-medium"
                  >
                    All Areas
                  </a>
                </DropdownMenuItem>
                {locations.map((location) => (
                  <DropdownMenuItem key={location.slug} asChild>
                    <a 
                      href={`/areas/${location.slug}`} 
                      className="cursor-pointer text-secondary-foreground hover:bg-primary/20 hover:text-primary"
                    >
                      {location.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="#about" className="font-medium hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#faq" className="font-medium hover:text-primary transition-colors">
              FAQ
            </a>
            <a 
              href="tel:+18448980295" 
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
              <a href="/" className="font-medium hover:text-primary transition-colors">
                Home
              </a>
              <a href="/services" className="font-medium hover:text-primary transition-colors">
                Services
              </a>
              <a href="/areas" className="font-medium hover:text-primary transition-colors">
                Areas Served
              </a>
              <div className="pl-4 flex flex-col gap-2 border-l-2 border-primary/30">
                {locations.map((location) => (
                  <a 
                    key={location.slug}
                    href={`/areas/${location.slug}`} 
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {location.name}
                  </a>
                ))}
              </div>
              <a href="#about" className="font-medium hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#faq" className="font-medium hover:text-primary transition-colors">
                FAQ
              </a>
              <a 
                href="tel:+18448980295" 
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
