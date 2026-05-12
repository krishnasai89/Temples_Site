"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const purposes = [
  {
    id: "01",
    title: "Cosmic Energy Centers",
    subtitle: "Spiritual Alignment",
    desc: "Built strictly according to Vastu Shastra and Agamic texts, temples were constructed on high magnetic and positive energy nodes. The Garbhagriha (sanctum) acts as a powerful battery, radiating sound and geometry designed to physically elevate human consciousness.",
    icon: "🌌",
  },
  {
    id: "02",
    title: "Sanctuaries of Art",
    subtitle: "The Stone Canvases",
    desc: "Long before digital archives, temples were the ultimate museums. Every pillar and ceiling was carved to preserve epics for eternity. They housed dedicated 'Natya Mandapas' (dance halls) to sustain classical musicians and Devadasi dancers.",
    icon: "🗿",
  },
  {
    id: "03",
    title: "Centers of Knowledge",
    subtitle: "Ancient Universities",
    desc: "Temples functioned as 'Ghatikas' and 'Mathas' (educational institutions). They were free universities where vast libraries of palm-leaf manuscripts were kept, and astronomy, mathematics, medicine, and philosophy were taught to the masses.",
    icon: "📜",
  },
  {
    id: "04",
    title: "Economic & Social Hubs",
    subtitle: "The Heart of the City",
    desc: "Temples were the largest economic drivers of their time. They employed thousands of architects, farmers, weavers, and jewelers. In times of drought, war, or famine, the massive temple granaries and treasuries sustained the entire region.",
    icon: "⚖️",
  },
];

// --- PREMIUM SPOTLIGHT CARD COMPONENT ---
function PurposeCard({ item }) {
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Use CSS variables for buttery smooth 60fps rendering
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="purpose-card relative p-8 md:p-10 rounded-[2rem] bg-[#111]/40 backdrop-blur-xl border border-white/5 hover:border-orange-500/40 transition-all duration-700 group overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] hover:-translate-y-1 h-full flex flex-col"
    >
      {/* 60fps Spotlight Hover Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(500px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(249, 115, 22, 0.12), transparent 40%)`,
        }}
      />

      {/* Large faded number in background */}
      <div className="absolute -bottom-6 -right-2 text-9xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-t from-white/[0.05] to-transparent group-hover:from-orange-500/10 transition-all duration-700 pointer-events-none select-none z-0 transform group-hover:scale-110">
        {item.id}
      </div>

      <div className="flex items-center gap-5 mb-6 relative z-20">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-500/10 border border-orange-500/20 text-2xl group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-500 shadow-[0_0_15px_rgba(249,115,22,0.1)] flex-shrink-0">
          {item.icon}
        </div>
        <div>
          <span className="text-orange-500/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-1 block group-hover:text-orange-400 transition-colors">
            {item.subtitle}
          </span>
          <h3 className="text-2xl font-serif text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-500 transition-all duration-300">
            {item.title}
          </h3>
        </div>
      </div>

      <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light relative z-20 flex-grow group-hover:text-gray-300 transition-colors">
        {item.desc}
      </p>
    </div>
  );
}

// --- MAIN COMPONENT ---
const TemplePurpose = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });

      // Header Animation
      tl.fromTo(
        ".purpose-header",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
      );

      // Grid Cards Animation
      tl.fromTo(
        ".purpose-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "all", // Hands control back to Tailwind hover effects
        },
        "-=0.6",
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative border-t border-white/5 overflow-hidden bg-[#050505]"
    >
      {/* Deep Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-16 xl:gap-24 items-center">
        {/* Left Side: Title & Context */}
        <div className="lg:w-1/3 w-full">
          <span className="purpose-header inline-flex items-center gap-3 text-orange-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 border border-orange-500/30 px-5 py-2 rounded-full bg-orange-500/10 backdrop-blur-sm shadow-[0_0_20px_rgba(249,115,22,0.15)]">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            More Than Worship
          </span>

          <h2 className="purpose-header text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-[1.1] drop-shadow-lg">
            The Living <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-red-500">
              Ecosystems
            </span>
          </h2>

          <p className="purpose-header text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10 border-l-2 border-orange-500/50 pl-6">
            To view an ancient Indian temple merely as a place of prayer is to
            miss its genius. They were the civic, economic, and educational
            heartbeats of civilization, designed to nurture the mind, body, and
            soul of society.
          </p>

          <div className="purpose-header hidden lg:block w-32 h-[1px] bg-gradient-to-r from-orange-500 to-transparent"></div>
        </div>

        {/* Right Side: Bento Grid */}
        <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
          {purposes.map((item, index) => (
            <div key={index} className="h-full">
              <PurposeCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplePurpose;
