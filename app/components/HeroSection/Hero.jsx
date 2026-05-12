"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- Premium Glassmorphic Slider Arrows ---
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-600 text-white rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group opacity-0 group-hover:opacity-100"
    aria-label="Previous Slide"
  >
    <svg
      className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-600 text-white rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group opacity-0 group-hover:opacity-100"
    aria-label="Next Slide"
  >
    <svg
      className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const HeroSection = () => {
  const [videoStarted, setVideoStarted] = useState(false);
  const [muted, setMuted] = useState(false);
  const sliderRef = useRef(null);
  const videoRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    duration: 500000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: (dots) => (
      <div style={{ bottom: "20px", zIndex: 30 }}>
        <ul className="m-0 p-0 flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2 h-2 rounded-full bg-white/40 hover:bg-orange-400 transition-colors duration-300"></div>
    ),
  };

  const handleVideoEnd = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setVideoStarted(true))
          .catch((error) => console.warn("Playback prevented:", error));
      } else {
        setVideoStarted(true);
      }
    }
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setVideoStarted(true))
          .catch((error) => {
            console.warn("Playback prevented:", error);
            setVideoStarted(false);
          });
      } else {
        setVideoStarted(true);
      }
    } else {
      video.pause();
      setVideoStarted(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#050505] py-20 lg:py-32 selection:bg-orange-500/30 font-sans">
      {/* Deep Cinematic Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-600/5 blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-red-600/5 blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Slider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center w-full order-2 md:order-1"
          >
            <div className="w-full max-w-[28rem] lg:max-w-[32rem] rounded-[2rem] overflow-hidden relative border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8),_0_0_30px_rgba(249,115,22,0.15)] group">
              <Slider ref={sliderRef} {...settings}>
                {/* 1. Local Video */}
                <div className="relative outline-none bg-black h-[32rem] lg:h-[40rem]">
                  <video
                    ref={videoRef}
                    src="/HeroSectionVideo.mp4"
                    muted={muted}
                    preload="auto"
                    playsInline
                    webkit-playsinline="true"
                    className="w-full h-full object-cover opacity-90 mix-blend-lighten"
                    onEnded={handleVideoEnd}
                  />

                  {/* Giant Play Button Overlay */}
                  {!videoStarted && (
                    <button
                      onClick={handlePlayClick}
                      className="absolute inset-0 z-10 w-full h-full flex items-center justify-center bg-black/30 hover:bg-black/40 backdrop-blur-[2px] transition-all duration-500 group/play"
                      aria-label="Play Video"
                    >
                      <div className="w-24 h-24 text-white rounded-full flex items-center justify-center group-hover/play:scale-110 transition-transform duration-500 border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                        <svg
                          className="w-10 h-10 ml-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  )}

                  {/* Sleek Glassmorphic Media Controls */}
                  {videoStarted && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full backdrop-blur-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={togglePlayPause}
                        className="p-2 text-white hover:text-orange-400 transition-colors"
                      >
                        {videoRef.current?.paused ? (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                          </svg>
                        )}
                      </button>
                      <div className="w-px h-5 bg-white/20"></div>
                      <button
                        onClick={toggleMute}
                        className="p-2 text-white hover:text-orange-400 transition-colors"
                      >
                        {muted ? (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  )}
                </div>

                {/* 2-16. Image Slides with Museum Plaques */}
                {[
                  { src: "/Temple1.jpg", title: "Nritya Ganesha" },
                  { src: "/Temple2.jpg", title: "Hoysala Architecture" },
                  { src: "/Temple3.jpg", title: "Bhairava" },
                  { src: "/Temple4.jpg", title: "Kartikeya" },
                  { src: "/Temple5.jpg", title: "Kalyana Chalukyan Style" },
                  { src: "/Temple6.jpg", title: "" },
                  { src: "/Temple7.jpg", title: "" },
                  { src: "/Temple8.jpg", title: "Makara Thorana" },
                  { src: "/Temple9.jpg", title: "Shilabalika / Madanikas" },
                  { src: "/Temple10.jpg", title: "" },
                  { src: "/Temple11.jpg", title: "" },
                  { src: "/Temple12.jpg", title: "" },
                  { src: "/Temple13.jpg", title: "" },
                  {
                    src: "/Temple14.jpg",
                    title: "Lord Narasimha Slaying Hiranyakashipu",
                  },
                  { src: "/Temple15.jpg", title: "Gajasurasamhara" },
                  {
                    src: "/Temple16.jpg",
                    title: "Bhagadatta on Supratika fighting Bhima",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="relative outline-none h-[32rem] lg:h-[40rem] bg-black"
                  >
                    <Image
                      src={item.src}
                      alt={item.title || "Divine Temples and Culture of India"}
                      fill
                      className="object-cover opacity-80"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent flex items-end p-8 pb-5">
                      {item.title && (
                        <div className="bg-black/40 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl w-full">
                          <h3 className="text-white text-lg lg:text-xl font-serif leading-snug">
                            {item.title}
                          </h3>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </motion.div>

          {/* Right Side: Text & Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center order-1 md:order-2"
          >
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-orange-500/50"></span>
              Sacred Heritage
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 drop-shadow-lg">
              Discover the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-red-500">
                Divine Forms
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg font-light">
              Embark on a spiritual journey through timeless architecture,
              sacred traditions, and the profound stories that have shaped our
              rich cultural tapestry for millennia.
            </p>

            {/* Feature List */}
            <ul className="space-y-5 mb-12">
              {[
                "Uncover the mysteries of ancient architectural marvels.",
                "Read the profound epics and legends of the deities.",
                "Plan your spiritual pilgrimage to historic sacred sites.",
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <div className="w-6 h-6 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                    <svg
                      className="w-3.5 h-3.5 text-orange-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300 font-light group-hover:text-white transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/Stories"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_35px_rgba(249,115,22,0.6)] hover:-translate-y-1 transition-all duration-300"
              >
                Read Stories
              </Link>
              <Link
                href="#Temple"
                className="px-8 py-4 bg-white/[0.03] backdrop-blur-md text-orange-400 font-bold text-xs uppercase tracking-widest border border-orange-500/30 rounded-full hover:border-orange-400 hover:bg-orange-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                Explore Temples
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
