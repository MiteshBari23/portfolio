import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { WordsPullUp } from "./animations";

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen w-full p-4 md:p-6">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black">
        {/* Cinematic background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 30% 40%, rgba(222,219,200,0.10) 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(222,219,200,0.06) 0%, transparent 60%), linear-gradient(180deg, #0a0a0a 0%, #050505 100%)",
            }}
          />
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle at 50% 100%, rgba(222,219,200,0.12) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="absolute inset-0 noise-overlay opacity-[0.5] mix-blend-overlay pointer-events-none" />
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

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-8 md:pb-12">
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
                  className="group inline-flex items-center gap-2 hover:gap-3 transition-all bg-primary rounded-full pl-5 pr-1.5 py-1.5 text-black font-medium text-sm sm:text-base"
                >
                  See the work
                  <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowRight className="w-4 h-4" style={{ color: "#E1E0CC" }} />
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
