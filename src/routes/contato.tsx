import { createFileRoute } from "@tanstack/react-router";
import { INSTA, WHATS } from "@/components/site";
import { Address, Hours, MapEmbed } from "@/components/info";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e reservas — Farol Gastronomia" },
      { name: "description", content: "Fale com o Farol Gastronomia pelo WhatsApp (61) 99217-1977 ou Instagram @farolgastronomiadf." },
      { property: "og:title", content: "Contato — Farol Gastronomia" },
      { property: "og:description", content: "WhatsApp (61) 99217-1977 · Instagram @farolgastronomiadf" },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-14">
      <h1 className="display text-[18vw] md:text-[9rem]">Fale <span className="text-primary">com a gente</span></h1>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <a href={WHATS} className="rounded-3xl border-2 bg-card p-8 hover:border-primary">
          <p className="text-sm font-bold uppercase text-primary">WhatsApp</p>
          <p className="display mt-3 text-4xl">(61) 99217-1977</p>
        </a>
        <a href={INSTA} className="rounded-3xl border-2 bg-card p-8 hover:border-primary">
          <p className="text-sm font-bold uppercase text-primary">Instagram</p>
          <p className="display mt-3 text-3xl break-all lg:text-4xl">@farolgastronomiadf</p>
        </a>
        <a href="mailto:eventos@farolgastronomiadf.com" className="rounded-3xl border-2 bg-card p-8 hover:border-primary">
          <p className="text-sm font-bold uppercase text-primary">E-mail de eventos</p>
          <p className="mt-3 text-lg font-bold break-all">eventos@farolgastronomiadf.com</p>
        </a>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2"><Address /><Hours /></div>
      <div className="mt-6"><MapEmbed /></div>
      <p className="mt-10 text-muted-foreground">Pagamento: dinheiro, Pix, cartão de crédito e débito.</p>
    </main>
  );
}
