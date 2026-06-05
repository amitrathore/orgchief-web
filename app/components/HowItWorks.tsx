"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    label: "Monitor",
    description: "Watches your KPIs and signals in real time — across every relevant dimension.",
  },
  {
    number: "02",
    label: "Explain",
    description: "Understands why metrics move, not just that they did. Causality, not correlation.",
  },
  {
    number: "03",
    label: "Recommend",
    description: "Surfaces ranked actions, backed by causal logic and outcome probability.",
  },
  {
    number: "04",
    label: "Execute",
    description: "Runs approved workflows across your systems. Human-in-the-loop, always.",
  },
  {
    number: "05",
    label: "Learn",
    description: "Every outcome sharpens the next decision. The loop never closes — it tightens.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how" ref={ref} className="relative py-40 md:py-56 px-6 bg-[#F2EFEA]">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(155,120,64,0.2)] to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[11px] tracking-[0.3em] uppercase text-[#9B7840] mb-8 font-medium"
          >
            How it Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-[#1A1820] leading-[1.05]"
          >
            Five moves.<br />
            <span className="italic text-[#9B7840]">Continuously.</span>
          </motion.h2>
        </div>

        {/* Steps — stacked on mobile, horizontal on desktop */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(155,120,64,0.2)] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Step number dot + connector */}
                <div className="flex md:flex-col items-start md:items-start gap-6 md:gap-0">
                  <div className="relative flex-shrink-0">
                    <div className="w-4 h-4 rounded-full border border-[#9B7840] flex items-center justify-center md:mb-10 group-hover:bg-[rgba(155,120,64,0.12)] transition-colors duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#9B7840] opacity-60" />
                    </div>
                  </div>

                  <div className="md:pt-0">
                    <span className="font-display text-[11px] tracking-[0.2em] text-[#9B7840] opacity-50 block mb-3">
                      {step.number}
                    </span>
                    <h3 className="font-display text-2xl md:text-xl lg:text-2xl font-light text-[#1A1820] mb-4 group-hover:text-[#9B7840] transition-colors duration-400">
                      {step.label}
                    </h3>
                    <p className="text-[13px] text-[#6B6879] leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(155,120,64,0.2)] to-transparent" />
    </section>
  );
}
