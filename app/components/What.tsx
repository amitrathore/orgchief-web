"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    number: "01",
    title: "Owns a Function",
    body: "Each Orgchief has a domain: revenue, operations, marketing. Not a tool that assists — an owner who is accountable.",
  },
  {
    number: "02",
    title: "Acts with Authority",
    body: "Monitors KPIs, explains what moved and why, recommends actions ranked by impact, and executes with your approval.",
  },
  {
    number: "03",
    title: "Learns from Outcomes",
    body: "Every decision closes a loop. Every outcome feeds the next recommendation. The Orgchief gets sharper with every cycle.",
  },
];

export default function What() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="what" ref={ref} className="relative py-32 md:py-48 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-20">
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, var(--border-mid), transparent)" }} />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
          className="text-[11px] tracking-[0.3em] uppercase mb-8 font-medium" style={{ color: "var(--gold)" }}>
          What is an Orgchief
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05]"
            style={{ color: "var(--fg-primary)" }}>
            Not software.<br />
            <span className="italic" style={{ color: "var(--gold)" }}>An AI Employee.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-sm text-[15px] font-light leading-relaxed md:text-right"
            style={{ color: "var(--fg-secondary)" }}>
            Orgchiefs are built on the intelligence of DatacentrIQ and Outcome Machines —
            the governed AI layer that turns enterprise data into decisions and action.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px"
          style={{ backgroundColor: "var(--grid-sep)" }}>
          {pillars.map((p, i) => (
            <motion.div key={p.number}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 md:p-10"
              style={{ backgroundColor: "var(--bg-base)" }}>
              <span className="font-display text-[11px] tracking-[0.2em] mb-6 block opacity-60"
                style={{ color: "var(--gold)" }}>{p.number}</span>
              <h3 className="font-display text-2xl md:text-3xl font-light mb-5 leading-snug transition-colors duration-500"
                style={{ color: "var(--fg-primary)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-primary)")}>
                {p.title}
              </h3>
              <p className="text-[14px] leading-relaxed font-light" style={{ color: "var(--fg-secondary)" }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20">
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, var(--border-mid), transparent)" }} />
      </div>
    </section>
  );
}
