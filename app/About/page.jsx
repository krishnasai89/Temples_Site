"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Select all elements with the class 'about-animate'
      gsap.from(".about-animate", {
        y: 50,
        opacity: 0,
        scale: 0.95, // Adds a subtle cinematic zoom-in effect
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative py-24 bg-[#0a0a0a] px-6 md:px-12 overflow-hidden min-h-screen flex items-center"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side: The Image */}
        <div className="about-animate relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.15)] border border-white/10 group">
          {/* Subtle overlay that fades on hover */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>

          <Image
            src="/Architecture.jpg" // Change this to whatever image you have in your public folder!
            alt="Ancient Temple Architecture"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
          />

          {/* Decorative Corner Accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-orange-500/50 z-20"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-orange-500/50 z-20"></div>
        </div>

        {/* Right Side: The Text Content */}
        <div className="flex flex-col justify-center">
          <span className="about-animate text-orange-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">
            The Vishwaguru Mission
          </span>

          <h2 className="about-animate text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
            Preserving the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Divine Blueprint
            </span>
          </h2>

          <p className="about-animate text-lg text-gray-300 mb-6 leading-relaxed font-light">
            India’s ancient temples are not merely places of worship; they are
            living, breathing entities built upon profound cosmic geometry. For
            thousands of years, these monuments have stood as the ultimate
            synthesis of art, science, and spirituality.
          </p>

          <p className="about-animate text-lg text-gray-300 mb-10 leading-relaxed font-light">
            Our mission is to document, share, and preserve the deep wisdom
            embedded in these architectural marvels. We invite you to explore
            the legends, understand the Agamic sciences, and experience the
            heritage that continues to shape human consciousness.
          </p>

          {/* Quick Stats Grid */}
          <div className="about-animate grid grid-cols-2 gap-6 mt-4">
            <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-orange-500/30 transition-colors">
              <h3 className="text-3xl font-serif text-orange-400 mb-2">
                5000+
              </h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                Years of History
              </p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-orange-500/30 transition-colors">
              <h3 className="text-3xl font-serif text-orange-400 mb-2">12+</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                Architectural Styles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
