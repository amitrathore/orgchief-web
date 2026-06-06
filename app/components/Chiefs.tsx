"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const chiefs = [
  {
    role: "CMO", title: "Chief Marketing Officer",
    description: "Owns pipeline, brand, and demand. Turns signals into campaigns and campaigns into revenue.",
    available: true,
  },
  {
    role: "CRO", title: "Chief Revenue Officer",
    description: "Owns revenue growth and retention. Closes the gap between potential and performance.",
    available: true,
  },
  {
    role: "COO", title: "Chief Operating Officer",
    description: "Owns operational efficiency. Keeps the organization moving without friction.",
    available: true,
    note: "Powered by Orgpiper",
    noteHref: "https://orgpiper.com",
  },
  {
    role: "CTO", title: "Chief Technology Officer",
    description: "Owns technology direction and execution. Aligns engineering with business outcomes.",
    available: false,
  },
  {
    role: "CFO", title: "Chief Financial Officer",
    description: "Owns financial health and planning. Transforms numbers into decisions.",
    available: false,
  },
  {
    role: "CHRO", title: "Chief Human Resources Officer",
    description: "Owns talent, culture, and organizational capability.",
    available: false,
  },
];

export default function Chiefs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="chiefs" ref={ref} className="py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
            className="text-[11px] tracking-[0.3em] uppercase mb-8 font-medium" style={{ color: "var(--gold)" }}>
            Meet the Chiefs
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05]"
            style={{ color: "var(--fg-primary)" }}>
            The Chiefs
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: "var(--grid-sep)" }}>
          {chiefs.map((chief, i) => (
            <motion.div key={chief.role}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}>
              {chief.available ? <AvailableCard chief={chief} /> : <ComingSoonCard chief={chief} />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Chief {
  role: string; title: string; description: string;
  available: boolean; note?: string; noteHref?: string;
}

function AvailableCard({ chief }: { chief: Chief }) {
  return (
    <div className="group relative p-8 md:p-10 h-full overflow-hidden cursor-default transition-colors duration-500"
      style={{ backgroundColor: "var(--bg-card)" }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-card-hover)"}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-card)"}>
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, var(--glow-card) 0%, transparent 70%)" }} />
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-40 transition-opacity duration-500"
        style={{ background: `linear-gradient(to right, transparent, var(--gold), transparent)` }} />

      <div className="flex items-start justify-between mb-6">
        <span className="font-display text-4xl md:text-5xl font-light tracking-tight leading-none"
          style={{ color: "var(--gold)" }}>{chief.role}</span>
        <span className="text-[10px] tracking-[0.2em] uppercase px-2 py-1 font-medium"
          style={{ backgroundColor: "var(--gold)", color: "var(--gold-on)" }}>
          Available
        </span>
      </div>

      <h3 className="text-[13px] tracking-[0.06em] uppercase font-light mb-5"
        style={{ color: "var(--fg-secondary)" }}>{chief.title}</h3>
      <p className="text-[14px] leading-relaxed font-light" style={{ color: "var(--fg-muted)" }}>
        {chief.description}
      </p>

      {chief.note && chief.noteHref && (
        <a href={chief.noteHref} target="_blank" rel="noopener noreferrer"
          className="inline-block mt-6 text-[11px] tracking-[0.1em] underline underline-offset-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
          style={{ color: "var(--gold)" }}>
          {chief.note} ↗
        </a>
      )}
    </div>
  );
}

function ComingSoonCard({ chief }: { chief: Chief }) {
  return (
    <div className="relative p-8 md:p-10 h-full opacity-40"
      style={{ backgroundColor: "var(--bg-card)" }}>
      <div className="flex items-start justify-between mb-6">
        <span className="font-display text-4xl md:text-5xl font-light tracking-tight leading-none"
          style={{ color: "var(--fg-secondary)" }}>{chief.role}</span>
        <span className="text-[10px] tracking-[0.2em] uppercase px-2 py-1 font-light"
          style={{ border: "1px solid var(--border-mid)", color: "var(--fg-secondary)" }}>
          Soon
        </span>
      </div>
      <h3 className="text-[13px] tracking-[0.06em] uppercase font-light mb-5"
        style={{ color: "var(--fg-muted)" }}>{chief.title}</h3>
      <p className="text-[14px] leading-relaxed font-light" style={{ color: "var(--fg-faint)" }}>
        {chief.description}
      </p>
    </div>
  );
}
