import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Cases } from "@/components/site/Cases";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OrganicAds Studio | Marketing, Diseño y Presencia Digital" },
      {
        name: "description",
        content:
          "Ayudamos a emprendedores y marcas a construir una presencia digital profesional, coherente y orientada a resultados. San Fernando, Chile.",
      },
      { property: "og:title", content: "OrganicAds Studio | Marketing, Diseño y Presencia Digital" },
      {
        property: "og:description",
        content: "Ayudamos a emprendedores y marcas a construir una presencia digital profesional.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Cases />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
