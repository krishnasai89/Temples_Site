import React from "react";
import Link from "next/link";
import Image from "next/image";

// 1. DEFINE THE DATA HERE IN THE SAME FILE
const classicalDances = [
  {
    id: "bharatanatyam",
    name: "Bharatanatyam",
    origin: "Tamil Nadu",
    deity: "Lord Shiva (Nataraja)",
    timeline: "500 BCE–500 CE (Natya Shastra origins)",
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
    geometry: "Interlocking Triangles & Yoga Asanas",

    // NEW ADDITIONS FROM YOUR TEXT
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
    origin: "North India (Uttar Pradesh, Rajasthan)",
    deity: "Lord Krishna & Radha",
    timeline: "400 BCE (Origins) to 16th Century (Mughal Synthesis)",
    origins:
      "Originated from the 'Kathakars' (ancient traveling storytellers). Later, it beautifully synthesized Hindu temple devotion with the sophisticated aesthetics of Mughal courts.",
    description:
      "Derived from the Vedic word 'Katha' (story). Famous for its rhythmic, intricate footwork, rapid pirouettes (Chakkars), straight-legged vertical stance, and highly expressive facial storytelling.",
    image: "/Dance/Kathak.jpg",
    features: [
      "Chakkars (Rapid Whirls/Spins)",
      "Tatkar (Intricate Footwork)",
      "Straight-legged vertical stance",
      "Three Gharanas (Lucknow, Jaipur, Banares)",
    ],
    fullHistory:
      "Kathak traces its roots to 400 BCE and the 'Kathakars', ancient traveling bards who communicated Hindu epics through dance and song. During the Bhakti movement, it became heavily centered on the divine love of Radha and Krishna. In the 16th and 17th centuries, Mughal emperors patronized Kathak, bringing it from temple courtyards into royal durbars. This created a unique synthesis, adding Persian and Central Asian influences like whirling (similar to Sufi dance) and Urdu ghazals. After surviving severe moral policing and decline during the British Raj, Kathak experienced a major revival post-independence, maintaining its dual identity of Hindu devotion and Islamic courtly grace.",
    geometry: "Continuous Circles (Mandala) & Vertical Lines",

    // NEW ADDITIONS FROM YOUR TEXT
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
    timeline: "16th Century (Fully Developed), 1st Millennium CE (Roots)",
    origins:
      "Evolved in the royal courts and theaters of Hindu principalities in the Malayalam-speaking state of Kerala. Its immediate precursor is Krishnanattam.",
    description:
      "An incredibly complex 'story play' (Attakatha) known for its massive headdresses, vividly painted face masks, and movements heavily influenced by ancient South Indian martial arts.",
    image: "/Dance/Kathakali.jpg",
    features: [
      "Chutti (Elaborate face painting)",
      "Kireedam (Massive headgear)",
      "Kalarippayattu (Martial arts influence)",
      "All-male traditional troupes",
    ],
    fullHistory:
      "Kathakali emerged as a distinct genre in the 16th and 17th centuries in Kerala. Legend says it was born when a local ruler, Kottarakkara Thampuran, was denied a Krishnanattam troupe and created his own art form called Ramanattam (which later became Kathakali). Unlike other classical dances that developed in temples with the dancer also singing, Kathakali developed in royal courts and separated the vocalists from the actors. This allowed the dancers to focus entirely on intense, athletic choreography and complex sign language to dramatize the eternal fight between good and evil.",
    geometry: "Wide Stances & Imposing Rectangular Frames",

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
        step: "5. Tiranokku (The Curtain Look)",
        desc: "A dramatic tease and suspense entrance where a character (usually powerful or villainous) is slowly revealed from behind a hand-held curtain.",
      },
      {
        step: "6. Attakatha (The Play)",
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
    origin: "Odisha (Eastern Coast)",
    deity: "Lord Jagannath (Vishnu)",
    timeline: "2nd Century BCE (Evidence in Udayagiri Caves)",
    origins:
      "Originated in the Hindu temples of Odisha. Historically perfected by female temple dancers called 'Maharis' and later expanded by young boy dancers known as 'Gotipuas'.",
    description:
      "The oldest surviving classical dance of India. Characterized by the 'Tribhangi' (independent movement of head, chest, and pelvis) mimicking graceful ancient temple sculptures.",
    image: "/Dance/Odissi.jpg",
    features: [
      "Tribhangi (S-shaped 3-fold body bend)",
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
        desc: "The invocation. Includes a hymn to Lord Jagannath, 'Bhumi Pranam' (salutation to Mother Earth), and the three-fold salutation to the gods, gurus, and audience.",
      },
      {
        step: "2. Batu (Battu Nrutya)",
        desc: "A fast-paced, pure rhythmic dance performed in honor of Lord Shiva, without any accompanying song or recitation.",
      },
      {
        step: "3. Pallavi",
        desc: "A sequence of slow, graceful, and lyrical movements of the eyes, neck, torso, and feet that slowly builds into a fast-tempo crescendo.",
      },
      {
        step: "4. Abhinaya",
        desc: "The expressional dance. The dancer uses mudras and facial expressions to enact a song or poetry, most commonly the Radha-Krishna love poems of the Gita Govinda.",
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
    timeline: "10th Century (Roots) / 17th Century (Formalized)",
    origins:
      "Originated in the village of Kuchipudi (Kuchelapuram). It was formalized in the 17th century by the ascetic Tirtha Narayanayati and his orphan disciple, Siddhendra Yogi.",
    description:
      "A highly theatrical dance-drama known for its fluid grace, fast footwork, lip-syncing (Vachikabhinaya), and spectacular acrobatics like dancing on the rim of a brass plate.",
    image: "/Dance/Kuchipudi.jpg",
    features: [
      "Tarangam (Dancing on a brass plate)",
      "Vachikabhinaya (Lip-syncing / Singing)",
      "Kavutvams (Acrobatics with pots & lamps)",
      "Bhama Kalapam (Iconic dance-drama play)",
    ],
    fullHistory:
      "Kuchipudi traces its origins to ancient traveling bards called 'Kusilava'. It evolved as a deeply religious Vaishnavism tradition in the 17th century when Siddhendra Yogi composed the masterpiece play 'Bhama Kalapam'. Unable to find female performers, he trained the young Brahmin boys of Kuchipudi village to execute the drama. For centuries, it remained a strict, all-male traveling troupe tradition where men played both male and female roles. After surviving the fall of empires and British colonial bans, a 20th-century renaissance led by Gurus like Vedantam Lakshminarayana Sastri opened the art form to women and pioneered solo performances, bringing Kuchipudi to the global stage.",
    geometry: "The Square & Fluid Arcs",

    costumes:
      "Historically performed by men in dhotis or 'Bagalbandi'. Today, female artists wear brilliantly colorful saris (or body-fitting dresses) with a specially stitched pleated fan in the front to highlight exacting footwork. A metallic belt secures the waist. The hair is braided and adorned with Vedic sun and moon jewelry, sometimes set in the 'tribhuvana' style representing the three worlds. Leather anklets (ghungroos) are worn for rhythm. Theatrical props are common, including water pots, lamps, or peacock crowns for the role of Krishna.",
    music:
      "Accompanied by Carnatic music sung in the Telugu language. The performance is distinctly led by a conductor (Sutradhara or Nattuvanar) who humors the audience, explains the play, keeps the beat with cymbals, and recites rhythmic syllables. The orchestra includes the mridangam, flute, veena, and tambura.",
    symbolism:
      "Kuchipudi is a beautiful blend of 'Margi' (classical/spiritual) and 'Desi' (folk/sensual) styles. Unlike the rigid geometric perfection of other forms, it leans towards fluid, folksy, and sensual theatricality. The unique inclusion of 'Kavutvams'—where a dancer might paint a lion with their feet or dance with burning diyas—symbolizes supreme, unwavering concentration and devotion to the divine.",

    margamSequence: [
      {
        step: "1. Melavimpu / Puvaranga",
        desc: "The invocation. An on-stage prayer expressing reverence to Ganesha, the earth, and the guru to ensure a good beginning.",
      },
      {
        step: "2. Pravesa Daru",
        desc: "The dramatic introduction of the characters. Actors are revealed from behind a curtain, historically accompanied by colored resin thrown into torch flames for dramatic effect.",
      },
      {
        step: "3. Nritta (Jatiswaram)",
        desc: "The pure, abstract dance sequence. Dancers perform formalized units of motion (Adugulu/Karanas) rhythmically to a musical raga without storytelling.",
      },
      {
        step: "4. Shabdam / Varnam",
        desc: "The transition into expressive dance (Nritya). Combines mime, footwork, and gesture to draw out the emotional taste (rasa) of the narrative.",
      },
      {
        step: "5. Padam",
        desc: "The deepest emotional core of the play. Slower, lyrical dance expressing spiritual love, allegories, and intimate sentiments.",
      },
      {
        step: "6. Tarangam / Kavutvam",
        desc: "The spectacular climax. The dancer performs highly complex rhythmic footwork while executing acrobatics, such as balancing a water pot on the head while dancing on the rim of a brass plate.",
      },
    ],
  },
  {
    id: "manipuri",
    name: "Manipuri",
    origin: "Manipur (Northeast India)",
    deity: "Lord Krishna & Radha (Gaudiya Vaishnavism)",
    timeline: "15th Century (Roots) / 18th Century (Formalized)",
    origins:
      "Originated in the Meitei civilization of Manipur. Formalized by King Rajarshi Bhagyachandra in the 18th century as the highest spiritual expression of Krishna worship.",
    description:
      "Renowned for its soft, peaceful, and dreamy wave-like movements. It is the only classical dance where dancers do not wear ankle bells, giving them a magical, floating appearance.",
    image: "/Dance/Manipuri.jpg",
    features: [
      "Potloi / Kumin (Barrel-shaped floating skirt)",
      "Bhakti Rasa (Pure spiritual devotion)",
      "Pung Cholom (Acrobatic drumming dance)",
      "Dreamy, wave-like, gentle movements",
    ],
    fullHistory:
      "Manipuri dance (Jagoi) traces its ancient roots to the Meitei civilization, fusing pre-Hindu ritualistic traditions like 'Lai Haraoba' and martial arts ('Thang Ta') with profound Hindu Vaishnavism. Its golden era began in the 18th century under King Rajarshi Bhagyachandra, who codified the dance and famously designed the iconic 'Potloi' costume after seeing his daughter dancing in a dream. Following British annexation in 1891, the art was ridiculed and restricted to temples. However, Nobel Laureate Rabindranath Tagore was so mesmerized by the dance in 1919 that he brought its Gurus to Shantiniketan, triggering a massive modern revival and integration into Bengali culture.",
    geometry: "Figure Eights (Nagabandha Mudra) & Ellipses",

    costumes:
      "Female dancers (Gopis) wear the stunning 'Kumin' or 'Potloi'—an elaborately decorated, stiff, barrel-shaped long skirt with mirrors and gold/silver embroidery. They wear a translucent veil (Meikhumbi) over their heads and do not wear ankle bells (ghungroos). Male dancers playing Krishna wear bright yellow-orange dhotis and crowns with peacock feathers. Drummers (Pung Cholom) wear white dhotis and turbans.",
    music:
      "The musical heartbeat of Manipuri is the 'Pung' (a barrel drum) and small 'kartals' (cymbals). Drummers undergo rigorous training to play the Pung while executing highly acrobatic jumps and spins (Pung Cholom). The ensemble also includes harmonium, sembong, and flute, accompanying devotional singing.",
    symbolism:
      "Manipuri is purely spiritual, expressing 'Bhakti Rasa' (the emotion of devotion). Unlike other forms that emphasize forceful geometry and sharp angles, Manipuri embodies dreamy, wave-like movements where one motion dissolves softly into the next. The choreography celebrates the 'Raas Leela'—the divine, cosmic love dance between Krishna and the Gopis of Vrindavan.",

    margamSequence: [
      {
        step: "1. Maharas",
        desc: "The most prominent dance performed on a full moon night in November. It depicts the Gopis' sorrow after Krishna disappears, and his joyous return where he multiplies himself to dance with each one.",
      },
      {
        step: "2. Basantaras",
        desc: "Celebrated on a full moon night in April to welcome the spring season, famously timed with the Hindu festival of colors, Holi.",
      },
      {
        step: "3. Kunjaras",
        desc: "An autumn Raas Leela celebrated on the full moon night of Ashwin (October).",
      },
      {
        step: "4. Nityaras",
        desc: "A beautiful dance of divine union, depicting Radha fully surrendering herself to Krishna. It can be celebrated on any night of the year.",
      },
      {
        step: "5. Dibaras",
        desc: "A daytime performance of the Raas Leela that can be celebrated at any time of the year.",
      },
      {
        step: "6. Pung Cholom & Kartal Cholom",
        desc: "Often integrated into the repertoire, these are vigorous, acrobatic, and joyful group dances performed by male drummers and cymbal players.",
      },
    ],
  },
  {
    id: "mohiniyattam",
    name: "Mohiniyattam",
    origin: "Kerala",
    deity: "Lord Vishnu (Mohini Avatar)",
    timeline: "11th Century (Temple Sculptures) / 18th Century (Systematized)",
    origins:
      "Evolved in the Hindu temples of Kerala. It was significantly systematized in the 18th and 19th centuries under the patronage of the poet-king Swathi Thirunal Rama Varma.",
    description:
      "Known as the 'Dance of the Enchantress'. It is a highly graceful, solo dance characterized by gentle, swaying movements, and the iconic white and gold traditional attire.",
    image: "/Dance/Mohiniyattam.jpg",
    features: [
      "Lasya Style (Feminine, gentle grace)",
      "Ati Bhanga (Swaying figure-8 motion)",
      "White and Gold Kasavu costumes",
      "Manipravalam lyrics (Sanskrit-Malayalam)",
    ],
    fullHistory:
      "Mohiniyattam derives its name from 'Mohini', the female enchantress avatar of Lord Vishnu who used her charm to rescue the nectar of immortality (Amrita) from the Asuras. While its neighboring dance, Kathakali, is highly vigorous and masculine, Mohiniyattam was developed to exclusively embody the 'Lasya' (delicate, eros-filled, and feminine) style described in the Natya Shastra. Like all Indian classical arts, it was severely suppressed and banned during the British Raj under the 'anti-nautch' movement. In the 1930s, the great Malayalam poet Vallathol Narayana Menon sparked a nationalist revival, establishing the Kerala Kalamandalam to rescue, reconstruct, and elevate the dance to its modern classical status.",
    geometry: "Gentle Undulating Waves & Figure Eights",

    costumes:
      "Visually distinct for its simplicity and elegance. Dancers wear an off-white or ivory sari (resembling a ceremonial Kasavu saree) adorned with brilliant gold brocade borders. The waist is highlighted by a golden belt, and the front features a pleated sheet with gold/saffron concentric bands to visually amplify the footwork. Dancers wear natural makeup with a Hindu tikka and brilliantly red-dyed fingers/soles. Uniquely, the hair is gathered into a smooth, tight round chignon (bun) tied entirely on one side of the head, ringed with fragrant jasmine flowers.",
    music:
      "The musical repertoire relies heavily on 'Manipravalam'—a unique linguistic blend of Sanskrit, Tamil, and Malayalam. The melodies (ragas) are rendered in the 'Sopana' (steps) style, which is a slow, deeply melodic vocal tradition native to Kerala. The accompanying orchestra includes the Mridangam or Madhalam (barrel drum), Idakka (hourglass drum), flute, Veena, and Kuzhitalam (cymbals).",
    symbolism:
      "Mohiniyattam is the ultimate celebration of feminine grace, deeply connected to the natural landscape of Kerala. The basic posture—parted feet, outward-bent knees, and a gentle side-to-side swaying of the hips—is designed to mimic the calming swaying of palm leaves and the gentle undulating motion of ocean waves. It employs 'Ekaharya Abhinaya', meaning a single dancer acts out a complete play or spiritual message.",

    margamSequence: [
      {
        step: "1. Cholkettu",
        desc: "The invocation. Starts with reverence to the goddess Bhagavati and ends with a prayer to Lord Shiva.",
      },
      {
        step: "2. Jatisvaram",
        desc: "A pure, rhythmic dance sequence (Nritta) performed to melodic musical notes without lyrics.",
      },
      {
        step: "3. Varnam",
        desc: "The expressive centerpiece. The dancer acts out a play, utilizing mimicry and charm to communicate the underlying spiritual message.",
      },
      {
        step: "4. Padam",
        desc: "A slower, emotionally rich song focused heavily on acting (Abhinaya) and expressing devotion or love.",
      },
      {
        step: "5. Tillana",
        desc: "A fast-paced, pure rhythmic sequence where the dancer interprets complex musical melodies with rapid footwork.",
      },
      {
        step: "6. Shlokam",
        desc: "A lyrical verse recited and enacted without strict rhythmic meter.",
      },
      {
        step: "7. Saptam",
        desc: "A concluding expressive piece, rounding out the traditional seven-part repertoire.",
      },
    ],
  },
  {
    id: "sattriya",
    name: "Sattriya",
    origin: "Assam (Northeast India)",
    deity: "Lord Krishna & Avatars of Vishnu",
    timeline: "15th Century (Created) / 2000 (Officially Recognized)",
    origins:
      "Created by the 15th-century polymath and saint, Sankardev. It was preserved for centuries within 'Sattras' (Hindu monasteries) as a community religious art.",
    description:
      "A vibrant dance-drama blending graceful movements with acrobatic elements, traditionally performed by monks to narrate mythological tales of Krishna.",
    image: "/Dance/Sattriya.jpg",
    features: [
      "Ankiya Nat (One-act dance dramas)",
      "Bargeets (Devotional compositions)",
      "Mati Akhara (64 foundational exercises)",
      "Khol (Asymmetrical clay drum)",
    ],
    fullHistory:
      "Sattriya was created in the 15th century by the Assamese poet-saint Sankardev and his disciple Madhavadeva to propel the Vaishnava Bhakti movement. For over 500 years, it was fiercely protected and performed exclusively by male monks ('bhokots') within the inner sanctums of 'Sattras' (monasteries). Distinctively, the dance is never performed before an idol, but rather before a copy of the sacred Bhagavata Purana placed in the eastern corner of the dance hall. In the late 20th century, the art form transitioned to the metropolitan stage, welcomed female dancers, and was officially recognized as India's eighth classical dance in the year 2000.",
    geometry: "Rectilinear & Circular Transitions",

    costumes:
      "Dancers wear garments made from Assam's famous local silks: 'Pat' (raw white silk) and 'Muga' (golden silk), woven with local motifs. Men wear a dhoti, chadar, and a special turban (paguri), while women wear a ghuri, chadar, and a waist cloth (kanchi). The jewelry is uniquely Assamese, made of 'Kesa Sun' (raw gold), featuring items like Muthi Kharu (bracelets) and Kopali (forehead bands). In the 'Ankiya Naat' dramas, beautifully crafted masks (Mukha) are used to depict demons and animals.",
    music:
      "Accompanied by 'Bargeets', which are special devotional songs based on classical ragas composed by Sankardev. The rhythmic heartbeat comes from the 'Khol', a unique two-faced asymmetrical drum played with the fingers, supported by various cymbals (Tālas like Bhortal and Manjira) and the bamboo flute.",
    symbolism:
      "Deeply rooted in the Ekasarana Dharma, Sattriya intertwines religious values, ethics, and the joys of life. The choreography balances two primary styles: 'Paurashik Bhangi' (energetic, jumping masculine movements) and 'Stri Bhangi' or Lasya (delicate, graceful feminine movements).",

    margamSequence: [
      {
        step: "1. Sutradhara (Sutra-bhangi)",
        desc: "The anchor or narrator of the play introduces the performance, presenting the spiritual values of Vaishnavism and offering commentary in the local language.",
      },
      {
        step: "2. Prabesh",
        desc: "The stylized and dramatic entry of the main characters onto the stage.",
      },
      {
        step: "3. Nritta / Mati Akhara",
        desc: "Pure, rhythmic dance showcasing the foundational exercises and abstract movement patterns of the dancers.",
      },
      {
        step: "4. Jhumura",
        desc: "A pure, energetic, and forceful dance piece traditionally performed by the young monks.",
      },
      {
        step: "5. Nritya / Bhangi",
        desc: "The expressive, character-specific dance acting out Krishna's life, using exact mudras and facial expressions.",
      },
      {
        step: "6. Ankiya Nat",
        desc: "The grand climax. A complete one-act dance-drama that perfectly blends ballads, dance, and theatrical storytelling.",
      },
    ],
  },
  {
    id: "chhau",
    name: "Chhau",
    origin: "Eastern India (Jharkhand, West Bengal, Odisha)",
    deity: "Lord Shiva, Goddess Shakti & Epic Heroes",
    timeline: "Indigenous roots, formalized over centuries",
    origins:
      "Evolved from indigenous martial arts and mock combat. It is recognized by the Ministry of Culture as India's 9th Classical Dance and is inscribed on UNESCO's Intangible Cultural Heritage list.",
    description:
      "A spectacular, high-energy martial dance-drama known for its breathtaking acrobatics, sword-and-shield combat techniques, and massive, vibrant masks.",
    image: "/Dance/Chhau.jpg", // Make sure to add this image to your public folder!
    features: [
      "Vibrant Theatrical Masks",
      "Martial Arts Base (Khel)",
      "Acrobatic leaps and somersaults",
      "Three Styles (Purulia, Seraikella, Mayurbhanj)",
    ],
    fullHistory:
      "Chhau (derived from 'Chhaya' meaning shadow/mask, or 'Chhauni' meaning military camp) is a tribal martial dance of Eastern India. It is unique because it is divided into three distinct styles: Purulia (West Bengal) which uses massive theatrical masks, Seraikella (Jharkhand) which uses smaller, highly stylized masks, and Mayurbhanj (Odisha) which uses no masks at all. Historically performed by male warriors during the Chaitra Parva (spring festival), it tells stories from the Mahabharata, Ramayana, and local folklore through explosive, gravity-defying movements.",
    geometry: "Expansive Leaps & Aerial Arcs",
    costumes:
      "Costumes vary drastically by style. Purulia Chhau dancers wear heavily embroidered velvet jackets and trousers, but the focal point is the massive, magnificent papier-mâché masks decorated with shimmering beads, tinsel, and feathers. Mayurbhanj dancers (who wear no masks) use more traditional dhotis to allow for extreme martial arts flexibility.",
    music:
      "The music is loud, resonant, and thrilling. It is deeply rooted in tribal traditions, featuring the thundering beats of the Dhumsa (a massive kettle drum) and the Dhol (cylindrical drum), accompanied by the piercing, melodic wail of the Shehnai (wind instrument).",
    symbolism:
      "Chhau is the ultimate expression of 'Vira Rasa' (heroism) and 'Raudra Rasa' (fury). The masks in Purulia and Seraikella are not just props; they dictate the entire body language of the dancer, who must convey deep emotion without the use of facial expressions (Mukhabhinaya).",
    margamSequence: [
      {
        step: "1. Ranga Baja",
        desc: "An explosive musical invocation where the drummers play vigorously to summon the audience and set the heroic mood.",
      },
      {
        step: "2. Chali",
        desc: "The stylized, martial walk or gait used by the characters to enter the performance arena.",
      },
      {
        step: "3. Topka",
        desc: "The basic walking movement, heavily imitating the gaits of animals (like lions or swans) and the movement of nature.",
      },
      {
        step: "4. Ufli",
        desc: "Complex martial movements and mock combat stances, including jumping, defending, and attacking maneuvers.",
      },
      {
        step: "5. Khel",
        desc: "The climactic dramatic combat sequence where the epic story of good triumphing over evil is enacted through spectacular acrobatics.",
      },
    ],
  },
  {
    id: "gaudiya-nritya",
    name: "Gaudiya Nritya",
    origin: "West Bengal",
    deity: "Lord Krishna (Chaitanya Mahaprabhu)",
    timeline: "Ancient roots, Reconstructed in late 20th Century",
    origins:
      "An ancient classical dance of Bengal that was lost during colonial rule. It was meticulously reconstructed from temple sculptures, literature, and folk traditions by scholar Dr. Mahua Mukherjee.",
    description:
      "A highly spiritual, fluid, and lyrical dance deeply connected to Gaudiya Vaishnavism, balancing both graceful (Lasya) and vigorous (Tandava) elements.",
    image: "/Dance/Gaudiya.jpg",
    features: [
      "Chauka Stance (Square posture)",
      "Influence of Kirtan & Nachni",
      "Spiritual Trance (Bhakti)",
      "Sculptural Poses",
    ],
    fullHistory:
      "Gaudiya Nritya traces its philosophical roots to the Natya Shastra and the spiritual revolution of the 15th-century mystic, Sri Chaitanya Mahaprabhu. Historically performed in the temples of undivided Bengal, the dance nearly went extinct due to a lack of patronage and colonial bans. In the modern era, it has been reconstructed into a classical format by synthesizing surviving Bengali folk forms (like Chhau, Nachni, and Kirtan) with the ancient sculptures found in the terracotta temples of Bishnupur.",
    geometry: "Circular Trance & The Square (Chauka)",
    costumes:
      "Dancers typically wear traditional Bengali silk saris (like Baluchari) draped in a distinct regional style. The jewelry often reflects traditional Bengali craftsmanship, including floral motifs and silver ornaments. The makeup is highly expressive, echoing the terracotta art of Bengal.",
    music:
      "The musical accompaniment is heavily based on Bengali Kirtan and classical Hindustani music. It features the Khol (a terracotta two-sided drum), cymbals (Kartal), and the flute, creating a deeply hypnotic and devotional atmosphere.",
    symbolism:
      "The dance is an aesthetic manifestation of 'Bhakti Rasa' (devotion). It symbolizes the longing of the human soul (Jivatma) for the supreme divine (Paramatma), often enacted through the eternal love story of Radha and Krishna and the teachings of the Gita Govinda.",
    margamSequence: [
      {
        step: "1. Vandana",
        desc: "A prayer and invocation to the deities, the guru, and the audience.",
      },
      {
        step: "2. Alap",
        desc: "A slow, melodic introduction where the dancer introduces the basic postures and grace of the art form.",
      },
      {
        step: "3. Chali",
        desc: "A rhythmic, pure dance sequence establishing the geometric framework of the dance.",
      },
      {
        step: "4. Dashavatara",
        desc: "A highly expressive narrative sequence depicting the ten avatars of Lord Vishnu.",
      },
      {
        step: "5. Padavali / Kirtan",
        desc: "The climax of devotional expression, where the dancer enters a state of spiritual ecstasy acting out Vaishnava poetry.",
      },
    ],
  },
  {
    id: "yakshagana",
    name: "Yakshagana",
    origin: "Karnataka",
    deity: "Lord Vishnu, Shiva & Devi",
    timeline: "11th to 16th Century",
    origins:
      "A traditional theatre form of Karnataka. While traditionally classified as folk or temple theatre, its rigorous rules, ragas, and complex structure align it closely with classical arts.",
    description:
      "A twilight-to-dawn theatrical masterpiece known for its booming drums, extempore (improvised) dialogue, and massive, glittering headgear.",
    image: "/Dance/Yakshagana.jpg",
    features: [
      "Mundasu (Massive turban/headgear)",
      "Extempore Dialogue",
      "Chande Drum",
      "Twilight-to-Dawn Performance",
    ],
    fullHistory:
      "Yakshagana translates to 'The Song of the Yakshas' (nature spirits). Evolving from the Bhakti movement, it is a magnificent fusion of dance, music, spoken word, and elaborate costumes. Unlike purely classical dances where lyrics are pre-set, Yakshagana is unique because the actors improvise their dialogue on stage based on the singer's poetic verses (Prasanga). Traditionally performed in open-air theaters from dusk until dawn, it brings to life roaring battles and divine legends from the Puranas.",
    geometry: "Strong Stances & Spiraling Spins",
    costumes:
      "Yakshagana boasts some of the most spectacular costumes in the world. The defining feature is the 'Mundasu', an enormous, heavy, glittering headgear crafted from cloth, gold foil, and mirror work. The face is painted in bright, specific colors to denote character traits (heroic, demonic, divine), and actors wear heavy wooden ornaments layered in gold foil.",
    music:
      "The musical heartbeat is aggressive and booming, driven by the 'Chande' (a high-pitched traditional drum played with sticks) and the 'Maddale'. The lead singer, known as the 'Bhagavata', controls the narrative pace using cymbals (Tala).",
    symbolism:
      "Yakshagana symbolizes the epic clash of cosmic forces. The dance focuses heavily on 'Vira' (valor) and 'Raudra' (anger). The massive costumes and loud drums are designed to make the human actors look and sound like supernatural beings descending to earth.",
    margamSequence: [
      {
        step: "1. Sabhalakshana",
        desc: "The preliminary rituals, starting in the green room (Chowki) with prayers to Lord Ganesha, followed by the drummers beating the Chande to announce the play.",
      },
      {
        step: "2. Oddolaga",
        desc: "The grand, formal entrance of the royal or divine characters, establishing their majesty on stage.",
      },
      {
        step: "3. Prasanga",
        desc: "The main narrative poem sung by the Bhagavata, setting the scene for the actors.",
      },
      {
        step: "4. Maathu (Dialogue)",
        desc: "The actors stop dancing and engage in highly intellectual, improvised spoken dialogue to explain the sung verses.",
      },
      {
        step: "5. Yuddha (Battle)",
        desc: "The high-energy, spinning, and leaping dance combat sequence resolving the conflict of the epic.",
      },
    ],
  },
  {
    id: "bhagavata-mela",
    name: "Bhagavata Mela",
    origin: "Tamil Nadu (Melattur)",
    deity: "Lord Narasimha (Avatar of Vishnu)",
    timeline: "16th Century",
    origins:
      "Created by Telugu Brahmins who migrated to Tamil Nadu after the fall of the Vijayanagara Empire. It is the direct sibling of Kuchipudi.",
    description:
      "A highly religious, all-male traditional dance-drama performed exclusively in the temples of the Thanjavur district to honor Lord Narasimha.",
    image: "/Dance/BhagavataMela.jpg",
    features: [
      "All-Male Brahmin Troupes",
      "Telugu Lyrics in Tamil Nadu",
      "Prahlada Charitam",
      "Religious Ritual Theatre",
    ],
    fullHistory:
      "Bhagavata Mela is one of India's best-kept secrets. When the Vijayanagara Empire fell in 1565, hundreds of Kuchipudi artists fled Andhra Pradesh and settled in Melattur, Tamil Nadu. They created Bhagavata Mela as a pure offering to the gods. Even today, it is performed strictly as a religious ritual, not for commercial entertainment. It is performed only once a year during Narasimha Jayanti by all-male troupes (who fast and undergo rituals), keeping the 500-year-old Telugu compositions of Venkatarama Sastry alive in the heart of Tamil Nadu.",
    geometry: "The Square & Expressive Storytelling",
    costumes:
      "Because it is performed by men playing both male and female roles, the costumes are deeply traditional. Men playing female roles wear classical Saris and traditional temple jewelry, while male deities are dressed in Dhotis and royal ornaments. The most sacred prop is the ferocious mask of Lord Narasimha, which is revered as an actual deity.",
    music:
      "The music is pure, high-class Carnatic music sung in Telugu. The orchestra includes the Mridangam, flute, and violin. The Nattuvanar (conductor) leads the play with cymbals, just like in Bharatanatyam and Kuchipudi.",
    symbolism:
      "The entire performance is an act of 'Bhakti' (supreme devotion). The enactment of 'Prahlada Charitam' (the story of Narasimha) is so intense that the actor wearing the Narasimha mask often enters a spiritual trance, requiring other actors to physically hold him back during the climax.",
    margamSequence: [
      {
        step: "1. Thodayam & Mangalam",
        desc: "Sacred invocatory dances performed behind a curtain to bless the stage and ward off evil.",
      },
      {
        step: "2. Konangi",
        desc: "The entry of a traditional comic character (the buffoon) who dances to warm up the audience and set a joyous tone.",
      },
      {
        step: "3. Patra Pravesam",
        desc: "The highly stylized entry of the main characters, where they introduce themselves through a specific introductory song (Daru).",
      },
      {
        step: "4. Vachikabhinaya",
        desc: "The theatrical heart of the play, combining classical dance, complex hand gestures, and spoken dialogue to progress the story.",
      },
      {
        step: "5. Narasimha Darshan",
        desc: "The spiritual climax of the festival, where the furious avatar of Lord Narasimha is revealed, often culminating in a divine trance.",
      },
    ],
  },
  {
    id: "padayani",
    name: "Padayani",
    origin: "Kerala",
    deity: "Goddess Bhadrakali",
    timeline: "Ancient folk tradition",
    origins:
      "Evolved in the Bhagavati temples of central Kerala as a ritualistic healing art and theatrical offering to appease the Goddess after her battle with the demon Darika.",
    description:
      "A highly vibrant ritual theatre known for its massive, vividly painted masks (Kolams) and rhythmic, trance-inducing drum beats.",
    image: "/Dance/Padayani.jpg",
    features: [
      "Kolams (Massive painted masks)",
      "Thappu (Heavy percussion drum)",
      "Ritualistic healing theatre",
      "Natural pigment face/mask painting",
    ],
    fullHistory:
      "Padayani, meaning 'military formation' or 'row of warriors', reflects the ancient martial spirit of Kerala. It evolved into a ritualistic theatre performed in temples to appease Goddess Bhadrakali. According to myth, the Goddess remained furious even after killing the demon Darika. To calm her, Lord Shiva and other deities painted their faces, wore massive masks, and danced before her. Today, it is a magnificent community event that blends music, dance, painting, and satire.",
    geometry: "Towering Vertical Masks & Circular Trance",
    costumes:
      "The defining feature of Padayani is the 'Kolam'—towering masks intricately crafted from the green spathes of the areca palm tree. They are painted using natural dyes (red, black, yellow, and white) to depict various divine and demonic characters (like Bhairavi, Yakshi, and Marutha). Dancers also wear skirts made of tender coconut leaves.",
    music:
      "The entire performance is driven by the raw, booming sound of the 'Thappu' (a traditional frame drum). The music builds into a frantic, trance-inducing crescendo accompanied by traditional Malayalam folk songs that narrate local myths.",
    symbolism:
      "Padayani is deeply symbolic of purification and psychological healing. The terrifying masks are meant to drive away evil spirits, illness, and societal fears, while the comic interludes provide social satire and communal relief.",
    margamSequence: [
      {
        step: "1. Choottu Vaipu",
        desc: "The lighting of the sacred fire using dry palm leaves to invoke the divine presence and illuminate the temple courtyard.",
      },
      {
        step: "2. Thappu Melam",
        desc: "A mesmerizing percussion symphony where drummers heat their Thappu instruments over the fire and play rhythmic beats to summon the village.",
      },
      {
        step: "3. Edani",
        desc: "Comic, satirical interludes performed by characters without heavy masks to entertain the crowd before the main ritual.",
      },
      {
        step: "4. Kolam Thullal",
        desc: "The grand entrance and frenzied dance of the massive Kolams (masks), starting with smaller ones and ending with the colossal Bhairavi Kolam.",
      },
    ],
  },
  {
    id: "paika",
    name: "Paika Dance",
    origin: "Odisha",
    deity: "Lord Jagannath & Martial Spirits",
    timeline: "16th Century (Prominent during 1817 Rebellion)",
    origins:
      "Developed as the daily physical and combat training regimen for the 'Paikas', the traditional land-owning peasant militia of Odisha.",
    description:
      "An explosive, high-energy martial arts dance performed with swords, shields, and wooden sticks, celebrating raw physical power and valor.",
    image: "/Dance/Paika.jpg",
    features: [
      "Sword and Shield Combat",
      "Acrobatic leaps and formations",
      "Vira Rasa (Heroic expression)",
      "Performed in traditional 'Akhadas'",
    ],
    fullHistory:
      "The Paikas were the fearsome warrior-farmers of the ancient Kalinga kingdom (modern-day Odisha). During peacetime, they maintained their combat readiness through rigorous training in village gymnasiums called 'Akhadas'. This training eventually stylized into the Paika Dance. It holds immense historical pride, as the Paikas used these exact combat skills to launch the famous Paika Rebellion against the British East India Company in 1817. Today, the dance preserves the legacy of those freedom fighters.",
    geometry: "Sharp Diagonals, Clashing Lines & Athletic Leaps",
    costumes:
      "Dancers dress in traditional warrior attire. They wear colorful, tightly wrapped dhotis that allow for extreme physical flexibility, along with red turbans or headbands. Their torsos are often bare but adorned with colored powders. The most important 'costumes' are their authentic weapons—curved swords, round shields, and long wooden staffs.",
    music:
      "The music is thunderous and designed to pump adrenaline. It is dominated by the 'Dhol' (barrel drum), 'Nagara' (kettle drum), and the piercing sound of the 'Mahuri' (a traditional wind instrument). The rhythm accelerates continuously, matching the escalating speed of the mock battles.",
    symbolism:
      "Paika is the ultimate embodiment of 'Vira Rasa' (the aesthetic of heroism and courage). It symbolizes the readiness to defend one's homeland, showcasing the discipline, agility, and brotherhood of the ancient warrior class.",
    margamSequence: [
      {
        step: "1. Akhada Puja",
        desc: "A solemn invocation paying respect to the weapons, the earth (Akhada), and the martial gurus before combat begins.",
      },
      {
        step: "2. Salami",
        desc: "A stylized, rhythmic march where the warriors enter the arena and display their weapons to the audience.",
      },
      {
        step: "3. Lathi Khel",
        desc: "A display of extreme agility and defense using long wooden staffs, often involving rapid spinning and striking.",
      },
      {
        step: "4. Yuddha / Khanda Khel",
        desc: "The thrilling climax featuring high-speed mock combat with actual swords and shields, complete with acrobatic leaps and aggressive battle formations.",
      },
    ],
  },
];

// 2. THE PAGE COMPONENT
export default async function DanceDetail({ params }) {
  const { id } = await params;

  // Find the specific dance data now that it is defined above
  const dance = classicalDances.find((d) => d.id === id);

  // Fallback if ID doesn't match
  if (!dance) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-white">Dance form not found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200">
      {/* 1. HERO SECTION */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src={dance.image}
          alt={dance.name}
          fill
          className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/60"></div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-24 z-10">
          <Link
            href="/Dances"
            className="text-orange-500 flex items-center gap-2 mb-6 hover:text-white transition-colors"
          >
            <span>&larr;</span> Back to Archive
          </Link>
          <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            Sacred Tradition of {dance.origin}
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-4 drop-shadow-2xl">
            {dance.name}
          </h1>
        </div>
      </div>

      {/* 2. QUICK INFO BAR */}
      <div className="bg-white/5 border-y border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 text-center">
          <div className="p-8">
            <span className="text-gray-500 uppercase text-[10px] tracking-widest block mb-2">
              Origin
            </span>
            <span className="text-orange-400 font-serif text-lg">
              {dance.origin}
            </span>
          </div>
          <div className="p-8">
            <span className="text-gray-500 uppercase text-[10px] tracking-widest block mb-2">
              Timeline
            </span>
            <span className="text-orange-400 font-serif text-lg">
              {dance.timeline}
            </span>
          </div>
          <div className="p-8">
            <span className="text-gray-500 uppercase text-[10px] tracking-widest block mb-2">
              Primary Deity
            </span>
            <span className="text-orange-400 font-serif text-lg">
              {dance.deity}
            </span>
          </div>
          <div className="p-8">
            <span className="text-gray-500 uppercase text-[10px] tracking-widest block mb-2">
              Geometry
            </span>
            <span className="text-orange-400 font-serif text-lg">
              {dance.geometry}
            </span>
          </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left: History */}
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-4xl font-serif text-white mb-8 border-b border-orange-500/30 pb-4">
              The Lineage
            </h2>
            <p className="text-xl leading-relaxed font-light text-gray-400">
              {dance.fullHistory}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <h3 className="text-orange-500 font-serif text-2xl mb-4 text-center">
                Core Elements
              </h3>
              <ul className="space-y-3">
                {dance.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="text-orange-500">✦</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-orange-500/5 rounded-3xl border border-orange-500/20 flex flex-col justify-center text-center">
              <span className="text-4xl mb-4">🕉️</span>
              <q className="italic text-gray-400">
                Where the hand goes, the eyes follow; where the eyes go, the
                mind follows.
              </q>
              <span className="text-[10px] uppercase tracking-widest mt-4 text-orange-500">
                — Natya Shastra
              </span>
            </div>
          </div>
        </div>

        {/* Right: Technical Aspects / Sidebar */}
        <div className="space-y-8">
          <div className="p-8 bg-[#111] rounded-3xl border border-white/5 sticky top-32">
            <h3 className="text-white font-serif text-2xl mb-6">
              The Blueprint
            </h3>
            <div className="space-y-6">
              <div>
                <span className="text-orange-500 text-xs font-bold uppercase tracking-tighter">
                  Costume
                </span>
                <p className="text-sm text-gray-400 mt-1 italic">
                  Traditional attire specific to {dance.origin}, deeply tied to
                  regional customs and local textile history.
                </p>
              </div>
              <div>
                <span className="text-orange-500 text-xs font-bold uppercase tracking-tighter">
                  Rhythm (Tala)
                </span>
                <p className="text-sm text-gray-400 mt-1">
                  Complex mathematical cycles dictating the energetic footwork
                  and expressions.
                </p>
              </div>
              <div className="pt-6">
                <button className="w-full py-4 bg-orange-500 text-black font-bold uppercase text-[10px] tracking-[0.2em] rounded-full hover:bg-white transition-colors">
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Render the Margam Sequence only if the dance has it (like Bharatanatyam) */}
        {dance.margamSequence && (
          <div className="mt-12">
            <h3 className="text-3xl font-serif text-white mb-6 border-b border-orange-500/30 pb-4">
              The Margam (Sequence of Performance)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dance.margamSequence.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl"
                >
                  <h4 className="text-orange-400 font-serif text-xl mb-2">
                    {item.step}
                  </h4>
                  <p className="text-gray-400 text-sm font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Right: Technical Aspects / Sidebar */}
        <div className="space-y-8 mt-10">
          <div className="p-8 bg-[#111] rounded-3xl border border-white/5 sticky top-32">
            <h3 className="text-white font-serif text-2xl mb-6">
              The Blueprint
            </h3>
            <div className="space-y-6">
              {/* Dynamically checking if the data exists before rendering */}
              {dance.costumes && (
                <div>
                  <span className="text-orange-500 text-xs font-bold uppercase tracking-tighter">
                    Costume & Attire
                  </span>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                    {dance.costumes}
                  </p>
                </div>
              )}

              {dance.music && (
                <div>
                  <span className="text-orange-500 text-xs font-bold uppercase tracking-tighter">
                    Music & Rhythm
                  </span>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                    {dance.music}
                  </p>
                </div>
              )}

              {dance.symbolism && (
                <div>
                  <span className="text-orange-500 text-xs font-bold uppercase tracking-tighter">
                    Symbolism & Yoga
                  </span>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                    {dance.symbolism}
                  </p>
                </div>
              )}

              <div className="pt-6 border-t border-white/10">
                <button className="w-full py-4 bg-orange-500 text-black font-bold uppercase text-[10px] tracking-[0.2em] rounded-full hover:bg-white transition-colors">
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NAV */}
      <div className="py-12 border-t border-white/10 text-center">
        <Link
          href="/Dances"
          className="opacity-40 hover:opacity-100 transition-opacity"
        >
          Explore Other Forms
        </Link>
      </div>
    </div>
  );
}
