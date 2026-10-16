export type Item = { name: string; desc?: string | undefined; price?: string | undefined; price2?: string | undefined };
export type Section = { title: string; note?: string; cols?: [string, string]; items: Item[] };

const i = (name: string, price?: string, desc?: string, price2?: string): Item => ({ name, price, desc, price2 });

export const comidas: Section[] = [
  {
    title: "Entradas e Petiscos",
    note: "Não trocamos os acompanhamentos",
    items: [
      i("Nó de Oito", "R$ 30", "8 bolinhos de arroz com queijo."),
      i("Nó Simples", "R$ 35", "400g de batatas fritas."),
      i("Nó de Cunho", "R$ 60", "4 pastelzinhos de camarão com catupiry. 110g cada."),
      i("Nó de Defensa", "R$ 53", "12 camarões empanados."),
      i("Nó de Pescador", "R$ 62", "350g de iscas de peixe."),
      i("Chapa de Picanha", "R$ 165", "500g de picanha premium acompanhada de batatas fritas."),
      i("Bombom de Gorgonzola", "R$ 35", "10 croquetinhos de massa de espinafre recheados com gorgonzola."),
      i("Croqueta de Abóbora", "R$ 44", "10 bolinhas crocantes de purê de abóbora com carne seca e queijo."),
      i("Delícia de Camarão", "R$ 116", "300g de camarões salteados em alho, cebola, tomatinho, pimenta biquinho e ervas, com torradinhas."),
    ],
  },
  {
    title: "Pratos da Casa",
    note: "Não trocamos os acompanhamentos",
    cols: ["Individual", "Compartilhar"],
    items: [
      i("Farol do Lago", "R$ 70", "Camarões flambados com leite de coco, especiarias e castanhas, com arroz e fritas.", "—"),
      i("Camarão Catupiry Tradicional", "R$ 70", "Arroz branco, saladinha e batatas fritas.", "—"),
      i("Farol Amado", "R$ 70", "Moqueca de cambucu, camarões, arroz, farofa e fritas.", "R$ 188"),
      i("Farol Antigo", "R$ 65", "Cambucu grelhado com camarões, champignon e alcaparras, arroz e fritas.", "R$ 170"),
      i("Cambucu Leve", "R$ 48", "Pescada cambucu grelhada, farofa de ovos, saladinha e mix de vegetais.", "R$ 140"),
      i("Cambucu Tropical", "R$ 48", "Arroz de brócolis, mix de vegetais e purê de banana.", "R$ 140"),
      i("Cambucu Verão", "R$ 65", "Cambucu ao molho de maracujá, arroz de castanhas, camarão empanado no coco e saladinha.", "R$ 170"),
      i("Falafel Banana", "R$ 38", "Mix de vegetais, saladinha e purê de banana.", "R$ 107"),
      i("Frango Light", "R$ 48", "Frango grelhado, arroz de brócolis, mix de vegetais e saladinha.", "R$ 140"),
      i("Frango & Gnocchi", "R$ 48", "Frango grelhado com gnocchi de mandioquinha ao sugo.", "R$ 140"),
      i("Frango Gorgonzola", "R$ 62", "Frango à milanesa com arroz cremoso de gorgonzola.", "R$ 180"),
      i("Milanesa Brasil", "R$ 62", "Filé à milanesa, arroz branco, ovos fritos e saladinha.", "R$ 180"),
      i("Milanesa & Gnocchi", "R$ 65", "Filé à milanesa com gnocchi de batata e queijo da canastra ao sugo.", "R$ 180"),
      i("Filé Madeira", "R$ 62", "Filé mignon ao molho madeira, arroz de brócolis e fritas.", "R$ 180"),
      i("Parmegiana de Filé", "R$ 62", "Arroz branco e batatas fritas.", "R$ 180"),
      i("Parmegiana de Frango", "R$ 48", "Parmegiana de frango, arroz e fritas.", "R$ 140"),
      i("Parmegiana Gorgonzola", "R$ 70", "Filé mignon à milanesa com molho gorgonzola e mussarela, arroz e fritas.", "R$ 188"),
      i("Panelinha Caipira", "—", "Arroz, frango, bacon, milho, cenoura, ervilha e queijo. Com feijão em caldo e fritas.", "R$ 125"),
      i("Panelinha do Farol", "—", "Camarões no azeite com alho, tomates e pimenta caiena, arroz com molho branco e queijo. Com saladinha.", "R$ 190"),
      i("Veleiro Tradicional", "R$ 62", "Filé mignon acebolado, arroz, feijão, farofa, ovo frito e fritas.", "R$ 180"),
      i("Veleiro de Frango", "R$ 48", "Peito de frango grelhado, ovo frito, arroz, feijão, farofa e fritas.", "R$ 140"),
    ],
  },
  { title: "Kids", items: [i("Kids Pasta", "R$ 26", "Macarrãozinho ao sugo."), i("Kids Brasileirinho", "R$ 35", "Arroz, feijão, batatas fritas e 80g de filé picadinho.")] },
  {
    title: "Proteína 150g",
    items: [i("Filé Mignon", "R$ 45"), i("Filé de Frango", "R$ 30"), i("Camarões", "R$ 50"), i("Cambucu", "R$ 35"), i("Molho Belle Meunière", "R$ 40")],
  },
  {
    title: "Guarnição",
    note: "Arroz, feijão, mix de vegetais, saladinha, farofa de ovos, 4 ovos fritos, farofa com banana, arroz de brócolis, torradinhas, molho e queijo para proteínas",
    items: [i("Porção inteira (serve 2)", "R$ 17"), i("Meia porção (individual)", "R$ 9")],
  },
  { title: "Sobremesas", items: [i("Petit Gateau Tradicional", "R$ 26"), i("Pudim", "R$ 13"), i("Sobremesa do dia", "a partir de R$ 26")] },
  { title: "Extras", items: [i("Maionese da casa", "R$ 3"), i("Queijo ralado", "R$ 8")] },
];

const drinkBase = "Escolha a base: sem álcool R$ 21 · cachaça, rum, vodka nacional, sakê ou gin R$ 30 · Absolut ou tequila R$ 35";

export const bebidas: Section[] = [
  {
    title: "Para Velejar",
    items: [
      i("Água 500ml", "R$ 5"), i("Água com gás 500ml", "R$ 6"),
      i("Refrigerantes (lata)", "R$ 10", "Coca-Cola, Coca Zero, Fanta Zero, Guaraná, Guaraná Zero, Schweppes, Pepsi Black, Tônica."),
      i("H2O Limoneto (lata)", "R$ 10"), i("Energético 250ml", "R$ 15"),
      i("Refresco do Farol 300ml", "R$ 16", "Chá gelado de hibisco, syrup de rosa e gengibre, limão e gelo."),
      i("Soda Italiana 300ml", "R$ 17", "Maçã verde, cranberry, limão siciliano, morango, frutas vermelhas, tangerina, lichia ou gengibre."),
      i("Café coado", "R$ 7,50"),
    ],
  },
  {
    title: "Sucos 300ml",
    note: "Fruta fresca: laranja, limão · Polpas: abacaxi, maracujá, morango, graviola, cajá, caju",
    items: [i("Com água", "R$ 13"), i("2 sabores", "R$ 15")],
  },
  {
    title: "Quero meu drink com...",
    note: drinkBase,
    items: [
      i("Farol Alegre", undefined, "Morangos, syrup de gengibre, limão, picolé de limão e açúcar."),
      i("Farol Pôr do Sol", undefined, "Suco de laranja, granadine e groselha."),
      i("Farol Caribe", undefined, "Leite de coco, abacaxi e leite condensado."),
      i("Farol Africano", undefined, "Tônica, morango, limão, syrup de pimenta com canela, hortelã e pimenta. Sugerimos com rum."),
      i("Farol Asiático", undefined, "Água com gás, limão, syrup de lichia, groselha e açúcar. Melhor com sakê."),
      i("Farol Tropical", undefined, "Água com gás, limão, maracujá, syrup de gengibre e espuma de gengibre."),
      i("Farol Laranjeira", undefined, "Suco de laranja, água de laranjeira, licor de laranja e canela."),
      i("Farol Nordeste", undefined, "Suco de caju, limão, mel e cachaça aromatizada."),
      i("Farol Fundo do Mar", undefined, "Abacaxi, syrup curaçau e limão."),
      i("Farol Passion", undefined, "Maracujá, flor de laranjeira, syrup de gengibre e açúcar."),
    ],
  },
  {
    title: "Releitura de Sobremesas",
    items: [
      i("Brigadeiro", "R$ 35", "Licor de cacau, leite condensado, chocolate e granulado."),
      i("Bixo de Pé", "R$ 35", "Cachaça, leite condensado, creme de leite e morango."),
      i("Mousse de Limão", "R$ 35", "Vodka, leite condensado, limão e suspiro."),
      i("Tiramisu", "R$ 35", "Conhaque, leite condensado, creme de leite, café e cookies."),
      i("Prestígio", "R$ 35", "Licor de cacau, leite condensado e coco."),
    ],
  },
  {
    title: "Drinks Tradicionais",
    note: "Frutas: limão, morango, abacaxi, maracujá e uva",
    items: [
      i("Caipirinha", "R$ 26", "Fruta, cachaça, açúcar e gelo."),
      i("Caipivodka nacional", "R$ 26"), i("Caipivodka importada", "R$ 30"),
      i("Caipisakê", "R$ 30", "Fruta, sakê, açúcar e gelo."),
      i("Gin Tradicional", "R$ 30", "Tônica, gin, limão e gelo."),
      i("Gin Arpoador", "R$ 35", "Tônica, gin, morango, laranja e grãos de coentro."),
      i("Gin Praia do Farol", "R$ 35", "Tônica, gin, syrup de lichia, pimenta rosa e hibisco."),
    ],
  },
  {
    title: "Clássicos",
    items: [
      i("Mojito", "R$ 26", "Refrigerante de limão, limão, rum e hortelã."),
      i("Moscow Mule", "R$ 35", "Água com gás, limão, vodka, syrup e espuma de gengibre."),
      i("Alexander", "R$ 35", "Creme de leite, licor de cacau, conhaque, leite condensado, canela e noz moscada."),
      i("Aperol", "R$ 35", "Água com gás, Aperol, espumante e laranja."),
      i("Drinks da época", "R$ 35", "Consulte-nos."),
      i("Soda Mojito", undefined, "Água com gás, rum, limão e hortelã + syrup: maçã verde, cranberry, siciliano, morango, tangerina, lichia ou gengibre."),
    ],
  },
  {
    title: "Já Ancorado — Doses",
    items: [
      i("Cachaça aromatizada do Farol", "R$ 15"), i("Cachaça alambique", "R$ 13"), i("Vodka Absolut", "R$ 20"),
      i("Gin", "R$ 20"), i("Whisky Old Parr 12 anos", "R$ 30"), i("Chivas Regal 15 anos", "R$ 35"), i("Licor 43", "R$ 26"),
    ],
  },
  {
    title: "Cervejas",
    items: [
      i("Sol long neck", "R$ 14"), i("Corona Cero long neck", "R$ 14"), i("Stella Pure Gold long neck", "R$ 13"),
      i("Malzbier long neck", "R$ 13"), i("Cozumel long neck", "R$ 19"),
      i("Corona 600ml", "R$ 22"), i("Heineken 600ml", "R$ 22"), i("Stella Artois 600ml", "R$ 20"),
      i("Cerveja artesanal", "consulte"),
    ],
  },
  {
    title: "Extras",
    items: [i("Balde de gelo", "R$ 10"), i("Shot de limão", "R$ 3"), i("Copo com gelo / água da casa", "R$ 1"), i("Preparo Cozumel", "R$ 8")],
  },
];
