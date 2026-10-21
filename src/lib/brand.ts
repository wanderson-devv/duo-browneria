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
