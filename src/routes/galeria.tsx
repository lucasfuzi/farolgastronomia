import { createFileRoute } from "@tanstack/react-router";
import { galeria } from "@/lib/photos";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria de fotos — Farol Gastronomia" },
      { name: "description", content: "Pratos, ambiente, eventos e a vista do Lago Paranoá no Farol Gastronomia." },
      { property: "og:title", content: "Galeria — Farol Gastronomia" },
      { property: "og:description", content: "Pratos, ambiente e a vista que fazem do Farol um lugar especial." },
    ],
  }),
  component: Galeria,
});

function Galeria() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-14">
      <h1 className="display text-[18vw] md:text-[9rem]">Gale<span className="text-primary">ria</span></h1>
      <p className="mt-4 max-w-xl text-muted-foreground">Pratos, ambiente e a vista que fazem do Farol um lugar especial.</p>
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {galeria.map((g) => (
          <img key={g.src} src={g.src} alt={g.alt} loading="lazy" className="mb-4 w-full break-inside-avoid rounded-3xl border-2" />
        ))}
      </div>
    </main>
  );
}
