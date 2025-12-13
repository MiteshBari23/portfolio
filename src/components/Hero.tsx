// src/components/Hero.tsx
import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiDocker,
  SiPython,
  SiTailwindcss,
  SiGithub,
SiSpringboot ,
SiApachekafka
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import globeData from "@/assets/globe.json";

// Tech definition with colors (SimpleIcons will be cloned with color prop)
// orbit type: either provide ring or explicit radius (or both)
type Orbit = {
  angleDeg: number;
  speedSec?: number;
  // prefer one of these: ring (semantic) or radius (explicit)
  ring?: "inner" | "mid" | "outer";
  radius?: string; // e.g. "12vmin" or "120px"
};

type Tech = {
  id: string;
  name?: string; // optional now since you only want icons
  icon: React.ReactNode;
  color?: string;
  orbit?: Orbit;
  pinned?: { xPercent: number; yPercent: number };
};

// grouped by ring; you can override radius per-tech with orbit.radius if needed
const TECHS: Tech[] = [
  // INNER RING (core skills)
    {
    id: "Java",
    icon: <FaJava  />,
    color: "#318865ff",
    orbit: { ring: "inner", angleDeg: 0, speedSec: 12 },
  },
    {
    id: "SpringBoot",
    icon: <SiSpringboot />,
    color: "#29c839ff",
    orbit: { ring: "inner", angleDeg: 60, speedSec: 10 },
  },
  {
    id: "Kafka",
    icon: <SiApachekafka />,
    color: "#29c839ff",
    orbit: { ring: "inner", angleDeg: 120, speedSec: 12 },
  },
      {
    id: "Redis",
    icon: <DiRedis  />,
    color: "#8a1a1aff",
    orbit: { ring: "inner", angleDeg: 240, speedSec: 10 },
  },

  // MID RING (backend / tools)
    {
    id: "react",
    icon: <SiReact />,
    color: "#61DAFB",
    orbit: { ring: "inner", angleDeg: 0, speedSec: 12 },
  },
  {
    id: "ts",
    icon: <SiTypescript />,
    color: "#3178C6",
    orbit: { ring: "inner", angleDeg: 120, speedSec: 10 },
  },
  {
    id: "node",
    icon: <SiNodedotjs />,
    color: "#539E43",
    orbit: { ring: "inner", angleDeg: 240, speedSec: 14 },
  },
  {
    id: "docker",
    icon: <SiDocker />,
    color: "#2496ED",
    orbit: { ring: "mid", angleDeg: 60, speedSec: 16 },
  },
  {
    id: "python",
    icon: <SiPython />,
    color: "#3776AB",
    orbit: { ring: "mid", angleDeg: 180, speedSec: 12 },
  },
  {
    id: "tailwind",
    icon: <SiTailwindcss />,
    color: "#06B6D4",
    orbit: { ring: "mid", angleDeg: 300, speedSec: 18 },
  },

  // OUTER RING (tools / misc)
  {
    id: "github",
    icon: <SiGithub />,
    color: "#ffffff",
    orbit: { ring: "outer", angleDeg: 30, speedSec: 20 },
  },
  // example: explicit radius override (if you want this specific icon further out)
  {
    id: "p1",
    icon: <SiReact />,
    color: "#61DAFB",
    pinned: { xPercent: 52.43, yPercent: 24.26 },
  },
  {
    id: "p2",
    icon: <SiTypescript />,
    color: "#3178C6",
    pinned: { xPercent: 64.79, yPercent: 20.97 },
  },
  {
    id: "p3",
    icon: <SiNodedotjs />,
    color: "#539E43",
    pinned: { xPercent: 70.44, yPercent: 20.97 },
  },
  {
    id: "p4",
    icon: <SiDocker />,
    color: "#2496ED",
    pinned: { xPercent: 65.0, yPercent: 18.23 },
  },
  {
    id: "p5",
    icon: <SiPython />,
    color: "#3776AB",
    pinned: { xPercent: 33.57, yPercent: 16.31 },
  },
  {
    id: "p6",
    icon: <SiGithub />,
    color: "#ffffff",
    pinned: { xPercent: 33.14, yPercent: 49.34 },
  },
  {
    id: "p7",
    icon: <SiTailwindcss />,
    color: "#06B6D4",
    pinned: { xPercent: 66.92, yPercent: 60.99 },
  },
  {
    id: "p8",
    icon: <FaJava  />,
    color: "#227b68ff",
    pinned: { xPercent: 76.92, yPercent: 63.99 },
  },
  {
    id: "p9",
    icon: <SiSpringboot />,
    color: "#9d1e1eff",
    pinned: { xPercent: 86.92, yPercent: 68.99 },
  },
  {
    id: "p10",
    icon: <SiApachekafka />,
    color: "#2cb73aff",
    pinned: { xPercent: 106.92, yPercent: 98.99 },
  },
];

export const Hero: React.FC = () => {
  const containerSizeClass =
    "w-[60vmin] h-[60vmin] md:w-[48vmin] md:h-[48vmin]";

  const OrbitIcon: React.FC<{ icon: React.ReactNode; color?: string }> = ({
    icon,
    color,
  }) => {
    const renderedIcon = React.isValidElement(icon)
      ? React.cloneElement(icon as React.ReactElement, {
          color: color ?? "#ffffff",
          size: 24, // slightly larger - adjust if you want
        })
      : icon;

    return (
      <div
        style={{
          padding: 8,
          borderRadius: "50%",
          background: "rgba(0,0,0,0.32)", // subtle dark background so icons pop
          backdropFilter: "blur(4px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
        }}
      >
        {renderedIcon}
      </div>
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Lottie background — lowest layer */}
      <div className="absolute inset-0" style={{ zIndex: -40 }}>
        <Lottie
          animationData={globeData}
          loop
          autoplay
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        />
      </div>

      {/* Gradient overlay on top of Lottie but below badges */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background"
        style={{ zIndex: -20 }}
      />

      {/* === BADGES LAYER (centered container) === */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ zIndex: 20 }}
      >
        <div className={`relative ${containerSizeClass}`}>
          {/* DEBUG CLICK TOOL – Click anywhere on globe, get percent coords */}
          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
              const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

              console.log("Clicked at:", {
                xPercent: +xPercent.toFixed(2),
                yPercent: +yPercent.toFixed(2),
              });
            }}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 99999,
              pointerEvents: "auto",
              background: "rgba(255, 0, 0, 0)", // invisible layer
            }}
          ></div>

          {/* Center reference: badges are placed relative to center */}
          {/* CENTER ORBIT SYSTEM */}
          {TECHS.map((t) => {
            if (!t.orbit) return null;

            // ring -> default radius map (fallbacks)
            const ringRadii: Record<NonNullable<Orbit["ring"]>, string> = {
              inner: "10vmin",
              mid: "15vmin",
              outer: "20vmin",
            };

            // use explicit radius if provided, otherwise map ring -> radius
            const radius =
              t.orbit.radius ??
              (t.orbit.ring ? ringRadii[t.orbit.ring] : "12vmin");
            const start = t.orbit.angleDeg ?? 0;
            const dur = t.orbit.speedSec ?? 14;

            return (
              <motion.div
                key={t.id}
                className="absolute left-1/2 top-1/2"
                style={{
                  width: 0,
                  height: 0,
                  transformOrigin: "0 0",
                  transform: `rotate(${start}deg)`,
                }}
                animate={{ rotate: [start, start + 360] }}
                transition={{ repeat: Infinity, duration: dur, ease: "linear" }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: `translateX(${radius}) translateY(-50%)`,
                    opacity: 0.75, // slightly lowered opacity per your request
                  }}
                >
                  <OrbitIcon icon={t.icon} color={t.color} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* subtle floating particles (below content) */}
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

      {/* Main content (on top of badges) */}
      <div className="container mx-auto px-6" style={{ zIndex: 30 }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">{portfolioData.name}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            {portfolioData.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            {portfolioData.about.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              size="lg"
              className="group"
              onClick={() => window.open(portfolioData.social.github, "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              View GitHub
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group"
              onClick={() =>
                window.open(portfolioData.social.linkedin, "_blank")
              }
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className="group"
              onClick={() => window.open(portfolioData.social.resume, "_blank")}
            >

              <Download className="mr-2 h-5 w-5" />
              <a href={portfolioData.social.resume} download>Download Resume</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

// Badge clones react-icons to force color/size and ensure visibility
const Badge: React.FC<{
  name: string;
  icon: React.ReactNode;
  color?: string;
}> = ({ name, icon, color }) => {
  const forcedColor = color ?? "#ffffff";
  const iconSize = 18;
  const renderedIcon = React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement, {
        color: forcedColor,
        size: iconSize,
      })
    : icon;

  return (
    <div
      className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-black/50 backdrop-blur-sm"
      style={{
        color: "#e6eef8",
        boxShadow: "0 6px 22px rgba(0,0,0,0.6), 0 0 18px rgba(0,0,0,0.25)",
        pointerEvents: "none",
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 20,
          height: 20,
        }}
      >
        {renderedIcon}
      </span>
      <span style={{ color: "#e6eef8", fontWeight: 600 }}>{name}</span>
    </div>
  );
};

export default Hero;
