"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Mock Data
const storiesData = [
  {
    id: 1,
    title: "The Bhagavad Gita: The Divine Song",
    category: "Sacred Scripture",
    excerpt:
      "Delve into the ultimate philosophical dialogue between Prince Arjuna and Lord Krishna on the battlefield of Kurukshetra, exploring duty (Dharma), righteousness, and the path to spiritual liberation.",
    image: "/Bhagavadgita.jpg",
    readTime: "12 min read",
    featured: true,
    link: "https://gita-dusky.vercel.app/", // External link
  },
  {
    id: 2,
    title: "The Samudra Manthan",
    category: "Mythology",
    excerpt:
      "Discover the epic tale of the churning of the cosmic ocean, where Devas and Asuras united to extract the nectar of immortality, bringing forth divine treasures and cosmic balance.",
    image: "/Architectur.jpg",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "The Architect of Kailasa",
    category: "Architecture",
    excerpt:
      "Carved from a single massive rock top-down, explore the human ingenuity and divine inspiration behind the awe-inspiring Kailasa Temple of Ellora.",
    image: "/Architectur.jpg",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "The Mystery of the Jagannath Rath Yatra",
    category: "Festivals",
    excerpt:
      "Uncover the origins and massive scale of the world's oldest chariot festival, celebrating the annual journey of Lord Jagannath.",
    image: "/Indiandevi.jpg",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Meera Bai's Unshakable Devotion",
    category: "Bhakti Movement",
    excerpt:
      "The life and poetry of Meera Bai, a mystic poet whose fearless love for Lord Krishna challenged empires and redefined spiritual surrender.",
    image: "/Architectur.jpg",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "The Science of Vastu Shastra",
    category: "Ancient Science",
    excerpt:
      "How ancient temple architects used complex cosmic geometry, magnetic fields, and acoustics to create ultimate spaces of healing and meditation.",
    image: "/Indiandevi.jpg",
    readTime: "7 min read",
  },
];

// --- PREMIUM FEATURED STORY CARD ---
function FeaturedStoryCard({ story, className }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const isExternal = !!story.link;
  const Tag = isExternal ? "a" : Link;
  const href = isExternal ? story.link : `/stories/${story.id}`;
  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      href={href}
      {...externalProps}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`group block relative bg-[#111]/40 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-700 ${className}`}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(249, 115, 22, 0.15), transparent 40%)`,
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 h-full relative z-20">
        {/* Left: Image */}
        <div className="relative h-[400px] lg:h-[500px] lg:col-span-7 overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100"
            priority
          />
          {/* Gradient fade to blend into text section */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#111]/80 to-transparent hidden lg:block z-20"></div>
        </div>

        {/* Right: Content */}
        <div className="p-8 md:p-12 lg:p-16 lg:col-span-5 flex flex-col justify-center bg-gradient-to-r from-transparent to-black/20">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-orange-500/20 backdrop-blur-md">
              {story.category}
            </span>
            <span className="text-gray-500 text-xs tracking-wider uppercase">
              {story.readTime}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-500 transition-all duration-500">
            {story.title}
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light line-clamp-3 group-hover:text-gray-300 transition-colors">
            {story.excerpt}
          </p>

          <div className="inline-flex items-center gap-3 text-orange-500 text-xs font-bold tracking-[0.2em] uppercase group-hover:translate-x-2 transition-transform duration-300">
            Read Full Story
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Tag>
  );
}

// --- PREMIUM REGULAR STORY CARD ---
function StoryCard({ story, className }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const isExternal = !!story.link;
  const Tag = isExternal ? "a" : Link;
  const href = isExternal ? story.link : `/stories/${story.id}`;
  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      href={href}
      {...externalProps}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`group block relative bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden shadow-lg hover:border-orange-500/30 hover:-translate-y-2 transition-all duration-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col h-full ${className}`}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(249, 115, 22, 0.1), transparent 40%)`,
        }}
      />

      {/* Image */}
      <div className="relative h-64 overflow-hidden z-20">
        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 h-full w-full opacity-80"></div>
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
        />
        <div className="absolute top-5 left-5 z-20">
          <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-orange-400 text-[9px] font-bold uppercase tracking-[0.2em] rounded-full border border-white/10 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            {story.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow relative z-20 -mt-10">
        <span className="text-gray-500 text-[10px] uppercase tracking-widest mb-3 block drop-shadow-md">
          {story.readTime}
        </span>
        <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-500 transition-all duration-300">
          {story.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow font-light line-clamp-3">
          {story.excerpt}
        </p>

        <div className="mt-auto text-orange-500 text-[11px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 group-hover:text-orange-400 transition-colors">
          Read More
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </Tag>
  );
}

// --- MAIN STORIES COMPONENT ---
export default function Stories() {
  const container = useRef(null);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setShowTopBtn(true);
      else setShowTopBtn(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useGSAP(
    () => {
      gsap.fromTo(
        ".story-header",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
      );

      gsap.fromTo(
        ".story-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".story-grid",
            start: "top 80%",
          },
        },
      );
    },
    { scope: container },
  );

  const featuredStory = storiesData.find((story) => story.featured);
  const regularStories = storiesData.filter((story) => !story.featured);

  return (
    <main
      ref={container}
      className="min-h-screen bg-[#050505] pt-32 pb-24 px-6 md:px-12 overflow-hidden relative selection:bg-orange-500/30"
    >
      {/* Deep Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center mb-24 pt-8">
          <span className="story-header inline-flex items-center gap-3 text-orange-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 border border-orange-500/20 px-5 py-2 rounded-full bg-orange-500/5">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Sacred Narratives
          </span>
          <h1 className="story-header text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1] drop-shadow-lg">
            Epics & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-amber-600">
              Legends
            </span>
          </h1>
          <p className="story-header text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Immerse yourself in the profound mythology, historical marvels, and
            untold stories that breathe life into India's ancient temples.
          </p>
        </div>

        {/* Featured Story */}
        {featuredStory && (
          <div className="story-header mb-24">
            <FeaturedStoryCard story={featuredStory} />
          </div>
        )}

        {/* Story Grid */}
        <div className="story-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {regularStories.map((story) => (
            <StoryCard key={story.id} story={story} className="story-card" />
          ))}
        </div>
      </div>

      {/* FLOATING SCROLL TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 right-10 z-50 p-4 rounded-2xl bg-[#111]/80 backdrop-blur-xl border border-orange-500/30 text-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:bg-orange-500 hover:text-black hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:-translate-y-2 transition-all duration-500 ease-out group ${
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
