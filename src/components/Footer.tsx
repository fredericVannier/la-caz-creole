import Link from "next/link";
import { Mail, Phone, Clock } from "lucide-react";

export function Footer() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@lacazcreole.fr";

  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Signature */}
          <div>
            <p
              className="text-2xl font-light mb-4"
              style={{ fontFamily: "var(--font-fraunces)", color: "oklch(0.985 0.005 95)" }}
            >
              La Caz <em className="italic">Créole</em>
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "oklch(0.62 0.02 145)" }}>
              Cuisine réunionnaise faite maison.
              <br />
              Livraison et vente à emporter.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] mb-5" style={{ color: "oklch(0.62 0.02 145)" }}>
              Navigation
            </p>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Accueil" },
                { href: "/menu", label: "Le menu" },
                { href: "/commander", label: "Commander" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-background/70 hover:text-background transition-colors duration-200 text-xs uppercase tracking-[0.12em]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] mb-5" style={{ color: "oklch(0.62 0.02 145)" }}>
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={14} strokeWidth={1.5} style={{ color: "oklch(0.62 0.02 145)" }} />
                <a
                  href={`mailto:${email}`}
                  className="text-background/70 hover:text-background transition-colors duration-200 text-xs"
                >
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} strokeWidth={1.5} style={{ color: "oklch(0.62 0.02 145)" }} />
                <span className="text-background/70 text-xs">Sur demande</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={14} strokeWidth={1.5} style={{ color: "oklch(0.62 0.02 145)" }} />
                <span className="text-background/70 text-xs">Commande minimum 48h à l'avance</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs" style={{ borderColor: "oklch(1 0 0 / 10%)", color: "oklch(0.48 0.015 145)" }}>
          <p>© {new Date().getFullYear()} La Caz Créole</p>
          <p>Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}
