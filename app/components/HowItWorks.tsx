"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { number: "01", label: "Monitor", description: "Watches your KPIs and signals in real time — across every relevant dimension." },
  { number: "02", label: "Explain", description: "Understands why metrics move, not just that they did. Causality, not correlation." },
  { number: "03", label: "Recommend", description: "Surfaces ranked actions, backed by causal logic and outcome probability." },
  { number: "04", label: "Execute", description: "Runs approved workflows across your systems. Human-in-the-loop, always." },
  { number: "05", label: "Learn", description: "Every outcome sharpens the next decision. The loop never closes — it tightens." },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how" ref={ref} className="relative py-32 md:py-48 px-6"
      style={{ backgroundColor: "var(--bg-raised)" }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--border-subtle), transparent)" }} />

      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
            className="text-[11px] tracking-[0.3em] uppercase mb-8 font-medium" style={{ color: "var(--gold)" }}>
            How it Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05]"
            style={{ color: "var(--fg-primary)" }}>
            Five moves.<br />
            <span className="italic" style={{ color: "var(--gold)" }}>Continuously.</span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px"
            style={{ background: "linear-gradient(to right, transparent, var(--border-subtle), transparent)" }} />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.number}
                initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative">
                <div className="flex md:flex-col items-start gap-6 md:gap-0">
                  <div className="relative flex-shrink-0">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center md:mb-10 transition-colors duration-300"
                      style={{ border: "1px solid var(--gold)" }}>
                      <div className="w-1.5 h-1.5 rounded-full opacity-60" style={{ backgroundColor: "var(--gold)" }} />
                    </div>
                  </div>
                  <div className="md:pt-0">
                    <span className="font-display text-[11px] tracking-[0.2em] opacity-50 block mb-3"
                      style={{ color: "var(--gold)" }}>{step.number}</span>
                    <h3 className="font-display text-2xl md:text-xl lg:text-2xl font-light mb-4 transition-colors duration-400"
                      style={{ color: "var(--fg-primary)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-primary)")}>
                      {step.label}
                    </h3>
                    <p className="text-[13px] leading-relaxed font-light" style={{ color: "var(--fg-secondary)" }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--border-subtle), transparent)" }} />
    </section>
  );
}
