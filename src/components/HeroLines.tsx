import { motion, useReducedMotion } from "motion/react";

// Flowing contour lines (drawn in, then slowly drifting) layered over the hero video.
const flowLines = [
  { d: "M-100 620 C 250 480, 520 760, 860 600 S 1360 420, 1700 560", delay: 0.6, dur: 3.2, drift: 14 },
  { d: "M-100 700 C 300 560, 560 820, 900 680 S 1400 500, 1700 640", delay: 0.9, dur: 3.4, drift: -12 },
  { d: "M-100 220 C 260 330, 540 90, 880 240 S 1380 400, 1700 260", delay: 1.1, dur: 3.4, drift: 10 },
  { d: "M-100 140 C 300 250, 580 20, 920 160 S 1420 320, 1700 180", delay: 1.4, dur: 3.6, drift: -10 },
];

const sparkles = [
  { x: "12%", y: "28%", s: 6, delay: 0 },
  { x: "84%", y: "22%", s: 8, delay: 1.2 },
  { x: "22%", y: "74%", s: 5, delay: 2.1 },
  { x: "76%", y: "70%", s: 7, delay: 0.7 },
  { x: "50%", y: "14%", s: 5, delay: 1.8 },
  { x: "92%", y: "52%", s: 5, delay: 2.6 },
  { x: "6%", y: "52%", s: 6, delay: 3.1 },
];

const cornerPaths = [
  "M0 60 V0 H60", // top-left
  "M0 0 H60 V60", // top-right
  "M0 0 V60 H60", // bottom-left
  "M0 60 H60 V0", // bottom-right
];
const cornerPos = [
  "top-6 left-6 md:top-10 md:left-10",
  "top-6 right-6 md:top-10 md:right-10",
  "bottom-6 left-6 md:bottom-10 md:left-10",
  "bottom-6 right-6 md:bottom-10 md:right-10",
];

export default function HeroLines() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[15] overflow-hidden">
      {/* flowing curves */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {flowLines.map((l, i) => (
          <motion.g
            key={i}
            animate={reduce ? undefined : { y: [0, l.drift, 0] }}
            transition={{ duration: 9 + i * 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.path
              d={l.d}
              stroke="white"
              strokeOpacity={0.35}
              strokeWidth={1.2}
              strokeLinecap="round"
              initial={{ pathLength: reduce ? 1 : 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: l.dur, delay: l.delay, ease: [0.22, 1, 0.36, 1] }}
            />
            {!reduce && (
              <motion.path
                d={l.d}
                stroke="#f9a8d4"
                strokeOpacity={0.9}
                strokeWidth={2}
                strokeLinecap="round"
                initial={{ pathLength: 0.07, pathOffset: 0 }}
                animate={{ pathOffset: [0, 0.93] }}
                transition={{ duration: 7 + i, delay: l.delay + l.dur, repeat: Infinity, ease: "linear" }}
                style={{ filter: "drop-shadow(0 0 4px rgba(249,168,212,0.8))" }}
              />
            )}
          </motion.g>
        ))}
      </svg>

      {/* corner brackets */}
      {cornerPaths.map((d, i) => (
        <svg key={i} viewBox="0 0 60 60" className={`absolute h-10 w-10 md:h-14 md:w-14 ${cornerPos[i]}`} fill="none">
          <motion.path
            d={d}
            stroke="white"
            strokeOpacity={0.7}
            strokeWidth={1.5}
            initial={{ pathLength: reduce ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 1.6 + i * 0.15, ease: "easeOut" }}
          />
        </svg>
      ))}

      {/* twinkling sparkles */}
      {!reduce &&
        sparkles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute block rounded-full bg-white"
            style={{
              left: p.x,
              top: p.y,
              width: p.s,
              height: p.s,
              boxShadow: "0 0 12px 3px rgba(255,255,255,0.7)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.9, 0], scale: [0, 1, 0], y: [0, -18, -36] }}
            transition={{ duration: 4.5, delay: p.delay + 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
    </div>
  );
}
