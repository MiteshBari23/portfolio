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
      <div className="fixed top-3 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <nav className="glass pointer-events-auto !rounded-full px-2 py-2 md:px-3 md:py-2 flex items-center gap-1 sm:gap-1.5 md:gap-2">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              onMouseEnter={() => setHover(item.target)}
              onMouseLeave={() => setHover(null)}
              className="relative px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 rounded-full text-[10px] sm:text-xs md:text-sm tracking-wide transition-colors"
              style={{
                color: hover === item.target ? "#E1E0CC" : "rgba(225,224,204,0.7)",
                fontWeight: 400,
              }}
            >
              {hover === item.target && (
                <motion.span
                  layoutId="nav-hover-pill"
                  className="btn-glass absolute inset-0 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};
