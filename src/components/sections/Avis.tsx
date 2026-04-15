import { ParallaxTitle } from "@/components/ParallaxTitle";

const avis = [
  {
    id: 1,
    nom: "Marie-Claire L.",
    note: 5,
    commentaire:
      "Le carry poulet était absolument divin. On s'est crus à La Réunion le temps d'un repas. Les samoussas ont disparu en deux minutes.",
    date: "Mars 2025",
  },
  {
    id: 2,
    nom: "Thomas B.",
    note: 5,
    commentaire:
      "J'ai commandé un plateau apéritif pour une trentaine de personnes. Tout était parfait, livré à l'heure, et mes invités ont adoré les bonbons piments.",
    date: "Février 2025",
  },
  {
    id: 3,
    nom: "Nadia R.",
    note: 5,
    commentaire:
      "Le rougail saucisse me rappelle exactement celui que faisait ma grand-mère à Saint-Denis. Un vrai goût d'authenticité.",
    date: "Janvier 2025",
  },
];

export function Avis() {
  return (
    <section className="py-28 px-6 bg-background border-b border-border">
      <div className="container mx-auto max-w-6xl">

        <ParallaxTitle icon="MessageSquare">Ce qu'ils en disent</ParallaxTitle>

        {/* Grille avis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {avis.map((a) => (
            <div key={a.id} className="border-t border-border pt-8">
              {/* Note en tirets */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: a.note }).map((_, i) => (
                  <span
                    key={i}
                    className="block w-4 h-px"
                    style={{ backgroundColor: "oklch(0.72 0.18 55)" }}
                  />
                ))}
              </div>
              <p
                className="text-foreground font-light leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                &ldquo;{a.commentaire}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="text-foreground text-xs font-medium">{a.nom}</span>
                <span className="text-muted-foreground text-xs">{a.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
