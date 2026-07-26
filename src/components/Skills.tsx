import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Code2, Layers, Sparkles } from "lucide-react";
import { WordsPullUpMultiStyle } from "./animations";

const cards = [
  { kind: "hero" as const, title: "Craft over noise." },
  {
    kind: "list" as const,
    number: "01",
    icon: Code2,
    title: "Backend engineering.",
    items: [
      "Java, Spring Boot & REST APIs",
      "PostgreSQL, MongoDB, SQL",
      "Auth with Keycloak / JWT",
      "Clean architecture & OOP",
    ],
  },
  {
    kind: "list" as const,
    number: "02",
    icon: Layers,
    title: "Full-stack web.",
    items: ["React, TypeScript, Tailwind", "Node.js & Express", "Responsive, accessible UI"],
  },
  {
    kind: "list" as const,
    number: "03",
    icon: Sparkles,
    title: "Real-time & 3D.",
    items: ["WebRTC & Socket.IO pipelines", "MediaPipe pose & gesture", "Three.js / React Three Fiber"],
  },
];

export const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative min-h-screen bg-black py-24 md:py-32 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.12] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(225,224,204,0.6)" }}>
            What I do
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal max-w-4xl mx-auto leading-tight">
            <WordsPullUpMultiStyle
              segments={[
                { text: "Studio-grade workflows for shipping software.", className: "text-primary" },
                { text: " Built for depth. Powered by craft.", className: "text-gray-500" },
              ]}
            />
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 lg:h-[480px]">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden h-[380px] lg:h-full"
              style={{ background: card.kind === "hero" ? "#0a0a0a" : "#212121" }}
            >
              {card.kind === "hero" ? (
                <>
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 30%, rgba(222,219,200,0.15) 0%, transparent 60%), linear-gradient(180deg, #111 0%, #050505 100%)",
                    }}
                  />
                  <div className="absolute inset-0 noise-overlay opacity-[0.4] mix-blend-overlay" />
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <p className="text-2xl md:text-3xl font-medium leading-tight" style={{ color: "#E1E0CC" }}>
                      Your creative canvas.
                    </p>
                  </div>
                </>
              ) : (
                <div className="h-full flex flex-col p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/50 border border-white/5 flex items-center justify-center">
                      <card.icon className="w-5 h-5" style={{ color: "#DEDBC8" }} />
                    </div>
                    <span className="text-xs text-gray-500 font-mono">{card.number}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-medium mb-6" style={{ color: "#E1E0CC" }}>
                    {card.title}
                  </h3>

                  <ul className="space-y-3 flex-1">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                        <span className="text-sm text-gray-400 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 inline-flex items-center gap-2 text-sm text-primary group w-fit">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" style={{ transform: "rotate(-45deg)" }} />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
