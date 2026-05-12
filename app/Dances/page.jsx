"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// --- MOCK DATA ---
const classicalDances = [
  {
    id: "bharatanatyam",
    name: "Bharatanatyam",
    origin: "Tamil Nadu",
    description:
      "Known for its fixed upper torso, bent legs, and spectacular footwork. It is one of the oldest and most widely practiced classical dances.",
    image: "/Dance/Bharatanatyam.jpg",
  },
  {
    id: "kathak",
    name: "Kathak",
    origin: "North India",
    description:
      "Derived from 'Katha' (story). Famous for its intricate footwork, rapid pirouettes (chakkars), and expressive storytelling.",
    image: "/Dance/Kathak.jpg",
  },
  {
    id: "kathakali",
    name: "Kathakali",
    origin: "Kerala",
    description:
      "A highly stylized 'story play' known for its elaborate makeup, massive headgear, and incredibly detailed facial expressions.",
    image: "/Dance/Kathakali.jpg",
  },
  {
    id: "odissi",
    name: "Odissi",
    origin: "Odisha",
    description:
      "Characterized by the 'Tribhangi' (three-part break) posture, mimicking the graceful sculptures found in ancient temple walls.",
    image: "/Dance/Odissi.jpg",
  },
  {
    id: "kuchipudi",
    name: "Kuchipudi",
    origin: "Andhra Pradesh",
    description:
      "A dance-drama performance that combines graceful movements, fast footwork, and sometimes dancing on the rim of a brass plate.",
    image: "/Dance/Kuchipudi.jpg",
  },
  {
    id: "manipuri",
    name: "Manipuri",
    origin: "Manipur",
    description:
      "A gentle, lyrical dance form often focused on the Ras Lila, featuring unique barrel-shaped skirts.",
    image: "/Dance/Manipuri.jpg",
  },
  {
    id: "mohiniyattam",
    name: "Mohiniyattam",
    origin: "Kerala",
    description:
      "The 'Dance of the Enchantress', characterized by graceful, swaying movements and traditional white and gold costumes.",
    image: "/Dance/Mohiniyattam.jpg",
  },
  {
    id: "sattriya",
    name: "Sattriya",
    origin: "Assam",
    description:
      "A living tradition that combines devotion, music, and dance, often depicting mythological stories of Krishna.",
    image: "/Dance/Sattriya.jpg",
  },
];

const theatricalDances = [
  {
    id: "chhau",
    name: "Chhau",
    origin: "Eastern India",
    badge: "9th Classical Dance",
    description:
      "A spectacular, high-energy martial dance-drama known for breathtaking acrobatics, sword combat, and massive masks.",
    image: "/Dance/Chhau.jpg",
  },
  {
    id: "gaudiya-nritya",
    name: "Gaudiya Nritya",
    origin: "West Bengal",
    badge: "Reconstructed Classical",
    description:
      "A highly spiritual, fluid, and lyrical dance deeply connected to Gaudiya Vaishnavism and ancient terracotta temple sculptures.",
    image: "/Dance/Gaudiya.jpg",
  },
  {
    id: "yakshagana",
    name: "Yakshagana",
    origin: "Karnataka",
    badge: "Traditional Theatre",
    description:
      "A twilight-to-dawn theatrical masterpiece known for its booming drums, extempore dialogue, and glittering headgear.",
    image: "/Dance/Yakshagana.jpg",
  },
  {
    id: "bhagavata-mela",
    name: "Bhagavata Mela",
    origin: "Tamil Nadu",
    badge: "Sacred Temple Theatre",
    description:
      "A highly religious, all-male traditional dance-drama performed exclusively in the temples of the Thanjavur district.",
    image: "/Dance/BhagavataMela.jpg",
  },
  {
    id: "padayani",
    name: "Padayani",
    origin: "Kerala",
    badge: "Ritual Mask Theatre",
    description:
      "A visually striking ritualistic theatre art using massive, colorful masks made of areca nut fronds to enact divine mythology.",
    image: "/Dance/Padayani.jpg",
  },
  {
    id: "paika",
    name: "Paika Dance",
    origin: "Odisha",
    badge: "Martial Dance",
    description:
      "An explosive martial arts dance performed with swords and shields, preserving the ancient combat techniques of Odisha's warriors.",
    image: "/Dance/Paika.jpg",
  },
];

const folkDances = [
  {
    name: "Lava",
    origin: "Lakshadweep",
    desc: "A vibrant, rhythmic dance performed by men to the beats of drums.",
  },
  {
    name: "Garadi",
    origin: "Puducherry",
    desc: "A celebratory dance historically associated with the epic Ramayana.",
  },
  {
    name: "Dekhni",
    origin: "Goa",
    desc: "A semi-classical Goan dance combining Indian and Western musical styles.",
  },
  {
    name: "Nicobari",
    origin: "Andaman & Nicobar",
    desc: "A traditional tribal dance performed during the Ossuary Feast.",
  },
  {
    name: "Perini Shivatandavam",
    origin: "Telangana",
    desc: "An ancient warrior dance performed by men in honor of Lord Shiva.",
  },
  {
    name: "Lavani",
    origin: "Maharashtra",
    desc: "A high-energy dance known for its powerful rhythm and expressiveness.",
  },
  {
    name: "Tarpa",
    origin: "Dadra & Nagar Haveli",
    desc: "A tribal dance performed in a circle around a musician playing a wind instrument.",
  },
  {
    name: "Garba",
    origin: "Gujarat",
    desc: "A joyful, circular devotion dance performed during the Navaratri festival.",
  },
  {
    name: "Jawara",
    origin: "Madhya Pradesh",
    desc: "A harvest dance performed by women balancing baskets of jawar on their heads.",
  },
  {
    name: "Gaur Maria",
    origin: "Chhattisgarh",
    desc: "A ritualistic tribal dance imitating the movements of the wild bison.",
  },
  {
    name: "Jhumair",
    origin: "Jharkhand",
    desc: "A lively folk dance performed during the harvest season and local festivals.",
  },
  {
    name: "Hojagiri",
    origin: "Tripura",
    desc: "Performed by women balancing earthen pitchers and lamps on their heads.",
  },
  {
    name: "Cheraw",
    origin: "Mizoram",
    desc: "A highly skilled dance involving the rhythmic tapping of bamboo staves.",
  },
  {
    name: "Chang Lo",
    origin: "Nagaland",
    desc: "A warrior dance traditionally performed to celebrate a victory over enemies.",
  },
  {
    name: "Buiya",
    origin: "Arunachal Pradesh",
    desc: "A joyful dance of the Digaru Mishmi tribe celebrating community ties.",
  },
  {
    name: "Bihu",
    origin: "Assam",
    desc: "A joyous dance celebrating the Assamese New Year and the spring season.",
  },
  {
    name: "Chu-Faat",
    origin: "Sikkim",
    desc: "A Lepcha tribal dance performed in honor of Mount Khangchendzonga.",
  },
  {
    name: "Ka Shad Suk Mynsiem",
    origin: "Meghalaya",
    desc: "The 'Dance of the Joyful Heart', a thanksgiving festival dance.",
  },
  {
    name: "Jat-Jatin",
    origin: "Bihar",
    desc: "A narrative dance depicting the story of the lovers Jat and Jatin.",
  },
  {
    name: "Ghumar",
    origin: "Rajasthan",
    desc: "A graceful, twirling dance traditionally performed by women in flowing skirts.",
  },
  {
    name: "Jhumar",
    origin: "Haryana",
    desc: "A lively dance, taking its name from the 'Jhumar' ornament worn on the forehead.",
  },
  {
    name: "Choliya",
    origin: "Uttarakhand",
    desc: "A martial sword dance traditionally performed during marriage processions.",
  },
  {
    name: "Nati",
    origin: "Himachal Pradesh",
    desc: "A slow, rhythmic community dance celebrating the harvest and new year.",
  },
  {
    name: "Bhangra",
    origin: "Punjab",
    desc: "A highly energetic, vibrant harvest dance performed to the beat of the dhol.",
  },
  {
    name: "Rouf",
    origin: "Jammu & Kashmir",
    desc: "A traditional springtime dance performed by women in synchronized rows.",
  },
  {
    name: "Kathok Chenmo",
    origin: "Sikkim",
    desc: "A traditional monastic dance deeply related to Buddhist rituals.",
  },
];

const contemporaryDances = [
  {
    id: "pioneer-modern",
    name: "Pioneer Modern",
    origin: "Pan-India",
    badge: "The Foundation",
    description:
      "Pioneered by Uday Shankar in the 1920s, this style beautifully blends European theatrical techniques with Indian themes and aesthetics.",
    image: "/Dance/ModernIndian.jpg",
  },
  {
    id: "neo-bharatam",
    name: "Neo-Classical",
    origin: "Chennai / South India",
    badge: "Deconstructed",
    description:
      "A radical deconstruction of classical forms, fusing Bharatanatyam with Yoga and Kalaripayattu to explore modern, abstract themes.",
    image: "/Dance/NeoClassical.jpg",
  },
  {
    id: "martial-fusion",
    name: "Aerial & Martial",
    origin: "Modern Stages",
    badge: "Avant-Garde",
    description:
      "A breathtaking fusion of Chhau, Kalaripayattu, Mallakhamb, and aerial acrobatics that pushes human kinetic boundaries.",
    image: "/Dance/MartialFusion.jpg",
  },
  {
    id: "urban-bollywood",
    name: "Urban Contemporary",
    origin: "Mumbai / Media",
    badge: "Pop & Lyrical",
    description:
      "A highly emotional, lyrical, and acrobatic style that blends Western contemporary with Indian rhythm, dominating modern television.",
    image: "/Dance/UrbanContemp.jpg",
  },
];

// --- PREMIUM SPOTLIGHT LINK COMPONENT ---
function SpotlightLink({ href, children, className, glowColor }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Link
      href={href}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group block relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      {children}
    </Link>
  );
}

// --- MAIN COMPONENT ---
const Dance = () => {
  const container = useRef(null);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Preloader Logic
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 2500);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

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
      gsap.fromTo(
        ".hero-delayed-text",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: container.current, start: "top top" },
        },
      );

      // Animate standard text sections fading up
      const sections = gsap.utils.toArray(".gsap-fade-up");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 85%" },
          },
        );
      });

      // Stagger animate the dance card wrappers (prevents hover conflict)
      gsap.fromTo(
        ".dance-card-wrapper",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".dance-grid", start: "top 80%" },
        },
      );
    },
    { scope: container, dependencies: [isLoading] },
  );

  return (
    <>
      {/* 0. PRELOADER */}
      <div
        className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050505] transition-all duration-1000 ease-in-out ${
          isLoading
            ? "opacity-100 scale-100"
            : "opacity-0 scale-105 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-orange-600/5 blur-[120px] rounded-full animate-pulse"></div>
        </div>
        <div className="relative flex items-center justify-center w-32 h-32 mb-8">
          <div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-[spin_8s_linear_infinite]"></div>
          <div className="absolute inset-2 border-t-2 border-r-2 border-orange-500/80 rounded-full animate-[spin_3s_linear_infinite_reverse] shadow-[0_0_20px_rgba(249,115,22,0.4)]"></div>
          <div className="absolute inset-5 border-b-2 border-l-2 border-amber-400/90 rounded-full animate-[spin_1.5s_linear_infinite]"></div>
          <span className="absolute text-4xl animate-pulse drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]">
            🕉️
          </span>
        </div>
        <div className="flex flex-col items-center relative z-10">
          <h2 className="text-white font-serif tracking-[0.4em] uppercase text-lg mb-4 drop-shadow-md">
            Vishwaguru
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-4 opacity-70"></div>
          <p className="text-orange-400/70 text-[10px] font-bold tracking-[0.3em] uppercase animate-pulse">
            Awakening the Cosmos...
          </p>
        </div>
      </div>

      <main
        ref={container}
        className={`min-h-screen bg-[#050505] text-gray-300 relative overflow-hidden transition-opacity duration-1000 selection:bg-orange-500/30 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* HERO SECTION */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
          <Image
            src="/Dance/Nataraja.jpg"
            alt="Nataraja Cosmic Dance"
            fill
            className="object-cover scale-105 opacity-60 mix-blend-lighten"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#050505]"></div>

          <div className="relative z-10 text-center px-6 mt-20 max-w-5xl">
            <span className="hero-delayed-text inline-flex items-center gap-3 text-orange-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 border border-orange-500/30 px-5 py-2 rounded-full bg-orange-500/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              The Rhythm of the Universe
            </span>
            <h1 className="hero-delayed-text text-6xl md:text-8xl lg:text-9xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white via-orange-100 to-orange-400 mb-6 drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]">
              Nataraja
            </h1>
            <p className="hero-delayed-text text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto drop-shadow-md">
              The Lord of Dance and the Cosmic Choreographer.
            </p>
          </div>
        </section>

        {/* NATARAJA ATTRIBUTES SECTION */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="gsap-fade-up order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                Who is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  Nataraja?
                </span>
              </h2>
              <p className="text-lg leading-relaxed mb-10 font-light text-gray-400">
                Nataraja is a depiction of the Hindu god Shiva as the divine
                cosmic dancer. His dance, the{" "}
                <strong className="text-white font-medium">
                  Ananda Tandava
                </strong>{" "}
                (Dance of Bliss), represents the continuous cycle of creation,
                preservation, and destruction.
              </p>

              <div className="relative h-[550px] rounded-3xl overflow-hidden bg-[#111]/40 border border-white/10 backdrop-blur-xl">
                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#111] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#111] to-transparent z-10 pointer-events-none"></div>

                <ul className="space-y-4 h-full overflow-y-auto px-6 py-8 scrollbar-thin scrollbar-thumb-orange-500/30 scrollbar-track-transparent">
                  {[
                    {
                      icon: "🔥",
                      title: "Upper Left Hand (Agni)",
                      desc: "Holds the divine fire, representing destruction, transformation, and the end of the universe.",
                    },
                    {
                      icon: "🥁",
                      title: "Upper Right Hand (Damaru)",
                      desc: "Holds the hourglass drum, creating the primal rhythmic sound of creation (Om).",
                    },
                    {
                      icon: "✋",
                      title: "Lower Right Hand (Abhaya)",
                      desc: "Signals 'fear not,' offering protection and peace to the righteous.",
                    },
                    {
                      icon: "🐘",
                      title: "Lower Left Hand (Gajahasta)",
                      desc: "Stretched across the chest resembling an elephant's trunk, signifying strength and wisdom.",
                    },
                    {
                      icon: "🦶🏽",
                      title: "The Right Foot",
                      desc: "Tramples the dwarf demon Apasmara, symbolizing the absolute subjugation of human ego.",
                    },
                    {
                      icon: "🕊️",
                      title: "The Left Foot (Raised)",
                      desc: "Lifted high in the 'dance of bliss,' representing ultimate spiritual liberation (Moksha).",
                    },
                    {
                      icon: "☀️",
                      title: "Prabha Mandala",
                      desc: "The arch of flames surrounding Shiva represents the boundary of the cosmos and time.",
                    },
                    {
                      icon: "🌪️",
                      title: "Flying Locks (Jata)",
                      desc: "His matted hair spreads horizontally, indicating the fierce, intense motion of the dance.",
                    },
                    {
                      icon: "💀",
                      title: "The Skull",
                      desc: "A profound symbol of mortality, detachment, and Shiva's conquest over death (Mahakala).",
                    },
                    {
                      icon: "🐍",
                      title: "The Serpents",
                      desc: "Snakes represent Kundalini energy, the shedding of past lives, and mastery over fear.",
                    },
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start bg-white/[0.02] border border-white/5 p-4 rounded-2xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-colors"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-xl mr-4 border border-orange-500/20">
                        {item.icon}
                      </div>
                      <div>
                        <strong className="text-white text-base block mb-1 font-serif">
                          {item.title}
                        </strong>
                        <span className="text-sm font-light text-gray-400 leading-relaxed">
                          {item.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="gsap-fade-up order-1 lg:order-2 relative h-[600px] lg:h-[750px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(249,115,22,0.15)] sticky top-28">
              <Image
                src="/Dance/Nataraja.jpg"
                alt="Nataraja"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* CERN SECTION */}
        <section className="py-24 px-6 md:px-12 relative border-b border-white/5 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="gsap-fade-up text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              Science & Mysticism
            </span>
            <h2 className="gsap-fade-up text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">
              Why is Shiva at the CERN Laboratory?
            </h2>
            <p className="gsap-fade-up text-xl leading-relaxed font-light text-gray-400 mb-12 max-w-3xl mx-auto">
              In 2004, the Indian government gifted a 2-meter statue of Nataraja
              to <strong>CERN</strong> (The European Organization for Nuclear
              Research). But why place an ancient deity at the center of the
              world's most advanced particle physics laboratory?
            </p>

            <div className="gsap-fade-up p-10 md:p-16 bg-[#111]/60 backdrop-blur-xl rounded-[2rem] border border-orange-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.5),_inset_0_0_20px_rgba(249,115,22,0.05)] text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
              <svg
                className="absolute top-8 left-8 w-16 h-16 text-orange-500/10 transform -scale-x-100 -scale-y-100"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-xl leading-relaxed text-gray-300 relative z-10 font-light italic mb-8">
                "Modern physics has revealed that every subatomic particle not
                only performs an energy dance, but also is an energy dance...
                For the modern physicists, then, Shiva's dance is the dance of
                subatomic matter."
              </p>
              <div className="relative z-10 border-l-2 border-orange-500 pl-4">
                <strong className="text-white block font-serif text-lg">
                  Fritjof Capra
                </strong>
                <span className="text-gray-500 text-sm uppercase tracking-widest">
                  Theoretical Physicist
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* THE DIVINE LINEAGE TIMELINE */}
        <section className="py-24 px-6 md:px-12 relative max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="gsap-fade-up text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              The Transmission
            </span>
            <h2 className="gsap-fade-up text-4xl md:text-5xl font-serif text-white mb-6">
              How the Dance Came to Earth
            </h2>
          </div>

          <div className="relative border-l border-orange-500/20 ml-4 md:ml-8 space-y-12 pb-8">
            {[
              {
                num: "1",
                title: "Lord Shiva's Tandava",
                desc: "The supreme cosmic dancer performs the vigorous Tandava and goddess Parvati responds with the graceful Lasya.",
              },
              {
                num: "2",
                title: "Lord Brahma & The Natya Veda",
                desc: "Witnessing this dance, Brahma distilled the essence of the four sacred Vedas into a single form: the Natya Veda.",
              },
              {
                num: "3",
                title: "Bharata Muni's Natya Shastra",
                desc: "Brahma passed this knowledge to the sage Bharata Muni, who codified it into a structured manual: the Natya Shastra.",
              },
              {
                num: "4",
                title: "The Classical Dances",
                desc: "From the Natya Shastra, the strict rules of expression (Bhava), melody (Raga), and rhythm (Tala) evolved into the dances we see today.",
                glow: true,
              },
            ].map((step, idx) => (
              <div key={idx} className="gsap-fade-up relative pl-10 md:pl-16">
                <div
                  className={`absolute -left-[11px] top-4 w-5 h-5 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)] border-4 border-[#050505] ${step.glow ? "animate-pulse" : ""}`}
                ></div>
                <div className="bg-[#111]/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl hover:border-orange-500/40 transition-colors shadow-lg">
                  <span className="text-orange-400 font-serif text-xl italic mb-2 block">
                    Step {step.num}
                  </span>
                  <h3 className="text-3xl font-serif text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* THE THREE PILLARS */}
        <section className="py-24 px-6 md:px-12 relative bg-gradient-to-b from-[#0a0a0a] to-[#111]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="gsap-fade-up text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                The Blueprint
              </span>
              <h2 className="gsap-fade-up text-4xl md:text-5xl font-serif text-white mb-6">
                The Three Pillars of Dance
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: "🥁",
                  title: "Nritta",
                  sub: "Pure Dance",
                  desc: "Abstract movement focusing purely on rhythm, timing, and the geometric movements of the body in space.",
                },
                {
                  icon: "👁️",
                  title: "Nritya",
                  sub: "Expressive Dance",
                  desc: "Dancing with emotion. Utilizing the Navarasas and intricate mudras to convey feelings and artistic sentiment.",
                },
                {
                  icon: "📖",
                  title: "Natya",
                  sub: "Storytelling",
                  desc: "The ultimate dramatic storytelling. Combining Nritta and Nritya to enact complete narratives from the epics.",
                },
              ].map((pillar, idx) => (
                <div
                  key={idx}
                  className="gsap-fade-up bg-white/[0.02] border border-white/10 p-10 rounded-[2rem] backdrop-blur-sm hover:border-orange-500/40 transition-colors hover:-translate-y-2 duration-500 shadow-xl"
                >
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-3xl mb-6 border border-white/10">
                    {pillar.icon}
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-2">
                    {pillar.title}
                  </h3>
                  <h4 className="text-orange-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                    {pillar.sub}
                  </h4>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SACRED GEOMETRY */}
        <section className="py-24 px-6 md:px-12 relative border-t border-white/5 bg-[#050505]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="gsap-fade-up">
              <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                Mathematics in Motion
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">
                Sacred Geometry
              </h2>
              <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
                <p>
                  In Indian classical dance, sacred geometry lives within every
                  gesture. The dancer's body becomes a moving{" "}
                  <strong className="text-white">Yantra</strong>, tracing
                  circles, triangles, and lotus patterns that mirror the cosmic
                  order.
                </p>
                <p className="border-l-2 border-orange-500 pl-6 py-2 italic text-gray-300 bg-gradient-to-r from-orange-500/5 to-transparent rounded-r-xl">
                  "Dance is not only movement. It is mathematics in motion.
                  Every line, angle, and symmetry creates harmony between body,
                  rhythm, and space."
                </p>
              </div>
            </div>

            <div className="gsap-fade-up relative h-[400px] w-full flex items-center justify-center overflow-hidden">
              <div className="absolute w-[320px] h-[320px] rounded-full border border-orange-500/20 animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute w-[226px] h-[226px] rounded-full border border-orange-400/30 animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute w-[160px] h-[160px] border border-orange-500/20 rotate-45 animate-[spin_30s_linear_infinite]"></div>
              <div className="absolute w-[160px] h-[160px] border border-orange-500/40 animate-[spin_30s_linear_infinite_reverse]"></div>
              <div className="absolute w-[200px] h-[200px] flex items-center justify-center animate-[spin_40s_linear_infinite]">
                <div className="absolute w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[138px] border-b-orange-500/30 -translate-y-[20px]"></div>
                <div className="absolute w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-t-[138px] border-t-orange-500/30 translate-y-[20px]"></div>
              </div>
              <div className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_20px_2px_#f97316]"></div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🔺",
                title: "The Triangle",
                sub: "Bharatanatyam",
                desc: "The Araimandi posture creates interlocking triangles, representing Fire and stability.",
              },
              {
                icon: "⭕",
                title: "The Circle",
                sub: "Kathak",
                desc: "During rapid Chakkars, the spine is the center point, tracing a perfect Mandala.",
              },
              {
                icon: "🪷",
                title: "The Lotus",
                sub: "Odissi",
                desc: "Hands bloom from a bud alongside sweeping arm arcs, symbolizing spiritual awakening.",
              },
              {
                icon: "🔲",
                title: "The Square",
                sub: "Kuchipudi",
                desc: "Balancing on a brass plate rim uses precise footwork representing the physical Earth.",
              },
            ].map((shape, idx) => (
              <div
                key={idx}
                className="gsap-fade-up bg-white/[0.02] border border-white/5 p-8 rounded-3xl backdrop-blur-sm hover:border-orange-500/40 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05]"
              >
                <div className="text-3xl mb-6">{shape.icon}</div>
                <h3 className="text-2xl font-serif text-white mb-1">
                  {shape.title}
                </h3>
                <h4 className="text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                  {shape.sub}
                </h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  {shape.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CLASSICAL DANCES GRID */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="gsap-fade-up text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              The Roots
            </span>
            <h2 className="gsap-fade-up text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
              The 8 Classical Dances
            </h2>
            <p className="gsap-fade-up text-lg text-gray-400 font-light">
              Evolving from the Natya Shastra, recognized by the Sangeet Natak
              Akademi.
            </p>
          </div>

          <div className="dance-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {classicalDances.map((dance, index) => (
              <div key={index} className="dance-card-wrapper">
                <SpotlightLink
                  href={`/Dances/${dance.id}`}
                  className="h-[400px] rounded-3xl border border-white/10 bg-[#111] hover:border-orange-500/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] flex flex-col justify-end"
                  glowColor="rgba(249, 115, 22, 0.2)"
                >
                  <Image
                    src={dance.image}
                    alt={dance.name}
                    fill
                    className="absolute inset-0 object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-110 ease-out z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-0 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 p-8 w-full flex flex-col justify-end h-full">
                    <span className="text-orange-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                      {dance.origin}
                    </span>
                    <h3 className="text-3xl font-serif text-white group-hover:text-orange-400 transition-colors duration-300 drop-shadow-md">
                      {dance.name}
                    </h3>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                      <div className="overflow-hidden">
                        <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          <p className="text-sm text-gray-300 font-light leading-relaxed line-clamp-3 mb-4">
                            {dance.description}
                          </p>
                          <div className="text-orange-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                            Explore{" "}
                            <span className="text-lg leading-none">&rarr;</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SpotlightLink>
              </div>
            ))}
          </div>
        </section>

        {/* EXTENDED TRADITIONS GRID */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
          <div className="mb-20 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                Beyond The 8 Pillars
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                Theatrical Traditions
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Straddling the line between classical dance, religious theatre,
                and ancient martial arts featuring massive masks and explosive
                energy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {theatricalDances.map((dance, index) => (
              <div key={index} className="gsap-fade-up">
                <SpotlightLink
                  href={`/Dances/${dance.id}`}
                  className="h-[450px] rounded-3xl border border-white/10 bg-[#111] hover:border-amber-500/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(245,158,11,0.15)] flex flex-col justify-end"
                  glowColor="rgba(245, 158, 11, 0.2)"
                >
                  <Image
                    src={dance.image}
                    alt={dance.name}
                    fill
                    className="absolute inset-0 object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-110 ease-out z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent z-0 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 p-8 w-full flex flex-col justify-end h-full">
                    <div className="absolute top-6 left-6">
                      <span className="bg-amber-500/20 border border-amber-500/50 text-amber-400 text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full backdrop-blur-md">
                        {dance.badge}
                      </span>
                    </div>
                    <span className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {dance.origin}
                    </span>
                    <h3 className="text-3xl font-serif text-white group-hover:text-amber-400 transition-colors duration-300 drop-shadow-md">
                      {dance.name}
                    </h3>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                      <div className="overflow-hidden">
                        <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          <p className="text-sm text-gray-300 font-light leading-relaxed line-clamp-3 mb-4">
                            {dance.description}
                          </p>
                          <div className="text-amber-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                            View Exhibit{" "}
                            <span className="text-lg leading-none">&rarr;</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SpotlightLink>
              </div>
            ))}
          </div>
        </section>

        {/* FOLK DANCES */}
        <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 bg-[#050505]">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="text-emerald-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              Heartbeat of the People
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">
              Regional Folk Traditions
            </h2>
            <div className="gsap-fade-up text-lg text-gray-300 font-light leading-relaxed text-left md:text-center p-10 rounded-[2.5rem] border border-white/5 backdrop-blur-md bg-emerald-500/5 shadow-[inset_0_0_40px_rgba(16,185,129,0.05)]">
              <p>
                Unlike the strict rules of classical forms, folk dances emerged
                spontaneously from local traditions. They are vibrant,
                community-based expressions celebrating the agricultural cycles,
                myths, and joyful diversity of India's states.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {folkDances.map((dance, index) => (
              <div
                key={index}
                className="gsap-fade-up group relative p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/40 hover:bg-emerald-950/10 transition-all duration-500 ease-out flex flex-col justify-between min-h-[220px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-transparent rounded-3xl transition-all duration-500 pointer-events-none"></div>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-serif text-2xl border border-emerald-500/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                      {dance.name.charAt(0)}
                    </div>
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-500 group-hover:text-emerald-400 transition-colors duration-300 text-right w-1/2 line-clamp-2 leading-tight">
                      {dance.origin}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                    {dance.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed line-clamp-3">
                    {dance.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTEMPORARY DANCES */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 mb-12">
          <div className="mb-20 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <span className="text-purple-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                The Modern Evolution
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                Contemporary Forms
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Breaking the rigid rules of antiquity. These forms fuse
                classical vocabulary, martial arts, and yoga with global modern
                techniques.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contemporaryDances.map((dance, index) => (
              <div key={index} className="gsap-fade-up">
                <SpotlightLink
                  href={`/Dances/${dance.id}`}
                  className="h-[450px] rounded-3xl border border-white/10 bg-[#111] hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] flex flex-col justify-end filter grayscale group-hover:grayscale-0"
                  glowColor="rgba(168, 85, 247, 0.2)"
                >
                  <Image
                    src={dance.image}
                    alt={dance.name}
                    fill
                    className="absolute inset-0 object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-110 ease-out z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent z-0 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 p-8 w-full flex flex-col justify-end h-full">
                    <div className="absolute top-6 left-6">
                      <span className="bg-purple-500/20 border border-purple-500/50 text-purple-400 text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full backdrop-blur-md">
                        {dance.badge}
                      </span>
                    </div>
                    <span className="text-purple-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {dance.origin}
                    </span>
                    <h3 className="text-3xl font-serif text-white group-hover:text-purple-400 transition-colors duration-300 drop-shadow-md">
                      {dance.name}
                    </h3>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                      <div className="overflow-hidden">
                        <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          <p className="text-sm text-gray-300 font-light leading-relaxed line-clamp-3 mb-4">
                            {dance.description}
                          </p>
                          <div className="text-purple-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                            Explore Concept{" "}
                            <span className="text-lg leading-none">&rarr;</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SpotlightLink>
              </div>
            ))}
          </div>
        </section>

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
    </>
  );
};

export default Dance;
