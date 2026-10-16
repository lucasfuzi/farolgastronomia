import { createFileRoute } from "@tanstack/react-router";
import { P } from "@/lib/photos";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Farol Gastronomia" },
      { name: "description", content: "A história do Farol Gastronomia: desde 2024, iluminando conexões que alimentam a vida, à beira do Lago Paranoá." },
      { property: "og:title", content: "Quem Somos — Farol Gastronomia" },
      { property: "og:description", content: "Iluminar conexões que alimentam a vida." },
    ],
  }),
  component: QuemSomos,
});

const historia = [
  "Todo farol existe para iluminar caminhos. O Farol Gastronomia nasceu em 2024 exatamente desse propósito: ser um ponto de encontro para pessoas que desejam desacelerar, se reconectar e viver experiências verdadeiras. Sua origem não está apenas em um negócio, uma cozinha ou um espaço físico. Ela começou com uma pergunta simples: em um mundo cada vez mais acelerado, onde as pessoas podem encontrar tempo para estar presentes?",
  "Foi dessa inquietação que surgiu o sonho de criar um lugar onde a comida voltasse a cumprir seu papel mais nobre: unir pessoas. Um lugar onde famílias compartilhassem histórias ao redor da mesa. Onde amigos celebrassem conquistas. Onde colaboradores encontrassem inspiração. Onde o trabalho pudesse conviver com a leveza da natureza e com a beleza dos encontros humanos.",
  "O Farol foi concebido como um espaço de conexão. Conexão com a natureza, porque acreditamos que a terra nos ensina sobre ciclos, paciência e abundância. Cada árvore, cada jardim e cada canto ao ar livre convida a respirar mais profundamente e a lembrar que fazemos parte de algo maior.",
  "Conexão com a comida, porque cozinhar é um ato de cuidado. Os ingredientes carregam histórias, saberes e tradições. Cada prato servido no Farol nasce do respeito aos produtores, ao alimento e às pessoas que irão compartilhá-lo.",
  "E conexão entre pessoas, porque nenhuma tecnologia substitui o valor de um olhar atento, de uma conversa sincera ou de uma refeição dividida à mesa.",
  "O Farol acredita que prosperidade e humanidade caminham juntas. Que negócios podem gerar resultados sem abrir mão da ética, do acolhimento e da responsabilidade. Que o crescimento acontece quando há cooperação, confiança e propósito.",
  "Por isso, cada detalhe foi pensado para refletir valores que orientam sua existência: hospitalidade, respeito, sustentabilidade, excelência, colaboração, autenticidade e desenvolvimento humano.",
  "Mais do que um restaurante, um espaço de eventos ou um ambiente de trabalho, o Farol é um ecossistema de encontros. Um lugar onde pessoas, empresas, produtores, cozinheiros e famílias podem construir memórias e criar novas possibilidades.",
  "Seu nome não foi escolhido por acaso. Assim como um farol orienta navegantes em meio à imensidão do mar, o Farol Gastronomia deseja lembrar algo essencial: mesmo em tempos de pressa, ainda existem lugares onde vale a pena permanecer. Lugares onde a natureza acalma. Onde a comida aproxima. E onde as pessoas encontram umas às outras — e, muitas vezes, encontram também a si mesmas.",
];

function QuemSomos() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-14">
      <h1 className="display text-[16vw] md:text-[8rem]">Quem <span className="text-primary">somos</span></h1>
      <div className="mt-12 grid gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-5 text-lg leading-relaxed">
          <h2 className="display text-5xl text-primary">Nossa história</h2>
          {historia.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          <p className="display text-4xl">Iluminar conexões que <span className="text-primary">alimentam a vida.</span></p>
        </div>
        <div className="space-y-6">
          <img src={P.farol} alt="Farol listrado no jardim à beira do lago" className="w-full rounded-3xl border-2" />
          <img src={P.salao} alt="Salão do Farol com vista para o lago" loading="lazy" className="w-full rounded-3xl border-2" />
        </div>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <blockquote className="rounded-3xl bg-ink p-8 text-ink-foreground">
          <h2 className="display text-4xl text-primary">Manifesto</h2>
          <p className="mt-4 italic">“No Farol Gastronomia, acreditamos que a boa comida tem o poder de aproximar pessoas. Somos um espaço criado para celebrar encontros, despertar conexões e valorizar a gastronomia como uma experiência que alimenta o corpo e a alma. Cada detalhe foi pensado para que nossos clientes encontrem acolhimento, sabores marcantes e momentos que permanecem na memória.”</p>
        </blockquote>
        <blockquote className="rounded-3xl border-2 bg-card p-8">
          <h2 className="display text-4xl text-primary">Nosso conceito gastronômico</h2>
          <p className="mt-4 italic">“No Farol Gastronomia, celebramos a comida simples, feita com cuidado, bons ingredientes e temperos que remetem à cozinha de casa. Valorizamos o preparo atento, que respeita a essência e realça o sabor natural de cada alimento. Nosso cardápio reúne, com leveza e personalidade, pescados como a pescada-cambucu, carnes e massas, em uma cozinha acolhedora, saborosa e sem excessos. Porque, para nós, comer bem é reconhecer a beleza do essencial.”</p>
        </blockquote>
      </div>
    </main>
  );
}
