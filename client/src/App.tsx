import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Consultation from "@/pages/consultation";
import NotFound from "@/pages/not-found";
import FitnessPage from './pages/fitness'; // 기존 피트니스 페이지
import Kindergarten from './pages/Kindergarten';
import CafeDetail from "./pages/cafe"; // cafe.tsx import 추가
import GroomingDetail from "./pages/grooming"; // grooming.tsx import 추가
import HotelDetail from "./pages/hotel"; // hotel.tsx import 추가
import DaycareDetail from "./pages/daycare"; // daycare.tsx import 추가


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
      <Route path="/daycare" component={DaycareDetail} /> {/* 이 부분이 정확한지 확인 */}
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
