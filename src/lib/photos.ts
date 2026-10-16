import salao from "@/assets/salao.jpg.asset.json";
import varanda from "@/assets/varanda.jpg.asset.json";
import deck from "@/assets/deck.jpg.asset.json";
import fachada from "@/assets/fachada.jpg.asset.json";
import farol from "@/assets/farol.jpg.asset.json";
import noite from "@/assets/noite.jpg.asset.json";
import veleiro from "@/assets/veleiro.jpg.asset.json";
import pier from "@/assets/farol-pier-noite.jpg.asset.json";
import peixeLaranja from "@/assets/peixe-molho-laranja.jpg.asset.json";
import peixeVerde from "@/assets/peixe-molho-verde.jpg.asset.json";
import camarao from "@/assets/camarao-com-pao.jpg.asset.json";
import moqueca from "@/assets/moqueca.jpg.asset.json";
import lasanha from "@/assets/lasanha.jpg.asset.json";
import boloCasamento from "@/assets/bolo-casamento.jpg.asset.json";
import bolo15 from "@/assets/bolo-15-anos.jpg.asset.json";
import bolo40 from "@/assets/bolo-40-anos.jpg.asset.json";
import bolo50 from "@/assets/bolo-50-anos.jpg.asset.json";
import doces from "@/assets/mesa-doces.jpg.asset.json";
import baloes from "@/assets/decoracao-balloons.jpg.asset.json";
import logo from "@/assets/logo-farol.png.asset.json";

export const LOGO = logo.url;

export const P = {
  salao: salao.url, varanda: varanda.url, deck: deck.url, fachada: fachada.url,
  farol: farol.url, noite: noite.url, veleiro: veleiro.url, pier: pier.url,
  peixeLaranja: peixeLaranja.url, peixeVerde: peixeVerde.url, camarao: camarao.url,
  moqueca: moqueca.url, lasanha: lasanha.url, boloCasamento: boloCasamento.url,
  bolo15: bolo15.url, bolo40: bolo40.url, bolo50: bolo50.url, doces: doces.url, baloes: baloes.url,
};

export const espaco = [
  { src: P.salao, t: "O salão", alt: "Salão com telhado de madeira e vista para o Lago Paranoá" },
  { src: P.varanda, t: "A varanda", alt: "Varanda com sofás e decoração náutica" },
  { src: P.deck, t: "O deck", alt: "Deck com espreguiçadeiras de frente para o lago" },
  { src: P.fachada, t: "A chegada", alt: "Fachada com o farol e a árvore" },
  { src: P.farol, t: "O jardim", alt: "Farol listrado no jardim à beira do lago" },
  { src: P.veleiro, t: "A paisagem", alt: "Veleiro ancorado na marina" },
  { src: P.pier, t: "O Farol à noite", alt: "Farol e píer iluminados à noite" },
];

export const galeria = [
  { src: P.peixeLaranja, alt: "Peixe ao molho com camarão crocante e arroz" },
  { src: P.salao, alt: "Salão com vista para o lago" },
  { src: P.camarao, alt: "Camarões salteados com tomates e pão tostado" },
  { src: P.noite, alt: "Restaurante iluminado à noite visto do lago" },
  { src: P.peixeVerde, alt: "Peixe ao molho verde com arroz e fritas" },
  { src: P.deck, alt: "Deck de frente para o Lago Paranoá" },
  { src: P.moqueca, alt: "Camarões com arroz, farofa e batatas" },
  { src: P.varanda, alt: "Varanda com decoração náutica" },
  { src: P.lasanha, alt: "Prato gratinado com batatas fritas" },
  { src: P.farol, alt: "Farol listrado no jardim" },
  { src: P.boloCasamento, alt: "Bolo de casamento com flores" },
  { src: P.doces, alt: "Mesa de doces com arranjos tropicais" },
  { src: P.bolo15, alt: "Bolo de 15 anos com flores azuis" },
  { src: P.baloes, alt: "Decoração de festa à noite" },
  { src: P.bolo50, alt: "Bolo dourado de aniversário" },
  { src: P.bolo40, alt: "Mesa de doces com letreiro de neon" },
  { src: P.veleiro, alt: "Veleiro na marina" },
  { src: P.pier, alt: "Farol e píer iluminados à noite" },
];
