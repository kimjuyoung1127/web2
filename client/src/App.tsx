import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Consultation from "@/pages/consultation";
import NotFound from "@/pages/not-found";
import FitnessPage from './pages/fitness'; 
import Kindergarten from './pages/Kindergarten';
import CafeDetail from "./pages/cafe"; 
import GroomingDetail from "./pages/grooming"; 
import HotelDetail from "./pages/hotel"; 
import DaycareDetail from "./pages/daycare"; 
import CustomTraining from "./pages/customtraining";
import EventDetail from "./pages/EventRental";
import EventRental from "./pages/EventRental";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/fitness" component={FitnessPage} />
      <Route path="/Kindergarten" component={Kindergarten} /> 
      <Route path="/consultation" component={Consultation} />
      <Route path="/cafe" component={CafeDetail} /> 
      <Route path="/grooming" component={GroomingDetail} />
      <Route path="/hotel" component={HotelDetail} />
      <Route path="/daycare" component={DaycareDetail} />
      <Route path="/customtraining" component={CustomTraining} />
      <Route path="/EventRental" component={EventRental} />

      {/* Location info modal */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
