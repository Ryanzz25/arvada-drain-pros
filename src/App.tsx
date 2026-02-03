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
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
