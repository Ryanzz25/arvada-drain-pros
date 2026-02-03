import LocationPageLayout from "@/components/LocationPageLayout";

const WestminsterLocation = () => {
  const locationData = {
    slug: "westminster",
    name: "Westminster",
    metaTitle: "Drain Cleaning Westminster CO | 24/7 Service | ArvadaDrainPro",
    metaDescription: "Professional drain cleaning in Westminster, CO. Serving Bradburn, Sheridan Green, Legacy Ridge, and all areas. Call (720) 555-1234 for fast service.",
    heroHeadline: "DRAIN CLEANING IN WESTMINSTER",
    heroSubheadline: "Trusted drain cleaning for Westminster residents. From the Orchard to downtown, we keep Westminster flowing.",
    introText: "Westminster's rapid growth over the past decades has created a diverse mix of housing, from established neighborhoods near downtown to newer developments around Standley Lake. ArvadaDrainPro serves all of Westminster with the same commitment to quality and fast response.",
    localInfo: "Westminster's location means homes here face unique plumbing challenges. The clay-heavy soil can put pressure on underground pipes, while the area's hard water contributes to mineral buildup. Newer communities like Bradburn Village and The Orchard feature modern plumbing, while established areas may have aging infrastructure. Our team is equipped to handle all of Westminster's drain cleaning needs.",
    neighborhoods: [
      "Bradburn Village",
      "The Orchard",
      "Sheridan Green",
      "Legacy Ridge",
      "Countryside",
      "Hyland Greens",
      "Westminster Hills",
      "Westbrook",
      "Shaw Heights",
      "Mandalay Gardens"
    ],
    landmarks: [
      "Westminster City Park",
      "Standley Lake",
      "Butterfly Pavilion",
      "The Orchard Town Center",
      "Westminster Promenade"
    ],
    commonIssues: [
      "Clay soil pressure on pipes causing bellies and cracks in sewer lines",
      "Hard water scale buildup in bathroom and kitchen drains",
      "Grease accumulation near Westminster's restaurant districts",
      "Storm drain backups during heavy rain events"
    ],
    faqs: [
      {
        question: "Do you serve all of Westminster?",
        answer: "Yes, we serve all Westminster neighborhoods from Shaw Heights to Standley Lake, Legacy Ridge to The Orchard. Our technicians know the city well and can reach any location quickly."
      },
      {
        question: "Why do Westminster homes have hard water issues?",
        answer: "Westminster's water supply contains naturally occurring minerals that cause scale buildup over time. This affects drains, water heaters, and fixtures. Regular maintenance helps manage this issue."
      },
      {
        question: "How long does drain cleaning take?",
        answer: "Most residential drain cleaning jobs take 30-60 minutes. Main sewer line cleaning may take 1-2 hours depending on the severity of the blockage and line length."
      },
      {
        question: "Do you offer emergency service in Westminster?",
        answer: "Yes, we provide 24/7 emergency service throughout Westminster with a 60-minute response guarantee. No overtime charges for nights, weekends, or holidays."
      }
    ],
    nearbyAreas: [
      { name: "Arvada", slug: "arvada" },
      { name: "Broomfield", slug: "broomfield" },
      { name: "Thornton", slug: "thornton" },
      { name: "Northglenn", slug: "northglenn" }
    ]
  };

  return <LocationPageLayout location={locationData} />;
};

export default WestminsterLocation;
