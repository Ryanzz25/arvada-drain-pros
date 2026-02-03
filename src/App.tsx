import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service pages
import ServicesIndex from "./pages/services/ServicesIndex";
import KitchenDrainCleaning from "./pages/services/KitchenDrainCleaning";
import BathroomDrainCleaning from "./pages/services/BathroomDrainCleaning";
import SewerLineCleaning from "./pages/services/SewerLineCleaning";
import CommercialDrainCleaning from "./pages/services/CommercialDrainCleaning";
import EmergencyDrainService from "./pages/services/EmergencyDrainService";
import DrainCameraInspection from "./pages/services/DrainCameraInspection";

// Location pages
import AreasIndex from "./pages/areas/AreasIndex";
import ArvadaLocation from "./pages/areas/ArvadaLocation";
import WheatRidgeLocation from "./pages/areas/WheatRidgeLocation";
import WestminsterLocation from "./pages/areas/WestminsterLocation";
import BroomfieldLocation from "./pages/areas/BroomfieldLocation";
import GoldenLocation from "./pages/areas/GoldenLocation";
import LakewoodLocation from "./pages/areas/LakewoodLocation";
import ThorntonLocation from "./pages/areas/ThorntonLocation";
import NorthglennLocation from "./pages/areas/NorthglennLocation";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Service routes */}
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/kitchen-drain-cleaning" element={<KitchenDrainCleaning />} />
            <Route path="/services/bathroom-drain-cleaning" element={<BathroomDrainCleaning />} />
            <Route path="/services/sewer-line-cleaning" element={<SewerLineCleaning />} />
            <Route path="/services/commercial-drain-cleaning" element={<CommercialDrainCleaning />} />
            <Route path="/services/emergency-drain-service" element={<EmergencyDrainService />} />
            <Route path="/services/drain-camera-inspection" element={<DrainCameraInspection />} />
            
            {/* Location routes */}
            <Route path="/areas" element={<AreasIndex />} />
            <Route path="/areas/arvada" element={<ArvadaLocation />} />
            <Route path="/areas/wheat-ridge" element={<WheatRidgeLocation />} />
            <Route path="/areas/westminster" element={<WestminsterLocation />} />
            <Route path="/areas/broomfield" element={<BroomfieldLocation />} />
            <Route path="/areas/golden" element={<GoldenLocation />} />
            <Route path="/areas/lakewood" element={<LakewoodLocation />} />
            <Route path="/areas/thornton" element={<ThorntonLocation />} />
            <Route path="/areas/northglenn" element={<NorthglennLocation />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
