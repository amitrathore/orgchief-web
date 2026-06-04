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
    <section ref={ref} className="py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 md:mb-28">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E] mb-8 font-medium"
          >
            Why Orgchief
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-[#F4F0E8] leading-[1.05]"
          >
            A different kind<br />
            <span className="italic text-[#C9A96E]">of executive.</span>
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
              className="group border-t border-[rgba(201,169,110,0.1)] py-8 md:py-10 grid grid-cols-1 md:grid-cols-[1fr_40px_1fr] gap-4 md:gap-8 items-center hover:border-[rgba(201,169,110,0.25)] transition-colors duration-500"
            >
              {/* Old way */}
              <div className="text-right md:text-right">
                <span className="font-display text-xl md:text-2xl lg:text-3xl font-light text-[#5A5A6A] line-through decoration-[rgba(201,169,110,0.3)] underline-offset-4 group-hover:text-[#7A7A8A] transition-colors duration-500">
                  {c.old}
                </span>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-[#C9A96E] opacity-40 group-hover:opacity-70 transition-opacity duration-500 text-xl">
                →
              </div>

              {/* New way */}
              <div>
                <span className="font-display text-xl md:text-2xl lg:text-3xl font-light text-[#C9A96E]">
                  {c.new}
                </span>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-[rgba(201,169,110,0.1)]" />
        </div>
      </div>
    </section>
  );
}
