"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
  type MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";

/**
 * "The Infinite Grid" — adapted from shadway's component on 21st.dev
 * (https://21st.dev/community/components/shadway/the-infinite-grid/default).
 *
 * Differences from the original:
 *  - Recolored to the coflow brand: lavender (#ccb8f5) + lime (#ddf3a0).
 *  - Decoupled from the original demo's centered headline — this version
 *    is a pure background. Headline + CTAs are owned by the Hero.
 *  - The mouse-follow radial mask is opt-in (defaults on for desktop) so
 *    we don't waste cycles on touch devices.
 */
export function TheInfiniteGrid({
  className,
  intensity = 1,
}: {
  className?: string;
  /** 0–1, scales blob opacity. */
  intensity?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  // Slow, steady drift — diagonal so you read both axes moving.
  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.35) % 48);
    gridOffsetY.set((gridOffsetY.get() + 0.35) % 48);
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const maskImage = useMotionTemplate`radial-gradient(360px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      aria-hidden="true"
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-auto",
        className,
      )}
    >
      {/* Faint always-on grid layer */}
      <div className="absolute inset-0 opacity-[0.07] text-ink-900">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      {/* Active grid layer — only revealed inside the mouse spotlight */}
      <motion.div
        className="absolute inset-0 opacity-50 text-lavender-deep"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      {/* Brand-colored blobs — lavender top-end + lime bottom-start so
          both colors are immediately visible as the page loads. */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-[20%] end-[-10%] w-[55%] h-[55%] rounded-full blur-[120px]"
          style={{ background: "rgba(204, 184, 245, 0.55)", opacity: intensity }}
        />
        <div
          className="absolute -top-[5%] end-[20%] w-[25%] h-[25%] rounded-full blur-[100px]"
          style={{ background: "rgba(139, 111, 217, 0.30)", opacity: intensity }}
        />
        <div
          className="absolute -bottom-[20%] start-[-8%] w-[55%] h-[55%] rounded-full blur-[120px]"
          style={{ background: "rgba(221, 243, 160, 0.65)", opacity: intensity }}
        />
        <div
          className="absolute bottom-[10%] start-[15%] w-[25%] h-[25%] rounded-full blur-[100px]"
          style={{ background: "rgba(155, 201, 74, 0.28)", opacity: intensity }}
        />
      </div>

      {/* Bottom fade so the grid melts into the page below */}
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(250,250,247,0) 0%, var(--color-paper) 100%)",
        }}
      />
    </div>
  );
}

function GridPattern({
  offsetX,
  offsetY,
}: {
  offsetX: MotionValue<number>;
  offsetY: MotionValue<number>;
}) {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id="cf-infinite-grid"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cf-infinite-grid)" />
    </svg>
  );
}
