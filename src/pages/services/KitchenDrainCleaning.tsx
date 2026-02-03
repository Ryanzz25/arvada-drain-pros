import ServicePageLayout from "@/components/ServicePageLayout";
import { Home } from "lucide-react";

const KitchenDrainCleaning = () => {
  const serviceData = {
    slug: "kitchen-drain-cleaning",
    title: "Kitchen Drain Cleaning",
    metaTitle: "Kitchen Drain Cleaning Arvada CO | Same-Day Service | ArvadaDrainPro",
    metaDescription: "Professional kitchen drain cleaning in Arvada. Remove grease buildup, food debris, and stubborn clogs. Same-day service, upfront pricing. Call (720) 555-1234.",
    heroHeadline: "KITCHEN DRAIN CLEANING IN ARVADA",
    heroSubheadline: "Grease, food debris, and soap buildup clogging your kitchen sink? Our professional cleaning restores full drainage fast — guaranteed.",
    icon: Home,
    introText: "Kitchen drains are the workhorses of your home, handling everything from cooking grease to food scraps. Over time, these substances accumulate inside your pipes, creating stubborn clogs that household drain cleaners can't touch. Our professional kitchen drain cleaning service uses commercial-grade equipment to cut through years of buildup and restore your drain to like-new condition. Whether you have a slow-draining sink, a complete blockage, or recurring clogs, our Arvada technicians have the tools and expertise to solve the problem permanently.",
    benefits: [
      "Commercial-grade hydro-jetting for complete cleaning",
      "Safe for all pipe materials including older homes",
      "Remove years of grease and food buildup",
      "30-day satisfaction guarantee on all work",
      "Upfront pricing — no surprise charges",
      "Same-day service available in Arvada"
    ],
    process: [
      {
        step: "Inspection",
        description: "We diagnose the clog location and severity using professional techniques."
      },
      {
        step: "Quote",
        description: "You receive upfront pricing before any work begins. No surprises."
      },
      {
        step: "Cleaning",
        description: "We clear the clog using the most effective method for your situation."
      },
      {
        step: "Verification",
        description: "We test the drain to ensure complete flow restoration."
      }
    ],
    faqs: [
      {
        question: "How much does kitchen drain cleaning cost in Arvada?",
        answer: "Kitchen drain cleaning in Arvada typically costs between $125 and $275, depending on the severity of the clog and cleaning method required. We provide exact pricing before starting any work."
      },
      {
        question: "What causes kitchen drain clogs?",
        answer: "The most common causes are cooking grease, oil, food particles, soap residue, and coffee grounds. These substances stick to pipe walls and accumulate over time, eventually causing slow drainage or complete blockages."
      },
      {
        question: "How can I prevent kitchen drain clogs?",
        answer: "Never pour grease down the drain — let it cool and dispose in the trash. Use drain strainers to catch food particles, run hot water after each use, and schedule annual professional cleaning to prevent buildup."
      },
      {
        question: "Is hydro-jetting safe for my pipes?",
        answer: "Yes, hydro-jetting is safe for most pipe materials when performed by trained professionals. We adjust water pressure based on your pipe type and condition to ensure effective cleaning without damage."
      }
    ],
    relatedServices: [
      { title: "Bathroom Drain Cleaning", slug: "bathroom-drain-cleaning" },
      { title: "Sewer Line Cleaning", slug: "sewer-line-cleaning" },
      { title: "Drain Camera Inspection", slug: "drain-camera-inspection" }
    ],
    priceRange: "125"
  };

  return <ServicePageLayout service={serviceData} />;
};

export default KitchenDrainCleaning;
