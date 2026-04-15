"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { iconRegistry } from "@/lib/icons";

interface ParallaxTitleProps {
  index?: string;
  icon?: string;
  parallax?: boolean;
  children: React.ReactNode;
}

export function ParallaxTitle({ index, icon, parallax = false, children }: ParallaxTitleProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["32px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  const Icon = icon ? iconRegistry[icon] : undefined;

  const prefix = Icon ? (
    <Icon size={24} strokeWidth={1.5} className="text-accent shrink-0" />
  ) : index ? (
    <span className="text-muted-foreground text-xs uppercase tracking-[0.2em] shrink-0">
      {index}
    </span>
  ) : null;

  const heading = (
    <h2 style={{ fontFamily: "var(--font-fraunces)" }} className="text-4xl md:text-5xl font-light text-foreground">
      {children}
    </h2>
  );

  return (
    <div ref={ref} className="flex items-center gap-4 mb-16 overflow-hidden">
      {prefix}
      {parallax ? (
        <motion.h2
          style={{ y, opacity, fontFamily: "var(--font-fraunces)" }}
          className="text-4xl md:text-5xl font-light text-foreground"
        >
          {children}
        </motion.h2>
      ) : (
        heading
      )}
    </div>
  );
}
