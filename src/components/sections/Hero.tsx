"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["0px", "80px"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "-40px"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="min-h-[92vh] flex items-center bg-background border-b border-border overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-16 items-center">

        {/* Colonne gauche — typographie */}
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-10">
            Cuisine réunionnaise — livraison & vente à emporter
          </p>

          <h1
            className="font-light text-foreground leading-[0.9] tracking-tight mb-12"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(3.5rem, 11vw, 9.5rem)",
            }}
          >
            La Caz
            <br />
            <em className="italic" style={{ color: "oklch(0.42 0.085 155)" }}>
              Créole
            </em>
          </h1>

          <p className="text-muted-foreground text-base max-w-sm leading-relaxed mb-12">
            Des plats réunionnais préparés avec soin, livrés chez vous ou à emporter.
            Saveurs authentiques, recettes de famille.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/commander"
              className={cn(
                buttonVariants(),
                "rounded-md font-medium text-xs uppercase tracking-[0.12em] px-7 py-5 hover:bg-foreground transition-colors duration-200"
              )}
            >
              Commander
              <ArrowUpRight size={14} strokeWidth={1.5} className="ml-2" />
            </Link>

            <Link
              href="/menu"
              className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-foreground underline underline-offset-[6px] decoration-1 hover:decoration-primary hover:decoration-2 transition-all duration-200"
            >
              Voir le menu
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </motion.div>

        {/* Colonne droite — photo avec parallax */}
        <div
          className="hidden lg:block overflow-hidden"
          style={{ aspectRatio: "3/4" }}
        >
          <motion.div
            className="relative w-full h-full"
            style={{ y: photoY, scale: 1.12 }}
          >
            <Image
              src="/images/hero.jpg"
              alt="Buffet de plats créoles cuisinés par La Caz Créole"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
