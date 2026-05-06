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

const Stories = () => {
  const container = useRef(null);

  // --- Scroll to Top Logic ---
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // ---------------------------

  useGSAP(
    () => {
      gsap.from(".story-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".story-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".story-grid",
          start: "top 80%",
        },
      });
    },
    { scope: container },
  );

  const featuredStory = storiesData.find((story) => story.featured);
  const regularStories = storiesData.filter((story) => !story.featured);

  // Helper component to render either an internal Link or an external <a> tag
  const StoryWrapper = ({ story, children, className }) => {
    if (story.link) {
      // If it has an external link, use a standard anchor tag
      return (
        <a
          href={story.link}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      );
    }
    // Otherwise, use internal Next.js routing
    return (
      <Link href={`/stories/${story.id}`} className={className}>
        {children}
      </Link>
    );
  };

  return (
    <main
      ref={container}
      className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 overflow-hidden relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center mb-20">
          <span className="story-header inline-block text-orange-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">
            Sacred Narratives
          </span>
          <h1 className="story-header text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Epics &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
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
          <StoryWrapper
            story={featuredStory}
            className="story-header group block mb-20"
          >
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:border-orange-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:-translate-y-1">
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  priority
                />
              </div>

              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest rounded-full border border-orange-500/30">
                    {featuredStory.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {featuredStory.readTime}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-500 transition-all duration-300">
                  {featuredStory.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light line-clamp-3">
                  {featuredStory.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-orange-400 font-semibold tracking-wide uppercase text-sm group-hover:translate-x-2 transition-transform duration-300">
                  {/* Cleaned up the nested link issue here */}
                  Read Full Story <span>&rarr;</span>
                </div>
              </div>
            </div>
          </StoryWrapper>
        )}

        {/* Story Grid */}
        <div className="story-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {regularStories.map((story) => (
            <StoryWrapper
              key={story.id}
              story={story}
              className="story-card group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-orange-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10">
                      {story.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-gray-500 text-xs mb-3 block">
                    {story.readTime}
                  </span>
                  <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                    {story.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-light line-clamp-3">
                    {story.excerpt}
                  </p>
                  <div className="mt-auto text-orange-500 text-sm font-semibold tracking-wide uppercase flex items-center gap-2">
                    Read More{" "}
                    <span className="group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </StoryWrapper>
          ))}
        </div>
      </div>

      {/* FLOATING SCROLL TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-orange-500/10 backdrop-blur-md border border-orange-500/30 text-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:bg-orange-500 hover:text-white hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all duration-500 ease-in-out ${
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
};

export default Stories;
