import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { bebidas, comidas } from "@/lib/menu";
import { MenuSection } from "@/components/site";

export const Route = createFileRoute("/cardapio")({
  head: () => ({
    meta: [
      { title: "Cardápio 2026 — Farol Gastronomia" },
      { name: "description", content: "Pratos da casa, petiscos, drinks autorais e bebidas do Farol Gastronomia." },
      { property: "og:title", content: "Cardápio 2026 — Farol Gastronomia" },
      { property: "og:description", content: "Pratos da casa, petiscos, drinks autorais e bebidas." },
    ],
  }),
  component: Cardapio,
});

function Cardapio() {
  const [tab, setTab] = useState<"comidas" | "bebidas">("comidas");
  const list = tab === "comidas" ? comidas : bebidas;
  return (
    <main className="mx-auto max-w-7xl px-5 py-14">
      <h1 className="display text-[18vw] md:text-[9rem]">Cardá<span className="text-primary">pio</span></h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Tudo preparado na hora com ingredientes selecionados — relaxe, o preparo leva de 30 a 50 minutos.
      </p>
      <div className="sticky top-16 z-40 mt-8 inline-flex rounded-full border-2 bg-ink p-1">
        {(["comidas", "bebidas"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`pill ${tab === t ? "bg-primary text-primary-foreground" : "text-secondary"}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {list.map((s) => <MenuSection key={s.title} s={s} />)}
      </div>
      <p className="mt-10 text-sm text-muted-foreground">
        Rolha: R$ 50 por garrafa quando o consumo não superar R$ 71 por pessoa. Aniversariante da semana: 1 cortesia por mesa, com documento e mínimo de 4 convidados consumindo.
      </p>
    </main>
  );
}
