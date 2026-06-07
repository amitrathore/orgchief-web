"use client";

import { motion, useInView } from "framer-motion";
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
    <footer ref={ref} style={{ backgroundColor: "var(--bg-alt)", borderTop: "1px solid var(--border)" }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left — brand */}
          <div>
            <a href="#"
              className="font-display text-xl font-700 tracking-tight block mb-2 transition-colors duration-200"
              style={{ fontWeight: 700, color: "var(--text)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text)")}>
              Orgchief
            </a>
            <p className="text-xs" style={{ color: "var(--text-4)" }}>
              © 2026 Orgchief. All rights reserved.
            </p>
          </div>

          {/* Center — nav */}
          <div className="flex flex-col gap-3 md:items-center">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: "var(--text-3)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-3)")}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Right — ecosystem */}
          <div className="md:text-right">
            <p className="text-xs mb-1.5" style={{ color: "var(--text-4)" }}>
              Part of the
            </p>
            <a href="https://outcomemachines.com" target="_blank" rel="noopener noreferrer"
              className="text-sm transition-colors duration-200"
              style={{ color: "var(--text-3)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-3)")}>
              Outcome Machines ecosystem ↗
            </a>
          </div>
        </div>

        <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--border)" }}>
          <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-4)" }}>
            Powered by{" "}
            <a href="https://datacentriq.co" target="_blank" rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "var(--text-3)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-3)")}>
              DatacentrIQ
            </a>
          </span>
          <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-4)" }}>
            Orgminding
          </span>
        </div>

      </motion.div>
    </footer>
  );
}
