"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import Preloader from "../components/Preloader"; // Uncomment if you didn't put it in RootLayout

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // Hero Animations
      gsap.from(".about-hero", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Split Section Animations
      gsap.from(".about-text-block", {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-split",
          start: "top 70%",
        },
      });

      gsap.from(".about-image-block", {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-split",
          start: "top 70%",
        },
      });

      // Pillar Cards Animations
      gsap.from(".pillar-card", {
        y: 60,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".pillars-section",
          start: "top 80%",
        },
      });
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
      desc: "Preserving the rigorous discipline and spiritual storytelling of the Natya Shastra through India's 8 major classical dance forms.",
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
      className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 overflow-hidden relative"
    >
      {/* <Preloader /> */}

      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* --- 1. HERO SECTION --- */}
        <div className="text-center mb-32 pt-10">
          <span className="about-hero inline-block text-orange-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 border border-orange-500/30 px-4 py-2 rounded-full bg-orange-500/10">
            The Digital Museum
          </span>
          <h1 className="about-hero text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
            Awakening <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-red-500">
              Our Heritage
            </span>
          </h1>
          <p className="about-hero text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Vishwaguru is more than an archive. It is a cinematic bridge
            connecting the profound wisdom of ancient India to the modern
            digital world.
          </p>
        </div>

        {/* --- 2. THE MISSION SPLIT SECTION --- */}
        <div className="about-split grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Text Side */}
          <div className="about-text-block space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Preserving the Past. <br /> Inspiring the Future.
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-transparent"></div>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              For thousands of years, India has been the spiritual and cultural
              engine of the world—a true <strong>Vishwaguru</strong> (Teacher of
              the World). Our ancestors encoded advanced science, psychology,
              and philosophy into stone temples, rhythmic dances, and timeless
              poetry.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              However, as the world rapidly modernizes, the deep meaning behind
              these arts is often lost. Our mission is to decode these ancient
              blueprints and present them through a breathtaking, interactive
              digital experience, ensuring that this ancestral knowledge
              continues to inspire generations to come.
            </p>

            <div className="pt-4 border-t border-white/10 mt-8">
              <q className="text-orange-400 font-serif text-xl italic">
                Culture is the widening of the mind and of the spirit.
              </q>
            </div>
          </div>

          {/* Image/Abstract Graphic Side */}
          <div className="about-image-block relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_50px_rgba(249,115,22,0.1)] group">
            {/* If you have a real image, use the Next Image component here. Otherwise, this creates a gorgeous abstract placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0f0a] to-[#2a1205] z-0"></div>
            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-10 mix-blend-overlay"></div>

            {/* Center Mandala/Abstract Geometry */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-64 h-64 border-[0.5px] border-orange-500/30 rounded-full animate-[spin_60s_linear_infinite] flex items-center justify-center">
                <div className="w-48 h-48 border border-orange-400/20 rounded-full rotate-45 flex items-center justify-center">
                  <div className="w-32 h-32 border-2 border-orange-500/50 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-1000 ease-in-out"></div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 z-30">
              <span className="text-white/50 text-xs tracking-widest uppercase font-bold">
                The Cosmic Blueprint
              </span>
            </div>
          </div>
        </div>

        {/* --- 3. THE FOUR PILLARS --- */}
        <div className="pillars-section mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              The Four Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="pillar-card bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-orange-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- 4. CALL TO ACTION --- */}
        <div className="text-center bg-gradient-to-b from-orange-900/20 to-black border border-orange-500/20 rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-orange-500/20 blur-[100px] rounded-full pointer-events-none"></div>

          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 relative z-10">
            Begin Your Journey
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Explore the galleries, read the sacred texts, and witness the
            movements that have defined civilization.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              href="/Dances"
              className="px-8 py-4 bg-orange-500 text-black font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
            >
              Explore Dances
            </Link>
            <Link
              href="/Stories"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase text-xs tracking-widest rounded-full hover:border-orange-500 hover:text-orange-400 transition-all duration-300"
            >
              Read Stories
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
