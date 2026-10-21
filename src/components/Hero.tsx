import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";
import heroImg from "../assets/brownie-recheado.jpg";
import logo from "../assets/logo-duo.png";
import { ORDER_MESSAGE, whatsappUrl } from "../lib/brand";
import { WavyPattern } from "./Decor";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.14, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-cream pb-16 pt-28 md:pb-24 md:pt-36"
    >
      <WavyPattern className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 text-amber/15 md:h-96 md:w-96" />
      <WavyPattern className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 text-terracotta/10 md:h-80 md:w-80" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <motion.div
          initial={reduce ? false : "hidden"}
          animate="visible"
          variants={container}
        >
          <motion.p
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-terracotta/10 px-4 py-1.5 text-xs font-bold tracking-widest text-terracotta uppercase md:text-sm"
          >
            100% Artesanal
          </motion.p>

          <motion.h1 variants={item}>
            <span className="sr-only">
              Duo Browneria — brownies artesanais em Maceió
            </span>
            <img
              src={logo}
              alt=""
              width={1080}
              height={529}
              aria-hidden="true"
              className="h-24 w-auto md:h-32"
            />
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-xl leading-relaxed text-chocolate/75"
          >
            Brownies artesanais com{" "}
            <strong className="font-bold text-chocolate">recheio generoso</strong>,
            feitos à mão em Maceió. Brigadeiro, Ninho, Doce de Leite e Nutella —
            para você, para presentear ou para dividir.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl(ORDER_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 rounded-full bg-terracotta px-7 py-4 text-lg font-bold text-cream-soft shadow-lg shadow-terracotta/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-chocolate hover:shadow-xl hover:shadow-chocolate/25"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Fazer uma encomenda
            </a>
            <a
              href="#sabores"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-chocolate/20 px-7 py-4 text-lg font-bold text-chocolate transition-all duration-300 hover:border-chocolate hover:bg-chocolate hover:text-cream-soft"
            >
              Conhecer os sabores
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-md md:max-w-none"
        >
          <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-gold/40 via-amber/25 to-terracotta/20 blur-sm" aria-hidden="true" />
          <img
            src={heroImg}
            alt="Brownies artesanais Duo Browneria recheados, vistos de perto"
            width={1200}
            height={1600}
            fetchPriority="high"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-center shadow-2xl shadow-chocolate/20 md:aspect-[3/4]"
          />
          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-cream-soft px-5 py-3 shadow-lg shadow-chocolate/10 md:-left-8">
            <p className="text-xs font-bold tracking-wide text-terracotta uppercase">
              Desde 2022
            </p>
            <p className="text-sm font-medium text-chocolate/70">
              Feito com amor em Maceió
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
