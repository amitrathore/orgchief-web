"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const contrasts = [
  { old: "Dashboards show", new: "Orgchiefs produce" },
  { old: "Reports explain the past", new: "Orgchiefs act on the future" },
  { old: "Consultants visit", new: "Orgchiefs never leave" },
];

export default function Why() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-40 md:py-56 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[11px] tracking-[0.3em] uppercase text-[#9B7840] mb-8 font-medium"
          >
            Why Orgchief
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-[#1A1820] leading-[1.05]"
          >
            A different kind<br />
            <span className="italic text-[#9B7840]">of executive.</span>
          </motion.h2>
        </div>

        {/* Contrast rows */}
        <div className="space-y-0">
          {contrasts.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group border-t border-[rgba(155,120,64,0.15)] py-10 md:py-12 grid grid-cols-1 md:grid-cols-[1fr_40px_1fr] gap-4 md:gap-8 items-center hover:border-[rgba(155,120,64,0.35)] transition-colors duration-500"
            >
              {/* Old way */}
              <div className="text-right md:text-right">
                <span className="font-display text-xl md:text-2xl lg:text-3xl font-light text-[#BBBBCC] line-through decoration-[rgba(155,120,64,0.4)] underline-offset-4 group-hover:text-[#9898AA] transition-colors duration-500">
                  {c.old}
                </span>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-[#9B7840] opacity-40 group-hover:opacity-70 transition-opacity duration-500 text-xl">
                →
              </div>

              {/* New way */}
              <div>
                <span className="font-display text-xl md:text-2xl lg:text-3xl font-light text-[#9B7840]">
                  {c.new}
                </span>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-[rgba(155,120,64,0.15)]" />
        </div>
      </div>
    </section>
  );
}
