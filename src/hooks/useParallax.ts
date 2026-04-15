"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

/**
 * Retourne une valeur de translation Y pour un effet parallax.
 * @param speed  Vitesse relative : 0 = immobile, 0.5 = demi-vitesse, 1 = vitesse normale
 *               Valeur négative = monte quand on scrolle vers le bas
 */
export function useParallax(speed = 0.3): {
  ref: React.RefObject<HTMLDivElement | null>;
  y: MotionValue<string>;
} {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const distance = 80 * speed;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${distance}px`, `-${distance}px`]
  );

  return { ref, y };
}
