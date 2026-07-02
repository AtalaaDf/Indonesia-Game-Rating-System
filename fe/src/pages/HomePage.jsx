import HeroSection from "@/components/ui/Home/HeroSection";
import PopularGamesSection from "@/components/ui/Home/PopularGamesSection";
import KonsultasiSection from "@/components/ui/Home/KonsultasiSection";
import GambaranPasarSection from "@/components/ui/Home/GambaranPasarSection";
import MelindungiGamerSection from "@/components/ui/Home/MelindungiGamerSection";
import KategoriKontenSection from "@/components/ui/Home/KategoriKontenSection";
import BeritaSection from "@/components/ui/Home/BeritaSection";
import CTASection from "@/components/ui/Home/CTASection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PopularGamesSection />
      <KonsultasiSection />
      <GambaranPasarSection />
      <MelindungiGamerSection />
      <KategoriKontenSection />
      <BeritaSection />
      <CTASection />
    </main>
  );
}