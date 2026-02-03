import ServicePageLayout from "@/components/ServicePageLayout";
import { Wrench } from "lucide-react";

const DrainCameraInspection = () => {
  const serviceData = {
    slug: "drain-camera-inspection",
    title: "Drain Camera Inspection",
    metaTitle: "Drain Camera Inspection Arvada CO | HD Video Diagnosis | ArvadaDrainPro",
    metaDescription: "HD drain camera inspection in Arvada. See inside your pipes to diagnose problems accurately. Find hidden clogs, cracks, root intrusion. Call (720) 555-1234.",
    heroHeadline: "DRAIN CAMERA INSPECTION IN ARVADA",
    heroSubheadline: "See exactly what's happening inside your pipes. Our HD camera inspection reveals hidden problems so we can fix them right the first time.",
    icon: Wrench,
    introText: "Stop guessing what's wrong with your drains. Our state-of-the-art drain camera inspection service uses high-definition waterproof cameras to explore the inside of your pipes in real-time. We can identify the exact location and cause of blockages, detect cracks and damage, spot tree root intrusion before it becomes severe, and assess the overall condition of your drain system. You'll see everything we see on a monitor, so you can make informed decisions about repairs. Camera inspection is invaluable for diagnosing recurring problems, inspecting pipes before home purchases, and verifying the success of cleaning services.",
    benefits: [
      "HD video shows exactly what's in your pipes",
      "Pinpoint problem locations precisely",
      "Detect issues before they become emergencies",
      "Essential for home buying inspections",
      "Document pipe condition for insurance claims",
      "Save money by avoiding unnecessary repairs"
    ],
    process: [
      {
        step: "Access Point",
        description: "We locate the best entry point for the camera."
      },
      {
        step: "Live Inspection",
        description: "Watch in real-time as we navigate through your pipes."
      },
      {
        step: "Documentation",
        description: "We record findings and provide you with a detailed report."
      },
      {
        step: "Recommendations",
        description: "We explain what we found and recommend next steps."
      }
    ],
    faqs: [
      {
        question: "When should I get a drain camera inspection?",
        answer: "We recommend camera inspection for: recurring drain problems, before purchasing a home, after clearing a major blockage (to verify success), when experiencing multiple slow drains, if you smell sewage but can't find the source, or as part of preventive maintenance for older homes."
      },
      {
        question: "How far can the camera see into my pipes?",
        answer: "Our professional camera systems can inspect up to 200 feet into your drain and sewer lines. We can examine everything from small sink drains to your main sewer line all the way to the city connection."
      },
      {
        question: "Will I get a copy of the inspection video?",
        answer: "Yes, we provide digital copies of the inspection video and a written report of our findings. This documentation is valuable for insurance claims, warranty work, or if you're selling your home."
      },
      {
        question: "Can the camera see through standing water?",
        answer: "Yes, our cameras are fully waterproof and include powerful LED lighting. We can see clearly through standing water, which is important since many drain problems occur in low-lying sections where water accumulates."
      }
    ],
    relatedServices: [
      { title: "Sewer Line Cleaning", slug: "sewer-line-cleaning" },
      { title: "Emergency Drain Service", slug: "emergency-drain-service" },
      { title: "Kitchen Drain Cleaning", slug: "kitchen-drain-cleaning" }
    ],
    priceRange: "150"
  };

  return <ServicePageLayout service={serviceData} />;
};

export default DrainCameraInspection;
