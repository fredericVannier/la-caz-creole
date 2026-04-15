"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParallaxTitle } from "@/components/ParallaxTitle";

export function Cuisiniere() {
  const photoRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  return (
    <section className="py-28 px-6 bg-background border-b border-border">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Photo avec parallax */}
        <div
          ref={photoRef}
          className="overflow-hidden"
          style={{ aspectRatio: "3/4", maxWidth: "420px" }}
        >
          <motion.div className="relative w-full h-full" style={{ y: photoY, scale: 1.1 }}>
            <Image
              src="/images/cuisiniere.png"
              alt="La cuisinière de La Caz Créole dans sa cuisine"
              fill
              className="object-cover object-top"
            />
          </motion.div>
        </div>

        {/* Texte */}
        <div>
          <ParallaxTitle icon="ChefHat">Qui suis-je?</ParallaxTitle>

          <div className="space-y-5 text-muted-foreground leading-relaxed text-sm max-w-md">
            <p>
              Née à La Réunion et passionnée de cuisine depuis toujours, je prépare chaque
              plat avec les recettes transmises par ma famille, des épices soigneusement
              sélectionnées et beaucoup de soin.
            </p>
            <p>
              La cuisine réunionnaise, c'est un mélange unique de saveurs : les épices
              indiennes, les aromates créoles, la fraîcheur des produits de l'île.
              Chaque bouchée est un voyage.
            </p>
            <p>
              Généreuse, authentique, et surtout délicieuse — que ce soit un carry mijoté
              longtemps ou des samoussas croustillants pour l'apéro, je mets le même
              soin dans chaque préparation.
            </p>
          </div>

          <div className="mt-10 border-t border-border pt-8 grid grid-cols-2 gap-6">
            {[
              { label: "Produits frais", detail: "Approvisionnement local" },
              { label: "Recettes familiales", detail: "Transmises de génération en génération" },
              { label: "Épices authentiques", detail: "Importées de La Réunion" },
              { label: "Sans conservateurs", detail: "Tout est préparé à la commande" },
            ].map(({ label, detail }) => (
              <div key={label}>
                <p className="text-foreground text-xs font-medium uppercase tracking-wide">{label}</p>
                <p className="text-muted-foreground text-xs mt-1">{detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
