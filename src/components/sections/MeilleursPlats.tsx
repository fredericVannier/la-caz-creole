"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ParallaxTitle } from "@/components/ParallaxTitle";

const plats = [
  { name: "Chop Suey", image: "/images/chop-suey.jpg" },
  { name: "Rougail Crevette", image: "/images/rougail-crevette.webp" },
  { name: "Rougail Saucisses", image: "/images/rougail-saucisses.jpg" },
  { name: "Samoussas", image: "/images/samoussas.webp" },
] as const;

function DishCard({ name, image }: { name: string; image: string }) {
  return (
    <motion.div
      className="relative aspect-square overflow-hidden"
      whileHover="hover"
    >
      {/* Image with hover scale */}
      <motion.div
        className="absolute inset-0"
        variants={{ hover: { scale: 1.08 } }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Centered dish name */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <p
          className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wide text-white text-center leading-tight w-full"
          style={{
            fontFamily: "var(--font-sans)",
            textShadow: "0 0 0 white, 0 0 1px white, 0 0 2px white, 0 2px 16px rgba(0,0,0,0.6)",
            WebkitTextStroke: "1.5px white",
          }}
        >
          {name}
        </p>
      </div>
    </motion.div>
  );
}

export function MeilleursPlats() {
  return (
    <section className="py-20 px-6 bg-background border-b border-border">
      <div className="container mx-auto max-w-6xl">
        <ParallaxTitle icon="Flame">Mes Incontournables</ParallaxTitle>
      </div>

      <div className="max-w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
        {plats.map((plat, index) => (
          <DishCard
            key={plat.name}
            name={plat.name}
            image={plat.image}
          />
        ))}
      </div>
    </section>
  );
}
