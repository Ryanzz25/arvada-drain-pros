import ServicePageLayout from "@/components/ServicePageLayout";
import { Building2 } from "lucide-react";

const CommercialDrainCleaning = () => {
  const serviceData = {
    slug: "commercial-drain-cleaning",
    title: "Commercial Drain Service",
    metaTitle: "Commercial Drain Cleaning Arvada CO | Restaurants & Businesses | ArvadaDrainPro",
    metaDescription: "Commercial drain cleaning for Arvada businesses. Restaurants, offices, retail. Minimize downtime with fast, professional service. Call (720) 555-1234.",
    heroHeadline: "COMMERCIAL DRAIN CLEANING IN ARVADA",
    heroSubheadline: "Keep your business running smoothly. We provide fast, professional drain service for restaurants, offices, retail, and industrial facilities.",
    icon: Building2,
    introText: "Commercial drain problems don't just cause inconvenience — they can shut down your business, create health code violations, and damage your reputation. That's why Arvada businesses trust ArvadaDrainPro for their drain cleaning needs. We understand that every hour of downtime costs you money, so we offer flexible scheduling including after-hours and weekend service to minimize disruption. From restaurant grease traps to office building main lines, we have the commercial-grade equipment and expertise to handle any drain challenge. We also offer maintenance contracts to prevent problems before they occur.",
    benefits: [
      "Flexible scheduling including nights and weekends",
      "Commercial-grade equipment for large-scale jobs",
      "Grease trap cleaning and maintenance",
      "Health code compliance expertise",
      "Priority response for contract customers",
      "Detailed service reports for your records"
    ],
    process: [
      {
        step: "Site Assessment",
        description: "We evaluate your facility's drain system and identify problem areas."
      },
      {
        step: "Custom Plan",
        description: "We develop a cleaning plan that minimizes business disruption."
      },
      {
        step: "Professional Service",
        description: "Our team completes the work efficiently and professionally."
      },
      {
        step: "Documentation",
        description: "We provide detailed reports for your records and compliance needs."
      }
    ],
    faqs: [
      {
        question: "Do you offer after-hours service for businesses?",
        answer: "Yes, we understand that drain cleaning during business hours can disrupt your operations. We offer evening and weekend appointments at no additional charge for commercial customers to minimize impact on your business."
      },
      {
        question: "How often should restaurant grease traps be cleaned?",
        answer: "Most health codes require grease trap cleaning every 30-90 days, depending on your trap size and volume. We can set up a regular maintenance schedule to keep you in compliance and prevent grease-related backups."
      },
      {
        question: "Do you offer maintenance contracts?",
        answer: "Yes, we offer monthly, quarterly, and annual maintenance contracts tailored to your business needs. Contract customers receive priority scheduling, discounted rates, and preventive maintenance that reduces emergency calls."
      },
      {
        question: "Can you service large commercial buildings?",
        answer: "Absolutely. We have the equipment and expertise to service everything from small retail shops to large office buildings and industrial facilities. We've worked with property managers throughout Arvada and understand the unique needs of commercial plumbing systems."
      }
    ],
    relatedServices: [
      { title: "Sewer Line Cleaning", slug: "sewer-line-cleaning" },
      { title: "Emergency Drain Service", slug: "emergency-drain-service" },
      { title: "Drain Camera Inspection", slug: "drain-camera-inspection" }
    ],
    priceRange: "200"
  };

  return <ServicePageLayout service={serviceData} />;
};

export default CommercialDrainCleaning;
