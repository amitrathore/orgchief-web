"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const chiefs = [
  {
    role: "CMO",
    title: "Chief Marketing Officer",
    desc: "Owns brand, content, campaigns, and SEO. Tracks what's bringing people in and doubles down on what works.",
    features: ["Campaign planning & execution", "Content calendar & creation", "SEO & performance tracking", "Brand voice & messaging"],
    available: true,
  },
  {
    role: "CRO",
    title: "Chief Revenue Officer",
    desc: "Watches your pipeline, surfaces stuck deals, and figures out where revenue is leaking — then plugs it.",
    features: ["Pipeline health monitoring", "Deal velocity analysis", "Revenue forecasting", "Sales playbook management"],
    available: true,
  },
  {
    role: "COO",
    title: "Chief Operations Officer",
    desc: "Keeps the engine running. Spots inefficiencies, automates repetitive work, and makes sure nothing falls through.",
    features: ["Process optimization", "Team workflow management", "OKR tracking", "Vendor & ops coordination"],
    available: true,
    note: "Powered by Orgpiper",
    noteHref: "https://orgpiper.com",
  },
  {
    role: "CTO",
    title: "Chief Technology Officer",
    desc: "Your technical co-pilot. Evaluates your stack, guides product decisions, keeps your tech from becoming a liability.",
    features: ["Tech stack evaluation", "Product roadmap input", "Engineering support", "Security & compliance"],
    available: false,
  },
  {
    role: "CFO",
    title: "Chief Financial Officer",
    desc: "Watches the money. Cash flow, burn rate, forecasts — your CFO keeps you from being surprised.",
    features: ["Cash flow monitoring", "Budget vs. actuals", "Financial forecasting", "Investor reporting"],
    available: false,
  },
  {
    role: "CHRO",
    title: "Chief HR Officer",
    desc: "Builds your people engine. Hiring, onboarding, retention — your CHRO makes sure talent isn't a bottleneck.",
    features: ["Hiring pipeline support", "Onboarding automation", "Performance tracking", "Culture & engagement"],
    available: false,
  },
];

export default function Chiefs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="chiefs" ref={ref} className="py-32 px-6" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto">

        <div className="max-w-2xl mb-16">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
            className="text-sm font-semibold mb-4 uppercase tracking-widest"
            style={{ color: "var(--accent)" }}>
            The Chiefs
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--text)" }}>
            Pick your exec team.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg" style={{ color: "var(--text-2)", lineHeight: 1.65 }}>
            Start with the function you need most. Add more as your business grows.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {chiefs.map((chief, i) => (
            <motion.div key={chief.role}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl flex flex-col"
              style={{ padding: "1.75rem 2rem",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
                opacity: chief.available ? 1 : 0.65,
              }}>

              {!chief.available && (
                <span className="absolute top-5 right-5 text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: "var(--bg-alt)", color: "var(--text-3)", border: "1px solid var(--border)" }}>
                  Coming soon
                </span>
              )}

              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-display text-2xl"
                  style={{ fontWeight: 800, color: chief.available ? "var(--accent)" : "var(--text-3)" }}>
                  {chief.role}
                </span>
                <span className="text-sm" style={{ color: "var(--text-3)" }}>{chief.title}</span>
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-2)" }}>
                {chief.desc}
              </p>

              <ul className="flex flex-col gap-2 mt-auto">
                {chief.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-2)" }}>
                    <span style={{ color: chief.available ? "var(--accent)" : "var(--text-4)", marginTop: "2px", flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {chief.note && chief.noteHref && (
                <a href={chief.noteHref} target="_blank" rel="noopener noreferrer"
                  className="mt-4 text-xs transition-colors duration-200"
                  style={{ color: "var(--text-3)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-3)")}>
                  {chief.note} ↗
                </a>
              )}

              {chief.available && (
                <a href="#contact" className="mt-6 inline-flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                  style={{ backgroundColor: "var(--accent-tint)", color: "var(--accent)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent-text)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent-tint)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  }}>
                  Get your {chief.role} →
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
