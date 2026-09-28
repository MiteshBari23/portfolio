import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { WordsPullUp } from "./animations";
import { NowCard } from "./NowCard";

const blobs = [
  { c: "rgba(190,160,80,1)", cls: "w-[45vw] h-[45vw] top-[5%] left-[10%]", d: 24, path: { x: [0, 60, -20, 0], y: [0, 40, -30, 0] } },
  { c: "rgba(60,140,140,1)", cls: "w-[40vw] h-[40vw] top-[20%] right-[5%]", d: 28, path: { x: [0, -50, 30, 0], y: [0, -30, 40, 0] } },
  { c: "rgba(90,60,150,1)", cls: "w-[38vw] h-[38vw] bottom-[0%] left-[35%]", d: 22, path: { x: [0, 40, -40, 0], y: [0, -40, 20, 0] } },
];

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const px = useSpring(useMotionValue(0), { stiffness: 40, damping: 20 });
  const py = useSpring(useMotionValue(0), { stiffness: 40, damping: 20 });
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduced) return;
    const f = (e: MouseEvent) => {
      px.set((e.clientX / window.innerWidth - 0.5) * 60);
      py.set((e.clientY / window.innerHeight - 0.5) * 60);
    };
    window.addEventListener("mousemove", f);
    return () => window.removeEventListener("mousemove", f);
  }, [reduced, px, py]);

  return (
    <section id="home" className="relative min-h-screen md:h-screen w-full p-4 md:p-6">
      <div className="relative w-full min-h-[calc(100vh-2rem)] md:h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black">
        {/* Ambient blobs */}
        <motion.div className="absolute inset-0 pointer-events-none" style={{ x: px, y: py }}>
          {blobs.map((b, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${b.cls}`}
              style={{ background: b.c, filter: "blur(120px)", opacity: 0.3 }}
              animate={reduced ? undefined : b.path}
              transition={{ duration: b.d, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </motion.div>

        <div className="absolute inset-0 noise-overlay opacity-[0.04] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none" />

        <div className="absolute top-6 left-6 md:top-8 md:left-10 z-10">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(225,224,204,0.6)" }}>
            Portfolio / 2026
          </p>
        </div>
        <div className="absolute top-6 right-6 md:top-8 md:right-10 z-10 text-right">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(225,224,204,0.6)" }}>
            {portfolioData.location}
          </p>
        </div>

        {/* Now card — tablet/desktop */}
        <div className="hidden md:block absolute z-10 top-24 right-6 md:right-10 w-[290px] lg:w-[340px]">
          <NowCard />
        </div>

        <div className="relative md:absolute md:bottom-0 left-0 right-0 px-6 md:px-10 pt-[30vh] md:pt-0 pb-8 md:pb-12">
          <div className="grid grid-cols-12 gap-4 md:gap-8 items-end">
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-medium leading-[0.85] tracking-[-0.07em] text-[22vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw] xl:text-[15vw]"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text="Mitesh" showAsterisk />
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 lg:pb-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm md:text-base"
                style={{ color: "rgba(225,224,204,0.7)", lineHeight: 1.35 }}
              >
                Software engineer building real-time systems, full-stack products and
                interactive experiences — bound by curiosity, powered by craft.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  onClick={() => scrollTo("projects")}
                  className="btn-glass group inline-flex items-center gap-2 hover:gap-3 transition-all rounded-full pl-5 pr-1.5 py-1.5 text-sm sm:text-base"
                  style={{ color: "#E1E0CC" }}
                >
                  See the work
                  <span className="bg-primary rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowRight className="w-4 h-4" style={{ color: "#0a0a0a" }} />
                  </span>
                </button>
              </motion.div>

              {/* Now card — mobile */}
              <div className="md:hidden -mx-2">
                <NowCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
