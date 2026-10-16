import { createFileRoute } from "@tanstack/react-router";
import { WHATS, MAPS } from "@/components/site";
import { espaco } from "@/lib/photos";

export const Route = createFileRoute("/espaco")({
  head: () => ({
    meta: [
      { title: "O Espaço — Farol Gastronomia à beira do Lago Paranoá" },
      { name: "description", content: "Salão, varanda, deck e jardim do Farol Gastronomia, no Clube Naval de Brasília, à beira do Lago Paranoá." },
      { property: "og:title", content: "O Espaço — Farol Gastronomia" },
      { property: "og:description", content: "Salão, varanda, deck e jardim à beira do Lago Paranoá." },
    ],
  }),
  component: Espaco,
});

function Espaco() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-14">
      <p className="font-bold uppercase tracking-widest text-primary">O espaço · Brasília</p>
      <h1 className="display mt-4 text-[16vw] md:text-[8rem]">À beira do <span className="text-primary">Lago Paranoá</span></h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        O telhado de madeira, a decoração náutica, o deck e os veleiros compõem o ambiente do Farol. Entre o salão, a varanda e o lago, um cenário para estar e celebrar.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {espaco.map((f) => (
          <figure key={f.t} className="overflow-hidden rounded-3xl border-2 bg-card">
            <img src={f.src} alt={f.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <figcaption className="display p-5 text-3xl">{f.t}</figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href={WHATS} className="pill bg-primary text-primary-foreground">Falar sobre eventos</a>
        <a href={MAPS} target="_blank" rel="noreferrer" className="pill bg-secondary text-secondary-foreground">Como chegar</a>
      </div>
    </main>
  );
}
