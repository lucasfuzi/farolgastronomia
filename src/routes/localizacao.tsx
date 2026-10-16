import { createFileRoute } from "@tanstack/react-router";
import { Address, Hours, MapEmbed } from "@/components/info";

export const Route = createFileRoute("/localizacao")({
  head: () => ({
    meta: [
      { title: "Localização e horários — Farol Gastronomia" },
      { name: "description", content: "St. de Clubes Esportivos Sul Trecho 2, Asa Sul, Brasília. À beira do Lago Paranoá. Veja horários e como chegar." },
      { property: "og:title", content: "Localização — Farol Gastronomia" },
      { property: "og:description", content: "À beira do Lago Paranoá, no Setor de Clubes Sul, Brasília." },
    ],
  }),
  component: Localizacao,
});

function Localizacao() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-14">
      <h1 className="display text-[16vw] md:text-[8rem]">Locali<span className="text-primary">zação</span></h1>
      <div className="mt-10 grid gap-6 lg:grid-cols-[2fr_3fr]">
        <div className="grid gap-6"><Address /><Hours /></div>
        <MapEmbed />
      </div>
    </main>
  );
}
