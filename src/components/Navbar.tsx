import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">

        <Link
          href="/"
          className="text-base font-light text-foreground hover:text-primary transition-colors duration-200"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          La Caz <em className="italic" style={{ color: "oklch(0.42 0.085 155)" }}>Créole</em>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/menu"
            className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Menu
          </Link>
          <Link
            href="/commander"
            className={cn(
              buttonVariants(),
              "rounded-md text-xs uppercase tracking-[0.12em] px-5 py-3 h-auto hover:bg-foreground transition-colors duration-200"
            )}
          >
            Commander
            <ArrowUpRight size={13} strokeWidth={1.5} className="ml-1.5" />
          </Link>
        </div>

        {/* Mobile */}
        <Link
          href="/commander"
          className={cn(
            buttonVariants(),
            "md:hidden rounded-md text-xs uppercase tracking-[0.12em] px-4 py-2 h-auto hover:bg-foreground transition-colors duration-200"
          )}
        >
          Commander
        </Link>
      </div>
    </nav>
  );
}
