import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";
import logo from "../assets/logo-duo.png";
import { BRAND, ORDER_MESSAGE, whatsappUrl } from "../lib/brand";

export function Footer() {
  return (
    <footer className="bg-espresso text-cream-soft">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="Duo Browneria"
              className="mx-auto h-12 w-auto md:mx-0"
            />
            <p className="mt-3 text-sm text-cream-soft/60">
              Brownies 100% artesanais — {BRAND.city}
            </p>
          </div>

          <nav
            className="flex flex-col items-center gap-3 text-sm md:items-start"
            aria-label="Rodapé"
          >
            <a
              href={whatsappUrl(ORDER_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream-soft/80 transition-colors hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp {BRAND.whatsappLabel}
            </a>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream-soft/80 transition-colors hover:text-gold"
            >
              <InstagramIcon className="h-4 w-4" />
              {BRAND.instagramHandle}
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-cream-soft/10 pt-6 text-center text-xs text-cream-soft/40">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
