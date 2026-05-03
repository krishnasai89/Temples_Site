"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- Custom Slider Arrows ---
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-orange-500 text-white rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300"
    aria-label="Previous Slide"
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-orange-500 text-white rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300"
    aria-label="Next Slide"
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Autoplay is turned OFF so it doesn't skip to the image while you are waiting to play the video
    autoplay: true,
    duration: 500000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    // Appends dots to look better in dark mode
    appendDots: (dots) => (
      <div style={{ bottom: "10px" }}>
        <ul className="m-0 p-0"> {dots} </ul>
      </div>
    ),
  };

  const handleVideoEnd = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setVideoStarted(true);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setVideoStarted(!videoRef.current.paused);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-16 lg:py-24 selection:bg-orange-500/30">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center w-full"
          >
            <div className="w-full max-w-[28rem] lg:max-w-[35rem] rounded-2xl overflow-hidden relative border border-gray-800 shadow-[0_0_40px_rgba(249,115,22,0.1)]">
              <Slider ref={sliderRef} {...settings}>
                {/* 1. Local Video */}
                <div className="relative outline-none bg-black">
                  <video
                    ref={videoRef}
                    src="/HeroSectionVideo.mp4"
                    muted={muted}
                    preload="auto" // Helps load the first frame so it isn't black
                    playsInline
                    webkit-playsinline="true" // Specific fix for iOS/Safari black screens
                    className="w-full h-[28rem] lg:h-[35rem] object-cover opacity-90"
                    onEnded={handleVideoEnd}
                  />

                  {!videoStarted && (
                    <button
                      onClick={handlePlayClick}
                      className="absolute inset-0 z-10 w-full h-full flex items-center justify-center bg-black/40 hover:bg-black/50 transition-all duration-300 group"
                      aria-label="Play Video"
                    >
                      <div className="w-20 h-20 group-hover:h-10 text-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-[0_0_30px_rgba(249,115,22,0.4)]">
                        <svg
                          className="w-20 group-hover:w-10 h-20 text-orange-400 ml-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  )}

                  {videoStarted && (
                    <div className="absolute mb-10 bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-3 bg-black/60 p-2 rounded-xl backdrop-blur-md border border-white/5">
                      <button
                        onClick={togglePlayPause}
                        className="p-2 text-white hover:text-orange-400 transition-colors"
                      >
                        {videoRef.current?.paused ? (
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        ) : (
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                          </svg>
                        )}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="p-2 text-white hover:text-orange-400 transition-colors"
                      >
                        {muted ? (
                          <svg
                            className="w-6 h-6"
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
                            className="w-6 h-6"
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
                <div className="relative outline-none h-[28rem] lg:h-[35rem] bg-black">
                  <Image
                    src="/Temple1.jpg"
                    alt="Divine Temples and Culture of India"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent items-end flex p-8">
                    <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-md">
                      Nritya Ganesha
                    </h3>
                  </div>
                </div>
                <div className="relative outline-none h-[28rem] lg:h-[35rem] bg-black">
                  <Image
                    src="/Temple2.jpg"
                    alt="Divine Temples and Culture of India"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-md">
                      Hoysala Architecture
                    </h3>
                  </div>
                </div>
                <div className="relative outline-none h-[28rem] lg:h-[35rem] bg-black">
                  <Image
                    src="/Temple3.jpg"
                    alt="Divine Temples and Culture of India"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-md">
                      Bhairava
                    </h3>
                  </div>
                </div>
                <div className="relative outline-none h-[28rem] lg:h-[35rem] bg-black">
                  <Image
                    src="/Temple4.jpg"
                    alt="Divine Temples and Culture of India"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-md">
                      Kartikeya
                    </h3>
                  </div>
                </div>
                <div className="relative outline-none h-[28rem] lg:h-[35rem] bg-black">
                  <Image
                    src="/Temple5.jpg"
                    alt="Divine Temples and Culture of India"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-md">
                      Kalyana Chalukyan architectural style
                    </h3>
                  </div>
                </div>
                <div className="relative outline-none h-[28rem] lg:h-[35rem] bg-black">
                  <Image
                    src="/Temple6.jpg"
                    alt="Divine Temples and Culture of India"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-md"></h3>
                  </div>
                </div>
                <div className="relative outline-none h-[28rem] lg:h-[35rem] bg-black">
                  <Image
                    src="/Temple7.jpg"
                    alt="Divine Temples and Culture of India"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-md"></h3>
                  </div>
                </div>
                <div className="relative outline-none h-[28rem] lg:h-[35rem] bg-black">
                  <Image
                    src="/Temple8.jpg"
                    alt="Divine Temples and Culture of India"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-md">
                      Makara Thorana
                    </h3>
                  </div>
                </div>
                <div className="relative outline-none h-[28rem] lg:h-[35rem] bg-black">
                  <Image
                    src="/Temple9.jpg"
                    alt="Divine Temples and Culture of India"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-md">
                      Shilabalika / Madanikas
                    </h3>
                  </div>
                </div>
                <div className="relative outline-none h-[28rem] lg:h-[35rem] bg-black">
                  <Image
                    src="/Temple10.jpg"
                    alt="Divine Temples and Culture of India"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-md"></h3>
                  </div>
                </div>
                <div className="relative outline-none h-[28rem] lg:h-[35rem] bg-black">
                  <Image
                    src="/Temple11.jpg"
                    alt="Divine Temples and Culture of India"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-md"></h3>
                  </div>
                </div>
                <div className="relative outline-none h-[28rem] lg:h-[35rem] bg-black">
                  <Image
                    src="/Temple12.jpg"
                    alt="Divine Temples and Culture of India"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-md"></h3>
                  </div>
                </div>
                <div className="relative outline-none h-[28rem] lg:h-[35rem] bg-black">
                  <Image
                    src="/Temple13.jpg"
                    alt="Divine Temples and Culture of India"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-md"></h3>
                  </div>
                </div>
                <div className="relative outline-none h-[28rem] lg:h-[35rem] bg-black">
                  <Image
                    src="/Temple14.jpg"
                    alt="Divine Temples and Culture of India"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-md">
                      Lord Narasimha, the fourth avatar of Lord Vishnu, slaying
                      the demon king Hiranyakashipu.
                    </h3>
                  </div>
                </div>
                <div className="relative outline-none h-[28rem] lg:h-[35rem] bg-black">
                  <Image
                    src="/Temple15.jpg"
                    alt="Divine Temples and Culture of India"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-md">
                      Gajasurasamhara
                    </h3>
                  </div>
                </div>
                <div className="relative outline-none h-[28rem] lg:h-[35rem] bg-black">
                  <Image
                    src="/Temple16.jpg"
                    alt="Divine Temples and Culture of India"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-md">
                      Bhagadatta is shown riding his war elephant, Supratika,
                      fighting against Bhima, who is typically identified by his
                      weapon, the Gadha (mace).
                    </h3>
                  </div>
                </div>
              </Slider>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-orange-400 font-bold tracking-widest uppercase text-sm mb-3 drop-shadow-sm">
              Sacred Heritage
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Discover the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-sm">
                Divine Forms
              </span>{" "}
              of Ancient Temples
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg font-light">
              Embark on a spiritual journey through timeless architecture,
              sacred traditions, and the profound stories that have shaped our
              rich cultural tapestry for millennia.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Uncover the mysteries of ancient architectural marvels.",
                "Read the profound epics and legends of the deities.",
                "Plan your spiritual pilgrimage to historic sacred sites.",
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <svg
                    className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/Stories"
                className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Read Stories
              </Link>
              <Link
                href="#Temple"
                className="px-8 py-3.5 bg-transparent text-orange-400 font-semibold border border-orange-500/50 rounded-lg hover:border-orange-400 hover:bg-orange-500/10 hover:-translate-y-0.5 transition-all duration-300"
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
