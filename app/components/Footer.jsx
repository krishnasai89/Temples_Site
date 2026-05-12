import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] pt-20 pb-8 border-t border-white/5 overflow-hidden font-sans">
      {/* Ambient Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-500/5 blur-[150px] pointer-events-none z-0"></div>

      {/* Subtle top border glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand & Description (Takes up more space) */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <Link href="/" className="flex items-center gap-3 group mb-6 w-max">
              <div className="w-3 h-3 bg-gradient-to-br from-orange-400 to-red-600 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)] group-hover:scale-125 transition-transform duration-300"></div>
              <span className="text-2xl font-serif font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-400 drop-shadow-sm">
                Vishwaguru
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
              Embark on a spiritual journey through timeless architecture,
              sacred traditions, and the profound stories of ancient temples.
            </p>

            {/* Social Icons - Glassmorphic */}
            <div className="flex space-x-3">
              {/* GitHub */}
              <a
                href="https://github.com/krishnasai89"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/10 text-gray-400 hover:bg-orange-500/10 hover:text-orange-400 hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                aria-label="GitHub"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-3.975-1.395-.09-.225-.48-1.395-.825-1.68-.285-.15-.69-.435-.015-.435.63-.015 1.08.585 1.23.825.72 1.215 1.875.87 2.325.66.075-.525.285-.87.51-1.065-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.3.255.54.735.54 1.485 0 1.065-.015 1.92-.015 2.19 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/krishna-sai-vellampalli/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/10 text-gray-400 hover:bg-orange-500/10 hover:text-orange-400 hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/10 text-gray-400 hover:bg-orange-500/10 hover:text-orange-400 hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                aria-label="YouTube"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/swananda2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/10 text-gray-400 hover:bg-orange-500/10 hover:text-orange-400 hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/10 text-gray-400 hover:bg-orange-500/10 hover:text-orange-400 hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                aria-label="X / Twitter"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Stories", path: "/Stories" },
                { name: "Dances", path: "/Dances" },
                { name: "About", path: "/About" },
              ].map(({ name, path }, index) => (
                <li key={index}>
                  <Link
                    href={path} // FIXED: removed quotes so it uses the variable!
                    className="group flex items-center text-sm text-gray-400 hover:text-orange-400 transition-colors duration-300 w-max"
                  >
                    <span className="opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-orange-500">
                      ›
                    </span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Pilgrimage */}
          <div className="lg:col-span-2">
            <h3 className="text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              Pilgrimage
            </h3>
            <ul className="space-y-3">
              {[
                "Plan a Visit",
                "Darshan Timings",
                "Travel Guides",
                "Accommodation",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="group flex items-center text-sm text-gray-400 hover:text-orange-400 transition-colors duration-300 w-max"
                  >
                    <span className="opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-orange-500">
                      ›
                    </span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              Stay Connected
            </h3>
            <p className="text-gray-400 text-sm mb-5 font-light leading-relaxed">
              Subscribe to receive weekly insights, stories, and heritage
              updates directly to your inbox.
            </p>

            {/* Embedded Form Input */}
            <form className="relative group max-w-md">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-red-500/0 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
              <input
                type="email"
                suppressHydrationWarning // FIXED: Prevents browser extension crashes!
                placeholder="Your email address"
                className="relative w-full bg-white/[0.03] backdrop-blur-md border border-white/10 text-white text-sm rounded-xl py-3.5 pl-4 pr-32 focus:outline-none focus:border-orange-500/50 transition-all shadow-inner placeholder-white/30"
              />
              <button
                type="button"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold text-[10px] tracking-widest uppercase rounded-lg px-4 transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left font-light tracking-wide">
            &copy; {new Date().getFullYear()} Vishwaguru. Preserving the Divine
            Heritage. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500 font-light">
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
