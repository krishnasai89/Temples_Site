"use client";

import { useState, useRef, use, useEffect } from "react";
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
      className="relative overflow-hidden bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-temple-gold/50 hover:-translate-y-2 transition-all duration-700 flex flex-col shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] group cursor-pointer"
    >
      {/* Interactive Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.15), transparent 40%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-2xl font-serif text-white mb-2 transition-colors duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-temple-gold group-hover:to-orange-400">
          {rt.name}
        </h3>
        <p className="text-[10px] font-bold text-temple-gold/80 uppercase tracking-widest mb-5 border-b border-white/5 pb-4">
          {rt.relationship}
        </p>
        <p className="text-gray-400 font-light text-sm flex-grow leading-relaxed group-hover:text-gray-300 transition-colors">
          {rt.importance}
        </p>

        {rt.location && (
          <p className="text-white/50 text-[11px] mt-6 uppercase tracking-[0.2em] flex items-center gap-2 group-hover:text-temple-gold/70 transition-colors">
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

// --- SUB-COMPONENT: Advanced Glass Section ---
const GlassSection = ({ title, content }) => {
  // If the content is undefined, null, or empty, do not render the section at all
  if (!content) return null;

  return (
    <div className="bg-[#111]/40 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] mb-12 relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-temple-gold/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

      <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 flex items-center gap-4">
        {title}
      </h2>

      <div
        className="text-lg font-light leading-relaxed text-gray-300 
          [&>p]:mb-6 
          [&>ul]:list-none [&>ul>li]:relative [&>ul>li]:pl-6 [&>ul>li]:mb-3 [&>ul>li::before]:content-[''] [&>ul>li::before]:absolute [&>ul>li::before]:left-0 [&>ul>li::before]:top-2.5 [&>ul>li::before]:w-1.5 [&>ul>li::before]:h-1.5 [&>ul>li::before]:bg-temple-gold/60 [&>ul>li::before]:rounded-full 
          [&>ol]:list-decimal [&>ol]:pl-6 [&>ol>li]:mb-3 [&>ol>li::marker]:text-temple-gold/80 [&>ol>li::marker]:font-serif
          [&>h3]:text-2xl [&>h3]:font-serif [&>h3]:text-white [&>h3]:mb-4 [&>h3]:mt-8
          [&>strong]:text-white [&>strong]:font-medium"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function TempleDetail({ params }) {
  const resolvedParams = use(params);
  const urlId = parseInt(resolvedParams.id);
  const temple = templesData.find((t) => t.id === urlId);

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!temple) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white flex-col gap-4">
        <span className="text-6xl">🪔</span>
        <h1 className="text-4xl font-serif">Temple Not Found</h1>
        <button
          onClick={() => window.history.back()}
          className="text-temple-gold mt-4 hover:underline"
        >
          Return to Archives
        </button>
      </div>
    );
  }

  // --- DATA NORMALIZATION (Handles inconsistent JSON Keys safely) ---
  const archContent = temple.Architecture || temple.architecture;
  const festContent = temple.Festivals || temple.festivals;
  const worshipContent = temple.Worship || temple.worship;
  const historyContent =
    temple.temple_history || temple.Temple_History || temple.history;
  const legendContent = temple.deity_legend || temple.Deity_Legend;
  const folkloreContent = temple.modern_folklore || temple.Modern_Folklore;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-300 pb-24 relative selection:bg-temple-gold/30">
      {/* Cinematic Hero Header */}
      <div className="relative h-[85vh] min-h-[600px] w-full bg-[#050505] flex flex-col items-center justify-end pb-32 overflow-hidden">
        {/* Floating Back Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-8 left-8 z-50 inline-flex items-center gap-2 text-white/70 hover:text-temple-gold transition-colors uppercase tracking-[0.2em] text-[10px] font-bold bg-black/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 hover:border-temple-gold/50 hover:bg-black/50"
        >
          <span>←</span> Back to Archives
        </button>

        {/* Dynamic Image Fallback */}
        {temple.image ? (
          <img
            src={temple.image}
            alt={temple.name}
            className="absolute inset-0 w-full h-full object-cover scale-105 opacity-60 mix-blend-lighten"
          />
        ) : (
          /* Elegant Fallback for missing images */
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-temple-gold/10 via-[#050505] to-[#050505] opacity-50"></div>
        )}

        {/* Advanced Gradients for perfect text blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent h-48"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl text-white">
          <p className="text-sm md:text-base tracking-[0.4em] uppercase text-temple-gold/90 font-bold drop-shadow-md mb-6 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-temple-gold/50"></span>
            {temple.city}
            {temple.state ? `, ${temple.state}` : ""}
            <span className="w-8 h-[1px] bg-temple-gold/50"></span>
          </p>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif drop-shadow-[0_0_30px_rgba(0,0,0,0.9)] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400">
            {temple.name}
          </h1>

          {temple.alternate_names && temple.alternate_names.length > 0 && (
            <p className="text-lg md:text-xl text-white/50 italic font-serif drop-shadow-lg">
              Also known as: {temple.alternate_names.join(", ")}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-16 relative z-20">
        {/* Badges / Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {temple.categories?.map((cat, idx) => (
            <span
              key={`cat-${idx}`}
              className="px-5 py-2 bg-gradient-to-r from-temple-gold/20 to-orange-500/10 backdrop-blur-xl border border-temple-gold/40 rounded-full text-temple-gold text-[10px] font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.15)]"
            >
              {cat}
            </span>
          ))}
          {temple.tags?.map((tag, idx) => (
            <span
              key={`tag-${idx}`}
              className="px-5 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white/70 text-[10px] font-bold uppercase tracking-[0.2em]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Short Description (Monumental Quote Style) */}
        {temple.description && (
          <div className="relative mb-20 py-10 px-8 md:px-16 bg-gradient-to-r from-temple-gold/5 to-transparent border-l-2 border-temple-gold rounded-r-3xl">
            <svg
              className="absolute top-6 left-6 w-12 h-12 text-temple-gold/10 transform -scale-x-100 -scale-y-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-2xl md:text-4xl font-serif leading-relaxed text-white italic drop-shadow-md relative z-10 text-center">
              {temple.description}
            </p>
          </div>
        )}

        {/* Bento Box: Quick Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          <div className="bg-[#111]/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex flex-col justify-center">
            <span className="text-temple-gold/50 text-[10px] font-bold uppercase tracking-widest mb-2 block">
              Primary Deity
            </span>
            <span className="text-white font-serif text-2xl">
              {temple.deity || "Unknown"}
            </span>
            {temple.form_of && (
              <span className="text-gray-500 text-sm mt-1">
                Form of {temple.form_of}
              </span>
            )}
          </div>

          <div className="bg-[#111]/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex flex-col justify-center">
            <span className="text-temple-gold/50 text-[10px] font-bold uppercase tracking-widest mb-2 block">
              Tradition
            </span>
            <span className="text-white font-serif text-2xl">
              {temple.tradition || "Ancient Hindu"}
            </span>
          </div>

          <div className="bg-[#111]/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex flex-col justify-center">
            <span className="text-temple-gold/50 text-[10px] font-bold uppercase tracking-widest mb-2 block">
              Administration
            </span>
            <span className="text-white font-serif text-xl leading-tight">
              {temple.current_administration || "Local Trust"}
            </span>
          </div>

          <div className="bg-[#111]/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex flex-col justify-center">
            <span className="text-temple-gold/50 text-[10px] font-bold uppercase tracking-widest mb-2 block">
              Historical Management
            </span>
            <span className="text-gray-400 font-light text-sm line-clamp-3">
              {temple.management_history ||
                "Historically managed by royal dynasties."}
            </span>
          </div>

          {temple.shakti_peeth_body_part && (
            <div className="lg:col-span-4 bg-gradient-to-r from-red-950/20 to-black backdrop-blur-md border border-red-900/30 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <span className="text-red-400/60 text-[10px] font-bold uppercase tracking-widest mb-1 block">
                  Shakti Peeth Significance
                </span>
                <span className="text-white font-serif text-2xl">
                  Fallen Body Part:{" "}
                  <span className="text-red-300">
                    {temple.shakti_peeth_body_part}
                  </span>
                </span>
              </div>
              <span className="hidden md:block text-4xl opacity-20">🔱</span>
            </div>
          )}
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-8">
            {/* These will cleanly skip rendering if the content doesn't exist */}
            <GlassSection title="The History" content={historyContent} />
            <GlassSection title="Sacred Architecture" content={archContent} />
            <GlassSection title="Legend of the Deity" content={legendContent} />
            <GlassSection title="Worship & Rituals" content={worshipContent} />
            <GlassSection title="Festivals" content={festContent} />
            <GlassSection
              title="Modern Folklore & Truths"
              content={folkloreContent}
            />
          </div>

          {/* Sticky Sidebar for Schedule */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              {temple.schedule_time && (
                <div className="bg-gradient-to-b from-[#151515] to-[#0a0a0a] backdrop-blur-xl p-8 rounded-3xl border border-temple-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-temple-gold to-transparent opacity-50"></div>

                  <h3 className="text-xl font-serif text-white mb-6 flex items-center gap-3">
                    <span className="text-2xl">⏳</span> Daily Schedule
                  </h3>

                  <div
                    className="text-gray-400 text-sm leading-loose tracking-wide space-y-3 [&>ul]:list-none [&>ul>li]:border-b [&>ul>li]:border-white/5 [&>ul>li]:pb-2 [&>ul>li:last-child]:border-0 [&>strong]:text-temple-gold/80"
                    dangerouslySetInnerHTML={{ __html: temple.schedule_time }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Temples Grid */}
        {temple.related_temples && temple.related_temples.length > 0 && (
          <div className="mt-20 pt-20 border-t border-white/5 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-temple-gold/5 blur-[100px] pointer-events-none"></div>

            <div className="text-center mb-16 relative z-10">
              <span className="text-temple-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
                Continue Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">
                Associated Shrines
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {temple.related_temples.map((rt, idx) => (
                <RelatedTempleCard key={idx} rt={rt} />
              ))}
            </div>
          </div>
        )}
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
    </main>
  );
}
