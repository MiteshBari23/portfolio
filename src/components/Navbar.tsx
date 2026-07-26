import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const navItems = [
  { label: "About", target: "about" },
  { label: "Work", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Skills", target: "skills" },
  { label: "Contact", target: "contact" },
];

export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [hover, setHover] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
        style={{ scaleX, background: "#DEDBC8" }}
      />
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <nav className="pointer-events-auto bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 md:py-3 flex items-center gap-3 sm:gap-6 md:gap-10 lg:gap-12 border-x border-b border-white/5">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              onMouseEnter={() => setHover(item.target)}
              onMouseLeave={() => setHover(null)}
              className="text-[10px] sm:text-xs md:text-sm tracking-wide transition-colors"
              style={{
                color: hover === item.target ? "#E1E0CC" : "rgba(225,224,204,0.7)",
                fontWeight: 400,
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};
