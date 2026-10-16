import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import drinks from "@/assets/drinks.jpg";
import { WHATS } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farol Gastronomia — Restaurante à beira do lago em Brasília" },
      { name: "description", content: "Peixes, camarões e drinks autorais num refúgio à beira do lago em Brasília." },
      { property: "og:title", content: "Farol Gastronomia — Brasília" },
      { property: "og:description", content: "Peixes, camarões e drinks autorais num refúgio à beira do lago." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 md:grid-cols-2 md:py-24">
          <div>
            <p className="font-bold uppercase tracking-widest text-primary">Brasília · Lago Paranoá</p>
            <h1 className="display mt-4 text-[22vw] md:text-[10rem]">
              Seu <span className="text-primary">refúgio</span> no lago
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              No Farol não apenas alimentamos o corpo, mas principalmente a alma.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/cardapio" className="pill bg-primary text-primary-foreground">Ver cardápio</Link>
              <a href={WHATS} className="pill bg-secondary text-secondary-foreground">Reservar</a>
            </div>
          </div>
          <img src={hero} width={1280} height={1024} alt="Cambucu grelhado com camarões"
            className="w-full rounded-[40%_60%_55%_45%/50%_45%_55%_50%] border-4 object-cover" />
        </div>
      </section>

      <section className="border-y-2 bg-primary py-5">
        <p className="display whitespace-nowrap text-center text-4xl text-primary-foreground md:text-6xl">
          Peixe · Camarão · Drinks · Música ao vivo
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
        <img src={drinks} loading="lazy" width={1024} height={1024} alt="Drinks do Farol ao pôr do sol"
          className="w-full rounded-full border-4 object-cover" />
        <div>
          <h2 className="display text-7xl md:text-8xl">Brindemos <span className="text-primary">a vida!</span></h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Drinks autorais com a sua base preferida, releituras de sobremesas e clássicos — tudo preparado na hora.
          </p>
          <Link to="/cardapio" className="pill mt-8 bg-primary text-primary-foreground">Drinks e bebidas</Link>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <h2 className="display text-6xl md:text-9xl">Um evento <span className="text-primary">memorável?</span></h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">Venha comemorar seu evento no Farol.</p>
          <Link to="/eventos" className="pill mt-8 bg-secondary text-secondary-foreground">Saiba mais</Link>
        </div>
      </section>
    </main>
  );
}
