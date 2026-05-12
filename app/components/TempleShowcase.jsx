"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import templesData from "../templesData.json";

const categories = [
  "All",
  "Most Visited Temple",
  "Richest Temple",
  "Char Dham",
  "Jyotirlinga",
  "Shakti Peeth",
  "Divya Desams",
  "Pancha Bhoota Stalam",
  "UNESCO World Heritage Site",
  "Pancha Narasimha Kshetras",
  "Chota Char Dham",
  "Sapta Puri",
  "Ashtavinayaka",
  "Arupadaiveedu",
];

// --- NEW SUB-COMPONENT: Glass Temple Card with Cursor Spotlight ---
function TempleCard({ temple }) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Track mouse relative to this specific card
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      href={`/temple/${temple.id}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="temple-card relative block rounded-2xl overflow-hidden group h-[450px] bg-white/[0.02] backdrop-blur-md border border-white/10 hover:border-temple-gold/50 transition-all duration-700 hover:-translate-y-2 shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
    >
      {/* Interactive Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.15), transparent 40%)`,
        }}
      />

      {/* Background Image - Fixed brightness and scaling */}
      <img
        src={temple.image || "/placeholder.jpg"}
        alt={temple.name}
        className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out opacity-70 group-hover:opacity-100"
      />

      {/* Overlays for perfect text readability */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#0a0a0a]/80 to-transparent h-full z-0"></div>

      {/* Text Content */}
      <div className="absolute bottom-0 p-6 z-20 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
        <p className="text-[10px] font-bold text-temple-gold/80 group-hover:text-temple-gold uppercase tracking-[0.2em] mb-2 flex items-center gap-1 transition-colors">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          {temple.city}
          {temple.state ? `, ${temple.state}` : ""}
        </p>

        <h3 className="text-3xl font-serif mb-3 transition-all duration-500 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-temple-gold group-hover:to-orange-400 group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">
          {temple.name}
        </h3>

        <p className="text-gray-400 text-sm line-clamp-2 font-light leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
          {temple.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {Array.isArray(temple.tags) &&
            (temple.tags || []).slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="text-[10px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-sm text-temple-stone px-3 py-1.5 rounded-full border border-white/10 group-hover:border-temple-gold/30 group-hover:text-temple-gold transition-colors"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>

      {/* Categories (Top Right) */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
        {(temple.categories || []).slice(0, 2).map((cat, index) => (
          <span
            key={index}
            className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-gradient-to-r from-temple-gold/90 to-orange-500/90 text-black border border-white/20 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            {cat}
          </span>
        ))}
      </div>
    </Link>
  );
}

// --- MAIN COMPONENT ---
export default function TempleShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const container = useRef(null);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const filteredTemples = templesData.filter((temple) => {
    const matchesCategory =
      activeFilter === "All" ? true : temple.categories?.includes(activeFilter);

    const matchesSearch =
      (temple.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (Array.isArray(temple.alternate_names) &&
        temple.alternate_names.some((name) =>
          name.toLowerCase().includes(searchQuery.toLowerCase()),
        )) ||
      (temple.city || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (temple.state || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (temple.deity || "").toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useGSAP(
    () => {
      gsap.fromTo(
        ".temple-card",
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
      );
    },
    { scope: container, dependencies: [activeFilter, searchQuery] },
  );

  return (
    <section
      id="Temple"
      ref={container}
      className="py-32 bg-[#0a0a0a] px-4 md:px-12 min-h-screen relative overflow-hidden"
    >
      {/* Subtle Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-temple-gold/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="text-temple-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 border border-temple-gold/30 rounded-full bg-temple-gold/5">
            The Sacred Archives
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-10 leading-tight">
            Monuments of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-temple-gold via-orange-400 to-amber-600">
              Devotion
            </span>
          </h2>

          {/* Upgraded Search Bar */}
          <div className="relative w-full max-w-2xl mb-12 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-temple-gold/20 via-orange-500/20 to-temple-gold/20 rounded-full blur opacity-50 group-focus-within:opacity-100 transition duration-500"></div>
            <input
              type="text"
              suppressHydrationWarning
              placeholder="Search by temple, city, or deity (e.g., Kashi)..."
              value={searchQuery || ""}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="relative w-full bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-full py-4 px-8 text-white placeholder-white/30 focus:outline-none focus:border-temple-gold/50 transition-all shadow-2xl text-lg"
            />
            <svg
              className="absolute right-6 top-4 w-6 h-6 text-white/30 group-focus-within:text-temple-gold transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Sleeker Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl suppressHydrationWarning">
            {(categories || []).map((cat) => (
              <button
                key={cat}
                type="button"
                suppressHydrationWarning
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full border transition-all duration-500 tracking-[0.1em] text-[11px] font-bold uppercase backdrop-blur-md ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-temple-gold to-orange-500 border-transparent text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                    : "bg-white/[0.03] border-white/10 text-gray-400 hover:bg-white/10 hover:border-temple-gold/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* The Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {filteredTemples.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center text-center py-24 bg-white/[0.02] backdrop-blur-md rounded-3xl border border-white/5">
              <span className="text-6xl mb-6">🪔</span>
              <h3 className="text-2xl font-serif text-white mb-2">
                No Temples Found
              </h3>
              <p className="text-gray-400 max-w-md">
                We couldn't find any temples matching your current search or
                category filters.
              </p>
            </div>
          )}
          {filteredTemples.map((temple) => (
            <TempleCard key={temple.id} temple={temple} />
          ))}
        </div>
      </div>

      {/* Upgraded Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 right-10 z-50 p-4 rounded-2xl bg-[#111]/80 backdrop-blur-xl border border-temple-gold/30 text-temple-gold shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:bg-temple-gold hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-2 transition-all duration-500 ease-out group ${
          showTopBtn
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </section>
  );
}
