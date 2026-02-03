import ServicePageLayout from "@/components/ServicePageLayout";
import { ShowerHead } from "lucide-react";

const BathroomDrainCleaning = () => {
  const serviceData = {
    slug: "bathroom-drain-cleaning",
    title: "Bathroom Drain Cleaning",
    metaTitle: "Bathroom Drain Cleaning Arvada CO | Shower, Tub & Sink | ArvadaDrainPro",
    metaDescription: "Expert bathroom drain cleaning in Arvada. Clear hair clogs, soap scum, and buildup from showers, tubs, and sinks. Fast service. Call (720) 555-1234.",
    heroHeadline: "BATHROOM DRAIN CLEANING IN ARVADA",
    heroSubheadline: "Hair, soap scum, and mineral deposits slowing your drains? We restore full flow to showers, tubs, and sinks — fast and guaranteed.",
    icon: ShowerHead,
    introText: "Bathroom drains face a unique challenge: they're constantly exposed to hair, soap, toothpaste, and the mineral deposits from Arvada's hard water. This combination creates tough, sticky clogs that household drain cleaners often can't dissolve. Our professional bathroom drain cleaning service tackles these stubborn blockages at the source. We use specialized tools designed for bathroom plumbing, safely removing hair clogs from shower drains, soap buildup from tub drains, and mineral scale from sink drains. Whether you're dealing with standing water in your shower or a slow-draining sink, we'll have it flowing freely again.",
    benefits: [
      "Specialized tools for hair and soap clogs",
      "Safe for all bathroom fixtures",
      "Address all bathroom drains in one visit",
      "Remove mineral buildup from hard water",
      "30-day clog-free guarantee",
      "Protect your fixtures from chemical damage"
    ],
    process: [
      {
        step: "Assessment",
        description: "We identify which drains are affected and diagnose the clog type."
      },
      {
        step: "Pricing",
        description: "Clear, upfront pricing for each drain before we begin work."
      },
      {
        step: "Removal",
        description: "We extract hair, soap, and buildup using professional-grade tools."
      },
      {
        step: "Testing",
        description: "We verify each drain flows freely before we leave."
      }
    ],
    faqs: [
      {
        question: "Why does my shower drain clog so often?",
        answer: "Shower drains primarily clog from hair combined with soap residue. Hair catches on the drain crossbars and creates a net that traps more hair and soap, building up quickly. A drain cover and monthly enzyme treatment can help prevent buildup."
      },
      {
        question: "Can you clean all my bathroom drains at once?",
        answer: "Absolutely. We offer multi-drain discounts when cleaning multiple bathroom drains in the same visit. This is often the most cost-effective approach and ensures your entire bathroom drains properly."
      },
      {
        question: "Are chemical drain cleaners bad for my pipes?",
        answer: "Yes, chemical drain cleaners can corrode pipes over time, especially older metal pipes. They also rarely clear the entire clog, leading to recurring problems. Professional mechanical cleaning is safer and more effective."
      },
      {
        question: "How long does bathroom drain cleaning take?",
        answer: "Most bathroom drain cleaning jobs take 30-60 minutes. If multiple drains need service or if there's a deeper blockage in the branch line, it may take up to 90 minutes."
      }
    ],
    relatedServices: [
      { title: "Kitchen Drain Cleaning", slug: "kitchen-drain-cleaning" },
      { title: "Sewer Line Cleaning", slug: "sewer-line-cleaning" },
      { title: "Emergency Drain Service", slug: "emergency-drain-service" }
    ],
    priceRange: "125"
  };

  return <ServicePageLayout service={serviceData} />;
};

export default BathroomDrainCleaning;
