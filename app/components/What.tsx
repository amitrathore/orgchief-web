"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    icon: "⚡",
    title: "Owns a function",
    body: "Each Orgchief has one job — marketing, revenue, operations. They take full ownership of their domain, not just reports.",
  },
  {
    icon: "🎯",
    title: "Acts with authority",
    body: "Watches your KPIs, explains what's moving and why, surfaces ranked actions, and executes the ones you approve.",
  },
  {
    icon: "📈",
    title: "Gets better over time",
    body: "Every decision closes a loop. Every outcome feeds the next recommendation. Your Orgchief learns your business.",
  },
];

export default function What() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="what" ref={ref} className="py-32 px-6" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto">

        <div className="max-w-2xl mb-16">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
            className="text-sm font-semibold mb-4 uppercase tracking-widest"
            style={{ color: "var(--accent)" }}>
            What is an Orgchief
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--text)" }}>
            Not software.<br />An AI employee.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg" style={{ color: "var(--text-2)", lineHeight: 1.65 }}>
            Think of it as hiring a VP-level exec who never sleeps, always knows your numbers,
            and is built specifically for your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}>
              <span className="text-3xl mb-5 block">{p.icon}</span>
              <h3 className="font-display text-xl mb-3" style={{ fontWeight: 700, color: "var(--text)" }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
