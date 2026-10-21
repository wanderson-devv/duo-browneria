import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Flavors } from "./components/Flavors";
import { Story } from "./components/Story";
import { Differentials } from "./components/Differentials";
import { Gallery } from "./components/Gallery";
import { HowToOrder } from "./components/HowToOrder";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#topo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-chocolate focus:px-5 focus:py-2.5 focus:font-bold focus:text-cream-soft"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <Flavors />
        <Story />
        <Differentials />
        <Gallery />
        <HowToOrder />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
