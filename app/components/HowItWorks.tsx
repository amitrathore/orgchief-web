"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { number: "01", label: "Monitor", description: "Watches your KPIs and signals in real time — across every dimension that matters to your business." },
  { number: "02", label: "Explain", description: "Understands why metrics move, not just that they did. Causality, not guesswork." },
  { number: "03", label: "Recommend", description: "Surfaces ranked actions backed by data and outcome probability. No fluff." },
  { number: "04", label: "Execute", description: "Runs approved workflows across your systems. You stay in control — always." },
  { number: "05", label: "Learn", description: "Every outcome sharpens the next call. The loop never closes — it tightens." },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how" ref={ref} className="py-32 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">

        <div className="max-w-2xl mb-16">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
            className="text-sm font-semibold mb-4 uppercase tracking-widest"
            style={{ color: "var(--accent)" }}>
            How it Works
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--text)" }}>
            Five moves.<br />
            <span style={{ color: "var(--accent)" }}>Continuously.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg" style={{ color: "var(--text-2)", lineHeight: 1.65 }}>
            Your Orgchief isn't a one-time report. It's a continuous operating loop — running 24/7 in your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.number}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl"
              style={{ backgroundColor: "var(--bg-alt)", border: "1px solid var(--border)" }}>
              <span className="block text-xs font-bold mb-4 tabular-nums"
                style={{ color: "var(--accent)", opacity: 0.7 }}>
                {step.number}
              </span>
              <h3 className="font-display text-xl font-700 mb-3"
                style={{ fontWeight: 700, color: "var(--text)" }}>
                {step.label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
