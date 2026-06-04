"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative py-32 md:py-48 px-6 bg-[#0F0F1A] overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,169,110,0.2)] to-transparent" />

      {/* Large ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(201,169,110,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E] mb-10 font-medium"
        >
          Get Started
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-[#F4F0E8] leading-[1.05] mb-8"
        >
          Ready to meet<br />
          <span className="italic text-[#C9A96E]">your first Chief?</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[16px] md:text-lg text-[#A8A8B8] font-light leading-relaxed max-w-xl mx-auto mb-16"
        >
          We work with a select number of organizations to deploy Orgchiefs.
          Start with a discovery call.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href="mailto:hello@orgchief.com"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-[#C9A96E] text-[#080810] text-[13px] tracking-[0.12em] uppercase font-medium hover:bg-[#E8C98A] transition-colors duration-300"
          >
            Book a Discovery Call
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>

          <p className="text-[13px] text-[#5A5A6A] font-light tracking-wide">
            Or write to us at{" "}
            <a
              href="mailto:hello@orgchief.com"
              className="text-[#A8A8B8] hover:text-[#C9A96E] transition-colors duration-300 underline underline-offset-2"
            >
              hello@orgchief.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
