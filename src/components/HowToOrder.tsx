import { motion } from "framer-motion";
import { MessageCircle, Palette, Cake } from "lucide-react";
import { ORDER_MESSAGE, whatsappUrl } from "../lib/brand";
import { fadeUp, stagger, viewport } from "../lib/motion";

const STEPS = [
  {
    icon: MessageCircle,
    step: "1",
    title: "Chame no WhatsApp",
    text: "Envie uma mensagem contando o que você precisa — quantidade, sabores e data.",
  },
  {
    icon: Palette,
    step: "2",
    title: "Escolha os sabores",
    text: "Monte seu pedido com Brigadeiro, Ninho, Doce de Leite, Nutella — ou uma combinação de todos.",
  },
  {
    icon: Cake,
    step: "3",
    title: "Receba com carinho",
    text: "Produzimos artesanalmente e entregamos com todo o cuidado da Duo Browneria.",
  },
] as const;

export function HowToOrder() {
  return (
    <section id="encomendar" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="mb-12 text-center md:mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 text-xs font-bold tracking-widest text-terracotta uppercase md:text-sm"
          >
            Como encomendar
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl leading-tight font-extrabold text-chocolate sm:text-4xl lg:text-5xl"
          >
            Simples como enviar uma mensagem
          </motion.h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {STEPS.map((item, i) => (
            <motion.div
              key={item.step}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-3xl bg-cream-soft p-8 shadow-md shadow-chocolate/5"
            >
              <span
                className="absolute top-6 right-6 text-5xl font-extrabold text-amber/25"
                aria-hidden="true"
              >
                {item.step}
              </span>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-terracotta/10">
                <item.icon className="h-6 w-6 text-terracotta" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-extrabold text-chocolate">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-chocolate/70">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="mt-12 text-center"
        >
          <a
            href={whatsappUrl(ORDER_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-terracotta px-8 py-4 text-base font-bold text-cream-soft shadow-lg shadow-terracotta/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-chocolate hover:shadow-xl hover:shadow-chocolate/25"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Chamar no WhatsApp
          </a>
          <p className="mt-3 text-sm text-chocolate/60">
            Atendimento pelo WhatsApp — {"(82) 99177-3869"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
