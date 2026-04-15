"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bike, ShoppingBag, Users, ChefHat, Clock, MapPin, Wallet, ConciergeBell } from "lucide-react";
import { ParallaxTitle } from "@/components/ParallaxTitle";

const services = [
  {
    icon: Bike,
    titre: "Livraison à domicile",
    description: "Recevez vos plats chauds directement chez vous selon les créneaux disponibles.",
  },
  {
    icon: ShoppingBag,
    titre: "Vente à emporter",
    description: "Commandez à l'avance et récupérez vos plats prêts à déguster.",
  },
  {
    icon: Users,
    titre: "Commandes événements",
    description: "Anniversaire, repas d'entreprise, fête de quartier — plateaux et plats en grande quantité.",
  },
  {
    icon: ChefHat,
    titre: "Plats sur mesure",
    description: "Envie d'une recette particulière ? Contactez-moi pour discuter de vos besoins.",
  },
];

const infos = [
  {
    icon: Clock,
    label: "Commande à l'avance",
    detail: "Minimum 48h avant la livraison souhaitée",
  },
  {
    icon: MapPin,
    label: "Zone de livraison",
    detail: "Me contacter pour vérifier votre secteur",
  },
  {
    icon: Wallet,
    label: "Paiement",
    detail: "Espèces ou virement à la livraison",
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // L'image monte plus lentement que le scroll — effet parallax
  const imageY = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-border"
    >
      {/* Image de fond avec parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imageY, scale: 1.6 }}
      >
        <Image
          src="/images/carry.webp"
          alt="Carry poulet réunionnais avec riz blanc et grains rouges"
          fill
          className="object-cover object-center"
          style={{ filter: "blur(5px)" }}
          priority
        />
      </motion.div>

      {/* Overlay dégradé vertical brun chaud — assombrit le centre sans écraser l'image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,14,10,0.15) 0%, rgba(20,14,10,0.58) 50%, rgba(20,14,10,0.15) 100%)",
        }}
      />

      {/* Contenu par-dessus */}
      <div className="relative z-10 py-28 px-6" style={{ textShadow: "0 1px 20px rgba(0,0,0,0.3)" }}>
        <div className="container mx-auto max-w-6xl">

          {/* Titre — version light pour fond sombre */}
          <div className="flex items-center gap-4 mb-16">
            <ConciergeBell size={24} strokeWidth={1.5} className="text-accent shrink-0" />
            <h2
              className="text-4xl md:text-5xl font-light text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Mes services
            </h2>
          </div>

          {/* Grille services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {services.map(({ icon: Icon, titre, description }) => (
              <div key={titre}>
                <Icon size={26} strokeWidth={1.5} className="text-white/60 mb-4" />
                <h3 className="font-medium text-white text-sm mb-1.5">{titre}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          {/* Infos pratiques */}
          <div className="border-t border-white/15 pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {infos.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon size={16} strokeWidth={1.5} className="text-white/40 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-xs font-medium">{label}</p>
                  <p className="text-white/55 text-xs mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
