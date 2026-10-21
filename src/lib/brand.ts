export const BRAND = {
  name: "Duo Browneria",
  tagline: "Brownies artesanais em Maceió",
  whatsapp: "5582991773869",
  whatsappLabel: "(82) 99177-3869",
  instagram: "https://instagram.com/duobrowneria",
  instagramHandle: "@duobrowneria",
  city: "Maceió — AL",
} as const;

export const whatsappUrl = (message: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;

export const ORDER_MESSAGE =
  "Olá! Vim pelo site da Duo Browneria e gostaria de fazer uma encomenda.";

export const FLAVORS = [
  {
    name: "Tradicional",
    description: "O brownie de chocolate puro que começou tudo: denso, intenso e irresistível.",
    accent: "#5C3018",
  },
  {
    name: "Brigadeiro",
    description: "Recheio cremoso de brigadeiro entre camadas de chocolate intenso.",
    accent: "#C8502E",
  },
  {
    name: "Ninho",
    description: "Chocolate ao leite com recheio generoso de creme de ninho.",
    accent: "#E5A23C",
  },
  {
    name: "Doce de Leite",
    description: "A clássica combinação de brownie com doce de leite irresistível.",
    accent: "#E07A3A",
  },
  {
    name: "Nutella",
    description: "Para os apaixonados por avelã: cremoso, intenso e inesquecível.",
    accent: "#8B5A2B",
  },
] as const;

export const TIMELINE = [
  {
    year: "2022",
    title: "Tudo começou na praia",
    text: "Com o propósito do nosso casamento, vendíamos os brownies na praia de Maceió.",
  },
  {
    year: "2022+",
    title: "Do altar para o delivery",
    text: "Depois de casarmos, começamos a fazer brownies para delivery — além das vendas na praia.",
  },
  {
    year: "2023",
    title: "O sonho da revenda",
    text: "Planejamos trabalhar com brownies para revenda. Em novembro, conquistamos nossos dois primeiros restaurantes parceiros.",
  },
  {
    year: "Hoje",
    title: "~30 pontos em Maceió",
    text: "Cerca de 30 pontos de revenda espalhados em Maceió e cidades circunvizinhas — e muito mais por vir.",
  },
] as const;
