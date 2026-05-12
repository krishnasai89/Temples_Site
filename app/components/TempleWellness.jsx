"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const wellnessPillars = [
  {
    title: "Acoustic Healing",
    subtitle: "Bells & Mantras",
    desc: "Temple bells are precisely crafted from a 5-metal alloy to produce a 7-second echo that synchronizes the left and right brain. Mantras act as rhythmic acoustic therapy, lowering heart rates and calming the nervous system.",
    icon: "🔔",
  },
  {
    title: "Grounding & Earthing",
    subtitle: "Magnetic Flow",
    desc: "Built on high-magnetic nodes, walking barefoot on the uneven, raw stone floors provides deep acupressure to the feet while allowing the body to absorb positive earthly energy, increasing blood circulation.",
    icon: "👣",
  },
  {
    title: "Neural Activation",
    subtitle: "The Ajna Chakra",
    desc: "Applying the Bottu (Kumkum or Sandalwood) applies gentle pressure to the forehead's major nerve center. This retains body heat, prevents energy loss, and instantly cools the brain.",
    icon: "🧘🏽‍♂️",
  },
  {
    title: "Medicinal Nutrition",
    subtitle: "Teertham & Prasadam",
    desc: "Teertham is stored in bacteria-killing copper vessels and infused with Tulsi and camphor as a daily immune-boosting tonic. Prasadam ensures no devotee ever leaves hungry, providing vital energy.",
    icon: "🌿",
  },
  {
    title: "Psychological Sanctuary",
    subtitle: "The Power of Hope",
    desc: "Temples offer absolute psychological surrender. By handing over unbearable burdens to the Divine, devotees experience massive drops in cortisol (stress hormones), replacing anxiety with profound hope and resilience.",
    icon: "✨",
  },
  {
    title: "The Architecture of Awe",
    subtitle: "Ego Reduction",
    desc: "Standing before impossibly grand, ancient stone marvels triggers a neurological state of 'Awe.' This physically shrinks the human ego, making personal anxieties feel smaller and connecting the mind to the universe.",
    icon: "👁️",
  },
];

const TempleWellness = () => {
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
        ".wellness-header",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      );

      // Cards Animation (Fixed with clearProps)
      tl.fromTo(
        ".wellness-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all", // Allows Tailwind hover effects to work
        },
        "-=0.4",
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative border-t border-white/5 overflow-hidden"
    >
      {/* Subtle Emerald Glow for the Healing/Wellness Section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Header */}
      <div className="relative z-10 mb-16 text-center max-w-3xl mx-auto">
        <span className="wellness-header inline-block text-emerald-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          Sacred Science
        </span>
        <h2 className="wellness-header text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
          The Ultimate <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
            Wellness Ecosystem
          </span>
        </h2>
        <p className="wellness-header text-gray-400 text-lg font-light leading-relaxed">
          Temples were not just built for prayer. They were highly advanced,
          free public wellness centers designed to reset a human beings mind,
          body, and soul on a daily basis using the profound sciences of sound,
          biology, and psychology.
        </p>
      </div>

      {/* 6-Column Grid (3x2) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wellnessPillars.map((item, index) => (
          <div
            key={index}
            className="wellness-card p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-emerald-950/20 hover:border-emerald-500/30 transition-colors duration-500 group flex flex-col h-full hover:shadow-[0_10px_30px_rgba(16,185,129,0.05)]"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {item.icon}
              </div>
              <span className="text-white/10 font-serif text-4xl font-black group-hover:text-emerald-500/10 transition-colors duration-500">
                0{index + 1}
              </span>
            </div>

            <span className="text-emerald-500/80 text-[10px] font-bold uppercase tracking-widest mb-2 block">
              {item.subtitle}
            </span>
            <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-emerald-400 transition-colors">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed font-light flex-grow">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TempleWellness;
