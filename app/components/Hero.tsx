"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,169,110,0.07) 0%, rgba(201,169,110,0.02) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,169,110,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Sigil / Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-16"
        >
          <ChiefSigil />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E] mb-8 font-medium"
        >
          Orgminding · AI Employees
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-[-0.01em] text-[#F4F0E8] mb-8"
        >
          Your C-Suite Has<br />
          <span className="italic text-[#C9A96E]">a New Member.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="text-[17px] md:text-xl text-[#A8A8B8] font-light leading-relaxed max-w-2xl mx-auto mb-14 tracking-[0.01em]"
        >
          Orgchief creates AI Employees at the CxO level — purpose-built for their function,
          always on, always learning.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C9A96E] text-[#080810] text-[13px] tracking-[0.1em] uppercase font-medium hover:bg-[#E8C98A] transition-colors duration-300"
          >
            Book a Discovery Call
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="#chiefs"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[rgba(201,169,110,0.25)] text-[#A8A8B8] text-[13px] tracking-[0.1em] uppercase font-light hover:border-[rgba(201,169,110,0.6)] hover:text-[#C9A96E] transition-all duration-300"
          >
            Meet the Chiefs
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-[#C9A96E] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

function ChiefSigil() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-24 h-24"
    >
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,169,110,0.2) 0%, transparent 70%)",
          filter: "blur(8px)",
          transform: "scale(1.8)",
        }}
      />
      {/* SVG Crown Sigil */}
      <svg
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer circle */}
        <circle cx="48" cy="48" r="46" stroke="#C9A96E" strokeWidth="0.5" strokeOpacity="0.4" />
        <circle cx="48" cy="48" r="38" stroke="#C9A96E" strokeWidth="0.25" strokeOpacity="0.2" />

        {/* Abstract crown / chief mark */}
        <path
          d="M24 62 L24 44 L36 54 L48 28 L60 54 L72 44 L72 62 Z"
          stroke="#C9A96E"
          strokeWidth="1"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="rgba(201,169,110,0.06)"
        />

        {/* Base line */}
        <line x1="22" y1="66" x2="74" y2="66" stroke="#C9A96E" strokeWidth="0.75" strokeOpacity="0.6" />

        {/* Apex dot */}
        <circle cx="48" cy="28" r="2" fill="#C9A96E" fillOpacity="0.8" />

        {/* Side dots */}
        <circle cx="24" cy="44" r="1.5" fill="#C9A96E" fillOpacity="0.5" />
        <circle cx="72" cy="44" r="1.5" fill="#C9A96E" fillOpacity="0.5" />
      </svg>
    </motion.div>
  );
}
