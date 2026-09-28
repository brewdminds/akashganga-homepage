import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { useState, type ReactNode } from "react";

import { processSteps } from "@/data/site";

const VIEW_W = 1200;
const VIEW_H = 340;
const GROUND = 292;

/** Hotspot anchor per step, in SVG coordinates (matches the station drawings below). */
const stations = [
  { x: 110, y: 42 },
  { x: 360, y: 100 },
  { x: 600, y: 50 },
  { x: 842, y: 112 },
  { x: 1046, y: 58 },
];

/** Belt runs between stations: [x1, y1, x2, y2]. */
const conveyors: [number, number, number, number][] = [
  [128, 214, 318, 142],
  [382, 268, 588, 118],
  [628, 272, 776, 152],
  [908, 218, 1028, 128],
];

function Station({ active, children }: { active: boolean; children: ReactNode }) {
  return (
    <g
      className={`transition-colors duration-300 ${active ? "fill-brand-soft stroke-primary" : "fill-background stroke-muted-foreground/60"}`}
      strokeWidth={active ? 2.5 : 1.75}
      strokeLinejoin="round"
    >
      {children}
    </g>
  );
}

function Conveyor({
  x1,
  y1,
  x2,
  y2,
  live,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  live: boolean;
}) {
  const rollers = [0.12, 0.37, 0.62, 0.87].map((t) => ({
    cx: x1 + (x2 - x1) * t,
    cy: y1 + (y2 - y1) * t,
  }));
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        className="stroke-muted-foreground/50"
        strokeWidth={6}
        strokeLinecap="round"
      />
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        className={`process-flow transition-colors ${live ? "stroke-brand" : "stroke-background"}`}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      {rollers.map((r) => (
        <line
          key={r.cx}
          x1={r.cx}
          y1={r.cy + 4}
          x2={r.cx}
          y2={GROUND}
          className="stroke-muted-foreground/35"
          strokeWidth={1.5}
        />
      ))}
    </g>
  );
}

function PlantDrawing({ active }: { active: number }) {
  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className="h-auto w-full"
      role="img"
      aria-label="Schematic of an Akashganga sand plant: feed hopper, jaw crusher, VSI crusher, sand screen and dry dust separator connected by conveyors"
    >
      <line
        x1={20}
        y1={GROUND}
        x2={VIEW_W - 20}
        y2={GROUND}
        className="stroke-border"
        strokeWidth={2}
      />
      {conveyors.map(([x1, y1, x2, y2], i) => (
        <Conveyor key={x1} x1={x1} y1={y1} x2={x2} y2={y2} live={active > i} />
      ))}

      {/* 1 Feed hopper */}
      <Station active={active === 0}>
        <path d="M52 108 L168 108 L138 196 L82 196 Z" />
        <path d="M92 196 L92 292 M128 196 L128 292" fill="none" />
        <circle cx={82} cy={98} r={10} />
        <circle cx={104} cy={92} r={13} />
        <circle cx={130} cy={97} r={11} />
        <circle cx={150} cy={101} r={8} />
      </Station>

      {/* 2 Jaw crusher */}
      <Station active={active === 1}>
        <rect x={302} y={132} width={116} height={126} rx={8} />
        <path d="M324 148 L356 236 M396 148 L364 236" fill="none" />
        <circle cx={430} cy={168} r={24} />
        <circle cx={430} cy={168} r={5} />
        <path d="M312 258 L312 292 M408 258 L408 292" fill="none" />
      </Station>

      {/* 3 VSI crusher */}
      <Station active={active === 2}>
        <rect x={588} y={84} width={24} height={30} rx={3} />
        <rect x={552} y={112} width={96} height={146} rx={10} />
        <circle cx={600} cy={184} r={30} />
        <path d="M600 154 L600 214 M574 169 L626 199 M574 199 L626 169" fill="none" />
        <rect x={660} y={206} width={36} height={44} rx={5} />
        <path d="M566 258 L566 292 M634 258 L634 292" fill="none" />
      </Station>

      {/* 4 Sand screen */}
      <Station active={active === 3}>
        <path d="M770 146 L914 196 L914 212 L770 162 Z" />
        <path
          d="M794 158 L802 161 M822 168 L830 171 M850 178 L858 181 M878 188 L886 191"
          fill="none"
        />
        <path d="M784 166 L784 292 M900 212 L900 292 M914 204 L948 238" fill="none" />
      </Station>

      {/* 5 Dry dust separator */}
      <Station active={active === 4}>
        <rect x={1028} y={92} width={84} height={70} rx={6} />
        <path d="M1028 162 L1112 162 L1082 230 L1058 230 Z" />
        <path d="M1112 110 L1160 110 L1160 64" fill="none" />
        <rect x={1146} y={38} width={28} height={26} rx={4} />
        <path d="M1038 162 L1038 292 M1102 162 L1102 292" fill="none" />
        <path d="M1016 292 Q1070 238 1124 292 Z" />
      </Station>
    </svg>
  );
}

export function ProcessDiagram() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const step = processSteps[active];
  const go = (delta: number) =>
    setActive((i) => (i + delta + processSteps.length) % processSteps.length);
  if (!step) return null;

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-background">
      <div className="px-4 pb-4 pt-8 md:px-8 md:pt-14">
        <div className="relative">
          <PlantDrawing active={active} />
          <div role="tablist" aria-label="Sand manufacturing stages">
            {processSteps.map((stage, i) => {
              const pos = stations[i];
              if (!pos) return null;
              return (
                <button
                  key={stage.title}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  aria-controls="process-step-panel"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border bg-background p-0.5 md:border-2 md:py-1 md:pl-1 font-display text-sm font-bold shadow-card transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:pr-3 ${
                    active === i
                      ? "border-primary text-primary"
                      : "border-border text-foreground hover:border-brand"
                  }`}
                  style={{ left: `${(pos.x / VIEW_W) * 100}%`, top: `${(pos.y / VIEW_H) * 100}%` }}
                >
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] md:h-7 md:w-7 md:text-xs ${active === i ? "bg-primary text-primary-foreground" : "bg-brand-soft text-primary"}`}
                  >
                    {i + 1}
                  </span>
                  <span className="hidden whitespace-nowrap text-xs md:inline">{stage.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        id="process-step-panel"
        role="tabpanel"
        aria-live="polite"
        className="flex flex-col gap-5 border-t border-border bg-section px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step.title}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex min-w-0 items-start gap-4"
          >
            <span className="font-display text-3xl font-bold leading-none text-brand">
              {String(active + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.text}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex shrink-0 items-center gap-3">
          <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground">
            {step.size}
          </span>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous stage"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-foreground transition hover:border-brand hover:text-primary"
          >
            <RiArrowLeftLine className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next stage"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-foreground transition hover:border-brand hover:text-primary"
          >
            <RiArrowRightLine className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
