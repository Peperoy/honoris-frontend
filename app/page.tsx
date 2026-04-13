import BoutiqueSection from "@/components/BoutiqueSection";
import ContactSection from "@/components/ContactSection";
import EspritSection from "@/components/EspritSection";
import HeroSection from "@/components/HeroSection";
import MarquesSection from "@/components/MarquesSection";
import ScrollProgress from "@/components/ScrollProgress";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main className="min-w-0 w-full max-w-full flex-1">
        <HeroSection />
        <EspritSection />
        <BoutiqueSection />
        <MarquesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
