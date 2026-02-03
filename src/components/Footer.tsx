import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div>
            <a href="/" className="font-display text-2xl tracking-wider block mb-4">
              ARVADA<span className="text-primary">DRAIN</span>PRO
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Arvada's trusted drain cleaning experts since 2009. Licensed, insured, 
              and committed to keeping your drains flowing.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-accent">★★★★★</span>
              <span className="text-white/70">4.9/5 on Google</span>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-display text-lg mb-4">SERVICES</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="/services/kitchen-drain-cleaning" className="hover:text-primary transition-colors">Kitchen Drain Cleaning</a></li>
              <li><a href="/services/bathroom-drain-cleaning" className="hover:text-primary transition-colors">Bathroom Drain Cleaning</a></li>
              <li><a href="/services/sewer-line-cleaning" className="hover:text-primary transition-colors">Sewer Line Cleaning</a></li>
              <li><a href="/services/commercial-drain-cleaning" className="hover:text-primary transition-colors">Commercial Services</a></li>
              <li><a href="/services/emergency-drain-service" className="hover:text-primary transition-colors">Emergency Service</a></li>
              <li><a href="/services/drain-camera-inspection" className="hover:text-primary transition-colors">Camera Inspection</a></li>
            </ul>
          </div>
          
          {/* Areas */}
          <div>
            <h4 className="font-display text-lg mb-4">SERVICE AREAS</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="/areas/arvada" className="hover:text-primary transition-colors">Arvada</a></li>
              <li><a href="/areas/wheat-ridge" className="hover:text-primary transition-colors">Wheat Ridge</a></li>
              <li><a href="/areas/westminster" className="hover:text-primary transition-colors">Westminster</a></li>
              <li><a href="/areas/broomfield" className="hover:text-primary transition-colors">Broomfield</a></li>
              <li><a href="/areas/golden" className="hover:text-primary transition-colors">Golden</a></li>
              <li><a href="/areas/lakewood" className="hover:text-primary transition-colors">Lakewood</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">CONTACT US</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+17205551234" className="hover:text-primary transition-colors">(720) 555-1234</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@arvadadrainpro.com" className="hover:text-primary transition-colors">info@arvadadrainpro.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Serving Arvada, CO & Surrounding Areas</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Open 24/7 for Emergencies</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {currentYear} ArvadaDrainPro. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="/sitemap" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
