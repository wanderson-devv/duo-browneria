# Duo Browneria — Landing Page

Landing page premium da Duo Browneria, marca de brownies artesanais de Maceió.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build e verificação

```bash
npm run build    # tsc + vite build
npm run preview  # serve o build em http://localhost:4173
```

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- lucide-react
- Tipografia oficial: Averta (Regular e ExtraBold)

## Estrutura

- `src/components/` — seções da página (Header, Hero, Flavors, Story, Differentials, Gallery, HowToOrder, FinalCTA, Footer)
- `src/lib/brand.ts` — dados da marca (WhatsApp, Instagram, sabores, timeline)
- `src/assets/` — fotos reais e logo
- `public/fonts/` — arquivos Averta
