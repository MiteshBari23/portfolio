import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";
import { FaReact, FaNodeJs, FaDocker, FaPython } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import globeData from "@/assets/globe.json";

type Tech = {
  id: string;
  name: string;
  icon: React.ReactNode;
  // Choose one mode:
  // orbit: angle (degrees) initial offset, radius string (e.g. '12vw' or '140px'), speed seconds
  orbit?: { angleDeg: number; radius: string; speedSec?: number };
  // or pinned: x/y in percent relative to container (0..100)
  pinned?: { xPercent: number; yPercent: number };
};

const TECHS: Tech[] = [
  { id: "react", name: "React", icon: <FaReact size={18} />, orbit: { angleDeg: 0, radius: "12vw", speedSec: 12 } },
  { id: "ts", name: "TypeScript", icon: <SiTypescript size={16} />, orbit: { angleDeg: 60, radius: "10.5vw", speedSec: 10 } },
  { id: "node", name: "Node.js", icon: <FaNodeJs size={16} />, orbit: { angleDeg: 120, radius: "13vw", speedSec: 14 } },
  { id: "python", name: "Python", icon: <FaPython size={16} />, pinned: { xPercent: 62, yPercent: 40 } }, // example pinned inside globe
  { id: "tailwind", name: "Tailwind", icon: <SiTailwindcss size={16} />, orbit: { angleDeg: 200, radius: "9vw", speedSec: 9 } },
  { id: "docker", name: "Docker", icon: <FaDocker size={16} />, orbit: { angleDeg: 300, radius: "11vw", speedSec: 13 } },
];

export const HeroWithTechBadges: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Lottie background */}
      <div className="absolute inset-0 -z-10">
        <Lottie
          animationData={globeData}
          loop
          autoplay
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        />
        {/* gradient overlay on top of globe to improve contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Tech badges layer (position relative to hero center) */}
      {/* We use a container centered to match globe center. */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          // This container size should roughly match the globe visible area.
          // Tweak w/h if needed to match your Lottie globe scale.
          className="relative w-[60vmin] h-[60vmin] md:w-[48vmin] md:h-[48vmin]"
        >
          {/* center reference (invisible) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            {TECHS.map((t) => {
              // Orbiting badges: parent rotates; child is shifted outward by radius using translateX
              if (t.orbit) {
                const angleStart = t.orbit.angleDeg ?? 0;
                const speed = t.orbit.speedSec ?? 12;
                const radius = t.orbit.radius ?? "10vw";

                return (
                  <motion.div
                    key={t.id}
                    // Parent: absolute center
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      width: 0,
                      height: 0,
                      // start rotated so the child's translateX places it at desired angle
                      transform: `rotate(${angleStart}deg)`,
                      transformOrigin: "0 0",
                    }}
                    animate={{ rotate: [angleStart, angleStart + 360] }}
                    transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
                  >
                    {/* Child badge shifted along X axis by radius */}
                    <div
                      className="absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2"
                      style={{
                        transform: `translateX(${radius}) translateY(-50%)`,
                      }}
                    >
                      <Badge name={t.name} icon={t.icon} />
                    </div>
                  </motion.div>
                );
              }

              // Pinned badges: placed at percentage x/y inside the container
              if (t.pinned) {
                const left = `${t.pinned.xPercent}%`;
                const top = `${t.pinned.yPercent}%`;
                return (
                  <div
                    key={t.id}
                    className="absolute"
                    style={{
                      left,
                      top,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Badge name={t.name} icon={t.icon} />
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </div>

      {/* Floating particles (keeps your previous effect) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20 - Math.random() * 20, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content (z above badges) */}
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">{portfolioData.name}</span>
            </h1>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-xl md:text-2xl text-muted-foreground mb-8">
            {portfolioData.tagline}
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {portfolioData.about.intro}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="group" onClick={() => window.open(portfolioData.social.github, "_blank")}>
              <Github className="mr-2 h-5 w-5" />
              View GitHub
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button size="lg" variant="outline" className="group" onClick={() => window.open(portfolioData.social.linkedin, "_blank")}>
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>

            <Button size="lg" variant="secondary" className="group" onClick={() => window.open(portfolioData.social.resume, "_blank")}>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div className="w-1.5 h-3 bg-primary rounded-full mt-2" animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  );
};

/* Small presentational badge used above - pointer-events-none removed on the inner so user can't click them (change if you want them interactive) */
const Badge: React.FC<{ name: string; icon: React.ReactNode }> = ({ name, icon }) => {
  return (
    <div
      className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-black/50 backdrop-blur-sm text-white shadow-md"
      style={{ pointerEvents: "none" }}
    >
      <span className="flex items-center justify-center">{icon}</span>
      <span>{name}</span>
    </div>
  );
};
