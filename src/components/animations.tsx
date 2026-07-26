import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform, MotionValue } from "framer-motion";

export const WordsPullUp: React.FC<{
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delay?: number;
}> = ({ text, className = "", showAsterisk = false, delay = 0 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <span key={i} className="inline-block overflow-hidden pb-[0.1em] mr-[0.15em]">
            <motion.span
              className="inline-block relative"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: delay + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {isLast && showAsterisk && (
                <span
                  className="absolute"
                  style={{
                    top: "0.15em",
                    right: "-0.3em",
                    fontSize: "0.31em",
                    fontFamily: '"Instrument Serif", serif',
                    fontStyle: "italic",
                  }}
                >
                  *
                </span>
              )}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
};

type Segment = { text: string; className?: string };

export const WordsPullUpMultiStyle: React.FC<{
  segments: Segment[];
  className?: string;
}> = ({ segments, className = "" }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const items: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) items.push({ word: w, className: seg.className });
    });
  });

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {items.map((it, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em] mr-[0.22em]">
          <motion.span
            className={`inline-block ${it.className ?? ""}`}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {it.word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const AnimatedLetter: React.FC<{
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}> = ({ char, index, total, progress }) => {
  const start = index / total;
  const opacity = useTransform(progress, [start - 0.1, start + 0.05], [0.15, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
};

export const ScrollRevealText: React.FC<{
  text: string;
  className?: string;
}> = ({ text, className = "" }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = text.split("");
  return (
    <p ref={ref} className={className}>
      {chars.map((c, i) => (
        <AnimatedLetter key={i} char={c} index={i} total={chars.length} progress={scrollYProgress} />
      ))}
    </p>
  );
};
