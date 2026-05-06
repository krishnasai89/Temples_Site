"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // 1. Import usePathname

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname(); // 2. Get the current page route

  useEffect(() => {
    // 3. Trigger the loading screen every time the pathname changes
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [pathname]); // 4. Add pathname to the dependency array

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0a0a0a] transition-opacity duration-1000 ease-in-out ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Outer Glowing Ring */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-24 h-24 border-t-2 border-orange-500 rounded-full animate-spin"></div>
        <div className="absolute w-16 h-16 border-b-2 border-white/50 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>

        {/* Inner Text / Icon */}
        <span className="text-3xl text-orange-500">🕉️</span>
      </div>

      {/* Loading Text */}
      <div className="mt-8 flex flex-col items-center">
        <h2 className="text-white font-serif tracking-[0.3em] uppercase text-sm mb-2">
          Vishwaguru
        </h2>
        <p className="text-gray-500 text-[10px] tracking-widest uppercase animate-pulse">
          Awakening Heritage...
        </p>
      </div>
    </div>
  );
}
