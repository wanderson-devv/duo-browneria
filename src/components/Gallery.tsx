import { motion } from "framer-motion";
import brownie from "../assets/brownie-recheado.jpg";
import vitrine from "../assets/vitrine-sabores.jpg";
import pilha from "../assets/pilha-sabores.jpg";
import { fadeUp, scaleIn, stagger, viewport } from "../lib/motion";
import { WaveDivider } from "./Decor";

const PHOTOS = [
  {
    src: pilha,
    alt: "Pilha de brownies Duo Browneria nos sabores Doce de Leite, Brigadeiro e Nutella",
  },
  {
    src: vitrine,
    alt: "Vitrine com brownies embrulhados nos sabores Brigadeiro, Ninho, Nutella e Doce de Leite",
  },
  {
    src: brownie,
    alt: "Brownies abertos mostrando o recheio cremoso",
  },
] as const;

export function Gallery() {
  return (
    <section id="galeria" className="bg-cream-soft pt-4 pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="mb-12 text-center md:mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 text-xs font-bold tracking-widest text-terracotta uppercase md:text-sm"
          >
            Galeria
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl leading-tight font-extrabold text-chocolate sm:text-4xl lg:text-5xl"
          >
            Textura, recheio e cor em cada detalhe
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5"
        >
          {PHOTOS.map((photo, i) => (
            <motion.figure
              key={photo.alt}
              variants={scaleIn}
              transition={{ delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-[1.5rem] bg-cream shadow-[0_2px_20px_rgba(90,48,24,0.08)] transition-shadow duration-400 hover:shadow-[0_8px_32px_rgba(90,48,24,0.14)] md:rounded-[2rem] ${
                i === 2 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                  i === 2 ? "aspect-[16/9] md:aspect-[3/4]" : "aspect-[3/4]"
                }`}
              />
            </motion.figure>
          ))}
        </motion.div>
      </div>
      <WaveDivider from="#FDF6E3" to="#F7E9C8" className="mt-16 md:mt-20" />
    </section>
  );
}
