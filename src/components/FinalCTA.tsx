import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";
import { BRAND, ORDER_MESSAGE, whatsappUrl } from "../lib/brand";
import { fadeUp, stagger, viewport } from "../lib/motion";
import { WavyPattern } from "./Decor";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber via-orange to-terracotta py-20 md:py-28">
      <WavyPattern className="pointer-events-none absolute -top-16 -left-16 h-72 w-72 text-espresso/8" />
      <WavyPattern className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 text-espresso/8" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger}
        className="relative mx-auto max-w-3xl px-5 text-center text-espresso md:px-8"
      >
        <motion.h2
          variants={fadeUp}
          className="text-balance text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl"
        >
          Que tal um brownie hoje?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-4 max-w-xl text-lg text-espresso/80"
        >
          Encomende para você, para presentear ou para o seu evento. Estamos a
          uma mensagem de distância.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={whatsappUrl(ORDER_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full bg-espresso px-8 py-4 text-base font-bold text-cream-soft shadow-xl shadow-espresso/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-chocolate"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Encomendar pelo WhatsApp
          </a>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border-2 border-espresso/25 px-8 py-4 text-base font-bold text-espresso transition-all duration-300 hover:border-espresso hover:bg-espresso hover:text-cream-soft"
          >
            <InstagramIcon className="h-5 w-5" />
            Seguir no Instagram
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
