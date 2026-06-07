"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "What is Orgchief", href: "#what" },
    { label: "The Chiefs", href: "#chiefs" },
    { label: "How it Works", href: "#how" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.4s, border-color 0.4s",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-700 tracking-tight"
          style={{ color: "var(--text)", fontWeight: 700 }}>
          Orgchief
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.href} href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--text-2)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-2)")}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
            style={{ backgroundColor: "var(--accent)", color: "var(--accent-text)" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent-hover)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)"}>
            Book a call
          </a>

          <button className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              style={{ backgroundColor: "var(--text)" }} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              style={{ backgroundColor: "var(--text)" }} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              style={{ backgroundColor: "var(--text)" }} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}>
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium" style={{ color: "var(--text-2)" }}>
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-full text-sm font-medium"
                style={{ backgroundColor: "var(--accent)", color: "var(--accent-text)" }}>
                Book a call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
