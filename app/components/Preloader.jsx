"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Trigger the loading screen every time the pathname changes
    setIsLoading(true);

    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      // Re-enable scrolling after loading finishes
      document.body.style.overflow = "unset";
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, [pathname]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050505] transition-all duration-1000 ease-in-out ${
        isLoading
          ? "opacity-100 scale-100"
          : "opacity-0 scale-105 pointer-events-none"
      }`}
    >
      {/* Deep Ambient Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-orange-600/5 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      {/* Sacred Geometry Loader */}
      <div className="relative flex items-center justify-center w-32 h-32 mb-8">
        {/* Outer Dashed Ring (Slowest) */}
        <div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-[spin_8s_linear_infinite]"></div>

        {/* Middle Glowing Ring (Reverse) */}
        <div className="absolute inset-2 border-t-2 border-r-2 border-orange-500/80 rounded-full animate-[spin_3s_linear_infinite_reverse] shadow-[0_0_20px_rgba(249,115,22,0.4)]"></div>

        {/* Inner Fast Ring */}
        <div className="absolute inset-5 border-b-2 border-l-2 border-amber-400/90 rounded-full animate-[spin_1.5s_linear_infinite]"></div>

        {/* Center Glowing Icon */}
        <span className="absolute text-4xl animate-pulse drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]">
          🕉️
        </span>
      </div>

      {/* Cinematic Loading Text */}
      <div className="flex flex-col items-center relative z-10">
        <h2 className="text-white font-serif tracking-[0.4em] uppercase text-lg mb-4 drop-shadow-md">
          Vishwaguru
        </h2>

        {/* Glowing Divider Line */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-4 opacity-70"></div>

        <p className="text-orange-400/70 text-[10px] font-bold tracking-[0.3em] uppercase animate-pulse">
          Awakening Heritage...
        </p>
      </div>
    </div>
  );
}
