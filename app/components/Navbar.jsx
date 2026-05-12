"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // The navigation links for your website
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Stories", path: "/Stories" },
    { name: "Dances", path: "/Dances" },
    { name: "About", path: "/About" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-1"
          : "bg-gradient-to-b from-black/80 to-transparent border-b border-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-2.5 h-2.5 bg-gradient-to-br from-orange-400 to-red-600 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)] group-hover:scale-150 transition-transform duration-500"></div>
            <span className="text-2xl md:text-3xl font-serif font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-400 drop-shadow-sm">
              Vishwaguru
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={index}
                  href={link.path}
                  className={`relative text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 group ${
                    isActive
                      ? "text-orange-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {/* Animated Center-Out Underline */}
                  <span
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent transition-all duration-500 ease-out ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  ></span>
                </Link>
              );
            })}

            <div className="w-px h-6 bg-white/10 mx-2"></div>

            <Link
              href="/visit"
              className="px-6 py-2.5 bg-white/[0.03] backdrop-blur-md border border-orange-500/30 text-orange-400 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-black hover:border-transparent hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all duration-500"
            >
              Plan a Visit
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-orange-400 focus:outline-none transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 7h16M4 12h16m-7 5h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-3xl border-b border-white/5 shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.path;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.path}
                      className={`text-2xl font-serif tracking-wide flex items-center transition-all duration-300 ${
                        isActive
                          ? "text-orange-400 translate-x-2"
                          : "text-gray-400 hover:text-white hover:translate-x-2"
                      }`}
                    >
                      {isActive && (
                        <span className="mr-3 text-orange-500 text-lg">›</span>
                      )}
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6 mt-2 border-t border-white/10"
              >
                <Link
                  href="/visit"
                  className="flex justify-center items-center w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-black font-bold text-xs uppercase tracking-[0.2em] rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                >
                  Plan a Visit
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
