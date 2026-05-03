"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Data for the 8 Official Classical Dance Cards
const classicalDances = [
  {
    id: "bharatanatyam",
    name: "Bharatanatyam",
    origin: "Tamil Nadu",
    timeline:
      "Ancient (Roots 200 BCE–200 CE; Well-established 6th–9th Century CE)",
    origins:
      "Originally performed by Devadasis in Tamil Nadu temples (formerly known as Sadir). It is widely considered the oldest classical dance form, with roots in the ancient Tamil epic Silappadikaram.",
    description:
      "Known for its fixed upper torso, bent legs, and spectacular footwork. It is one of the oldest and most widely practiced classical dances.",
    image: "/Indiandevi.jpg",
  },
  {
    id: "kathak",
    name: "Kathak",
    origin: "North India",
    timeline:
      "Ancient/Medieval (Bards of North India; Mughal influence 16th Century)",
    origins:
      "Originated from the Kathakars or storytellers in North India, later evolving in Hindu temples and Mughal courts.",
    description:
      "Derived from 'Katha' (story). Famous for its intricate footwork, rapid pirouettes (chakkars), and expressive storytelling.",
    image: "/Architecture.jpg",
  },
  {
    id: "kathakali",
    name: "Kathakali",
    origin: "Kerala",
    timeline: "17th Century",
    origins:
      "Evolved from Ramanattam and Krishnattam, deeply rooted in Kerala's martial arts and temple rituals.",
    description:
      "A highly stylized 'story play' known for its elaborate makeup, massive headgear, and incredibly detailed facial expressions.",
    image: "/Indiandevi.jpg",
  },
  {
    id: "odissi",
    name: "Odissi",
    origin: "Odisha",
    timeline: "Ancient (Traced to 2nd Century BCE in Jain caves)",
    origins:
      "Rooted in temple rituals of Odisha, historically performed by female temple dancers called Maharis.",
    description:
      "Characterized by the 'Tribhangi' (three-part break) posture, mimicking the graceful sculptures found in ancient temple walls.",
    image: "/Architecture.jpg",
  },
  {
    id: "kuchipudi",
    name: "Kuchipudi",
    origin: "Andhra Pradesh",
    timeline: "17th Century (Modern form)",
    origins:
      "Developed as a dance-drama by Vaishnavaite monk Siddhendra Yogi in Andhra Pradesh.",
    description:
      "A dance-drama performance that combines graceful movements, fast footwork, and sometimes dancing on the rim of a brass plate.",
    image: "/Indiandevi.jpg",
  },
  {
    id: "manipuri",
    name: "Manipuri",
    origin: "Manipur",
    timeline: "Ancient/Medieval (Ritual roots; Formalization 18th Century)",
    origins:
      "Deeply spiritual, rooted in pre-recorded history. The popular Rasleela style was developed in the 18th century under King Bhagyachandra.",
    description:
      "A gentle, lyrical dance form often focused on the Ras Lila, featuring unique barrel-shaped skirts.",
    image: "/Architecture.jpg",
  },
  {
    id: "mohiniyattam",
    name: "Mohiniyattam",
    origin: "Kerala",
    timeline: "16th Century",
    origins:
      "Developed in the courts of Kerala, blending elements of Kathakali and Bharatanatyam.",
    description:
      "The 'Dance of the Enchantress', characterized by graceful, swaying movements and traditional white and gold costumes.",
    image: "/Indiandevi.jpg",
  },
  {
    id: "sattriya",
    name: "Sattriya",
    origin: "Assam",
    timeline: "15th Century",
    origins:
      "Introduced by the Vaishnava saint Srimanta Sankardeva, performed in Assamese monasteries (Sattras).",
    description:
      "A living tradition that combines devotion, music, and dance, often depicting mythological stories of Krishna.",
    image: "/Architecture.jpg",
  },
];

const Dance = () => {
  const container = useRef(null);
  const videoRef = useRef(null);

  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Preloader Logic
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Toggle Video Sound
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Scroll to Top Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) setShowTopBtn(true);
      else setShowTopBtn(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useGSAP(
    () => {
      if (isLoading) return;

      // Delayed Hero Text Reveal
      gsap.to(".hero-delayed-text", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top -15px",
          toggleActions: "play none none reverse",
        },
      });

      // Animate standard text sections fading up
      const sections = gsap.utils.toArray(".gsap-fade-up");
      sections.forEach((section) => {
        gsap.from(section, {
          y: 50,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      });

      // Stagger animate the dance cards
      gsap.from(".dance-card", {
        y: 60,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".dance-grid",
          start: "top 80%",
        },
      });
    },
    { scope: container, dependencies: [isLoading] },
  );

  return (
    <>
      {/* 0. PRELOADER */}
      <div
        className={`fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
          isLoading
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="w-16 h-16 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin mb-6"></div>
        <p className="text-orange-500 font-serif tracking-[0.2em] uppercase text-sm animate-pulse">
          Awakening the Cosmos...
        </p>
      </div>

      <main
        ref={container}
        className={`min-h-screen bg-[#0a0a0a] text-gray-300 relative overflow-hidden transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* 1. HERO SECTION */}
        <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            src="/Dance/Nataraja.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-screen h-screen object-cover scale-105 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0a0a0a]"></div>

          <button
            onClick={toggleMute}
            className="absolute bottom-24 right-10 md:right-12 z-20 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-orange-500 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300"
            aria-label={isMuted ? "Unmute Video" : "Mute Video"}
          >
            {isMuted ? (
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
                  d="M15.536 8.464a5 5 0 010 7.072M17.657 6.343a8 8 0 010 11.314M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            )}
          </button>

          <div className="relative z-10 text-center px-6 mt-20">
            <span className="hero-delayed-text opacity-0 translate-y-12 inline-block text-orange-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">
              The Rhythm of the Universe
            </span>
            <h1 className="hero-delayed-text opacity-0 translate-y-12 text-6xl md:text-8xl font-serif text-white mb-6 drop-shadow-2xl">
              Nataraja
            </h1>
            <p className="hero-delayed-text opacity-0 translate-y-12 text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto drop-shadow-md">
              The Lord of Dance and the Cosmic Choreographer.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="gsap-fade-up order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Who is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  Nataraja?
                </span>
              </h2>
              <p className="text-lg leading-relaxed mb-6 font-light">
                Nataraja is a depiction of the Hindu god Shiva as the divine
                cosmic dancer. His dance, the <strong>Ananda Tandava</strong>{" "}
                (Dance of Bliss), represents the continuous cycle of creation,
                preservation, and destruction of the universe.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">🔥</span>
                  <span>
                    <strong>Upper Left Hand hand The Fire (Agni):</strong> Held
                    in his upper left hand, representing destruction and
                    transformation.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">🥁</span>
                  <span>
                    <strong>Upper Right Hand having the Drum (Damaru):</strong>{" "}
                    Held in his upper right hand, creating the primal sound of
                    creation (Om).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">✋</span>
                  <span>
                    <strong>With Lower Right Hand giving Abhaya Mudra:</strong>{" "}
                    His lower right hand signals "fear not," offering protection
                    to the righteous.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">🐘</span>
                  <span>
                    <strong>With Lower Left Hand Gajahasta Mudra:</strong> It
                    features one hand stretched across the chest or hanging
                    down, resembling an elephant's trunk.Represents the trunk of
                    an elephant (gaja), signifying strength, wisdom, and the
                    removal of obstacles
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">🦶🏻</span>
                  <span>
                    <strong>Right Foot:</strong> Tramples the dwarf demon
                    Apasmara, symbolizing the subjugation of ignorance and ego.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">🦶🏻</span>
                  <span>
                    <strong>Left Foot:</strong> Raised in the "dance of bliss,"
                    representing liberation.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">❖</span>
                  <span>
                    <strong>Prabha Mandala:</strong> A halo of fire surrounding
                    Shiva, representing the cosmos, the cycle of birth and
                    death, and the separation of the divine from the material
                    world.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl"></span>
                  <span>
                    <strong>Hair:</strong>His long, flowing locks (jatamukuta)
                    signify his yogic nature, with the goddess Ganga often
                    depicted in them.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">✋</span>
                  <span>
                    <strong>Serpent:</strong> A snake, symbolizing the kundalini
                    power (spiritual energy), uncoils from his lower right
                    forearm.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">✋</span>
                  <span>
                    <strong>Earrings:</strong>A male makara-kundala (mythical
                    sea creature earring) in one ear and a female circular
                    earring in the other, reflecting the balance of male and
                    female energies.
                  </span>
                </li>
              </ul>
            </div>
            <div className="gsap-fade-up order-1 lg:order-2 relative h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(249,115,22,0.15)]">
              <Image
                src="/Indiandevi.jpg"
                alt="Statue of Nataraja"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 relative border-b border-white/5">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="gsap-fade-up text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              Science & Mysticism
            </span>
            <h2 className="gsap-fade-up text-4xl md:text-5xl font-serif text-white mb-8">
              Why is Shiva at the CERN Laboratory?
            </h2>
            <p className="gsap-fade-up text-xl leading-relaxed font-light text-gray-300 mb-8">
              In 2004, the Indian government gifted a 2-meter statue of Nataraja
              to <strong>CERN</strong> (The European Organization for Nuclear
              Research) in Geneva, Switzerland. But why place an ancient deity
              at the center of the world's most advanced particle physics
              laboratory?
            </p>
            <div className="gsap-fade-up p-8 md:p-12 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>
              <p className="text-lg leading-relaxed text-gray-300 relative z-10">
                Modern physics has shown that the universe is not made of solid,
                dead matter, but is a continuous, dynamic web of energy.
                Subatomic particles are constantly being created and destroyed
                in an endless, rhythmic dance.
                <br />
                <br />
                As physicist Fritjof Capra famously stated:{" "}
                <em>
                  "Modern physics has revealed that every subatomic particle not
                  only performs an energy dance, but also is an energy dance...
                  For the modern physicists, then, Shiva's dance is the dance of
                  subatomic matter."
                </em>
              </p>
            </div>
          </div>
        </section>

        {/* 2. THE DIVINE LINEAGE TIMELINE */}
        <section className="py-24 px-6 md:px-12 relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="gsap-fade-up text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              The Transmission of Knowledge
            </span>
            <h2 className="gsap-fade-up text-4xl md:text-5xl font-serif text-white mb-6">
              How the Dance Came to Earth
            </h2>
            <p className="gsap-fade-up text-lg text-gray-400 font-light max-w-2xl mx-auto">
              According to Hindu tradition, the art of dance was not invented by
              humans, but handed down through a divine lineage from the gods to
              the sages.
            </p>
          </div>

          <div className="relative border-l border-orange-500/30 ml-4 md:ml-8 space-y-16 pb-8">
            <div className="gsap-fade-up relative pl-10 md:pl-16">
              <div className="absolute -left-[11px] top-2 w-5 h-5 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)] border-4 border-[#0a0a0a]"></div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-orange-500/40 transition-colors">
                <span className="text-orange-400 font-serif text-xl italic mb-2 block">
                  1. The Source
                </span>
                <h3 className="text-3xl font-serif text-white mb-4">
                  Lord Shiva's Tandava
                </h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  It all begins with the supreme cosmic dancer. Lord Shiva
                  performs the vigorous, masculine <strong>Tandava</strong> and
                  the goddess Parvati responds with the gentle, graceful{" "}
                  <strong>Lasya</strong>. Together, they generate the primal
                  energy of the universe.
                </p>
              </div>
            </div>

            <div className="gsap-fade-up relative pl-10 md:pl-16">
              <div className="absolute -left-[11px] top-2 w-5 h-5 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)] border-4 border-[#0a0a0a]"></div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-orange-500/40 transition-colors">
                <span className="text-orange-400 font-serif text-xl italic mb-2 block">
                  2. The Compilation
                </span>
                <h3 className="text-3xl font-serif text-white mb-4">
                  Lord Brahma & The Natya Veda
                </h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Witnessing this divine dance, Lord Brahma distilled the
                  essence of the four sacred Vedas into a single, accessible
                  form. He took words from the Rigveda, music from the Samaveda,
                  gestures from the Yajurveda, and emotions from the Atharvaveda
                  to create the <strong>Natya Veda</strong>.
                </p>
              </div>
            </div>

            <div className="gsap-fade-up relative pl-10 md:pl-16">
              <div className="absolute -left-[11px] top-2 w-5 h-5 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)] border-4 border-[#0a0a0a] animate-pulse"></div>
              <div className="bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 p-8 rounded-2xl backdrop-blur-md">
                <span className="text-orange-400 font-serif text-xl italic mb-2 block">
                  3. The Codification
                </span>
                <h3 className="text-3xl font-serif text-white mb-4">
                  Bharata Muni's Natya Shastra
                </h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  The divine Natya Veda was too profound for ordinary humans to
                  grasp directly. Brahma passed this knowledge to the sage{" "}
                  <strong>Bharata Muni</strong>, who codified this celestial
                  knowledge into a structured manual for human artists: the{" "}
                  <strong>Natya Shastra</strong>.
                </p>
              </div>
            </div>

            <div className="gsap-fade-up relative pl-10 md:pl-16">
              {/* This dot pulses to show it is a living, ongoing tradition */}
              <div className="absolute -left-[11px] top-2 w-5 h-5 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)] border-4 border-[#0a0a0a] animate-pulse"></div>

              <div className="bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 p-8 rounded-2xl backdrop-blur-md">
                <span className="text-orange-400 font-serif text-xl italic mb-2 block">
                  4. The Legacy
                </span>
                <h3 className="text-3xl font-serif text-white mb-4">
                  The Classical Dances
                </h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  From the Natya Shastra, the strict rules of expression
                  (Bhava), melody (Raga), and rhythm (Tala) were established.
                  Over thousands of years, these rules evolved within the
                  temples of different Indian regions, giving birth to the
                  magnificent classical dance forms we see today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE NATYA SHASTRA & THE 3 PILLARS */}
        <section className="py-24 px-6 md:px-12 relative bg-gradient-to-b from-[#0a0a0a] to-[#111]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="gsap-fade-up text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                The Blueprint
              </span>
              <h2 className="gsap-fade-up text-4xl md:text-5xl font-serif text-white mb-6">
                The Three Pillars of Dance
              </h2>
              <p className="gsap-fade-up text-lg text-gray-400 font-light max-w-3xl mx-auto mb-16">
                According to the Natya Shastra, every classical Indian dance is
                a perfect balance of three foundational elements. A dancer must
                master all three to truly connect the human with the divine.
              </p>
            </div>

            {/* THE THREE PILLARS (Nritta, Nritya, Natya) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Pillar 1: Nritta */}
              <div className="gsap-fade-up bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-orange-500/40 transition-colors">
                <div className="text-4xl mb-4">🥁</div>
                <h3 className="text-2xl font-serif text-white mb-3">Nritta</h3>
                <h4 className="text-orange-400 text-xs uppercase tracking-widest mb-4">
                  Pure Dance
                </h4>
                <p className="text-gray-300 font-light text-sm leading-relaxed">
                  Dancing without facial expression or story. Nritta is
                  abstract, focusing purely on rhythm, timing, and the geometric
                  movements of the body in space.
                </p>
              </div>

              {/* Pillar 2: Nritya */}
              <div className="gsap-fade-up bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-orange-500/40 transition-colors">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-2xl font-serif text-white mb-3">Nritya</h3>
                <h4 className="text-orange-400 text-xs uppercase tracking-widest mb-4">
                  Expressive Dance
                </h4>
                <p className="text-gray-300 font-light text-sm leading-relaxed">
                  Dancing with emotion. Nritya utilizes the <em>Navarasas</em>{" "}
                  (the nine human emotions) and intricate mudras (hand gestures)
                  to convey feelings and artistic sentiment.
                </p>
              </div>

              {/* Pillar 3: Natya */}
              <div className="gsap-fade-up bg-gradient-to-b from-white/5 to-orange-500/10 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-orange-500/40 transition-colors">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-2xl font-serif text-white mb-3">Natya</h3>
                <h4 className="text-orange-400 text-xs uppercase tracking-widest mb-4">
                  Storytelling
                </h4>
                <p className="text-gray-300 font-light text-sm leading-relaxed">
                  The ultimate dramatic storytelling. Natya combines both Nritta
                  and Nritya to enact complete narratives, such as scenes from
                  the Ramayana or Mahabharata.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. NEW: THE NATYA SHASTRA */}
        <section className="py-24 px-6 md:px-12 relative bg-gradient-to-b from-[#0a0a0a] to-[#111]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="gsap-fade-up text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                The Origins
              </span>
              <h2 className="gsap-fade-up text-4xl md:text-5xl font-serif text-white mb-6">
                The Natya Shastra: The Fifth Veda
              </h2>
              <p className="gsap-fade-up text-lg text-gray-400 font-light max-w-3xl mx-auto">
                Indian classical dance forms are deeply rooted in the Natya
                Shastra, an ancient text on performing arts originally derived
                from the cosmic dance of Shiva.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column: The Story */}
              <div className="gsap-fade-up space-y-8">
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                  <h3 className="text-2xl font-serif text-orange-400 mb-4">
                    The Creation of the Natya Veda
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-light text-sm md:text-base">
                    After composing the four Vedas, Brahma wanted to create a
                    fifth Veda that contained the core and essence of all four,
                    making it accessible to all. Thus, the{" "}
                    <strong>Natya Veda</strong> (36,000 verses) was composed.
                    From this divine source, the Vedic sage Bharata Muni
                    recorded the <strong>Natya Shastra</strong>.
                  </p>
                </div>

                <div className="p-8 bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-2xl backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 text-6xl opacity-20">
                    📖
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-4 italic">
                    The Four Elements
                  </h3>
                  <p className="text-gray-300 font-light text-sm md:text-base mb-4">
                    "Recitation from Rigveda, Music from Samaveda, Abhinayam
                    from Yajurveda, and Rasa from Atharvaveda was blended into
                    one corpus - Natya Veda." <br />
                    <span className="text-orange-400 text-xs uppercase tracking-widest block mt-2">
                      — Natya Shastra 1.17
                    </span>
                  </p>
                </div>
              </div>

              {/* Right Column: The Components */}
              <div className="gsap-fade-up p-8 border border-white/10 rounded-2xl bg-black/40">
                <h3 className="text-2xl font-serif text-white mb-6 border-b border-white/10 pb-4">
                  Beyond Just Dance
                </h3>
                <p className="text-gray-300 font-light text-sm md:text-base mb-6">
                  Natya Shastra is the interplay between <strong>Bhava</strong>{" "}
                  (The artistic sentiment) & <strong>Rasa</strong> (The
                  Emotional Effect). It includes <em>Sangeetam</em> (Music),{" "}
                  <em>Sahityam</em> (Literature), and <em>Natyam</em> (Dance).
                  Every detail is codified:
                </p>

                <ul className="space-y-4 text-sm text-gray-400">
                  <li className="flex gap-3">
                    <span className="text-orange-500">❖</span>{" "}
                    <strong>Expressions & Emotions:</strong> Rasas & Bhavas
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500">❖</span>{" "}
                    <strong>Hand Gestures:</strong> Mudras
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500">❖</span>{" "}
                    <strong>Music & Rhythm:</strong> Ragas, Talas, and Chandas
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500">❖</span>{" "}
                    <strong>Literature and Dialogue:</strong> Sahitya
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500">❖</span>{" "}
                    <strong>Costumes & Jewellery:</strong> Strict guidelines on
                    cosmetics, garlands, and exactly where ornaments should be
                    worn.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500">❖</span>{" "}
                    <strong>Physical moves:</strong> Angika Abhinaya
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500">❖</span>{" "}
                    <strong>Stagecraft:</strong> Set design, layout, and
                    audience engagement.
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-orange-400 font-serif italic">
                    "Natya Vedam is the conduit towards the compendium of all
                    vedas and shastras." <br />
                    <span className="text-gray-500 text-xs uppercase tracking-widest not-italic block mt-2">
                      — Natya Shastra 1.15
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SACRED GEOMETRY (Mathematics in Motion) */}
        <section className="py-24 px-6 md:px-12 relative border-t border-white/5">
          <div className="absolute inset-0 bg-orange-500/5 backdrop-blur-[2px]"></div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="gsap-fade-up">
              <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                Mathematics in Motion
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
                Sacred Geometry
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-gray-300 font-light leading-relaxed">
                  In Indian classical dance, sacred geometry lives within every
                  gesture and step. The dancer's body becomes a moving{" "}
                  <strong>Yantra</strong>, tracing circles, triangles, and lotus
                  patterns that mirror the cosmic order.
                </p>
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                  With precise symmetry of hands, feet, and gaze, the dance
                  aligns rhythm with geometry. It transforms movement into
                  prayer, embodying the eternal union of the human and the
                  divine.
                </p>
                <p className="text-lg text-gray-400 font-light leading-relaxed border-l-2 border-orange-500 pl-4 py-2 italic">
                  "Dance is not only movement. It is mathematics in motion. In
                  Bharatanatyam, every line, angle, and symmetry creates harmony
                  between body, rhythm, and space—revealing the hidden patterns
                  of the universe."
                </p>
              </div>
            </div>

            {/* Geometric Visualization (CSS Art) */}
            <div className="gsap-fade-up relative h-[400px] w-full flex items-center justify-center">
              {/* Outer glowing circle */}
              <div className="absolute w-[300px] h-[300px] rounded-full border border-orange-500/30 animate-[spin_20s_linear_infinite]"></div>
              {/* Inner glowing circle */}
              <div className="absolute w-[200px] h-[200px] rounded-full border border-orange-400/50 animate-[spin_15s_linear_infinite_reverse]"></div>
              {/* Triangle */}
              <div className="absolute w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[173px] border-b-orange-500/20"></div>
              {/* Center Dot */}
              <div className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#fff]"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
            </div>
          </div>
        </section>

        {/* 6. CLASSICAL DANCES (Cards Grid) */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="gsap-fade-up text-4xl md:text-5xl font-serif text-white mb-4">
              The 8 Classical Dances of India
            </h2>
            <p className="gsap-fade-up text-lg text-gray-400 font-light">
              Evolving from the Natya Shastra, these forms are recognized by the
              Sangeet Natak Akademi.
            </p>
          </div>

          <div className="dance-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classicalDances.map((dance, index) => (
              <Link
                key={index}
                href={`/Dances/${dance.id}`}
                className="dance-card group relative h-[380px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_15px_40px_rgba(249,115,22,0.15)] block"
              >
                <Image
                  src={dance.image}
                  alt={dance.name}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

                <div className="absolute bottom-0 w-full p-6 z-10 flex flex-col h-full justify-end">
                  <span className="text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-1 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {dance.origin}
                  </span>
                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {dance.name}
                  </h3>
                  <p className="text-xs text-gray-300 font-light leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75 line-clamp-3">
                    {dance.description}
                  </p>
                  <div className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mt-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 flex items-center gap-1">
                    Explore Details <span>&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FLOATING SCROLL TO TOP BUTTON */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-orange-500/10 backdrop-blur-md border border-orange-500/30 text-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:bg-orange-500 hover:text-white hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all duration-500 ease-in-out ${
            showTopBtn
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
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
    </>
  );
};

export default Dance;
