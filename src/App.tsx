import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Lineup from "@/components/Lineup";
import BoothBeat from "@/components/BoothBeat";
import DanceLessons from "@/components/DanceLessons";
import Menu from "@/components/Menu";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground font-body antialiased">
          <Navbar />
          <Hero />
          <Lineup />
          <DanceLessons />
          <BoothBeat />
          <Menu />
          <FAQ />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;