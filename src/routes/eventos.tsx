import { createFileRoute } from "@tanstack/react-router";
import { WHATS } from "@/components/site";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos e aniversários — Farol Gastronomia" },
      { name: "description", content: "Comemore aniversários e eventos à beira do lago no Farol Gastronomia, em Brasília." },
      { property: "og:title", content: "Eventos no Farol Gastronomia" },
      { property: "og:description", content: "Comemore seu evento à beira do lago em Brasília." },
    ],
  }),
  component: Eventos,
});

function Eventos() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-14">
      <h1 className="display text-[16vw] md:text-[9rem]">Seu evento <span className="text-primary">no Farol</span></h1>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          ["Aniversários", "Aniversariante da semana ganha 1 cortesia por mesa, com documento e mínimo de 4 convidados consumindo."],
          ["Confraternizações", "Pratos para compartilhar, drinks autorais e um cenário incrível à beira do lago."],
          ["Música ao vivo", "Couvert artístico de R$ 15 (voz e violão) ou R$ 25 (bandas) por pessoa."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-3xl border-2 bg-card p-8">
            <h2 className="display text-4xl text-primary">{t}</h2>
            <p className="mt-4 text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
      <a href={WHATS} className="pill mt-10 bg-primary text-primary-foreground">Informe-se: (61) 99217-1977</a>
    </main>
  );
}
