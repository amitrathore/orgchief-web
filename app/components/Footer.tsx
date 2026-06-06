"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

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
    <footer ref={ref} style={{ backgroundColor: "var(--bg-base)", borderTop: "1px solid var(--border-subtle)" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Main footer row */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start">
          {/* Left */}
          <div>
            <a href="#"
              className="font-display text-xl font-light tracking-[0.12em] block mb-3 transition-colors duration-300"
              style={{ color: "var(--fg-primary)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-primary)")}>
              Orgchief
            </a>
            <p className="text-[12px] font-light tracking-wide" style={{ color: "var(--fg-faintest)" }}>
              © 2026 Orgchief. All rights reserved.
            </p>
          </div>

          {/* Center: nav links */}
          <div className="flex flex-col gap-3 md:items-center">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="text-[12px] tracking-[0.06em] uppercase font-light transition-colors duration-300"
                style={{ color: "var(--fg-faint)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-faint)")}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: ecosystem */}
          <div className="md:text-right">
            <p className="text-[12px] font-light mb-2" style={{ color: "var(--fg-faintest)" }}>
              Part of the
            </p>
            <a href="https://outcomemachines.com" target="_blank" rel="noopener noreferrer"
              className="text-[13px] font-light transition-colors duration-300"
              style={{ color: "var(--fg-secondary)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-secondary)")}>
              Outcome Machines ecosystem ↗
            </a>
          </div>
        </div>

        {/* Bottom strip — powered by + theme switcher */}
        <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border-faint)" }}>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full opacity-40" style={{ backgroundColor: "var(--gold)" }} />
            <span className="text-[11px] font-light tracking-widest uppercase" style={{ color: "var(--fg-faintest)" }}>
              Powered by{" "}
              <a href="https://datacentriq.co" target="_blank" rel="noopener noreferrer"
                className="transition-colors duration-300"
                style={{ color: "var(--fg-faint)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-faint)")}>
                DatacentrIQ
              </a>
            </span>
          </div>

          {/* Discreet theme switcher */}
          <ThemeSwitcher />

          <span className="text-[11px] font-light tracking-widest uppercase" style={{ color: "var(--fg-faintest)" }}>
            Orgminding
          </span>
        </div>
      </motion.div>
    </footer>
  );
}
