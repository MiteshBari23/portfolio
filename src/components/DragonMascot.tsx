import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SPRITE = "/images/dragon-sprite.png";
const COLS = 3;
const ROWS = 4;
const FRAME_W = 191;
const FRAME_H = 161;
const SCALE = 1.3;

const ROW_WALK = 1;
const ROW_ROAR = 2;
const FRAME_SEQUENCE = [0, 1, 2, 1];

const FIRE_PARTICLES = [
  { dx: -6, dy: -170, size: 30, delay: 0, hue: 0 },
  { dx: 14, dy: -190, size: 38, delay: 0.03, hue: 1 },
  { dx: -22, dy: -150, size: 24, delay: 0.05, hue: 2 },
  { dx: 4, dy: -230, size: 44, delay: 0.09, hue: 0 },
  { dx: -34, dy: -195, size: 22, delay: 0.12, hue: 2 },
  { dx: 30, dy: -160, size: 26, delay: 0.14, hue: 1 },
  { dx: 0, dy: -260, size: 20, delay: 0.2, hue: 2 },
];

const FIRE_GRADIENTS = [
  "radial-gradient(circle, #fff6d0 0%, #ffcf5e 28%, #ff8a1e 55%, #ff3d00 78%, transparent 82%)",
  "radial-gradient(circle, #fff9e0 0%, #ffd873 25%, #ff9a2e 50%, #ff5a0e 75%, transparent 80%)",
  "radial-gradient(circle, #ffe9b0 0%, #ffb648 30%, #ff7a1a 58%, #e6350a 80%, transparent 84%)",
];

const PHRASES = [
  "Rawr! 🔥",
  "Don't poke the dragon.",
  "I'm not spoiled, I'm royalty.",
  "Feed me snacks, human.",
  "You woke me up!",
  "Careful, I bite.",
  "Ooh, attention!",
  "Hire this guy already.",
];

export const DragonMascot = () => {
  const [row, setRow] = useState(ROW_WALK);
  const [col, setCol] = useState(0);
  const [bubble, setBubble] = useState<string | null>(null);
  const [jumpKey, setJumpKey] = useState(0);
  const [breathing, setBreathing] = useState(false);
  const timers = useRef<number[]>([]);
  const frameTick = useRef(0);

  useEffect(() => {
    frameTick.current = 0;
    const id = window.setInterval(() => {
      frameTick.current = (frameTick.current + 1) % FRAME_SEQUENCE.length;
      setCol(FRAME_SEQUENCE[frameTick.current]);
    }, row === ROW_ROAR ? 130 : 200);
    return () => window.clearInterval(id);
  }, [row]);

  useEffect(() => {
    return () => {
      timers.current.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  const wake = () => {
    setBubble(PHRASES[Math.floor(Math.random() * PHRASES.length)]);
    setJumpKey((k) => k + 1);
    setRow(ROW_ROAR);
    setBreathing(true);

    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [
      window.setTimeout(() => setBreathing(false), 950),
      window.setTimeout(() => setRow(ROW_WALK), 1000),
      window.setTimeout(() => setBubble(null), 2400),
    ];
  };

  const frameStyle: CSSProperties = {
    width: FRAME_W * SCALE,
    height: FRAME_H * SCALE,
    backgroundImage: `url(${SPRITE})`,
    backgroundSize: `${FRAME_W * COLS * SCALE}px ${FRAME_H * ROWS * SCALE}px`,
    backgroundPosition: `-${col * FRAME_W * SCALE}px -${row * FRAME_H * SCALE}px`,
    backgroundRepeat: "no-repeat",
    imageRendering: "pixelated",
  };

  return (
    <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-40 select-none">
      <div className="relative flex flex-col items-center">
        <AnimatePresence>
          {bubble && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="btn-glass mb-2 px-3 py-1.5 rounded-2xl text-xs whitespace-nowrap"
              style={{ color: "#E1E0CC" }}
            >
              {bubble}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          key={jumpKey}
          type="button"
          onClick={wake}
          aria-label="Wake the dragon"
          className="relative outline-none"
          initial={{ y: 0 }}
          animate={jumpKey ? { y: [0, -22, 0, -6, 0] } : { y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          whileTap={{ scale: 0.94 }}
        >
          <AnimatePresence>
            {breathing && (
              <>
                <motion.span
                  key={`${jumpKey}-flash`}
                  initial={{ opacity: 0.95, scale: 0.2 }}
                  animate={{ opacity: 0, scale: 2.4 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute left-1/2 top-[22%] w-10 h-10 rounded-full pointer-events-none mix-blend-screen"
                  style={{
                    transform: "translate(-50%, -50%)",
                    background: "radial-gradient(circle, #fffdf0 0%, #ffdf8a 40%, transparent 72%)",
                  }}
                />
                {FIRE_PARTICLES.map((p, i) => (
                  <motion.span
                    key={`${jumpKey}-fire-${i}`}
                    initial={{ opacity: 1, x: "-50%", y: "-50%", scale: 0.25, rotate: 0 }}
                    animate={{
                      opacity: 0,
                      x: `calc(-50% + ${p.dx}px)`,
                      y: `calc(-50% + ${p.dy}px)`,
                      scale: 1.4,
                      rotate: p.dx > 0 ? 25 : -25,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.75, delay: p.delay, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 top-[22%] rounded-full pointer-events-none mix-blend-screen"
                    style={{
                      width: p.size,
                      height: p.size * 1.3,
                      background: FIRE_GRADIENTS[p.hue],
                      filter: "blur(1px)",
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          <div style={frameStyle} />
        </motion.button>
      </div>
    </div>
  );
};
