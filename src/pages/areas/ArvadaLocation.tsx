import LocationPageLayout from "@/components/LocationPageLayout";

const ArvadaLocation = () => {
  const locationData = {
    slug: "arvada",
    name: "Arvada",
    metaTitle: "Drain Cleaning Arvada CO | Local Experts | ArvadaDrainPro",
    metaDescription: "Professional drain cleaning in Arvada, CO. Your local drain experts serving Olde Town, Ralston Valley, and all Arvada neighborhoods. Call (720) 555-1234.",
    heroHeadline: "DRAIN CLEANING IN ARVADA",
    heroSubheadline: "Your hometown drain cleaning experts. We know Arvada's homes, pipes, and plumbing challenges better than anyone.",
    introText: "As Arvada's premier drain cleaning service, we've been keeping local homes and businesses flowing smoothly for over 15 years. Our headquarters is right here in Arvada, which means faster response times and technicians who understand the unique plumbing challenges of our community.",
    localInfo: "Arvada's mix of historic Olde Town properties and newer developments in areas like Candelas and Leyden Rock means diverse plumbing systems with different needs. Older homes near downtown often have clay or cast iron pipes susceptible to root intrusion, while newer construction may face issues from construction debris. Our team has experience with all of Arvada's housing stock, from 1900s craftsman homes to brand-new builds.",
    neighborhoods: [
      "Olde Town",
      "Ralston Valley",
      "Candelas",
      "Leyden Rock",
      "West Woods",
      "Lake Arbor",
      "Arvada Plaza",
      "Sunset Ridge",
      "Quaker Acres",
      "Arvada West"
    ],
    landmarks: [
      "Olde Town Arvada",
      "Apex Center",
      "Arvada Center for the Arts",
      "Ralston Creek Trail",
      "Two Ponds National Wildlife Refuge"
    ],
    commonIssues: [
      "Tree root intrusion in older Olde Town sewer lines from mature landscaping",
      "Grease buildup in kitchen drains from Arvada's foodie culture",
      "Hard water mineral deposits affecting bathroom fixtures",
      "Construction debris in drains of newer Candelas and Leyden Rock homes"
    ],
    faqs: [
      {
        question: "How fast can you get to my Arvada home?",
        answer: "Since our headquarters is in Arvada, we can typically arrive within 30-45 minutes for regular service calls, and we guarantee 60-minute response for emergencies anywhere in the city."
      },
      {
        question: "Do you work on older homes in Olde Town Arvada?",
        answer: "Absolutely. We specialize in the unique plumbing challenges of Arvada's historic homes, including clay pipes, cast iron systems, and older fixtures. We use camera inspection to assess pipe condition before recommending any work."
      },
      {
        question: "What areas of Arvada do you serve?",
        answer: "We serve all of Arvada, from Olde Town to Candelas, Leyden Rock to Lake Arbor, and everywhere in between. If you're within Arvada city limits, we'll be there."
      },
      {
        question: "Do Arvada homes have hard water issues?",
        answer: "Yes, Arvada's water comes from mountain sources with high mineral content. This leads to scale buildup in pipes and fixtures over time. Regular drain cleaning helps prevent mineral-related clogs."
      }
    ],
    nearbyAreas: [
      { name: "Wheat Ridge", slug: "wheat-ridge" },
      { name: "Westminster", slug: "westminster" },
      { name: "Golden", slug: "golden" },
      { name: "Broomfield", slug: "broomfield" }
    ]
  };

  return <LocationPageLayout location={locationData} />;
};

export default ArvadaLocation;
