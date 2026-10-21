import { motion } from "framer-motion";
import founders from "../assets/fundadores.jpg";
import { TIMELINE } from "../lib/brand";
import { fadeUp, stagger, viewport } from "../lib/motion";

export function Story() {
  return (
    <section id="historia" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="mb-14 text-center md:mb-20"
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
            De um sonho de casal a{" "}
            <span className="text-terracotta">~30 pontos</span> de revenda
          </motion.h2>
        </motion.div>

        <div className="relative">
          <div
            className="absolute top-0 bottom-0 left-5 w-0.5 bg-gradient-to-b from-amber via-orange to-terracotta md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-12 md:space-y-20">
            {TIMELINE.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={step.year}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={fadeUp}
                  className="relative pl-14 md:grid md:grid-cols-2 md:items-center md:gap-16 md:pl-0"
                >
                  <span
                    className="absolute top-2 left-5 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2"
                    aria-hidden="true"
                  >
                    <span className="absolute h-4 w-4 rounded-full bg-terracotta/25" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-terracotta shadow-[0_0_0_4px_var(--color-cream)]" />
                  </span>

                  <div
                    className={`rounded-3xl bg-cream-soft p-7 shadow-[0_2px_20px_rgba(90,48,24,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(90,48,24,0.12)] md:p-9 ${
                      isLeft
                        ? "md:col-start-1 md:mr-2"
                        : "md:col-start-2 md:ml-2"
                    }`}
                  >
                    <span className="inline-flex items-center rounded-full bg-terracotta/10 px-4 py-1.5 text-xs font-extrabold tracking-widest text-terracotta uppercase">
                      {step.year}
                    </span>
                    <h3 className="mt-4 text-xl font-extrabold text-chocolate md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 leading-relaxed text-chocolate/70">
                      {step.text}
                    </p>
                  </div>

                  {i === TIMELINE.length - 1 && (
                    <div
                      className={`mt-8 md:mt-0 ${
                        isLeft
                          ? "md:col-start-2 md:row-start-1 md:ml-2"
                          : "md:col-start-1 md:row-start-1 md:mr-2"
                      }`}
                    >
                      <div className="overflow-hidden rounded-3xl shadow-[0_8px_32px_rgba(90,48,24,0.15)]">
                        <img
                          src={founders}
                          alt="Os fundadores da Duo Browneria ao lado do forno da produção"
                          loading="lazy"
                          width={1086}
                          height={1448}
                          className="aspect-[4/3] w-full object-cover object-top"
                        />
                      </div>
                    </div>
                  )}
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
