import { MAPS } from "@/components/site";

export const ADDRESS = "St. de Clubes Esportivos Sul Trecho 2 - Asa Sul, Brasília - DF";

export function Hours() {
  return (
    <div className="rounded-3xl border-2 bg-card p-8">
      <p className="text-sm font-bold uppercase text-primary">Horários</p>
      <dl className="mt-3 space-y-3">
        <div className="flex justify-between gap-4"><dt>Segunda e terça</dt><dd className="font-bold">Fechado</dd></div>
        <div className="flex justify-between gap-4"><dt>Quarta a sexta<br /><span className="text-sm text-muted-foreground">Todos os públicos</span></dt><dd className="font-bold">11h45 às 15h</dd></div>
        <div className="flex justify-between gap-4"><dt>Sábado, domingo e feriados<br /><span className="text-sm text-muted-foreground">Exclusivo para sócios</span></dt><dd className="font-bold">11h45 às 15h</dd></div>
      </dl>
    </div>
  );
}

export function Address() {
  return (
    <div className="rounded-3xl border-2 bg-card p-8">
      <p className="text-sm font-bold uppercase text-primary">Endereço</p>
      <p className="mt-3 text-lg">Clube Naval de Brasília<br />St. de Clubes Esportivos Sul Trecho 2 - Asa Sul<br />Brasília - DF · CEP 70297-400</p>
      <p className="mt-2 text-sm text-muted-foreground">À beira do Lago Paranoá.</p>
      <a href={MAPS} target="_blank" rel="noreferrer" className="pill mt-6 bg-primary text-primary-foreground">Como chegar</a>
    </div>
  );
}

export function MapEmbed() {
  return (
    <iframe title="Mapa do Farol Gastronomia" className="h-96 w-full rounded-3xl border-2" loading="lazy"
      src="https://www.google.com/maps?q=St.+de+Clubes+Esportivos+Sul+Trecho+2+Asa+Sul+Brasilia+DF+70297-400&output=embed" />
  );
}
