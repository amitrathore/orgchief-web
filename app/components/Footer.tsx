"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const navLinks = [
    { label: "What is an Orgchief", href: "#what" },
    { label: "The Chiefs", href: "#chiefs" },
    { label: "How it Works", href: "#how" },
    { label: "Book a Call", href: "#contact" },
  ];

  return (
    <footer ref={ref} className="bg-[#080810] border-t border-[rgba(201,169,110,0.1)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 md:px-10"
      >
        {/* Main footer row */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start">
          {/* Left: wordmark + copyright */}
          <div>
            <a href="#" className="font-display text-xl font-light tracking-[0.12em] text-[#F4F0E8] hover:text-[#C9A96E] transition-colors duration-300 block mb-3">
              Orgchief
            </a>
            <p className="text-[12px] text-[#4A4A5A] font-light tracking-wide">
              © 2026 Orgchief. All rights reserved.
            </p>
          </div>

          {/* Center: nav links */}
          <div className="flex flex-col gap-3 md:items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] tracking-[0.06em] text-[#6A6A7A] hover:text-[#C9A96E] transition-colors duration-300 uppercase font-light"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: ecosystem */}
          <div className="md:text-right">
            <p className="text-[12px] text-[#4A4A5A] font-light mb-2">
              Part of the
            </p>
            <a
              href="https://outcomemachines.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[#A8A8B8] hover:text-[#C9A96E] transition-colors duration-300 font-light"
            >
              Outcome Machines ecosystem ↗
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-[rgba(201,169,110,0.06)] py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#C9A96E] opacity-40" />
            <span className="text-[11px] text-[#3A3A4A] font-light tracking-widest uppercase">
              Powered by{" "}
              <a
                href="https://datacentriq.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5A5A6A] hover:text-[#C9A96E] transition-colors duration-300"
              >
                DatacentrIQ
              </a>
            </span>
          </div>
          <span className="text-[11px] text-[#3A3A4A] font-light tracking-widest uppercase">
            Orgminding
          </span>
        </div>
      </motion.div>
    </footer>
  );
}
