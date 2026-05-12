"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const [hoverState, setHoverState] = useState({ active: false, text: "" });
  const [isMounted, setIsMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const pathname = usePathname();

  // High-performance motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Snappy spring physics for the aura
  const springConfig = { damping: 28, stiffness: 400, mass: 0.2 };
  const auraX = useSpring(mouseX, springConfig);
  const auraY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest(
        "a, button, [role='button'], [data-cursor-text]",
      );

      if (target) {
        const customText = target.getAttribute("data-cursor-text");
        setHoverState({ active: true, text: customText || "" });
      } else {
        setHoverState({ active: false, text: "" });
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    setHoverState({ active: false, text: "" });
  }, [pathname]);

  if (!isMounted || isTouchDevice) return null;

  return (
    <>
      {/* 1. The Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-orange-500 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#f97316]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          // Shrink the dot to 0 when hovering so it doesn't block letters
          scale: hoverState.active ? 0 : 1,
          opacity: hoverState.active ? 0 : 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />

      {/* 2. The Aura (Hollow Frame / Text Lens) */}
      <motion.div
        // Removed mix-blend-screen to preserve text colors
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-[9998] rounded-full overflow-hidden"
        style={{
          x: auraX,
          y: auraY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hoverState.text ? 80 : hoverState.active ? 56 : 32,
          height: hoverState.text ? 80 : hoverState.active ? 56 : 32,

          // KEY FIX: Completely transparent background on normal hover
          backgroundColor: hoverState.text
            ? "rgba(249, 115, 22, 0.95)" // Solid orange ONLY if there is custom text
            : "rgba(249, 115, 22, 0)", // Transparent for normal links

          // Brighten the border on hover to frame the text
          borderColor: hoverState.text
            ? "rgba(249, 115, 22, 0)"
            : hoverState.active
              ? "rgba(249, 115, 22, 0.8)"
              : "rgba(249, 115, 22, 0.3)",

          // Thicken the border slightly on hover for visual feedback
          borderWidth: hoverState.text
            ? "0px"
            : hoverState.active
              ? "2px"
              : "1px",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Dynamic Inner Content (Only shows if custom text is provided) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: hoverState.text ? 1 : 0,
            scale: hoverState.text ? 1 : 0.5,
          }}
          transition={{ duration: 0.3, ease: "backOut" }}
          className="flex items-center justify-center w-full h-full"
        >
          {hoverState.text && (
            <span className="text-black font-bold uppercase tracking-[0.2em] text-[9px] text-center px-2 leading-tight">
              {hoverState.text}
            </span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
