"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, UtensilsCrossed } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { platsDisponibles, type Plat } from "@/data/menu";

// ---------------------------------------------------------------------------
// Image map
// ---------------------------------------------------------------------------

const imageMap: Record<string, string> = {
  "rougail-saucisse": "/images/rougail-saucisses.jpg",
  "rougail-morue": "/images/rougail-crevette.webp",
  "carry-poulet": "/images/carry.webp",
  "carry-cabri": "/images/cabri.jpg",
  "cari-bichiques": "/images/cari-bichique.png",
  "samoussas-boeuf": "/images/samoussas.webp",
  "samoussas-poulet": "/images/samoussas.webp",
  "bonbons-piment": "/images/bonbons-piment.jpg",
  "rougail-mangue": "/images/rougail-mangue.png",
  "plateau-aperitif": "/images/aperitif.png",
};

// ---------------------------------------------------------------------------
// Label de catégorie
// ---------------------------------------------------------------------------

const categorieLabel: Record<Plat["categorie"], string> = {
  plat: "Plat principal",
  aperitif: "Apéritif & petit four",
  dessert: "Dessert",
};

// ---------------------------------------------------------------------------
// PlatRow — "use client" via page parente
// ---------------------------------------------------------------------------

function PlatRow({ plat, index }: { plat: Plat; index: number }) {
  const [pimenteActif, setPimente] = useState<boolean>(plat.pimente ?? false);

  const isReversed = index % 2 === 1;
  const imageSrc = imageMap[plat.id] ?? null;

  // Tags à afficher : on exclut le tag "épicé" car l'icône Flame le remplace
  const tagsAffiches = (plat.tags ?? []).filter((t) => t !== "épicé");

  // Un plat est affiché comme épicé si :
  // - il est pimentable ET pimenteActif est true
  // - OU il est pimente: true sans être pimentable (toujours épicé)
  const isEpice = plat.pimentable ? pimenteActif : (plat.pimente ?? false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "flex flex-col md:flex-row border-b border-border",
        isReversed ? "md:flex-row-reverse" : "",
        !plat.disponible ? "opacity-50 pointer-events-none" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Colonne image */}
      <div className="w-full md:w-1/2 aspect-square relative bg-muted flex-shrink-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={plat.nom}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <UtensilsCrossed
              size={48}
              strokeWidth={1.5}
              className="text-muted-foreground/40"
            />
          </div>
        )}
      </div>

      {/* Colonne texte */}
      <div className="w-full md:w-1/2 aspect-square flex items-center px-12 lg:px-20 xl:px-28">
        <div className="w-full">
          {/* Badge indisponible */}
          {!plat.disponible && (
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              <span
                className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                Bientôt de retour
              </span>
            </div>
          )}

          {/* Eyebrow catégorie */}
          <p
            className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-5"
            style={{ fontFamily: "var(--font-inter-tight)" }}
          >
            {categorieLabel[plat.categorie]}
          </p>

          {/* Nom + icône Flame si épicé */}
          <h2
            className="text-[2.25rem] leading-[1.05] tracking-[-0.015em] flex items-center gap-2.5"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {plat.nom}
            {isEpice && (
              <Flame
                size={20}
                strokeWidth={1.5}
                className="text-accent translate-y-[2px] flex-shrink-0"
                aria-label="Plat épicé"
              />
            )}
          </h2>

          {/* Filet */}
          <div className="w-10 h-px bg-primary/40 my-5" />

          {/* Description */}
          <p
            className="text-[15px] leading-[1.65] text-muted-foreground max-w-[42ch]"
            style={{ fontFamily: "var(--font-inter-tight)" }}
          >
            {plat.description}
          </p>

          {/* Tags */}
          {tagsAffiches.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5">
              {tagsAffiches.map((tag) => (
                <span
                  key={tag}
                  className="border border-border rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-muted-foreground"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Toggle pimenté / doux */}
          {plat.pimentable && (
            <div className="inline-flex items-center border border-border rounded-full p-1 mt-6">
              <button
                type="button"
                onClick={() => setPimente(true)}
                className={[
                  "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-[0.12em] transition-colors duration-200",
                  pimenteActif
                    ? "bg-accent text-white"
                    : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
                style={{ fontFamily: "var(--font-inter-tight)" }}
                aria-pressed={pimenteActif}
              >
                <Flame size={14} strokeWidth={1.5} />
                Pimenté
              </button>
              <button
                type="button"
                onClick={() => setPimente(false)}
                className={[
                  "px-3.5 py-1.5 rounded-full text-xs uppercase tracking-[0.12em] transition-colors duration-200",
                  !pimenteActif
                    ? "bg-accent text-white"
                    : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
                style={{ fontFamily: "var(--font-inter-tight)" }}
                aria-pressed={!pimenteActif}
              >
                Doux
              </button>
            </div>
          )}

          {/* Prix */}
          <p className="mt-6 flex items-baseline gap-1">
            <span
              className="text-[1.75rem] leading-none text-primary"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              {plat.prix}
            </span>
            <span
              className="text-sm text-muted-foreground"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              &euro;
            </span>
          </p>
        </div>
      </div>
    </motion.article>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function MenuPage() {
  return (
    <>
      <Navbar />

      <main className="pt-14">
        {/* Header de page */}
        <header className="border-b border-border px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <p
              className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-6"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              La Caz Kréol
            </p>
            <h1
              className="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] leading-[0.95] tracking-[-0.02em] text-foreground"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Menu
            </h1>
            <p
              className="mt-6 text-[15px] leading-[1.65] text-muted-foreground max-w-[52ch]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Plats mijotés, saveurs d&apos;ici et de là-bas. Chaque recette
              est préparée avec les épices et les gestes transmis de génération
              en génération.
            </p>
          </div>
        </header>

        {/* Liste des plats */}
        <section aria-label="Liste des plats">
          {platsDisponibles.map((plat, index) => (
            <PlatRow key={plat.id} plat={plat} index={index} />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
