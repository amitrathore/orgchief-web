"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const chiefs = [
  {
    role: "CMO",
    title: "Chief Marketing Officer",
    description: "Owns pipeline, brand, and demand. Turns signals into campaigns and campaigns into revenue.",
    available: true,
  },
  {
    role: "CRO",
    title: "Chief Revenue Officer",
    description: "Owns revenue growth and retention. Closes the gap between potential and performance.",
    available: true,
  },
  {
    role: "COO",
    title: "Chief Operating Officer",
    description: "Owns operational efficiency. Keeps the organization moving without friction.",
    available: true,
    note: "Powered by Orgpiper",
    noteHref: "https://orgpiper.com",
  },
  {
    role: "CTO",
    title: "Chief Technology Officer",
    description: "Owns technology direction and execution. Aligns engineering with business outcomes.",
    available: false,
  },
  {
    role: "CFO",
    title: "Chief Financial Officer",
    description: "Owns financial health and planning. Transforms numbers into decisions.",
    available: false,
  },
  {
    role: "CHRO",
    title: "Chief Human Resources Officer",
    description: "Owns talent, culture, and organizational capability.",
    available: false,
  },
];

export default function Chiefs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="chiefs" ref={ref} className="py-40 md:py-56 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[11px] tracking-[0.3em] uppercase text-[#9B7840] mb-8 font-medium"
          >
            Meet the Chiefs
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-[#1A1820] leading-[1.05]"
          >
            The Chiefs
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(155,120,64,0.1)]">
          {chiefs.map((chief, i) => (
            <motion.div
              key={chief.role}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {chief.available ? (
                <AvailableCard chief={chief} />
              ) : (
                <ComingSoonCard chief={chief} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Chief {
  role: string;
  title: string;
  description: string;
  available: boolean;
  note?: string;
  noteHref?: string;
}

function AvailableCard({ chief }: { chief: Chief }) {
  return (
    <div className="group relative bg-[#FAFAF8] p-10 md:p-12 h-full overflow-hidden cursor-default hover:bg-[#F2EFEA] transition-colors duration-500">
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(155,120,64,0.06) 0%, transparent 70%)"
        }}
      />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9B7840] to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

      {/* Role */}
      <div className="flex items-start justify-between mb-8">
        <span className="font-display text-4xl md:text-5xl font-light text-[#9B7840] tracking-tight leading-none">
          {chief.role}
        </span>
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#FAFAF8] bg-[#9B7840] px-2 py-1 font-medium">
          Available
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[13px] tracking-[0.06em] uppercase text-[#6B6879] font-light mb-5">
        {chief.title}
      </h3>

      {/* Description */}
      <p className="text-[14px] text-[#888898] leading-relaxed font-light">
        {chief.description}
      </p>

      {/* Note */}
      {chief.note && chief.noteHref && (
        <a
          href={chief.noteHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-[11px] tracking-[0.1em] text-[#9B7840] opacity-50 hover:opacity-100 transition-opacity duration-300 underline underline-offset-2"
        >
          {chief.note} ↗
        </a>
      )}
    </div>
  );
}

function ComingSoonCard({ chief }: { chief: Chief }) {
  return (
    <div className="relative bg-[#FAFAF8] p-10 md:p-12 h-full opacity-40">
      {/* Role */}
      <div className="flex items-start justify-between mb-8">
        <span className="font-display text-4xl md:text-5xl font-light text-[#6B6879] tracking-tight leading-none">
          {chief.role}
        </span>
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#6B6879] border border-[rgba(107,104,121,0.3)] px-2 py-1 font-light">
          Soon
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[13px] tracking-[0.06em] uppercase text-[#9898B0] font-light mb-5">
        {chief.title}
      </h3>

      {/* Description */}
      <p className="text-[14px] text-[#9898B0] leading-relaxed font-light">
        {chief.description}
      </p>
    </div>
  );
}
