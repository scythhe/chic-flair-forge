import { createFileRoute } from "@tanstack/react-router";
import { LangProvider } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Energy Beauty Salon — Luxury Hair, Nails & Bridal in Tbilisi" },
      { name: "description", content: "Tbilisi's 5-star beauty atelier for hair, nails, bridal styling, facials and spa. Book online in EN / KA / RU." },
      { property: "og:title", content: "Energy Beauty Salon — Tbilisi" },
      { property: "og:description", content: "Luxury hair, nails and bridal styling at 39 Pekini Ave, Tbilisi. Rated 5.0 on Google." },
    ],
  }),
});

function Index() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Gallery />
          <About />
          <Reviews />
          <Booking />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}
