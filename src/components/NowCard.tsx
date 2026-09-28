import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const stack = ["Apex", "REST/SOAP", "Node.js", "React", "Python", "Salesforce"];

const useClock = () => {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now.toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata", hour: "numeric", minute: "2-digit", second: "2-digit" });
};

export const NowCard: React.FC = () => {
  const time = useClock();
  const ref = useRef<HTMLDivElement>(null);
  const [canTilt, setCanTilt] = useState(false);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 150, damping: 18 });
  const sheen = useTransform([mx, my] as any, ([x, y]: number[]) =>
    `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.10), transparent 55%)`
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const f = () => setCanTilt(mq.matches);
    f();
    mq.addEventListener("change", f);
    return () => mq.removeEventListener("change", f);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    if (!canTilt || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => { mx.set(0.5); my.set(0.5); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={canTilt ? { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" } : undefined}
          className="glass relative overflow-hidden p-5 md:p-6"
        >
          {canTilt && <motion.div className="absolute inset-0 pointer-events-none" style={{ background: sheen }} />}
          <div className="relative flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/70 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-cream/60">Available for opportunities</span>
          </div>
          <p className="relative mt-4 text-sm md:text-base text-cream tabular-nums">
            Mumbai <span className="text-cream/40">·</span> {time} IST
          </p>
          <p className="relative mt-3 text-xs md:text-sm leading-snug text-cream/70">
            <span className="font-serif-italic text-cream text-base">Currently</span>{" "}
            Software Developer @ Exceller Tech — Salesforce backend, Apex & API integrations
          </p>
          <div className="relative mt-4 flex flex-wrap gap-1.5">
            {stack.map((s) => (
              <span key={s} className="glass-pill text-[10px] md:text-[11px] px-2.5 py-1 text-cream/75">{s}</span>
            ))}
          </div>
          <a
            href={portfolioData.social.resume}
            target="_blank"
            rel="noreferrer"
            className="btn-glass mt-5 inline-block rounded-full px-4 py-1.5 text-xs text-cream/70 hover:text-cream transition-colors"
          >
            Resume ↗
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
