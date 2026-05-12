# 🛕 Vishwaguru: The Divine Blueprint

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

**[🌍 View Live Website](https://temples-site.vercel.app/)** • **[💻 View Source Code](https://github.com/krishnasai89/Temples_Site)**

Vishwaguru is an immersive, cinematic web experience dedicated to preserving and showcasing the profound heritage of India's ancient temples, sacred narratives, and classical arts. Built with modern web technologies, it blends deep historical wisdom with cutting-edge UI/UX design.

## ✨ Key Features

- **Cinematic Dark Mode UI:** A premium, glassmorphic design system utilizing deep blacks, slate grays, and glowing cosmic orange accents.
- **Scroll-Triggered Animations:** Smooth, hardware-accelerated scroll animations powered by **GSAP** and ScrollTrigger, bringing stories and architecture to life as the user scrolls.
- **Dynamic Routing:** Seamless navigation using Next.js App Router for deep-diving into specific temple details, sacred stories, and classical dances.
- **Interactive Data Filtering:** A custom, glass-styled masonry grid that allows users to instantly filter ancient temples by category (UNESCO, Jyotirlinga, Char Dham, etc.).
- **State Preservation:** Engineered with native browser history APIs and session storage to ensure users never lose their scroll position when navigating back from a deep dive.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React) utilizing the App Router
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [GSAP](https://gsap.com/) (GreenSock Animation Platform) & [Framer Motion](https://www.framer.com/motion/)
- **Data Handling:** Local JSON architecture for ultra-fast, static data delivery

## 🗺️ Project Structure

```text
vishwaguru/
├── app/
│   ├── components/
│   │   ├── Navbar.jsx        # Glassmorphic, framer-motion mobile menu
│   │   └── Footer.jsx        # Premium dark-mode footer
│   ├── stories/
│   │   ├── page.jsx          # Sacred Narratives & Epics hub
│   │   └── [id]/page.jsx     # Dynamic story detail pages
│   ├── dance/
│   │   ├── page.jsx          # The Cosmic Dance & Natya Shastra
│   │   └── [id]/page.jsx     # Dynamic classical dance pages
│   ├── temple/
│   │   └── [id]/page.jsx     # Deep dive into temple architecture
│   ├── layout.js             # Root layout with global fonts and Navbar/Footer
│   └── page.js               # Home page (Hero, About, Temple Showcase)
├── public/                   # Static assets (Images, Fonts)
└── templesData.json          # Main database for site content
```

## 🚀 Getting Started

To run this project locally on your machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/krishnasai89/Temples_Site.git
   ```

2. **Navigate into the directory:**

   ```bash
   cd Temples_Site
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 🎨 Design Philosophy (The Yantra)

In Indian classical tradition, the concept of _Yantra_ refers to sacred geometry representing the cosmos. This website was designed with that same philosophy:

- **Symmetry:** Grid layouts and flex containers are mathematically balanced.
- **Motion:** Animations are eased and staggered to mimic the rhythm of classical dance.
- **Depth:** Drop shadows, backdrop blurs, and gradient overlays create a sense of multi-dimensional space, much like walking into the sanctum of an ancient temple.

👨‍💻 Author
Designed and developed by Krishna Sai.

GitHub: [@krishnasai89](https://github.com/krishnasai89)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
