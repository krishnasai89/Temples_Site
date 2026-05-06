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
// Data for the 4 Theatrical & Extended Classical Traditions
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
// The Regional Folk Dances of India
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
// Data for the Contemporary & Avant-Garde Traditions
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

const Dance = () => {
  const container = useRef(null);

  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Preloader Logic
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
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
        {/* HERO SECTION */}
        <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
          {/* Properly styled Hero Image */}
          <img
            src="/Dance/Nataraja.jpg"
            alt="Nataraja Cosmic Dance"
            className="absolute inset-0 w-full h-full object-cover scale-105 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0a0a0a]"></div>

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

        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT COLUMN: Text & Iconography List */}
            <div className="gsap-fade-up order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Who is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  Nataraja?
                </span>
              </h2>
              <p className="text-lg leading-relaxed mb-6 font-light text-gray-300">
                Nataraja is a depiction of the Hindu god Shiva as the divine
                cosmic dancer. His dance, the <strong>Ananda Tandava</strong>{" "}
                (Dance of Bliss), represents the continuous cycle of creation,
                preservation, and destruction of the universe.
              </p>

              {/* Added a scrollable container for the long list */}
              <div className="relative">
                {/* Fade overlays for the scroll area */}
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>

                <ul className="space-y-5 h-[500px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-orange-500/30 scrollbar-track-transparent py-4">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-4 text-xl">🔥</span>
                    <span className="text-sm font-light leading-relaxed text-gray-300">
                      <strong className="text-white text-base block mb-1">
                        Upper Left Hand (Agni)
                      </strong>
                      Holds the divine fire, representing destruction,
                      transformation, and the end of the universe.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-4 text-xl">🥁</span>
                    <span className="text-sm font-light leading-relaxed text-gray-300">
                      <strong className="text-white text-base block mb-1">
                        Upper Right Hand (Damaru)
                      </strong>
                      Holds the hourglass drum, creating the primal rhythmic
                      sound of creation (Om).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-4 text-xl">✋</span>
                    <span className="text-sm font-light leading-relaxed text-gray-300">
                      <strong className="text-white text-base block mb-1">
                        Lower Right Hand (Abhaya Mudra)
                      </strong>
                      Signals "fear not," offering protection and peace to the
                      righteous.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-4 text-xl">🐘</span>
                    <span className="text-sm font-light leading-relaxed text-gray-300">
                      <strong className="text-white text-base block mb-1">
                        Lower Left Hand (Gajahasta)
                      </strong>
                      Stretched across the chest resembling an elephant's trunk,
                      signifying strength, wisdom, and the removal of obstacles.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-4 text-xl">🦶🏽</span>
                    <span className="text-sm font-light leading-relaxed text-gray-300">
                      <strong className="text-white text-base block mb-1">
                        The Right Foot
                      </strong>
                      Tramples the dwarf demon Apasmara, symbolizing the
                      absolute subjugation of human ignorance and ego.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-4 text-xl">🕊️</span>
                    <span className="text-sm font-light leading-relaxed text-gray-300">
                      <strong className="text-white text-base block mb-1">
                        The Left Foot (Raised)
                      </strong>
                      Lifted high in the "dance of bliss," representing ultimate
                      spiritual liberation (Moksha).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-4 text-xl">☀️</span>
                    <span className="text-sm font-light leading-relaxed text-gray-300">
                      <strong className="text-white text-base block mb-1">
                        Prabha Mandala (Halo of Fire)
                      </strong>
                      The arch of flames surrounding Shiva represents the
                      boundary of the cosmos and the endless cycle of time.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-4 text-xl">🌪️</span>
                    <span className="text-sm font-light leading-relaxed text-gray-300">
                      <strong className="text-white text-base block mb-1">
                        Flying Locks (Jata)
                      </strong>
                      His matted hair spreads horizontally, indicating the
                      fierce, intense, and vigorous motion of his cosmic dance.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-4 text-xl">🌊</span>
                    <span className="text-sm font-light leading-relaxed text-gray-300">
                      <strong className="text-white text-base block mb-1">
                        Goddess Ganga
                      </strong>
                      Nestled in his flying hair, she symbolizes purification
                      and the taming of her wild descent from heaven to earth.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-4 text-xl">🌙</span>
                    <span className="text-sm font-light leading-relaxed text-gray-300">
                      <strong className="text-white text-base block mb-1">
                        Crescent Moon
                      </strong>
                      Tucked into his locks, it symbolizes his dominion over the
                      cycles of time, seasons, and enlightenment.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-4 text-xl">💀</span>
                    <span className="text-sm font-light leading-relaxed text-gray-300">
                      <strong className="text-white text-base block mb-1">
                        The Skull
                      </strong>
                      A profound symbol of mortality, detachment, and Shiva's
                      conquest over death (Mahakala).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-4 text-xl">🐍</span>
                    <span className="text-sm font-light leading-relaxed text-gray-300">
                      <strong className="text-white text-base block mb-1">
                        The Serpents (Kundalini)
                      </strong>
                      Snakes uncoiling from his arms and waist represent
                      Kundalini energy, the shedding of past lives, and mastery
                      over fear and ego.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-4 text-xl">👁️</span>
                    <span className="text-sm font-light leading-relaxed text-gray-300">
                      <strong className="text-white text-base block mb-1">
                        The Three Eyes
                      </strong>
                      Represent the Sun (action/creation), the Moon
                      (introspection/tranquility), and the Third Eye of higher
                      wisdom.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-4 text-xl">😌</span>
                    <span className="text-sm font-light leading-relaxed text-gray-300">
                      <strong className="text-white text-base block mb-1">
                        The Serene Smile
                      </strong>
                      Despite the violent, chaotic energy of the dance of
                      destruction, his face remains entirely calm—a bliss of
                      divine self-absorption.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-4 text-xl">💎</span>
                    <span className="text-sm font-light leading-relaxed text-gray-300">
                      <strong className="text-white text-base block mb-1">
                        Dual Earrings
                      </strong>
                      A male earring in one ear and a female earring in the
                      other, reflecting the perfect balance of masculine and
                      feminine energies (Ardhanarishvara).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-4 text-xl">😈</span>
                    <span className="text-sm font-light leading-relaxed text-gray-300">
                      <strong className="text-white text-base block mb-1">
                        Apasmara / Muyalaka
                      </strong>
                      The dwarf figure crushed under Lord Shiva’s right foot is
                      Apasmara (or Muyalaka), representing ignorance, ego, and
                      the loss of consciousness. Shiva’s "Dance of Bliss"
                      (Anandatandava) on Apasmara symbolizes the suppression of
                      ego and ignorance, highlighting that true knowledge is
                      only attained when ignorance is subdued.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-4 text-xl">🪷</span>
                    <span className="text-sm font-light leading-relaxed text-gray-300">
                      <strong className="text-white text-base block mb-1">
                        Lotus Pedestal
                      </strong>
                      The flower upon which the entire scene takes place,
                      representing purity rising from the mud of the material
                      world.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN: Image */}
            <div className="gsap-fade-up order-1 lg:order-2 relative h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(249,115,22,0.15)] sticky top-24">
              <Image
                src="/Dance/Nataraja.jpg"
                alt="Detailed statue of Nataraja"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
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

        {/* THE DIVINE LINEAGE TIMELINE */}
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

        {/* THE NATYA SHASTRA & THE 3 PILLARS */}
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

        {/* NEW: THE NATYA SHASTRA */}
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

        {/* SACRED GEOMETRY (Mathematics in Motion) */}
        <section className="py-24 px-6 md:px-12 relative border-t border-white/5">
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
            <div className="gsap-fade-up relative h-[400px] w-full flex items-center justify-center overflow-hidden">
              {/* 1. KATHAK: The Outer Circle (Mandala / Cycles of Time) */}
              <div className="absolute w-[320px] h-[320px] rounded-full border border-orange-500/30 animate-[spin_20s_linear_infinite]"></div>

              {/* 2. MANIPURI & SATTRIYA: The Inner Circle (Spiritual Devotion) */}
              <div className="absolute w-[226px] h-[226px] rounded-full border border-orange-400/40 animate-[spin_15s_linear_infinite_reverse]"></div>

              {/* 3. ODISSI: The Lotus (Created via a rotated square forming an 8-point star Yantra) */}
              <div className="absolute w-[160px] h-[160px] border border-orange-500/30 rotate-45 animate-[spin_30s_linear_infinite]"></div>

              {/* 4. KUCHIPUDI: The Square (Earth / Tarangam Brass Plate) */}
              <div className="absolute w-[160px] h-[160px] border border-orange-500/50 animate-[spin_30s_linear_infinite_reverse]"></div>

              {/* 5. THE SHATKONA: Union of Shiva & Shakti */}
              <div className="absolute w-[200px] h-[200px] flex items-center justify-center animate-[spin_40s_linear_infinite]">
                {/* BHARATANATYAM: Upward Triangle (Fire / Araimandi Posture) */}
                <div className="absolute w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[138px] border-b-orange-500/40 -translate-y-[20px]"></div>

                {/* KATHAKALI: Downward Triangle (Water / Deep Stance) */}
                <div className="absolute w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-t-[138px] border-t-orange-500/40 translate-y-[20px]"></div>
              </div>

              {/* 6. THE BINDU: The Center Dot (The Source / Nataraja) */}
              <div className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_20px_2px_#f97316]"></div>

              {/* Gradient fade to blend into the background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* ADDED BACK: THE LIVING YANTRAS (Specific Dances) */}
        <section className="py-16 px-6 md:px-12 relative border-t border-white/5 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="gsap-fade-up text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              The Living Yantras
            </span>
            <h2 className="gsap-fade-up text-4xl md:text-5xl font-serif text-white mb-6">
              Where to Find the Geometry
            </h2>
            <p className="gsap-fade-up text-lg text-gray-400 font-light max-w-3xl mx-auto">
              These are not abstract concepts. The mathematics of the universe
              are explicitly coded into the foundational postures of the dances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="gsap-fade-up bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2">
              <div className="text-orange-500 text-4xl mb-6">🔺</div>
              <h3 className="text-2xl font-serif text-white mb-2">
                The Triangle
              </h3>
              <h4 className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-4">
                Bharatanatyam
              </h4>
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                The foundational <strong>Araimandi</strong> (half-sit) posture.
                The bent knees, torso, and extended arms create interlocking
                triangles, representing Fire and stability.
              </p>
            </div>

            <div className="gsap-fade-up bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2">
              <div className="text-orange-500 text-4xl mb-6">⭕</div>
              <h3 className="text-2xl font-serif text-white mb-2">
                The Circle
              </h3>
              <h4 className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-4">
                Kathak
              </h4>
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                During the rapid <strong>Chakkars</strong> (spins), the dancer's
                spine becomes the still center point, while their flowing skirt
                traces a perfect Mandala.
              </p>
            </div>

            <div className="gsap-fade-up bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2">
              <div className="text-orange-500 text-4xl mb-6">🪷</div>
              <h3 className="text-2xl font-serif text-white mb-2">The Lotus</h3>
              <h4 className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-4">
                Odissi
              </h4>
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                Through specific mudras, the hands physically bloom from a bud
                into an open blossom alongside sweeping arm arcs, symbolizing
                spiritual awakening.
              </p>
            </div>

            <div className="gsap-fade-up bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2">
              <div className="text-orange-500 text-4xl mb-6">🔲</div>
              <h3 className="text-2xl font-serif text-white mb-2">
                The Square
              </h3>
              <h4 className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-4">
                Kuchipudi
              </h4>
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                In the <strong>Tarangam</strong>, the dancer balances on the
                rigid rim of a brass plate. The precise, confined footwork
                represents the square—symbolizing the physical Earth.
              </p>
            </div>
          </div>
        </section>

        {/* CLASSICAL DANCES (Cards Grid) */}
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
                className="dance-card group relative h-[380px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_15px_40px_rgba(249,115,22,0.15)] block flex flex-col justify-end"
              >
                {/* Background Image */}
                <Image
                  src={dance.image}
                  alt={dance.name}
                  fill
                  className="absolute inset-0 object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105 ease-out z-0"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content Container */}
                <div className="relative z-10 p-6 w-full flex flex-col justify-end">
                  {/* Origin (Fades in) */}
                  <span className="text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {dance.origin}
                  </span>

                  {/* Dance Name (Always visible, changes color on hover) */}
                  <h3 className="text-2xl font-serif text-white group-hover:text-orange-400 transition-colors duration-300">
                    {dance.name}
                  </h3>

                  {/* Expanding Description Block */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <p className="text-xs text-gray-300 font-light leading-relaxed line-clamp-3">
                          {dance.description}
                        </p>
                        <div className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mt-3 flex items-center gap-1">
                          Explore Details <span>&rarr;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* EXTENDED TRADITIONS: Theatrical & Martial Arts */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                Beyond The 8 Pillars
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Theatrical & Martial Traditions
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Straddling the line between classical dance, religious theatre,
                and ancient martial arts. These forms feature massive masks,
                extempore dialogue, and explosive energy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {theatricalDances.map((dance, index) => (
              <Link
                key={index}
                href={`/Dances/${dance.id}`}
                className="group relative h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)] flex flex-col justify-end"
              >
                {/* Background Image */}
                <Image
                  src={dance.image}
                  alt={dance.name}
                  fill
                  className="absolute inset-0 object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105 ease-out z-0"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-0 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content Container */}
                <div className="relative z-10 p-6 w-full flex flex-col justify-end h-full">
                  {/* Top Badge (Always visible, sits at top of card) */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-amber-500/20 border border-amber-500/50 text-amber-400 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
                      {dance.badge}
                    </span>
                  </div>

                  {/* Origin */}
                  <span className="text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {dance.origin}
                  </span>

                  {/* Dance Name */}
                  <h3 className="text-3xl font-serif text-white group-hover:text-amber-400 transition-colors duration-300 drop-shadow-lg">
                    {dance.name}
                  </h3>

                  {/* Expanding Description Block (Same trick as classical cards) */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <div className="pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <p className="text-sm text-gray-300 font-light leading-relaxed line-clamp-3">
                          {dance.description}
                        </p>
                        <div className="text-amber-500 text-[10px] font-bold uppercase tracking-widest mt-4 flex items-center gap-2">
                          View Exhibit{" "}
                          <span className="text-lg leading-none">&rarr;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* THE FOLK DANCES (Typography Driven Cards) */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
          {/* Introduction block using your provided text */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="mb-16">
              <span className="text-emerald-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                The Heartbeat of the People
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Regional Folk Traditions
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-3xl">
                Vibrant, community-based expressions of local culture,
                festivals, and harvests. Unlike classical styles, these
                spontaneous dances celebrate the agricultural cycles and myths
                of India's diverse states.
              </p>
            </div>

            <div className="gsap-fade-up space-y-6 text-lg text-gray-300 font-light leading-relaxed text-left md:text-center p-8 rounded-3xl border border-white/10 backdrop-blur-sm bg-emerald-500/10 hover:bg-emerald-400/10">
              <p>
                India is known for its rich cultural heritage. Diversification
                is the identity of the country. Indian dances are one of the
                most revered identities of our culture.
              </p>
              <p>
                In India, dance forms can be broadly classified into 2
                categories – <strong>classical</strong> and{" "}
                <strong>folk</strong> dance forms. Classical dance has a
                deep-rooted relationship with the <em>Natya Shastra</em> where
                the specific features of each form have been mentioned. There
                are 9 classical dance forms in India as per the cultural
                ministry (including Chhau).
              </p>
              <p>
                Folk dance, on the other hand, emerged from the local traditions
                of the respective state, ethnic, or geographic regions. Here is
                a glimpse into the endless tapestry of India's folk traditions.
              </p>
            </div>
          </div>

          {/* Typography-based Grid (No Images) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {folkDances.map((dance, index) => (
              <div
                key={index}
                className="gsap-fade-up group relative p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-emerald-500/40 hover:bg-white/[0.02] transition-all duration-300 ease-out flex flex-col justify-between min-h-[200px]"
              >
                {/* Stylized geometric background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500 pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Stylized First Letter acts as the "Icon" */}
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-serif text-xl font-bold border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                      {dance.name.charAt(0)}
                    </div>
                    {/* State/Origin Tag */}
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500 group-hover:text-emerald-400 transition-colors duration-300 text-right">
                      {dance.origin}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                    {dance.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed line-clamp-2">
                    {dance.desc}
                  </p>
                </div>

                {/* Bottom decorative line that expands on hover */}
                <div className="w-8 h-[2px] bg-white/10 mt-6 group-hover:w-full group-hover:bg-emerald-500/50 transition-all duration-500 ease-out"></div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTEMPORARY DANCES: Sleek Avant-Garde Layout */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 mb-12">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <span className="text-purple-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                The Modern Evolution
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Contemporary & Avant-Garde
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Breaking the rigid rules of antiquity. These forms fuse
                classical Indian vocabulary, martial arts, and yoga with global
                modern dance techniques to tell the stories of the 21st century.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contemporaryDances.map((dance, index) => (
              <Link
                key={index}
                href={`/Dances/${dance.id}`}
                className="group relative h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_15px_40px_rgba(168,85,247,0.15)] flex flex-col justify-end"
              >
                {/* Background Image */}
                <Image
                  src={dance.image}
                  alt={dance.name}
                  fill
                  className="absolute inset-0 object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105 ease-out z-0 filter grayscale group-hover:grayscale-0"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent z-0 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content Container */}
                <div className="relative z-10 p-6 w-full flex flex-col justify-end h-full">
                  {/* Top Badge (Purple Accent) */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-purple-500/20 border border-purple-500/50 text-purple-400 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
                      {dance.badge}
                    </span>
                  </div>

                  {/* Origin */}
                  <span className="text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {dance.origin}
                  </span>

                  {/* Dance Name */}
                  <h3 className="text-3xl font-serif text-white group-hover:text-purple-400 transition-colors duration-300 drop-shadow-lg">
                    {dance.name}
                  </h3>

                  {/* Expanding Description Block */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <div className="pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <p className="text-sm text-gray-300 font-light leading-relaxed line-clamp-3">
                          {dance.description}
                        </p>
                        <div className="text-purple-500 text-[10px] font-bold uppercase tracking-widest mt-4 flex items-center gap-2">
                          Explore Concept{" "}
                          <span className="text-lg leading-none">&rarr;</span>
                        </div>
                      </div>
                    </div>
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
