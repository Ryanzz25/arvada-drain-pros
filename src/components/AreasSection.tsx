import { MapPin } from "lucide-react";

const areas = [
  { name: "Arvada", slug: "arvada", primary: true },
  { name: "Wheat Ridge", slug: "wheat-ridge" },
  { name: "Westminster", slug: "westminster" },
  { name: "Broomfield", slug: "broomfield" },
  { name: "Golden", slug: "golden" },
  { name: "Lakewood", slug: "lakewood" },
  { name: "Thornton", slug: "thornton" },
  { name: "Northglenn", slug: "northglenn" }
];

const AreasSection = () => {
  return (
    <section id="areas" className="section-padding bg-muted">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium uppercase tracking-widest text-sm">Coverage Area</span>
          <h2 className="font-display text-fluid-4xl mt-2 mb-4">
            AREAS WE SERVE NEAR ARVADA
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Providing fast, reliable drain cleaning services throughout Arvada and the surrounding 
            Jefferson County communities.
          </p>
        </div>
        
        {/* Areas grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {areas.map((area) => (
            <a 
              key={area.slug}
              href={`/areas/${area.slug}`}
              className={`
                relative p-6 rounded-sm text-center transition-all duration-300
                ${area.primary 
                  ? 'bg-primary text-primary-foreground shadow-lg hover:shadow-xl' 
                  : 'bg-card hover:bg-card/80 shadow-md hover:shadow-lg hover:-translate-y-1'
                }
              `}
            >
              <MapPin className={`w-5 h-5 mx-auto mb-2 ${area.primary ? 'text-primary-foreground' : 'text-primary'}`} />
              <h3 className="font-display text-lg">{area.name}</h3>
              <span className={`text-xs ${area.primary ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                Drain Cleaning →
              </span>
              {area.primary && (
                <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-sm">
                  HQ
                </span>
              )}
            </a>
          ))}
        </div>
        
        {/* Note */}
        <p className="text-center text-muted-foreground mt-8">
          Don't see your area? <a href="tel:+17205551234" className="text-primary hover:underline font-medium">Give us a call</a> — we likely serve your location!
        </p>
      </div>
    </section>
  );
};

export default AreasSection;
