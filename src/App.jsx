// React import removed as it's not needed in modern React versions
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import BookingSection from '@/components/BookingSection';
import ServicesSection from '@/components/ServicesSection';
import TechnicianProfile from '@/components/TechnicianProfile';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>AI Assistenza Informatica - Riparazioni e Consulenza IT | Sebastiano Biscuso</title>
        <meta name="description" content="Assistenza tecnica informatica professionale con oltre 13 anni di esperienza. Riparazioni, consulenza IT e supporto tecnico. Prenota la tua consulenza gratuita con Sebastiano Biscuso." />
      </Helmet>
      
      <div className="min-h-screen">
        <HeroSection />
        <StatsSection />
        <BookingSection />
        <ServicesSection />
        <TechnicianProfile />
        <CTASection />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;