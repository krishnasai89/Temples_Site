import Architecture from "./components/Architecture.jsx";
import HeroSection from "./components/HeroSection/Hero.jsx";
import ModernEcosystem from "./components/ModernEcosystem.jsx";
import TemplePurpose from "./components/TemplePurpose.jsx";
import TempleShowcase from "./components/TempleShowcase.jsx";
import TempleWellness from "./components/TempleWellness.jsx";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Architecture />
      <TemplePurpose />
      <ModernEcosystem />
      <TempleWellness />
      <TempleShowcase />
    </main>
  );
}
