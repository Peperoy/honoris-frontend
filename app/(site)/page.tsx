import BoutiqueSection from "@/components/BoutiqueSection";
import ContactSection from "@/components/ContactSection";
import EspritSection from "@/components/EspritSection";
import HeroSection from "@/components/HeroSection";
import MarquesSection from "@/components/MarquesSection";
import ScrollProgress from "@/components/ScrollProgress";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <HeroSection />
      <EspritSection />
      <BoutiqueSection />
      <MarquesSection />
      <ContactSection />
    </>
  );
}
