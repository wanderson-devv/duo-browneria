import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "../assets/logo-duo.png";
import { ORDER_MESSAGE, whatsappUrl } from "../lib/brand";

const NAV = [
  { href: "#sabores", label: "Sabores" },
  { href: "#historia", label: "História" },
  { href: "#galeria", label: "Galeria" },
  { href: "#encomendar", label: "Encomendar" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-soft/90 shadow-[0_2px_24px_rgba(90,48,24,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <a
          href="#topo"
          className="flex items-center transition-transform duration-300 hover:scale-[1.03]"
          aria-label="Duo Browneria — início"
        >
          <img
            src={logo}
            alt="Duo Browneria"
            width={1080}
            height={529}
            className="h-10 w-auto md:h-14"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-chocolate transition-colors hover:text-terracotta after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-terracotta after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl(ORDER_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-sm font-bold text-cream-soft transition-all duration-300 hover:bg-chocolate hover:shadow-lg hover:shadow-terracotta/25"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Encomendar
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-chocolate transition-colors hover:bg-cream md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-x-0 top-full border-t border-amber/20 bg-cream-soft/97 backdrop-blur-md md:hidden"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col gap-1 px-5 py-6">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-lg font-medium text-chocolate transition-colors active:bg-cream"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappUrl(ORDER_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-terracotta px-5 py-3.5 font-bold text-cream-soft"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Encomendar pelo WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
