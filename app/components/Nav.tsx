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
    { label: "What is an Orgchief", href: "#what" },
    { label: "The Chiefs", href: "#chiefs" },
    { label: "How it Works", href: "#how" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.7s, border-color 0.7s",
        backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl font-light tracking-[0.12em] transition-colors duration-300"
          style={{ color: "var(--fg-primary)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-primary)")}
        >
          Orgchief
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-[0.06em] uppercase font-light transition-colors duration-300"
              style={{ color: "var(--fg-secondary)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-secondary)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 text-[12px] tracking-[0.1em] uppercase font-medium transition-all duration-300"
            style={{
              border: "1px solid var(--border-hover)",
              color: "var(--gold)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "color-mix(in srgb, var(--gold) 8%, transparent)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
            }}
          >
            Book a Discovery Call
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
              style={{ backgroundColor: "var(--fg-secondary)" }} />
            <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              style={{ backgroundColor: "var(--fg-secondary)" }} />
            <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
              style={{ backgroundColor: "var(--fg-secondary)" }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: "var(--bg-raised)",
              borderTop: "1px solid var(--border-subtle)",
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm tracking-[0.06em] uppercase transition-colors duration-300"
                  style={{ color: "var(--fg-secondary)" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center px-5 py-3 text-[12px] tracking-[0.1em] uppercase font-medium transition-all duration-300"
                style={{ border: "1px solid var(--border-hover)", color: "var(--gold)" }}
              >
                Book a Discovery Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
