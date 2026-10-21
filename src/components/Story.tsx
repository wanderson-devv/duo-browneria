import { motion } from "framer-motion";
import founders from "../assets/fundadores.jpg";
import { fadeUp, stagger, viewport } from "../lib/motion";

export function Story() {
  return (
    <section id="historia" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="relative"
          >
            <div
              className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-terracotta/25 via-amber/20 to-gold/30 blur-sm"
              aria-hidden="true"
            />
            <img
              src={founders}
              alt="Os fundadores da Duo Browneria ao lado do forno da produção"
              loading="lazy"
              width={1086}
              height={1448}
              className="relative aspect-[3/4] w-full rounded-[2rem] object-cover object-top shadow-2xl shadow-chocolate/20"
            />
            <div className="absolute -right-3 -bottom-4 rounded-2xl bg-terracotta px-5 py-3 text-cream-soft shadow-lg md:-right-6">
              <p className="text-xs font-bold tracking-wide uppercase">O Duo</p>
              <p className="text-sm font-medium opacity-90">
                Por trás de cada brownie
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="mb-3 text-xs font-bold tracking-widest text-terracotta uppercase md:text-sm"
            >
              Nossa história
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-balance text-3xl leading-tight font-extrabold text-chocolate sm:text-4xl lg:text-5xl"
            >
              De um sonho de casar a{" "}
              <span className="text-terracotta">~30 pontos</span> de revenda
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-7 text-lg leading-relaxed text-chocolate/75 [&_strong]:font-extrabold [&_strong]:text-chocolate"
            >
              Iniciamos a produção em{" "}
              <span className="font-extrabold text-terracotta">2022</span> com o
              propósito do <strong>nosso casamento</strong> — vendíamos os
              brownies na <strong>praia</strong> de Maceió. Vimos que poderia
              se tornar algo a mais e, depois de casarmos, começamos a fazer
              brownies para <strong>delivery</strong>, além das vendas na praia.
              Em <span className="font-extrabold text-terracotta">2023</span>{" "}
              começamos a planejar trabalhar com brownies para{" "}
              <strong>revenda</strong> e, em novembro, conquistamos nossos{" "}
              <strong>dois primeiros restaurantes parceiros</strong>. Hoje,
              temos aproximadamente{" "}
              <span className="font-extrabold text-terracotta">
                ~30 pontos de revenda
              </span>{" "}
              espalhados em <strong>Maceió</strong> e cidades circunvizinhas.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
