import { motion } from "framer-motion";
import { Heart, Store, Wheat, Truck } from "lucide-react";
import { fadeUp, stagger, viewport } from "../lib/motion";
import { WavyPattern } from "./Decor";

const ITEMS = [
  {
    icon: Heart,
    title: "100% artesanal",
    text: "Cada brownie é feito à mão, com receita própria e o cuidado de quem começou vendendo na praia.",
  },
  {
    icon: Store,
    title: "~30 pontos de revenda",
    text: "Presentes em Maceió e cidades circunvizinhas, com parceiros que confiam no nosso sabor.",
  },
  {
    icon: Wheat,
    title: "Recheio generoso",
    text: "Camadas cremosas de Brigadeiro, Ninho, Doce de Leite e Nutella em cada mordida.",
  },
  {
    icon: Truck,
    title: "Delivery e encomendas",
    text: "Atendimento próximo pelo WhatsApp para encomendas de delivery direto com a gente.",
  },
] as const;

export function Differentials() {
  return (
    <section className="relative overflow-hidden bg-chocolate py-20 text-cream-soft md:py-28">
      <WavyPattern className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 text-gold/10" />
      <WavyPattern className="pointer-events-none absolute -bottom-28 -left-20 h-96 w-96 text-terracotta/10" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="mb-12 text-center md:mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 text-xs font-bold tracking-widest text-gold uppercase md:text-sm"
          >
            Por que Duo Browneria
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl"
          >
            O diferencial está no carinho
          </motion.h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl bg-cream-soft/8 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-cream-soft/12"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber to-terracotta">
                <item.icon className="h-6 w-6 text-espresso" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-extrabold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-soft/75">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
