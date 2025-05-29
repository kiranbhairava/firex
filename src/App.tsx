import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Career from "./pages/Career";
import BuyOnline from "./pages/BuyOnline";
import Clients from "./pages/Clients";
import NotFound from "./pages/NotFound";
import Infrastructure from "./pages/Infrastructure";
import BecomeDistributor from "./pages/BecomeDistributor";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import RefillingService from "./pages/RefillingService";
import RefillingAgentRegistration from "./pages/RefillingAgentRegistration";
import HomeAndCar from "./pages/HomeAndCar";
import Hospital from "./pages/Hospital";
import School from "./pages/School";
import Offices from "./pages/Offices";
import DataCenters from "./pages/DataCenters";
import ResidentialSocieties from "./pages/ResidentialSocieties";
import HotelsRestaurants from "./pages/HotelsRestaurants";
import ElectricalRooms from "./pages/ElectricalRooms";
import Factories from "./pages/Factories";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/buy-online" element={<BuyOnline />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/become-distributor" element={<BecomeDistributor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/refilling-service" element={<RefillingService />} />
          <Route path="/refilling-agent-registration" element={<RefillingAgentRegistration />} />
          <Route path="/industries/home-car" element={<HomeAndCar />} />
          <Route path="/industries/hospital" element={<Hospital />} />
          <Route path="/school" element={<School />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/data-centers" element={<DataCenters />} />
          <Route path="/residential-societies" element={<ResidentialSocieties />} />
          <Route path="/hotels-restaurants" element={<HotelsRestaurants />} />
          <Route path="/electrical-rooms" element={<ElectricalRooms />} />
          <Route path="/factories" element={<Factories />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
