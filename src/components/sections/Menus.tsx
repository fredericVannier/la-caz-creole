import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { menuDuMois, menuALaDemande } from "@/data/menu";
import { ParallaxTitle } from "@/components/ParallaxTitle";

export function Menus() {
  return (
    <section className="py-28 px-6 bg-secondary border-b border-border">
      <div className="container mx-auto max-w-6xl">

        <ParallaxTitle icon="CookingPot">Les formules</ParallaxTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Menu du mois */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3
              className="text-2xl font-light"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              <em className="italic not-italic" style={{ color: "oklch(0.42 0.085 155)" }}>
                Menu du mois
              </em>
            </h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            {menuDuMois.description}
          </p>

          {/* Liste éditoriale des plats */}
          <div className="border-t border-border">
            {menuDuMois.plats.map((plat) => (
              <div
                key={plat.id}
                className="flex items-baseline justify-between py-4 border-b border-border group hover:bg-background transition-colors duration-200 px-0"
              >
                <div className="flex-1 pr-4">
                  <span
                    className="text-lg font-light text-foreground group-hover:text-primary transition-colors duration-200"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {plat.nom}
                  </span>
                  <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed line-clamp-1">
                    {plat.description}
                  </p>
                </div>
                <span
                  className="text-sm font-medium tabular-nums shrink-0"
                  style={{ color: "oklch(0.72 0.18 55)" }}
                >
                  {plat.prix} €
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/menu"
              className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-foreground underline underline-offset-[6px] decoration-1 hover:decoration-primary hover:decoration-2 transition-all duration-200"
            >
              Menu complet
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        {/* Menu à la demande */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3
              className="text-2xl font-light"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              <em className="italic" style={{ color: "oklch(0.42 0.085 155)" }}>
                À la demande
              </em>
            </h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            {menuALaDemande.description}
          </p>

          {/* Liste éditoriale */}
          <div className="border-t border-border">
            {menuALaDemande.plats.slice(0, 6).map((plat) => (
              <div
                key={plat.id}
                className="flex items-baseline justify-between py-4 border-b border-border group hover:bg-background transition-colors duration-200"
              >
                <div className="flex-1 pr-4">
                  <span
                    className="text-lg font-light text-foreground group-hover:text-primary transition-colors duration-200"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {plat.nom}
                  </span>
                  <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed line-clamp-1">
                    {plat.description}
                  </p>
                </div>
                <span
                  className="text-sm font-medium tabular-nums shrink-0"
                  style={{ color: "oklch(0.72 0.18 55)" }}
                >
                  {plat.prix} €
                </span>
              </div>
            ))}
            {menuALaDemande.plats.length > 6 && (
              <p className="text-muted-foreground text-xs pt-4">
                + {menuALaDemande.plats.length - 6} autres spécialités disponibles
              </p>
            )}
          </div>

          <div className="mt-8">
            <Link
              href="/commander"
              className={cn(
                buttonVariants(),
                "rounded-md font-medium text-xs uppercase tracking-[0.12em] px-7 py-5 hover:bg-foreground transition-colors duration-200"
              )}
            >
              Faire une demande
              <ArrowUpRight size={14} strokeWidth={1.5} className="ml-2" />
            </Link>
          </div>
        </div>

      </div>
    </div>
    </section >
  );
}
