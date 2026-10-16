import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Hours } from "@/components/info";
import { AirbnbDate } from "@/components/airbnb-date";
import { format } from "date-fns";

export const Route = createFileRoute("/reservas")({
  head: () => ({
    meta: [
      { title: "Reservar mesa — Farol Gastronomia" },
      { name: "description", content: "Solicite sua reserva no Farol Gastronomia pelo WhatsApp. Quarta a domingo, 11h45 às 15h." },
      { property: "og:title", content: "Reserve sua mesa — Farol Gastronomia" },
      { property: "og:description", content: "Envie sua solicitação de reserva pelo WhatsApp." },
    ],
  }),
  component: Reservas,
});

const field = "mt-1 w-full rounded-2xl border-2 bg-card px-4 py-3 outline-none focus:border-primary";

function Reservas() {
  const [f, setF] = useState({ nome: "", hora: "", pessoas: "2", obs: "" });
  const [data, setData] = useState<Date>();
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });
  function submit(e: FormEvent) {
    e.preventDefault();
    if (!data) { alert("Escolha a data da reserva."); return; }
    const msg = `Olá! Gostaria de solicitar uma reserva.\nNome: ${f.nome}\nData: ${format(data, "dd/MM/yyyy")}\nHorário: ${f.hora}\nPessoas: ${f.pessoas}${f.obs ? `\nObservações: ${f.obs}` : ""}`;
    window.open(`https://wa.me/5561992171977?text=${encodeURIComponent(msg)}`, "_blank");
  }
  return (
    <main className="mx-auto max-w-7xl px-5 py-14">
      <h1 className="display text-[16vw] md:text-[8rem]">Reserve <span className="text-primary">sua mesa</span></h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Preencha os dados abaixo e envie sua solicitação pelo WhatsApp. A reserva será confirmada pela nossa equipe conforme a disponibilidade.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-[3fr_2fr]">
        <form onSubmit={submit} className="grid gap-4 rounded-3xl border-2 bg-card p-8 sm:grid-cols-2">
          <label className="sm:col-span-2 text-sm font-bold">Nome<input required value={f.nome} onChange={set("nome")} className={field} /></label>
          <div className="text-sm font-bold">Data<AirbnbDate value={data} onChange={setData} /></div>
          <label className="text-sm font-bold">Horário<input required type="time" min="11:45" max="15:00" value={f.hora} onChange={set("hora")} className={field} /></label>
          <label className="text-sm font-bold">Pessoas<input required type="number" min={1} value={f.pessoas} onChange={set("pessoas")} className={field} /></label>
          <label className="sm:col-span-2 text-sm font-bold">Observações (opcional)<textarea rows={3} value={f.obs} onChange={set("obs")} className={field} /></label>
          <button type="submit" className="pill sm:col-span-2 justify-center bg-primary text-primary-foreground">Solicitar reserva</button>
        </form>
        <Hours />
      </div>
    </main>
  );
}
