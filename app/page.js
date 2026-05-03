import Architecture from "./components/Architecture.jsx";
import HeroSection from "./components/HeroSection/Hero.jsx";
import TempleShowcase from "./components/TempleShowcase.jsx";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Architecture />
      <TempleShowcase />
    </main>
  );
}
