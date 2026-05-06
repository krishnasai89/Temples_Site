"use client";

// 1. Added useEffect to the import
import { useState, useRef, use, useEffect } from "react";
import Link from "next/link";
import templesData from "../../templesData.json";

// --- SUB-COMPONENT: Glassified Related Temple Card with Spotlight ---
function RelatedTempleCard({ rt }) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-temple-gold/40 hover:-translate-y-2 transition-all duration-500 flex flex-col shadow-[inset_0_0_15px_rgba(255,255,255,0.02),0_15px_40px_rgba(0,0,0,0.4)] group"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.15), transparent 40%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-2xl font-serif text-white mb-2 transition-colors duration-300 group-hover:text-temple-gold/90">
          {rt.name}
        </h3>
        <p className="text-xs font-bold text-temple-gold/40 uppercase tracking-widest mb-4">
          {rt.relationship}
        </p>
        <p className="text-white/80 font-light text-sm flex-grow leading-relaxed">
          {rt.importance}
        </p>

        {rt.location && (
          <p className="text-white/40 text-xs mt-6 uppercase tracking-wider flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {rt.location}
          </p>
        )}
      </div>
    </div>
  );
}

// Helper function to render a glassmorphic content section
const GlassSection = ({ title, content }) => {
  if (!content) return null;
  return (
    <div className="bg-[#111111]/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-[inset_0_0_20px_rgba(255,255,255,0.02),0_20px_50px_rgba(0,0,0,0.5)] mb-12">
      <h2 className="text-3xl md:text-4xl font-serif text-temple-gold mb-8 flex items-center gap-4 border-b border-temple-gold/20 pb-4">
        <span className="w-8 h-[1px] bg-temple-gold"></span> {title}
      </h2>
      <div
        className="text-lg md:text-xl font-light leading-relaxed text-white/80 space-y-6"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

// 2. MAIN COMPONENT
export default function TempleDetail({ params }) {
  const resolvedParams = use(params);
  const urlId = parseInt(resolvedParams.id);
  const temple = templesData.find((t) => t.id === urlId);

  // --- NEW: Scroll to Top Logic ---
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when the user scrolls down 400px
      if (window.scrollY > 400) {
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
  // --------------------------------

  if (!temple) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <h1 className="text-3xl font-serif">Temple Not Found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-temple-stone pb-24 relative">
      {/* Cinematic Hero Header */}
      <div className="relative h-screen w-full bg-[#111] flex flex-col items-center justify-center overflow-hidden">
        {temple.image ? (
          <img
            src={temple.image}
            alt={temple.name}
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl text-white mt-32">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif drop-shadow-[0_0_25px_rgba(0,0,0,0.8)] mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-temple-gold to-[#a18222] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            {temple.name}
          </h1>

          {/* Alternate Names */}
          {temple.alternate_names && (
            <p className="text-xl md:text-2xl text-white/60 italic font-serif mb-6 drop-shadow-lg">
              Also known as: {temple.alternate_names.join(", ")}
            </p>
          )}

          <p className="text-lg md:text-lg tracking-[0.3em] uppercase text-cyan-300 font-bold drop-shadow-md">
            📍{temple.city}, {temple.state}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-32 relative z-20">
        {/* Back Button (Uses native history to preserve scroll state on the home page) */}
        <button
          onClick={() => window.history.back()}
          className="absolute -top-[30rem] inline-flex items-center gap-2 text-white/60 hover:text-temple-gold transition-colors mb-8 uppercase tracking-widest text-sm font-bold bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
        >
          <span>←</span> Go Back
        </button>

        {/* Categories & Tags Merged (Glassified) */}
        <div className="flex flex-wrap gap-3 mb-12">
          {temple.categories?.map((cat, idx) => (
            <span
              key={`cat-${idx}`}
              className="px-5 py-2 bg-temple-gold/10 backdrop-blur-md border border-temple-gold/30 rounded-full text-temple-gold text-xs uppercase tracking-widest shadow-sm"
            >
              {cat}
            </span>
          ))}
          {temple.tags?.map((tag, idx) => (
            <span
              key={`tag-${idx}`}
              className="px-5 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/80 text-xs uppercase tracking-widest shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Quick Facts Grid (Glassified) */}
        <div className="grid grid-cols-2 gap-6 mb-16 p-8 md:p-10 bg-[#111111]/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[inset_0_0_20px_rgba(255,255,255,0.02),0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-temple-gold/5 blur-[100px] pointer-events-none"></div>

          <div className="relative z-10">
            <p className="text-temple-gold/60 text-xs uppercase tracking-widest mb-2">
              Deity
            </p>
            <p className="text-white font-serif text-xl md:text-2xl">
              {temple.deity}
            </p>
            {temple.form_of && (
              <p className="text-white/40 text-sm mt-1">
                Form of {temple.form_of}
              </p>
            )}
          </div>
          <div className="relative z-10">
            <p className="text-temple-gold/60 text-xs uppercase tracking-widest mb-2">
              Tradition
            </p>
            <p className="text-white font-serif text-xl md:text-2xl">
              {temple.tradition}
            </p>
          </div>
          <div className="relative z-10">
            <p className="text-temple-gold/60 text-xs uppercase tracking-widest mb-2">
              Administration
            </p>
            <p className="text-white font-serif text-xl md:text-2xl leading-tight">
              {temple.current_administration}
            </p>
          </div>
          <div className="relative z-10">
            <p className="text-temple-gold/60 text-xs uppercase tracking-widest mb-2">
              History
            </p>
            <p className="text-white/80 font-light text-sm leading-relaxed">
              {temple.management_history}
            </p>
          </div>
          {temple.shakti_peeth_body_part && (
            <div className="col-span-2 md:col-span-4 border-t border-white/10 pt-6 mt-2 relative z-10">
              <p className="text-temple-gold/60 text-xs uppercase tracking-widest mb-2">
                Shakti Peeth Origin
              </p>
              <p className="text-red-300/90 text-xl font-serif">
                {temple.shakti_peeth_body_part}
              </p>
            </div>
          )}
        </div>

        {/* Short Description */}
        <div className="relative mb-20 p-8 bg-gradient-to-r from-temple-gold/10 to-transparent border-l-4 border-temple-gold rounded-r-2xl">
          <p className="text-xl md:text-3xl font-serif leading-relaxed text-white italic drop-shadow-md">
            <q>{temple.description}</q>
          </p>
        </div>

        {/* Main Content Split Layout */}
        <div className="mb-20">
          <div className="lg:col-span-2">
            <GlassSection
              title="Temple History"
              content={temple.temple_history}
            />

            {temple.schedule_time && (
              <div className="my-10 bg-[#111111]/40 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.02),0_20px_50px_rgba(0,0,0,0.5)]">
                <h3 className="text-2xl font-serif text-temple-gold mb-6 text-center border-b border-white/10 pb-4">
                  Daily Schedule
                </h3>
                <div
                  className="text-white/80 text-sm leading-loose tracking-wide space-y-2"
                  dangerouslySetInnerHTML={{ __html: temple.schedule_time }}
                />
              </div>
            )}
            <GlassSection
              title="Legend of the Deity"
              content={temple.deity_legend}
            />
            <GlassSection title="Architecture" content={temple.Architecture} />
            <GlassSection title="Festivals" content={temple.Festivals} />
            <GlassSection title="Worship" content={temple.Worship} />
          </div>
        </div>

        {/* Related Temples Grid */}
        {temple.related_temples && temple.related_temples.length > 0 && (
          <div className="mt-12 pt-16 border-t border-white/10 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-temple-gold/5 blur-[100px] pointer-events-none"></div>

            <h2 className="text-3xl md:text-5xl font-serif text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-temple-gold to-white mb-16 drop-shadow-lg">
              Associated Shrines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {temple.related_temples.map((rt, idx) => (
                <RelatedTempleCard key={idx} rt={rt} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* --- NEW: FLOATING SCROLL TO TOP BUTTON --- */}
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
    </main>
  );
}
