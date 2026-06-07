"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contrasts = [
  { old: "Dashboards show numbers", new: "Orgchiefs act on them" },
  { old: "Reports explain the past", new: "Orgchiefs shape the future" },
  { old: "Consultants visit once", new: "Orgchiefs never leave" },
  { old: "Tools require your time", new: "Orgchiefs free it" },
];

export default function Why() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-32 px-6" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto">

        <div className="max-w-2xl mb-16">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
            className="text-sm font-semibold mb-4 uppercase tracking-widest"
            style={{ color: "var(--accent)" }}>
            Why Orgchief
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--text)" }}>
            Not a tool.<br />
            <span style={{ color: "var(--accent)" }}>An executive.</span>
          </motion.h2>
        </div>

        <div>
          {contrasts.map((c, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-7 grid grid-cols-1 md:grid-cols-[1fr_32px_1fr] gap-4 items-center"
              style={{ borderTop: "1px solid var(--border)" }}>
              <div className="md:text-right">
                <span className="font-display text-lg md:text-2xl line-through decoration-2"
                  style={{ color: "var(--text-3)", textDecorationColor: "var(--border-mid)", fontWeight: 600 }}>
                  {c.old}
                </span>
              </div>
              <div className="hidden md:flex justify-center text-base" style={{ color: "var(--accent)", opacity: 0.6 }}>
                →
              </div>
              <div>
                <span className="font-display text-lg md:text-2xl"
                  style={{ fontWeight: 700, color: "var(--text)" }}>
                  {c.new}
                </span>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>

      </div>
    </section>
  );
}
