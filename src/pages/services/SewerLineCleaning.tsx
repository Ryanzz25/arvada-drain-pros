import ServicePageLayout from "@/components/ServicePageLayout";
import { Droplets } from "lucide-react";

const SewerLineCleaning = () => {
  const serviceData = {
    slug: "sewer-line-cleaning",
    title: "Sewer Line Cleaning",
    metaTitle: "Sewer Line Cleaning Arvada CO | Hydro-Jetting & Rooter | ArvadaDrainPro",
    metaDescription: "Professional sewer line cleaning in Arvada. Hydro-jetting, rooter service, tree root removal. Prevent backups. 90-day guarantee. Call (720) 555-1234.",
    heroHeadline: "SEWER LINE CLEANING IN ARVADA",
    heroSubheadline: "Multiple slow drains? Sewage odors? Gurgling toilets? Your main sewer line may need professional cleaning before a backup occurs.",
    icon: Droplets,
    introText: "Your main sewer line carries all wastewater from your home to the city sewer system. When it becomes clogged or restricted, the effects show up throughout your home: slow drains in multiple fixtures, gurgling sounds, sewage odors, and eventually — backups. In Arvada, tree root intrusion is a leading cause of sewer line problems, as roots seek out the moisture in your pipes. Our sewer line cleaning service uses powerful hydro-jetting and professional rooter equipment to clear blockages and restore full flow. We also offer camera inspection to diagnose hidden problems before they become emergencies.",
    benefits: [
      "High-pressure hydro-jetting cuts through any blockage",
      "Professional rooter service removes tree roots",
      "Prevent costly sewage backups",
      "90-day extended warranty on sewer work",
      "Camera inspection available to verify results",
      "24/7 emergency service for urgent situations"
    ],
    process: [
      {
        step: "Locate Access",
        description: "We identify the best cleanout point to access your sewer line."
      },
      {
        step: "Camera Inspection",
        description: "Optional HD video inspection to diagnose the exact problem."
      },
      {
        step: "Clear Line",
        description: "We use hydro-jetting or rooter equipment based on the blockage type."
      },
      {
        step: "Final Check",
        description: "We verify complete clearing and discuss prevention strategies."
      }
    ],
    faqs: [
      {
        question: "How do I know if my sewer line is clogged?",
        answer: "Warning signs include: multiple drains running slowly at once, gurgling sounds from toilets when you run water elsewhere, sewage odors in the home, and water backing up in floor drains. If you notice these symptoms, call for service before a full backup occurs."
      },
      {
        question: "What is hydro-jetting?",
        answer: "Hydro-jetting uses high-pressure water (up to 4,000 PSI) to scour the inside of your sewer line, cutting through grease, scale, and even tree roots. It's the most thorough cleaning method available and leaves pipes in near-new condition."
      },
      {
        question: "How often should I clean my sewer line?",
        answer: "For most Arvada homes, we recommend sewer line cleaning every 2-3 years as preventive maintenance. If you have large trees near your sewer line, annual cleaning may be necessary to prevent root intrusion problems."
      },
      {
        question: "Can tree roots damage my sewer line?",
        answer: "Yes, tree roots can enter through small cracks or joints in sewer pipes, then grow and expand, eventually causing blockages or pipe damage. Regular cleaning and root treatment can prevent this, but severely damaged pipes may need repair or replacement."
      }
    ],
    relatedServices: [
      { title: "Drain Camera Inspection", slug: "drain-camera-inspection" },
      { title: "Emergency Drain Service", slug: "emergency-drain-service" },
      { title: "Commercial Drain Service", slug: "commercial-drain-cleaning" }
    ],
    priceRange: "250"
  };

  return <ServicePageLayout service={serviceData} />;
};

export default SewerLineCleaning;
