"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      {/* Subtle accent blob */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(255,87,34,0.07) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(255,87,34,0.04) 0%, transparent 70%)" }} />
      </div>

      <div className="relative flex items-center justify-center min-h-screen px-6">
        <div className="max-w-5xl mx-auto text-center">

          {/* Eyebrow pill */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide"
              style={{ backgroundColor: "var(--accent-tint)", color: "var(--accent)" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
              AI Employees for your business
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="font-display mb-6"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "var(--text)",
            }}>
            Your business deserves<br />
            <span style={{ color: "var(--accent)" }}>a real exec team.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-lg md:text-xl mb-10 mx-auto"
            style={{ color: "var(--text-2)", maxWidth: "580px", lineHeight: 1.65, fontWeight: 400 }}>
            Orgchief gives any business an AI CMO, COO, CRO — and more.
            Executives who watch your numbers, surface what matters, and actually get things done.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
              style={{ backgroundColor: "var(--accent)", color: "var(--accent-text)", boxShadow: "0 4px 14px rgba(255,87,34,0.35)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent-hover)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(255,87,34,0.45)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 14px rgba(255,87,34,0.35)";
              }}>
              Book a call
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
            </a>
            <a href="#chiefs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
              style={{ border: "1.5px solid var(--border-mid)", color: "var(--text-2)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-mid)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-2)";
              }}>
              See the Chiefs
            </a>
          </motion.div>

          {/* Scroll nudge */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}
              style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--accent), transparent)", margin: "0 auto" }} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
