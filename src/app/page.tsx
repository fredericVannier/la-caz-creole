import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Menus } from "@/components/sections/Menus";
import { MeilleursPlats } from "@/components/sections/MeilleursPlats";
import { Cuisiniere } from "@/components/sections/Cuisiniere";
import { Avis } from "@/components/sections/Avis";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Menus />
        <MeilleursPlats />
        <Cuisiniere />
        <Avis />
      </main>
      <Footer />
    </>
  );
}
