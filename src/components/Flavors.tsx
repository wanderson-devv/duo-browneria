import { motion } from "framer-motion";
import pilha from "../assets/pilha-sabores.jpg";
import { FLAVORS } from "../lib/brand";
import { fadeUp, stagger, viewport } from "../lib/motion";
import { WaveDivider } from "./Decor";

export function Flavors() {
  return (
    <section id="sabores" className="bg-cream-soft py-20 md:py-28">
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
            Nossos sabores
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl leading-tight font-extrabold text-chocolate sm:text-4xl lg:text-5xl"
          >
            Cada mordida, uma paixão
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-lg text-chocolate/70"
          >
            Brownies 100% artesanais, recheados com generosidade e embalados
            com o carinho de quem faz desde o primeiro dia.
          </motion.p>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="relative"
          >
            <div
              className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-gold/40 via-amber/25 to-terracotta/20 blur-sm"
              aria-hidden="true"
            />
            <img
              src={pilha}
              alt="Brownies Duo Browneria dos sabores Doce de Leite, Brigadeiro e Nutella empilhados"
              loading="lazy"
              width={1200}
              height={1600}
              className="relative aspect-[3/4] w-full rounded-[2rem] object-cover shadow-2xl shadow-chocolate/20"
            />
          </motion.div>

          <ul className="flex flex-col gap-3 lg:gap-3">
            {FLAVORS.map((flavor, i) => (
              <motion.li
                key={flavor.name}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeUp}
                transition={{ delay: i * 0.07 }}
                className="group flex flex-1 items-center gap-5 rounded-2xl bg-white px-5 py-4 shadow-[0_2px_16px_rgba(90,48,24,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(90,48,24,0.12)] md:px-6 md:py-5"
              >
                <span
                  className="h-9 w-1.5 shrink-0 rounded-full transition-all duration-300 group-hover:h-11"
                  style={{ backgroundColor: flavor.accent }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-base font-extrabold text-chocolate md:text-lg">
                    {flavor.name}
                  </h3>
                  <p className="mt-0.5 text-sm leading-snug text-chocolate/70">
                    {flavor.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <WaveDivider from="#FDF6E3" to="#F7E9C8" className="mt-20 md:mt-28" />
    </section>
  );
}
