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
      className="temple-card relative block rounded-xl overflow-hidden group h-[420px] bg-white/5 backdrop-blur-sm border border-white/10 hover:border-temple-gold/40 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
    >
      {/* Interactive Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.2), transparent 20%)`,
        }}
      />

      {/* Background Image */}
      <img
        src={temple.image || null}
        alt={temple.name}
        className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 brightness-150"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute bottom-0 p-6 z-20 w-full">
        {/* FIXED: Opacity changed from 40 to 0.4 so the drop-shadow works */}
        <h3 className="text-2xl font-serif mb-1 transition-all duration-300 text-temple-stone group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-temple-gold group-hover:to-[#a18222] group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
          <b>{temple.name}</b>
        </h3>

        <p className="text-sm font-semibold text-temple-stone/60 group-hover:text-cyan-400 uppercase tracking-widest mb-2">
          📍{temple.city}
          {temple.state ? `, ${temple.state}` : ""}
        </p>
        <p className="text-temple-stone/80 group-hover:text-sm text-xs line-clamp-2">
          {temple.description}
        </p>
        <div className="mt-4"></div>
        {Array.isArray(temple.tags) &&
          (temple.tags || []).slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="text-[9px] font-bold uppercase tracking-widest bg-black/70 text-temple-gold px-3 py-1 rounded-full border border-temple-gold/30 mr-2"
            >
              {tag}
            </span>
          ))}
      </div>

      {/* Tags (Top Right) - Glassified */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        {(temple.categories || []).slice(0, 2).map((cat, index) => (
          <span
            key={index}
            className="text-[9px] uppercase tracking-widest px-2 py-1 rounded-full bg-temple-saffron text-temple-gold border border-white/60 backdrop-blur-sm shadow-sm"
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
      // If user scrolls down 500px, show the button
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
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
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
      className="py-24 bg-[#0a0a0a] px-4 md:px-12 min-h-screen relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header, Search, & Filters */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-temple-gold mb-8 drop-shadow-lg">
            Monuments of Devotion
          </h2>

          <div className="relative w-full max-w-md mb-8 group">
            <input
              type="text"
              suppressHydrationWarning
              placeholder="Search by name or location (e.g., Varanasi)..."
              value={searchQuery || ""}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-full py-3 px-6 text-white placeholder-white/40 focus:outline-none focus:border-temple-gold/50 focus:bg-white/10 transition-all shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]"
            />
            <svg
              className="absolute right-4 top-3.5 w-5 h-5 text-white/40 group-focus-within:text-temple-gold/70 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Glass Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 suppressHydrationWarning">
            {(categories || []).map((cat) => (
              <button
                key={cat}
                type="button"
                suppressHydrationWarning
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 tracking-wider text-sm uppercase backdrop-blur-md ${
                  activeFilter === cat
                    ? "bg-temple-gold/20 border-temple-gold/60 text-temple-gold font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-temple-gold/50 hover:text-temple-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* The Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemples.length === 0 && (
            <div className="col-span-full text-center text-white/50 py-12 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              No temples found matching your search. Try adjusting your filters.
            </div>
          )}
          {filteredTemples.map((temple) => (
            <TempleCard key={temple.id} temple={temple} />
          ))}
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-temple-gold/10 backdrop-blur-md border border-temple-gold/30 text-temple-gold shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:bg-temple-gold hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-500 ease-in-out ${
          showTopBtn
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
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
