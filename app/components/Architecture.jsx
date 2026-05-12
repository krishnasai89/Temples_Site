"use client";

import { useRef, useState } from "react";

const archData = [
  {
    id: "01",
    title: "Gopuram",
    subtitle: "The Gateway & The Feet",
    description:
      "The monumental tower separating the material world from the sacred space. Representing the feet of the cosmic being, it acts as a massive lightning arrestor and cosmic energy converter, grounding you as you step out of worldly chaos.",
  },
  {
    id: "02",
    title: "Dwajasthambam",
    subtitle: "The Cosmic Antenna (Spine)",
    description:
      "This towering flagstaff represents the human spinal cord (Kundalini). Often coated in conductive metals like copper or bronze, it acts as a highly conductive antenna, catching atmospheric cosmic energy and grounding it into the temple grid.",
  },
  {
    id: "03",
    title: "Balipeetam",
    subtitle: "Altar of Surrender (Stomach)",
    description:
      "Positioned just before the main halls, the Balipeetam represents the stomach of the Vastu Purusha. It is the symbolic point where the devotee must 'sacrifice' their internal ego, anger, and negative traits to enter with a pure frequency.",
  },
  {
    id: "04",
    title: "Mandapa",
    subtitle: "The Acoustic Pavilion (Navel)",
    description:
      "The pillared assembly hall corresponds to the navel. The intricate stone pillars act as profound acoustic diffusers, amplifying the resonance of mantras and bells to clear the mind and induce a harmonious, meditative state.",
  },
  {
    id: "05",
    title: "Antarala",
    subtitle: "The Sacred Vestibule (Neck)",
    description:
      "The intermediate throat space bridging the outer hall and the inner sanctum. It controls the gradient of energy, transitioning the devotee from communal, outward celebration into an intense, intimate state of deep concentration.",
  },
  {
    id: "06",
    title: "Garbhagriha & Vimana",
    subtitle: "The Energy Core (Brow)",
    description:
      "The dark, windowless powerhouse capped by a massive pyramidal tower. Built directly on Earth's magnetic meridians with copper plates buried beneath the idol, it concentrates infinite cosmic vibrations into a singular, transformative focal point.",
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
      className="arch-card h-full relative w-full bg-[#111111]/40 backdrop-blur-xl border border-orange-500/20 p-8 md:p-12 rounded-3xl shadow-[inset_0_0_15px_rgba(255,255,255,0.03),0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-4 transform-gpu transition-all duration-500 hover:-translate-y-2 hover:bg-[#1a1a1a]/80 hover:border-orange-500/50 hover:shadow-[inset_0_0_20px_rgba(249,115,22,0.1),0_30px_60px_rgba(0,0,0,0.7)] overflow-hidden group"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 min-w-[300px]"
        style={{
          background: `radial-gradient(300px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(249, 115, 22, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 border-b border-orange-500/20 pb-4 mb-2 transition-colors duration-500 group-hover:border-orange-500/40">
        <span className="text-4xl font-serif text-orange-500/50 transition-colors duration-500 group-hover:text-orange-400">
          {item.id}
        </span>
        <span className="text-xs md:text-sm font-bold tracking-widest text-orange-500 uppercase mt-1">
          {item.subtitle}
        </span>
      </div>
      <h3 className="relative z-10 text-2xl md:text-3xl font-serif text-white">
        {item.title}
      </h3>
      <p className="relative z-10 text-base md:text-lg text-gray-400 leading-relaxed font-light mt-2 transition-colors duration-500 group-hover:text-gray-300 flex-grow">
        {item.description}
      </p>
    </div>
  );
}

export default function Architecture() {
  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Intro Section */}
        <div className="w-full relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
          <div className="flex flex-col gap-6 z-10">
            <span className="text-sm font-bold tracking-widest text-orange-500 uppercase">
              Vastu Purusha Mandala
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-white drop-shadow-md">
              The Cosmic Circuit
            </h2>
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed font-light">
              Hindu temples are not merely buildings; they are massive, highly
              engineered energetic hubs mapping the exact anatomy of the human
              subtle body. From the grounding feet of the{" "}
              <strong>Gopuram</strong> to the awakened brow of the{" "}
              <strong>Garbhagriha</strong>, every inch is designed to actively
              facilitate meditation and mental well-being.
            </p>
          </div>

          <div className="w-full h-[400px] lg:h-[500px] bg-white/5 backdrop-blur-md border border-orange-500/20 rounded-3xl overflow-hidden relative shadow-[inset_0_0_20px_rgba(255,255,255,0.02),0_0_40px_rgba(249,115,22,0.1)] group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 to-black/80 z-0"></div>
            <img
              src="/Architecture.jpg"
              alt="Temple Architecture mapped to Human Chakras (Vastu Purush)"
              className="w-full h-full object-cover relative z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
        </div>

        {/* 3-Column Glass Card Grid */}
        <div className="w-full relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {archData.map((item, index) => (
              <div key={index} className="w-full h-full">
                <GlassCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
