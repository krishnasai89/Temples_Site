"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// --- PREMIUM SPOTLIGHT CARD COMPONENT ---
function PillarCard({ pillar, className }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group block relative bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden hover:border-orange-500/40 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(249,115,22,0.1)] ${className}`}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(249, 115, 22, 0.15), transparent 40%)`,
        }}
      />

      <div className="relative z-20 p-8 md:p-10 h-full flex flex-col">
        <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-500 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
          {pillar.icon}
        </div>
        <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-500 transition-all duration-300">
          {pillar.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed font-light flex-grow group-hover:text-gray-300 transition-colors">
          {pillar.desc}
        </p>
      </div>
    </div>
  );
}

const About = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // Hero Animations
      gsap.fromTo(
        ".about-hero",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" },
      );

      // Split Section Animations
      gsap.fromTo(
        ".about-text-block",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-split",
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        ".about-image-block",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-split",
            start: "top 75%",
          },
        },
      );

      // Pillar Cards Animations
      gsap.fromTo(
        ".pillar-card-wrapper",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".pillars-section",
            start: "top 80%",
          },
        },
      );
    },
    { scope: container },
  );

  const pillars = [
    {
      title: "Sacred Architecture",
      desc: "Decoding the cosmic geometry, Vastu Shastra, and unparalleled craftsmanship of ancient Indian temples carved from living rock.",
      icon: "🏛️",
    },
    {
      title: "Classical Movement",
      desc: "Preserving the rigorous discipline and spiritual storytelling of the Natya Shastra through India's major classical dance forms.",
      icon: "🩰",
    },
    {
      title: "Living Traditions",
      desc: "Celebrating the vibrant heartbeat of the people through regional folk dances, martial arts, and theatrical temple rituals.",
      icon: "🥁",
    },
    {
      title: "Divine Narratives",
      desc: "Translating the profound philosophy of the Upanishads, the Epics, and the Puranas into immersive digital experiences.",
      icon: "📜",
    },
  ];

  return (
    <main
      ref={container}
      className="min-h-screen bg-[#050505] pt-32 pb-24 overflow-hidden relative selection:bg-orange-500/30"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* --- 1. HERO SECTION --- */}
        <div className="text-center mb-32 pt-10">
          <span className="about-hero inline-flex items-center gap-3 text-orange-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 border border-orange-500/30 px-5 py-2 rounded-full bg-orange-500/10 backdrop-blur-sm shadow-[0_0_20px_rgba(249,115,22,0.15)]">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            The Digital Museum
          </span>
          <h1 className="about-hero text-6xl md:text-7xl lg:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 mb-8 leading-[1.1] drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            Awakening <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-red-500">
              Our Heritage
            </span>
          </h1>
          <p className="about-hero text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Vishwaguru is more than an archive. It is a cinematic bridge
            connecting the profound wisdom of ancient India to the modern
            digital world.
          </p>
        </div>

        {/* --- 2. THE MISSION SPLIT SECTION --- */}
        <div className="about-split grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Text Side */}
          <div className="about-text-block space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
              Preserving the Past. <br /> Inspiring the Future.
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-orange-500 to-transparent"></div>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              For thousands of years, India has been the spiritual and cultural
              engine of the world—a true{" "}
              <strong className="text-white font-medium">Vishwaguru</strong>{" "}
              (Teacher of the World). Our ancestors encoded advanced science,
              psychology, and philosophy into stone temples, rhythmic dances,
              and timeless poetry.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              However, as the world rapidly modernizes, the deep meaning behind
              these arts is often lost. Our mission is to decode these ancient
              blueprints and present them through a breathtaking, interactive
              digital experience, ensuring that this ancestral knowledge
              continues to inspire generations to come.
            </p>

            <div className="pt-6 border-t border-white/10 mt-8 relative">
              <svg
                className="absolute top-2 left-0 w-8 h-8 text-orange-500/20 transform -scale-x-100 -scale-y-100"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <q className="text-orange-400 font-serif text-2xl italic pl-10 block">
                Culture is the widening of the mind and of the spirit.
              </q>
            </div>
          </div>

          {/* Abstract Sacred Geometry Side */}
          <div className="about-image-block relative h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#111]/40 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5),_inset_0_0_30px_rgba(249,115,22,0.05)] group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0f0a] to-[#2a1205] z-0"></div>

            {/* Ambient inner glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/10 blur-[80px] rounded-full z-10"></div>

            {/* Center Sacred Geometry Animation */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              {/* Outer dashed ring */}
              <div className="w-[350px] h-[350px] border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite] flex items-center justify-center">
                {/* Middle glowing ring */}
                <div className="w-[280px] h-[280px] border border-orange-500/20 rounded-full animate-[spin_30s_linear_infinite_reverse] flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                  {/* Square 1 */}
                  <div className="w-[180px] h-[180px] border border-orange-400/30 rounded-lg animate-[spin_20s_linear_infinite] flex items-center justify-center">
                    {/* Square 2 (Offset) */}
                    <div className="w-[180px] h-[180px] border-2 border-orange-500/40 rounded-lg rotate-45 flex items-center justify-center group-hover:scale-110 transition-transform duration-1000 ease-in-out">
                      {/* Inner Core */}
                      <div className="w-16 h-16 border border-white/30 rounded-full animate-ping flex items-center justify-center bg-orange-500/10 backdrop-blur-md">
                        <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_15px_#f97316]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 z-30">
              <span className="text-orange-500 text-[10px] tracking-[0.3em] uppercase font-bold bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                The Cosmic Blueprint
              </span>
            </div>
          </div>
        </div>

        {/* --- 3. THE FOUR PILLARS --- */}
        <div className="pillars-section mb-32 border-t border-white/5 pt-24 relative">
          {/* Subtle background glow for the pillars section */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-orange-500/5 blur-[100px] pointer-events-none"></div>

          <div className="text-center mb-16 relative z-10">
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
              The Foundation
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
              The Four Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {pillars.map((pillar, index) => (
              <div key={index} className="pillar-card-wrapper h-full">
                <PillarCard pillar={pillar} className="h-full" />
              </div>
            ))}
          </div>
        </div>

        {/* --- 4. PREMIUM CALL TO ACTION --- */}
        <div className="text-center bg-gradient-to-b from-[#1a0f0a] to-[#050505] border border-orange-500/20 rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5),_inset_0_0_40px_rgba(249,115,22,0.1)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 drop-shadow-lg">
              Begin Your Journey
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Explore the galleries, read the sacred texts, and witness the
              movements that have defined civilization.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/Dances"
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-black font-bold uppercase text-[10px] tracking-[0.2em] rounded-full hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                Explore Dances
              </Link>
              <Link
                href="/Stories"
                className="w-full sm:w-auto px-10 py-4 bg-white/[0.02] backdrop-blur-md border border-white/20 text-white font-bold uppercase text-[10px] tracking-[0.2em] rounded-full hover:border-orange-500 hover:text-orange-400 hover:bg-orange-500/5 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                Read Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
