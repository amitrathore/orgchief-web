"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6" style={{ backgroundColor: "var(--bg)" }}>
      {/* Subtle accent radial */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(255,87,34,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
          className="text-sm font-semibold mb-5 uppercase tracking-widest"
          style={{ color: "var(--accent)" }}>
          Get Started
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mb-6"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--text)" }}>
          Ready to meet<br />
          <span style={{ color: "var(--accent)" }}>your first Chief?</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg mb-12 mx-auto"
          style={{ color: "var(--text-2)", maxWidth: "480px", lineHeight: 1.65 }}>
          We work with a select number of businesses to deploy Orgchiefs.
          Grab a call — no pitch, just a conversation.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-5">

          <a href="mailto:hello@orgchief.com"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all duration-200"
            style={{ backgroundColor: "var(--accent)", color: "var(--accent-text)", boxShadow: "0 4px 20px rgba(255,87,34,0.3)" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent-hover)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(255,87,34,0.42)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(255,87,34,0.3)";
            }}>
            Book a call
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
          </a>

          <p className="text-sm" style={{ color: "var(--text-3)" }}>
            Or email us at{" "}
            <a href="mailto:hello@orgchief.com"
              className="underline underline-offset-2 transition-colors duration-200"
              style={{ color: "var(--text-2)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-2)")}>
              hello@orgchief.com
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
