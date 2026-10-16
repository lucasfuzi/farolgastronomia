import { createFileRoute } from "@tanstack/react-router";
import { INSTA, MAPS, WHATS } from "@/components/site";

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
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <a href={WHATS} className="rounded-3xl border-2 bg-card p-8 hover:border-primary">
          <p className="text-sm font-bold uppercase text-secondary">WhatsApp</p>
          <p className="display mt-3 text-5xl">(61) 99217-1977</p>
        </a>
        <a href={INSTA} className="rounded-3xl border-2 bg-card p-8 hover:border-primary">
          <p className="text-sm font-bold uppercase text-secondary">Instagram</p>
          <p className="display mt-3 text-5xl">@farolgastronomiadf</p>
        </a>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border-2 bg-card p-8">
          <p className="text-sm font-bold uppercase text-primary">Endereço</p>
          <p className="mt-3 text-lg">St. de Clubes Esportivos Sul Trecho 2 - Asa Sul<br />Brasília - DF · CEP 70297-400</p>
          <p className="mt-2 text-sm text-muted-foreground">À beira do Lago Paranoá.</p>
          <a href={MAPS} target="_blank" rel="noreferrer" className="pill mt-6 bg-primary text-primary-foreground">Como chegar</a>
        </div>
        <div className="rounded-3xl border-2 bg-card p-8">
          <p className="text-sm font-bold uppercase text-primary">Horários</p>
          <dl className="mt-3 space-y-3">
            <div className="flex justify-between gap-4"><dt>Segunda e terça</dt><dd className="font-bold">Fechado</dd></div>
            <div className="flex justify-between gap-4"><dt>Quarta a sexta<br /><span className="text-sm text-muted-foreground">Todos os públicos</span></dt><dd className="font-bold">11h45 às 15h</dd></div>
            <div className="flex justify-between gap-4"><dt>Sábado, domingo e feriados<br /><span className="text-sm text-muted-foreground">Exclusivo para sócios</span></dt><dd className="font-bold">11h45 às 15h</dd></div>
          </dl>
        </div>
      </div>
      <iframe title="Mapa do Farol Gastronomia" className="mt-6 h-96 w-full rounded-3xl border-2" loading="lazy"
        src="https://www.google.com/maps?q=St.+de+Clubes+Esportivos+Sul+Trecho+2+Asa+Sul+Brasilia+DF+70297-400&output=embed" />
      <a href={"mailto:eventos@farolgastronomiadf.com"} className="mt-6 block font-bold text-primary">eventos@farolgastronomiadf.com</a>
      <p className="mt-10 text-muted-foreground">Pagamento: dinheiro, Pix, cartão de crédito e débito.</p>
    </main>
  );
}
