"use client";

import React, { useRef, useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// 1. DEFINE THE DATA HERE IN THE SAME FILE
const classicalDances = [
  {
    id: "bharatanatyam",
    name: "Bharatanatyam",
    origin: "Tamil Nadu",
    deity: "Lord Shiva (Nataraja)",
    timeline: "500 BCE–500 CE",
    origins:
      "Originally performed by Devadasis in Tamil Hindu temples (formerly known as Sadiraattam). It is the oldest classical dance form in India, with roots in the ancient Tamil epic Silappatikaram.",
    description:
      "Noted for its fixed upper torso, bent legs (Aramandi), spectacular footwork, and a complex vocabulary of sign language (mudras) expressing Shaivism and Hinduism.",
    image: "/Dance/Bharatanatyam.jpg",
    features: [
      "Aramandi (Basic half-sit posture)",
      "Bha-Ra-Ta (Bhavam, Ragam, Talam)",
      "Mudras (Coded hand gestures)",
      "Salangai / Ghungroos (Musical anklets)",
    ],
    fullHistory:
      "Bharatanatyam (formerly Sadiraattam) is the oldest classical dance tradition in India. Its theoretical foundations date back to the Natya Shastra. For centuries, it was an exclusive, spiritually devotional dance performed by Devadasis in the Hindu temples of Tamil Nadu. In 1910, the British colonial government banned temple dancing, stereotyping the art form. However, a powerful revival movement led by activists like E. Krishna Iyer and Rukmini Devi Arundale in the 1930s democratized the art, bringing it from the temple sanctum to the modern stage. The name 'Bharatam' is famously seen as a backronym combining 'Bhavam' (emotion), 'Ragam' (melody), and 'Talam' (rhythm).",
    geometry: "Interlocking Triangles",
    costumes:
      "Resembles a traditional Tamil Hindu bridal dress, featuring brightly colored silk with gold or silver zari embroidery. It often includes a stitched pleated front that opens like a hand fan during knee bends. Dancers wear elaborate temple jewelry representing the sun and moon, outline their hands and feet with red 'alta' or 'kumkum' to highlight gestures, and wear leather anklets with bells called 'salangai' (ghungroos) to emphasize rhythm.",
    music:
      "Accompanied by South Indian Carnatic music. The performance is conducted by the 'nattuvanar' (often the guru) playing cymbals. The orchestra typically includes the mridangam (double-sided drum), nadaswaram, flute, violin, and veena, with verses recited in Tamil and Sanskrit.",
    symbolism:
      "Follows the four aspects of Abhinaya: Angika (body language), Vachika (song), Aharya (costumes), and Sattvika (emotional connection). It utilizes an extensive vocabulary of 'Hastas' or 'Mudras' (hand gestures) to act out epics. The form is deeply connected to modern yoga, incorporating over 20 asanas (including Natarajasana), making it a true form of Bhakti Yoga.",
    margamSequence: [
      {
        step: "1. Pushpanjali",
        desc: "Offering of flowers and salutations to the deities, guru, and audience.",
      },
      {
        step: "2. Alarippu",
        desc: "A pure, rhythmic warm-up invocation without melody.",
      },
      {
        step: "3. Jatiswaram",
        desc: "A technical performance uniting music, rhythm, and movement.",
      },
      {
        step: "4. Shabdam",
        desc: "The introduction of expressed words and short devotional compositions.",
      },
      {
        step: "5. Varnam",
        desc: "The longest, core expressive centerpiece combining complex footwork and storytelling.",
      },
      {
        step: "6. Padam",
        desc: "A deeply emotional, slower stage of reverence and devotional prayer (bhakti).",
      },
      {
        step: "7. Tillana",
        desc: "The rhythmic climax, returning to pure, fast-paced movement.",
      },
    ],
  },
  {
    id: "kathak",
    name: "Kathak",
    origin: "North India",
    deity: "Lord Krishna & Radha",
    timeline: "400 BCE to 16th Century",
    origins:
      "Originated from the 'Kathakars' (ancient traveling storytellers). Later, it beautifully synthesized Hindu temple devotion with the sophisticated aesthetics of Mughal courts.",
    description:
      "Derived from the Vedic word 'Katha' (story). Famous for its rhythmic, intricate footwork, rapid pirouettes (Chakkars), straight-legged vertical stance, and highly expressive facial storytelling.",
    image: "/Dance/Kathak.jpg",
    features: [
      "Chakkars (Rapid Whirls/Spins)",
      "Tatkar (Intricate Footwork)",
      "Straight-legged vertical stance",
      "Three Gharanas (Styles)",
    ],
    fullHistory:
      "Kathak traces its roots to 400 BCE and the 'Kathakars', ancient traveling bards who communicated Hindu epics through dance and song. During the Bhakti movement, it became heavily centered on the divine love of Radha and Krishna. In the 16th and 17th centuries, Mughal emperors patronized Kathak, bringing it from temple courtyards into royal durbars. This created a unique synthesis, adding Persian and Central Asian influences like whirling (similar to Sufi dance) and Urdu ghazals. After surviving severe moral policing and decline during the British Raj, Kathak experienced a major revival post-independence, maintaining its dual identity of Hindu devotion and Islamic courtly grace.",
    geometry: "Continuous Circles (Mandala)",
    costumes:
      "Uniquely features both Hindu and Muslim variations. The Hindu female dress includes a specialized sari drape or a flowing 'lehenga' (skirt) with a choli and transparent veil. The Muslim female dress features an 'anarkali' tunic or a skirt over 'churidar' pyjamas. Males wear a silk dhoti (Hindu) or a kurta-churidar/angarkha (Mughal). All dancers wear heavy rows of ankle bells (Ghungroos) which are absolutely essential for the rhythmic footwork.",
    music:
      "Accompanied by North Indian Hindustani classical music, prominently featuring the Tabla (hand drums) to perfectly sync with the dancer's footwork. The ensemble also includes the Sarangi, Harmonium, and Manjira (hand cymbals). The musical styles range from ancient Hindu Dhrupad to Persian-influenced Urdu Ghazals.",
    symbolism:
      "Kathak's Abhinaya (expressions) focuses heavily on subtle movements of the eyes and eyebrows to communicate the story. It is more introverted and withdrawn compared to Southern dances. It beautifully symbolizes the love between the Atman (soul) and the Supreme source through the metaphor of Radha and Krishna, while also embracing the mystical whirling found in Sufi traditions.",
    margamSequence: [
      {
        step: "1. Vandana / Salami",
        desc: "An invocation offering respect to the guru, musicians, and deities (or a 'Salami' salutation in Muslim court tradition).",
      },
      {
        step: "2. Thàth",
        desc: "The opening of pure dance (Nritta) featuring slow, graceful, and highly controlled movements of the wrists, neck, and eyebrows.",
      },
      {
        step: "3. Aamad",
        desc: "The formal, majestic entry into the rhythmic section of the performance.",
      },
      {
        step: "4. Tukra, Tora & Paran",
        desc: "Fast-paced, pure technical dance compositions stressing footwork, gestures, and sharp head turns, synced to the Tabla.",
      },
      {
        step: "5. Tatkar",
        desc: "The climax of pure rhythm, showcasing incredibly rapid, complex footwork where the dancer's ankle bells match the exact beat of the drums.",
      },
      {
        step: "6. Gat Nikas",
        desc: "A brief mime or storytelling section expressed purely through stylized gait, walk, and stance.",
      },
      {
        step: "7. Nritya",
        desc: "The expressive dance stage. A slower, deeply emotional performance acting out legends, Bhakti themes, or ghazals through facial expressions.",
      },
    ],
  },
  {
    id: "kathakali",
    name: "Kathakali",
    origin: "Kerala",
    deity: "Lord Krishna, Rama & Epic Heroes",
    timeline: "16th Century",
    origins:
      "Evolved in the royal courts and theaters of Hindu principalities in the Malayalam-speaking state of Kerala. Its immediate precursor is Krishnanattam.",
    description:
      "An incredibly complex 'story play' (Attakatha) known for its massive headdresses, vividly painted face masks, and movements heavily influenced by ancient South Indian martial arts.",
    image: "/Dance/Kathakali.jpg",
    features: [
      "Chutti (Elaborate face painting)",
      "Kireedam (Massive headgear)",
      "Kalarippayattu (Martial arts base)",
      "All-male traditional troupes",
    ],
    fullHistory:
      "Kathakali emerged as a distinct genre in the 16th and 17th centuries in Kerala. Legend says it was born when a local ruler, Kottarakkara Thampuran, was denied a Krishnanattam troupe and created his own art form called Ramanattam (which later became Kathakali). Unlike other classical dances that developed in temples with the dancer also singing, Kathakali developed in royal courts and separated the vocalists from the actors. This allowed the dancers to focus entirely on intense, athletic choreography and complex sign language to dramatize the eternal fight between good and evil.",
    geometry: "Imposing Rectangular Frames",
    costumes:
      "Features the most elaborate costumes of all Indian classical dances. Dancers wear massive headdresses, vests, and heavy layered skirts. The highly symbolic makeup (Chutti) reflects Hindu Guṇa theory (personality traits): 'Pachcha' (Green) for noble heroes, 'Kathi' (Knife) or 'Thaadi' (Red beard) for evil villains, 'Kari' (Black) for demons, and 'Minukku' (Yellow/Orange) for females and sages. Traditionally, men perform all roles, adding a false top knot for female characters.",
    music:
      "Vocals are traditionally sung in Sanskritized Malayalam. Uniquely, the vocalists stand at the front or side of the stage to deliver the lines while the dancer acts them out. The music relies heavily on powerful drums: the Maddalam (barrel-shaped), Chenda (cylindrical), and Idakka (hourglass-shaped, used for female characters).",
    symbolism:
      "Kathakali closely follows the ancient 'Hastha Lakshanadeepika' text. Actors speak entirely through a sign language of 24 main mudras and express the 9 emotional states (Navarasas) through intense facial and eye muscle control. The elaborate makeup is not just decorative; it is a psychological color code revealing the inner soul (Sattva, Rajas, Tamas) of the character.",
    margamSequence: [
      {
        step: "1. Kelikottu",
        desc: "The tuning of instruments and playing of rhythmic beats at dusk to signal to the village that the performance is about to begin.",
      },
      {
        step: "2. Thodayam",
        desc: "A preliminary 'pure' abstract dance performed behind a curtain, without full costumes, focusing entirely on skill and motion.",
      },
      {
        step: "3. Purappadu",
        desc: "A formal preliminary dance performed without the curtain, introducing the dancers in their full, magnificent costumes.",
      },
      {
        step: "4. Melappadam",
        desc: "A musical interlude where the vocalists and drummers (Chenda and Maddalam players) showcase their highest technical skills.",
      },
      {
        step: "5. Tiranokku",
        desc: "A dramatic tease and suspense entrance where a character (usually powerful or villainous) is slowly revealed from behind a hand-held curtain.",
      },
      {
        step: "6. Attakatha",
        desc: "The main dance-drama. The vocalists sing 'Shlokas' (action descriptions) and 'Padams' (dialogue) while the actors bring the epic story to life.",
      },
      {
        step: "7. Kalasham",
        desc: "Highly energetic, pure dance passages inserted between the acting sequences to cap off a scene or depict battles.",
      },
    ],
  },
  {
    id: "odissi",
    name: "Odissi",
    origin: "Odisha",
    deity: "Lord Jagannath (Vishnu)",
    timeline: "2nd Century BCE",
    origins:
      "Originated in the Hindu temples of Odisha. Historically perfected by female temple dancers called 'Maharis' and later expanded by young boy dancers known as 'Gotipuas'.",
    description:
      "The oldest surviving classical dance of India. Characterized by the 'Tribhangi' (independent movement of head, chest, and pelvis) mimicking graceful ancient temple sculptures.",
    image: "/Dance/Odissi.jpg",
    features: [
      "Tribhangi (S-shaped 3-fold bend)",
      "Chouka (Square squatting stance)",
      "Mahari & Gotipua traditions",
      "Bhangas (Symmetric body bends)",
    ],
    fullHistory:
      "Odissi is the oldest surviving classical dance in India, with roots traceable to the ancient Natya Shastra and 2nd-century BCE carvings in the Udayagiri caves. It was nurtured in the temples of Odisha by devoted women called Maharis. During periods of foreign invasion in the 17th century, the tradition expanded to include young boys called Gotipuas, who trained in athletic and martial art forms of the dance to entertain outside the temples. Like other classical dances, Odissi was severely suppressed and banned during British colonial rule. A massive post-independence revival, spearheaded by scholars and legendary gurus like Kelucharan Mohapatra, reconstructed the art form into the global phenomenon it is today.",
    geometry: "The Lotus & The Square",
    costumes:
      "Dancers wear brightly colored local silk saris (Pattasari, like Sambalpuri or Bomkai) with stitched front pleats for maximum footwork flexibility. Uniquely, Odissi uses silver jewelry rather than gold. The hair is drawn into an elaborate bun resembling a Hindu temple spire, decorated with a moon-shaped crest of white flowers or a 'mukoot' (reed crown with peacock feathers). Hands and feet are painted with red 'alta'.",
    music:
      "Accompanied by traditional Odissi music, a 2,000-year-old tradition dedicated to Lord Jagannath. The orchestra is anchored by the Mardala (a traditional percussion drum) and the ubiquitous tanpura for a droning ambiance. Melodic instruments include the harmonium, bansuri (bamboo flute), sitar, and violin.",
    symbolism:
      "Odissi is a visual expression of spiritual ideas, particularly the sensuous and devotional love poems of the 'Gita Govinda' by the 12th-century poet Jayadeva. The dance utilizes 63 specific 'Hastas' (mudras) and focuses heavily on the 'Shringara' rasa (loving devotion). It is an art form designed to re-create the infinite, divine self through geometric symmetry.",
    margamSequence: [
      {
        step: "1. Mangalacharana",
        desc: "The invocation. Includes a hymn to Lord Jagannath, 'Bhumi Pranam' (salutation to Mother Earth), and the salutation to the gods, gurus, and audience.",
      },
      {
        step: "2. Batu",
        desc: "A fast-paced, pure rhythmic dance performed in honor of Lord Shiva, without any accompanying song or recitation.",
      },
      {
        step: "3. Pallavi",
        desc: "A sequence of slow, graceful, and lyrical movements of the eyes, neck, torso, and feet that slowly builds into a fast-tempo crescendo.",
      },
      {
        step: "4. Abhinaya",
        desc: "The expressional dance. The dancer uses mudras and facial expressions to enact a song or poetry, most commonly the Radha-Krishna love poems.",
      },
      {
        step: "5. Natya",
        desc: "A highly dramatic dance-drama sequence depicting Hindu mythologies, epics, and legends.",
      },
      {
        step: "6. Moksha",
        desc: "The grand finale. A climactic, fast-paced pure dance that conveys a sense of spiritual release, salvation, and the liberation of the soul.",
      },
    ],
  },
  {
    id: "kuchipudi",
    name: "Kuchipudi",
    origin: "Andhra Pradesh",
    deity: "Lord Krishna (Vaishnavism)",
    timeline: "17th Century",
    origins:
      "Originated in the village of Kuchipudi. Formalized in the 17th century by the ascetic Tirtha Narayanayati and his orphan disciple, Siddhendra Yogi.",
    description:
      "A highly theatrical dance-drama known for its fluid grace, fast footwork, lip-syncing (Vachikabhinaya), and spectacular acrobatics like dancing on the rim of a brass plate.",
    image: "/Dance/Kuchipudi.jpg",
    features: [
      "Tarangam (Dancing on a brass plate)",
      "Vachikabhinaya (Lip-syncing)",
      "Kavutvams (Acrobatics)",
      "Bhama Kalapam (Iconic play)",
    ],
    fullHistory:
      "Kuchipudi traces its origins to ancient traveling bards called 'Kusilava'. It evolved as a deeply religious Vaishnavism tradition in the 17th century when Siddhendra Yogi composed the masterpiece play 'Bhama Kalapam'. Unable to find female performers, he trained the young Brahmin boys of Kuchipudi village to execute the drama. For centuries, it remained a strict, all-male traveling troupe tradition where men played both male and female roles. After surviving the fall of empires and British colonial bans, a 20th-century renaissance led by Gurus like Vedantam Lakshminarayana Sastri opened the art form to women and pioneered solo performances, bringing Kuchipudi to the global stage.",
    geometry: "The Square & Fluid Arcs",
    costumes:
      "Historically performed by men in dhotis. Today, female artists wear brilliantly colorful saris (or body-fitting dresses) with a specially stitched pleated fan in the front to highlight exacting footwork. A metallic belt secures the waist. The hair is braided and adorned with Vedic sun and moon jewelry. Leather anklets (ghungroos) are worn for rhythm. Theatrical props are common, including water pots, lamps, or peacock crowns for the role of Krishna.",
    music:
      "Accompanied by Carnatic music sung in the Telugu language. The performance is distinctly led by a conductor (Sutradhara or Nattuvanar) who humors the audience, explains the play, keeps the beat with cymbals, and recites rhythmic syllables. The orchestra includes the mridangam, flute, veena, and tambura.",
    symbolism:
      "Kuchipudi is a beautiful blend of 'Margi' (classical/spiritual) and 'Desi' (folk/sensual) styles. Unlike the rigid geometric perfection of other forms, it leans towards fluid, folksy, and sensual theatricality. The unique inclusion of 'Kavutvams'—where a dancer might paint a lion with their feet or dance with burning diyas—symbolizes supreme, unwavering concentration and devotion to the divine.",
    margamSequence: [
      {
        step: "1. Melavimpu",
        desc: "The invocation. An on-stage prayer expressing reverence to Ganesha, the earth, and the guru to ensure a good beginning.",
      },
      {
        step: "2. Pravesa Daru",
        desc: "The dramatic introduction of the characters. Actors are revealed from behind a curtain, historically accompanied by colored resin thrown into torch flames.",
      },
      {
        step: "3. Nritta",
        desc: "The pure, abstract dance sequence. Dancers perform formalized units of motion (Adugulu/Karanas) rhythmically to a musical raga.",
      },
      {
        step: "4. Shabdam",
        desc: "The transition into expressive dance (Nritya). Combines mime, footwork, and gesture to draw out the emotional taste (rasa) of the narrative.",
      },
      {
        step: "5. Padam",
        desc: "The deepest emotional core of the play. Slower, lyrical dance expressing spiritual love, allegories, and intimate sentiments.",
      },
      {
        step: "6. Tarangam",
        desc: "The spectacular climax. The dancer performs highly complex rhythmic footwork while balancing a water pot on the head and dancing on the rim of a brass plate.",
      },
    ],
  },
];

// 2. THE PAGE COMPONENT
export default function DanceDetail({ params }) {
  // CORRECTLY UNWRAP PROMISE FOR CLIENT COMPONENT
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [showTopBtn, setShowTopBtn] = useState(false);
  const container = useRef(null);

  // Find the specific dance data
  const dance = classicalDances.find((d) => d.id === id);

  // Scroll to Top Logic
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".gsap-fade-up");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 85%" },
          },
        );
      });
    },
    { scope: container },
  );

  // Fallback
  if (!dance) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center flex-col gap-4">
        <span className="text-6xl">🪔</span>
        <h1 className="text-white font-serif text-3xl">
          Archive Record Not Found
        </h1>
        <Link
          href="/Dances"
          className="text-orange-500 hover:text-white transition-colors"
        >
          Return to Exhibits
        </Link>
      </div>
    );
  }

  return (
    <main
      ref={container}
      className="min-h-screen bg-[#050505] text-gray-200 selection:bg-orange-500/30"
    >
      {/* 1. CINEMATIC HERO SECTION */}
      <div className="relative h-[85vh] min-h-[600px] w-full flex flex-col justify-end pb-24 overflow-hidden bg-[#050505]">
        <Image
          src={dance.image}
          alt={dance.name}
          fill
          className="object-cover opacity-50 mix-blend-lighten scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent h-48"></div>

        <button
          onClick={() => window.history.back()}
          className="absolute top-8 left-8 z-50 inline-flex items-center gap-2 text-white/70 hover:text-orange-500 transition-colors uppercase tracking-[0.2em] text-[10px] font-bold bg-black/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 hover:border-orange-500/50"
        >
          <span>←</span> Back to Archives
        </button>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
          <span className="text-orange-500 font-bold tracking-[0.4em] uppercase text-xs mb-4 flex items-center justify-center gap-3 drop-shadow-md">
            <span className="w-8 h-[1px] bg-orange-500/50"></span>
            Sacred Tradition of {dance.origin}
            <span className="w-8 h-[1px] bg-orange-500/50"></span>
          </span>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] mb-6">
            {dance.name}
          </h1>
        </div>
      </div>

      {/* 2. BENTO BOX QUICK INFO */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-16 relative z-20 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Origin", value: dance.origin },
            { label: "Timeline", value: dance.timeline },
            { label: "Primary Deity", value: dance.deity },
            { label: "Geometry", value: dance.geometry },
          ].map((info, idx) => (
            <div
              key={idx}
              className="bg-[#111]/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl flex flex-col justify-center text-center shadow-lg hover:border-orange-500/30 transition-colors"
            >
              <span className="text-orange-500/60 text-[10px] font-bold uppercase tracking-widest mb-2 block">
                {info.label}
              </span>
              <span className="text-white font-serif text-xl">
                {info.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. MAIN CONTENT LAYOUT */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
        {/* Left Column: History & Margam */}
        <div className="lg:col-span-8 space-y-16">
          {/* History */}
          <div className="gsap-fade-up">
            <h2 className="text-4xl font-serif text-white mb-8 flex items-center gap-4">
              The Lineage
            </h2>
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[2rem] backdrop-blur-sm">
              <p className="text-lg md:text-xl leading-relaxed font-light text-gray-300">
                {dance.fullHistory}
              </p>
            </div>
          </div>

          {/* Core Elements Grid */}
          <div className="gsap-fade-up grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-[#111]/40 rounded-3xl border border-white/10 backdrop-blur-md">
              <h3 className="text-white font-serif text-2xl mb-6">
                Core Elements
              </h3>
              <ul className="space-y-4">
                {dance.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-300 font-light"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center text-xs">
                      ✦
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl border border-orange-500/20 flex flex-col justify-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-[50px] rounded-full pointer-events-none"></div>
              <svg
                className="absolute top-6 left-6 w-10 h-10 text-orange-500/20 transform -scale-x-100 -scale-y-100"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <q className="relative z-10 italic text-white/90 font-serif text-xl leading-relaxed">
                Where the hand goes, the eyes follow; where the eyes go, the
                mind follows.
              </q>
              <span className="relative z-10 text-[10px] uppercase tracking-widest mt-6 text-orange-400 font-bold">
                — Natya Shastra
              </span>
            </div>
          </div>

          {/* Margam Sequence Timeline */}
          {dance.margamSequence && (
            <div className="gsap-fade-up pt-8">
              <h2 className="text-4xl font-serif text-white mb-12">
                The Margam{" "}
                <span className="text-xl text-gray-500 italic block mt-2 font-sans font-light">
                  (Sequence of Performance)
                </span>
              </h2>

              <div className="relative border-l border-orange-500/20 ml-4 space-y-10 pb-4">
                {dance.margamSequence.map((item, index) => {
                  const [stepNum, ...titleParts] = item.step.split(". ");
                  const title = titleParts.join(". ");
                  return (
                    <div key={index} className="relative pl-10">
                      <div className="absolute -left-[11px] top-1 w-5 h-5 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)] border-4 border-[#050505]"></div>
                      <div className="bg-[#111]/40 border border-white/5 p-6 rounded-2xl backdrop-blur-sm hover:border-orange-500/30 transition-colors">
                        <span className="text-orange-400 font-serif text-lg italic mb-1 block">
                          Phase {stepNum}
                        </span>
                        <h4 className="text-white font-serif text-2xl mb-3">
                          {title}
                        </h4>
                        <p className="text-gray-400 text-sm font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Sticky Technical Blueprint */}
        <div className="lg:col-span-4 space-y-8">
          <div className="gsap-fade-up bg-gradient-to-b from-[#111] to-[#0a0a0a] rounded-[2rem] border border-orange-500/20 p-8 sticky top-32 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>

            <h3 className="text-white font-serif text-3xl mb-8 flex items-center gap-3">
              <span className="text-2xl opacity-80">⚙️</span> Blueprint
            </h3>

            <div className="space-y-8">
              {dance.costumes && (
                <div className="group">
                  <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>{" "}
                    Costume & Attire
                  </span>
                  <p className="text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                    {dance.costumes}
                  </p>
                </div>
              )}

              {dance.music && (
                <div className="group">
                  <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>{" "}
                    Music & Rhythm
                  </span>
                  <p className="text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                    {dance.music}
                  </p>
                </div>
              )}

              {dance.symbolism && (
                <div className="group">
                  <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>{" "}
                    Symbolism & Yoga
                  </span>
                  <p className="text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                    {dance.symbolism}
                  </p>
                </div>
              )}

              <div className="pt-8 border-t border-white/10 mt-8">
                <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-black font-bold uppercase text-[10px] tracking-[0.2em] rounded-xl hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-1 transition-all duration-300">
                  View Media Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER NAV */}
      <div className="py-16 border-t border-white/5 bg-[#0a0a0a] text-center">
        <Link
          href="/Dances"
          className="inline-flex items-center gap-3 text-gray-500 hover:text-orange-400 transition-colors text-xs font-bold uppercase tracking-widest"
        >
          Explore Other Dance Forms <span>&rarr;</span>
        </Link>
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
