import ServicePageLayout from "@/components/ServicePageLayout";
import { AlertTriangle } from "lucide-react";

const EmergencyDrainService = () => {
  const serviceData = {
    slug: "emergency-drain-service",
    title: "Emergency Drain Service",
    metaTitle: "24/7 Emergency Drain Cleaning Arvada CO | 60-Min Response | ArvadaDrainPro",
    metaDescription: "24/7 emergency drain cleaning in Arvada. Sewage backup, flooding, complete blockages. 60-minute response guaranteed. Call now: (720) 555-1234.",
    heroHeadline: "24/7 EMERGENCY DRAIN SERVICE IN ARVADA",
    heroSubheadline: "Sewage backup? Flooding? Complete blockage? Our emergency team responds in 60 minutes or less — day or night, weekends and holidays.",
    icon: AlertTriangle,
    introText: "Drain emergencies don't wait for convenient times. When you wake up to sewage backing up into your home, or your business floor drain starts flooding during peak hours, you need help NOW. That's why ArvadaDrainPro maintains a 24/7 emergency response team ready to dispatch throughout Arvada and surrounding areas. We guarantee 60-minute response times, carry full equipment on every truck, and never charge overtime rates. When disaster strikes, we're the call that gets your life back to normal.",
    benefits: [
      "60-minute response time guaranteed",
      "Available 24/7/365 — even holidays",
      "No overtime or after-hours surcharges",
      "Fully-equipped trucks for immediate repairs",
      "Direct phone line to dispatch — no answering services",
      "Water damage prevention expertise"
    ],
    process: [
      {
        step: "Immediate Call",
        description: "Call our emergency line and speak directly to our dispatcher."
      },
      {
        step: "Fast Dispatch",
        description: "We dispatch the nearest available technician immediately."
      },
      {
        step: "Rapid Response",
        description: "Technician arrives within 60 minutes with full equipment."
      },
      {
        step: "Emergency Resolution",
        description: "We stop the emergency and restore your drain system."
      }
    ],
    faqs: [
      {
        question: "What qualifies as a drain emergency?",
        answer: "Drain emergencies include: sewage backing up into your home, water flooding from drain lines, complete blockages in your only bathroom, and any situation causing water damage or health hazards. If you're unsure, call us — we'll help you determine the urgency."
      },
      {
        question: "Do you charge extra for nights and weekends?",
        answer: "No. Unlike many plumbers, we never charge overtime, after-hours, or holiday surcharges for emergency service. The price we quote is the price you pay, regardless of when you call."
      },
      {
        question: "How fast can you really get here?",
        answer: "We guarantee 60-minute response throughout Arvada and immediately surrounding areas. Our technicians are strategically positioned throughout the region, and we track real-time availability to dispatch the closest truck to your location."
      },
      {
        question: "What should I do while waiting for you?",
        answer: "Turn off water to the affected fixture if possible, don't use any drains that connect to the backup, keep people and pets away from sewage, and open windows for ventilation if there are odors. We'll guide you through any other steps when you call."
      }
    ],
    relatedServices: [
      { title: "Sewer Line Cleaning", slug: "sewer-line-cleaning" },
      { title: "Drain Camera Inspection", slug: "drain-camera-inspection" },
      { title: "Kitchen Drain Cleaning", slug: "kitchen-drain-cleaning" }
    ],
    priceRange: "175"
  };

  return <ServicePageLayout service={serviceData} />;
};

export default EmergencyDrainService;
