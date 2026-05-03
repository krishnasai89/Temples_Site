"use client";

import { useRef, useState } from "react";
const archData = [
  {
    id: "01",
    title: "The Entrance",
    subtitle: "The Feet (Gross Physical Body)",
    description:
      "According to the Vastu Purush Mandala, a temple is not merely a building, but a living, breathing entity. The main entrance represents the feet of the cosmic being lying horizontally, grounding you in the physical realm (Sthool Sharira) as you begin your journey.",
  },
  {
    id: "02",
    title: "Dhwajasthamba",
    subtitle: "The Flag Post (Base Chakras)",
    description:
      "The towering flag post represents the lower subtle body. It acts as an atmospheric receiver, grounding cosmic energy into the earth and marking the definitive transition from the chaotic outside world into the sacred grid.",
  },
  {
    id: "03",
    title: "Ranga Mandapa",
    subtitle: "The Navel (Manipura Chakra)",
    description:
      "The open, pillared pavilion where the community gathers corresponds to the belly or navel region of the Vastu Purush. It is a space of outward expression, classical dance, and the digestion of worldly thoughts before moving inward.",
  },
  {
    id: "04",
    title: "Antarala",
    subtitle: "The Heart (Anahata Chakra)",
    description:
      "The quiet vestibule connecting the outer halls to the inner sanctum represents the heart. It is the transitional space where physical senses dissolve into deep devotion, and the subtle anatomy (Sukshma Sharira) begins to resonate with divine love.",
  },
  {
    id: "05",
    title: "Garbhagriha",
    subtitle: "The Brow (Agya Chakra)",
    description:
      "The sanctum sanctorum represents the head. The exact placement of the deity aligns precisely with the space between the brows—the Agya Chakra (Third Eye). Here, an enormous amount of energy is transferred, allowing the human body to perfectly tune into absolute cosmic consciousness.",
  },
];

function GlassCard({ item }) {
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Update CSS variables directly for 60fps performance without re-renders
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="arch-card relative w-full bg-[#111111]/40 backdrop-blur-xl border border-temple-gold/20 p-8 md:p-12 rounded-3xl shadow-[inset_0_0_15px_rgba(255,255,255,0.03),0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-4 transform-gpu transition-all duration-500 hover:-translate-y-2 hover:bg-temple-charcoal/30 hover:border-temple-gold/50 hover:shadow-[inset_0_0_20px_rgba(212,175,55,0.1),0_30px_60px_rgba(0,0,0,0.7)] overflow-hidden group"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 min-w-[300px]"
        style={{
          background: `radial-gradient(300px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(212, 175, 55, 0.2), transparent 40%)`,
        }}
      />
      <div className="relative z-10 flex items-center gap-4 border-b border-temple-gold/20 pb-4 mb-2 transition-colors duration-500 group-hover:border-temple-gold/40">
        <span className="text-3xl font-serif text-temple-gold/60 transition-colors duration-500 group-hover:text-temple-gold">
          {item.id}
        </span>
        <span className="text-sm font-bold tracking-widest text-temple-gold uppercase mt-1">
          {item.subtitle}
        </span>
      </div>
      <h3 className="relative z-10 text-3xl md:text-4xl font-serif text-white">
        {item.title}
      </h3>
      <p className="relative z-10 text-lg md:text-xl text-temple-stone/80 leading-relaxed font-light mt-2 transition-colors duration-500 group-hover:text-temple-stone">
        {item.description}
      </p>
    </div>
  );
}

export default function Architecture() {
  return (
    <section className="relative bg-[#0a0a0a] text-temple-stone">
      <div>
        <div className="w-full relative p-20 grid grid-cols-1 lg:grid-cols-2">
          <div className="top-24 md:top-32 flex flex-col gap-6 z-10">
            <span className="text-sm font-bold tracking-widest text-temple-gold uppercase">
              Agama Shastras
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-temple-gold to-white drop-shadow-md">
              Vastu Purush Mandala
            </h2>
            <p className="text-lg text-temple-stone/70 max-w-xl leading-relaxed">
              Ancient Indic temples were completely aligned with human
              physiology. By understanding the <strong>Sukshma Sharira</strong>{" "}
              (subtle body), architects designed these structures as massive
              energy centers. When you walk into a temple, you are walking into
              a living, breathing entity.
            </p>
          </div>
          <div className="w-full h-full lg:h-[50vh] mt-14 md:mt-4 bg-white/5 backdrop-blur-md border border-temple-gold/20 rounded-xl overflow-hidden relative shadow-[inset_0_0_20px_rgba(255,255,255,0.02),0_0_30px_rgba(212,175,55,0.1)]">
            <img
              src="/Architecture.jpg"
              alt="Temple Architecture mapped to Human Chakras (Vastu Purush)"
              className="w-full h-full object-contain p-4 mix-blend-screen"
            />
          </div>
        </div>
        <div className="w-full relative pb-[30vh]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 p-20">
            {archData.map((item, index) => (
              <div key={index} className="w-full lg:w-[calc(33.333%-2.5rem)">
                <GlassCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
