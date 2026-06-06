"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative py-32 md:py-48 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-raised)" }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--border-mid), transparent)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 80%, var(--glow-section) 0%, transparent 60%)" }} />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
          className="text-[11px] tracking-[0.3em] uppercase mb-10 font-medium" style={{ color: "var(--gold)" }}>
          Get Started
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-8"
          style={{ color: "var(--fg-primary)" }}>
          Ready to meet<br />
          <span className="italic" style={{ color: "var(--gold)" }}>your first Chief?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[16px] md:text-lg font-light leading-relaxed max-w-xl mx-auto mb-16"
          style={{ color: "var(--fg-secondary)" }}>
          We work with a select number of organizations to deploy Orgchiefs.
          Start with a discovery call.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6">
          <a href="mailto:hello@orgchief.com"
            className="group inline-flex items-center gap-4 px-10 py-5 text-[13px] tracking-[0.12em] uppercase font-medium transition-colors duration-300"
            style={{ backgroundColor: "var(--gold)", color: "var(--gold-on)" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "var(--gold-bright)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "var(--gold)"}>
            Book a Discovery Call
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>

          <p className="text-[13px] font-light tracking-wide" style={{ color: "var(--fg-faint)" }}>
            Or write to us at{" "}
            <a href="mailto:hello@orgchief.com"
              className="underline underline-offset-2 transition-colors duration-300"
              style={{ color: "var(--fg-secondary)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-secondary)")}>
              hello@orgchief.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
