import { Link } from "@tanstack/react-router";
import type { Section } from "@/lib/menu";

export const WHATS = "https://wa.me/5561992171977";
export const MAPS = "https://maps.app.goo.gl/tUWsYeecMoBTWbuY8";
export const INSTA = "https://instagram.com/farolgastronomiadf";

const nav = [
  { to: "/", label: "Início" },
  { to: "/cardapio", label: "Cardápio" },
  { to: "/eventos", label: "Eventos" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="display text-2xl text-primary">Farol</Link>
        <nav className="flex gap-1 overflow-x-auto">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-ink-foreground hover:text-primary"
              activeProps={{ className: "bg-primary text-primary-foreground" }}>
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="display text-6xl text-primary">Farol</p>
          <p className="mt-2 opacity-80">Gastronomia e Eventos · Lago Paranoá</p>
        </div>
        <div className="space-y-1 text-sm opacity-80">
          <p>St. de Clubes Esportivos Sul Trecho 2 - Asa Sul, Brasília - DF</p>
          <p>Qua a sex 11h45 às 15h · Sáb, dom e feriados (sócios) 11h45 às 15h</p>
          <p>Dinheiro, Pix, cartão de crédito e débito</p>
          <p>Couvert artístico: R$ 15 voz e violão · R$ 25 bandas (por pessoa)</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a href={WHATS} className="hover:text-primary">(61) 99217-1977</a>
          <a href={INSTA} className="hover:text-primary">@farolgastronomiadf</a>
          <a href="mailto:eventos@farolgastronomiadf.com" className="hover:text-primary">eventos@farolgastronomiadf.com</a>
        </div>
      </div>
    </footer>
  );
}

export function MenuSection({ s }: { s: Section }) {
  return (
    <section className="rounded-3xl border-2 bg-card p-6 md:p-8">
      <h3 className="display text-4xl text-primary md:text-5xl">{s.title}</h3>
      {s.note && <p className="mt-3 text-sm uppercase tracking-wide text-muted-foreground">{s.note}</p>}
      {s.cols && (
        <div className="mt-6 flex justify-end gap-6 text-xs font-bold uppercase text-secondary">
          <span className="w-20 text-right">{s.cols[0]}</span><span className="w-20 text-right">{s.cols[1]}</span>
        </div>
      )}
      <ul className="mt-4 divide-y divide-border">
        {s.items.map((it) => (
          <li key={it.name} className="flex items-start justify-between gap-4 py-3">
            <div>
              <p className="font-bold uppercase">{it.name}</p>
              {it.desc && <p className="mt-0.5 text-sm text-muted-foreground">{it.desc}</p>}
            </div>
            <div className="flex shrink-0 gap-6 font-bold text-secondary">
              {it.price && <span className={s.cols ? "w-20 text-right" : ""}>{it.price}</span>}
              {it.price2 && <span className="w-20 text-right">{it.price2}</span>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
