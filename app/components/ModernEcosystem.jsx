"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const techPillars = [
  {
    title: "Global Digital Networks",
    subtitle: "Apps & Databases",
    desc: "Today's mega-temples are powered by enterprise software. Massive databases handle millions of devotees, while dedicated apps and websites manage live darshan streaming, online bookings, and global digital connectivity.",
    icon: "🌐",
  },
  {
    title: "Logistics & Annadanam",
    subtitle: "Supply Chain Software",
    desc: "Feeding hundreds of thousands of people daily (Annadanam) requires advanced supply-chain and inventory management software, perfectly tracking metric tons of ingredients to ensure zero waste and infinite service.",
    icon: "🍲",
  },
  {
    title: "The Economic Engine",
    subtitle: "City-Wide Impact",
    desc: "Digital payment gateways, e-hundi systems, and app-based tourism sustain the entire surrounding economy—funding local vendors, hotels, transport systems, and contributing massive revenue to state infrastructure.",
    icon: "📈",
  },
  {
    title: "Pioneering Innovation",
    subtitle: "AI & Security",
    desc: "Temples are testing grounds for the newest technologies. They utilize AI-driven crowd control algorithms, advanced biometric security networks, and massive solar tech grids to maintain order and sustainability.",
    icon: "🚀",
  },
];

// --- PREMIUM SPOTLIGHT CARD COMPONENT ---
function TechCard({ item }) {
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
      className="modern-card relative p-8 md:p-10 rounded-[2rem] bg-[#0a0e14]/60 backdrop-blur-xl border border-blue-900/20 hover:border-blue-500/40 transition-all duration-700 group overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] hover:-translate-y-1 h-full flex flex-col"
    >
      {/* 60fps Spotlight Hover Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(500px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(56, 189, 248, 0.12), transparent 40%)`,
        }}
      />

      {/* Top Border Glow Reveal */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-2/3 transition-all duration-700 opacity-0 group-hover:opacity-100 z-20"></div>

      <div className="w-14 h-14 mb-8 flex items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 text-2xl group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 shadow-[0_0_15px_rgba(59,130,246,0.1)] flex-shrink-0 relative z-20">
        {item.icon}
      </div>

      <div className="relative z-20 flex-grow flex flex-col">
        <span className="text-cyan-500/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block group-hover:text-cyan-300 transition-colors">
          {item.subtitle}
        </span>
        <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-300">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light flex-grow group-hover:text-gray-300 transition-colors">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

// --- MAIN COMPONENT ---
const ModernEcosystem = () => {
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
        ".modern-header",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
      );

      // Cards Animation
      tl.fromTo(
        ".modern-card",
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
      {/* Deep Ambient Background Tech Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* Header */}
      <div className="relative z-10 mb-20 text-center max-w-3xl mx-auto">
        <span className="modern-header inline-flex items-center gap-3 text-cyan-400 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 border border-cyan-500/30 px-5 py-2 rounded-full bg-cyan-500/10 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          The Modern Evolution
        </span>

        <h2 className="modern-header text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-[1.1] drop-shadow-lg">
          Powered by <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
            Modern Software
          </span>
        </h2>

        <p className="modern-header text-gray-400 text-lg md:text-xl font-light leading-relaxed">
          The incredible scale of ancient temples has not diminished. Today,
          these ancient stones are supported by cutting-edge digital
          infrastructure, proving that technological innovation and spiritual
          heritage can coexist perfectly.
        </p>
      </div>

      {/* 4-Column Tech Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
        {techPillars.map((item, index) => (
          <div key={index} className="h-full">
            <TechCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModernEcosystem;
