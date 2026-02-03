import LocationPageLayout from "@/components/LocationPageLayout";

const ThorntonLocation = () => {
  const locationData = {
    slug: "thornton",
    name: "Thornton",
    metaTitle: "Drain Cleaning Thornton CO | Fast Response | ArvadaDrainPro",
    metaDescription: "Reliable drain cleaning in Thornton, CO. Serving Eastlake, Todd Creek, Thorncreek, and all neighborhoods. Call (720) 555-1234 for fast service.",
    heroHeadline: "DRAIN CLEANING IN THORNTON",
    heroSubheadline: "Fast, professional drain service for Thornton homes. From Eastlake to Todd Creek, we're here to help.",
    introText: "Thornton's explosive growth has made it one of Colorado's largest cities, with neighborhoods ranging from established communities in original Thornton to brand-new developments near E-470. ArvadaDrainPro serves all of Thornton with reliable drain cleaning.",
    localInfo: "Thornton's development patterns mean you'll find significant plumbing variety throughout the city. Original Thornton near 88th Avenue features mid-century homes with mature systems, while master-planned communities like Eastlake and Todd Creek have modern infrastructure. Each area has its own characteristics, and our technicians understand the differences.",
    neighborhoods: [
      "Eastlake",
      "Todd Creek",
      "Thorncreek",
      "Hunters Glen",
      "Trail Creek",
      "Quail Ridge",
      "Village East",
      "Original Thornton",
      "Woodglen",
      "Niver Creek"
    ],
    landmarks: [
      "Thornton City Center",
      "Carpenter Park",
      "Margaret Carpenter Recreation Center",
      "Trail Winds Recreation Center",
      "Community Park"
    ],
    commonIssues: [
      "Construction debris in newer Eastlake and Todd Creek home drains",
      "Bellied sewer lines from soil settling in newer developments",
      "Aging pipes in original Thornton neighborhoods near 88th Avenue",
      "Hard water scale buildup throughout Thornton's water service area"
    ],
    faqs: [
      {
        question: "Do you serve new construction areas in Thornton?",
        answer: "Yes, we serve all of Thornton including Eastlake, Todd Creek, and other new developments. Even new homes can have drain issues from construction debris or improper installation."
      },
      {
        question: "How fast can you get to Thornton?",
        answer: "Most Thornton locations are 40-55 minutes from our base. Emergency calls receive priority dispatch with a 60-minute response guarantee."
      },
      {
        question: "My Thornton home is new but drains are slow. Why?",
        answer: "New construction can leave debris in pipes, or there may be installation issues. We see this frequently in fast-growing areas. Camera inspection can reveal the cause."
      },
      {
        question: "Do you offer maintenance plans for Thornton homeowners?",
        answer: "Yes, we offer annual and bi-annual maintenance plans. Regular cleaning is especially valuable in newer areas where soil settling can affect pipes over time."
      }
    ],
    nearbyAreas: [
      { name: "Westminster", slug: "westminster" },
      { name: "Northglenn", slug: "northglenn" },
      { name: "Broomfield", slug: "broomfield" },
      { name: "Brighton", slug: "brighton" }
    ]
  };

  return <LocationPageLayout location={locationData} />;
};

export default ThorntonLocation;
