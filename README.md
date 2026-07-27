# Dev Culture — Premium Software Agency Website

A dark, futuristic multi-page marketing website for **Dev Culture**, a premium software development agency. Built with modern React tooling, smooth scroll animations, glassmorphism, and a bold red/orange/gold brand palette.

**Live tagline:** *Your Ideas, Our Code.*

---

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19 + file-based routing + server functions)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Primitives:** Radix UI + shadcn/ui patterns
- **Icons:** Lucide React
- **Build Tool:** Vite 8
- **Package Manager:** Bun (or npm)

---

## Features

- **Multi-page architecture:** Home, Services, Portfolio, About, Contact
- **Sticky navigation** with smooth scroll and active route highlighting
- **Premium dark theme** with deep black background, tech grid, and glowing orbs
- **Glassmorphism cards** with red/orange hover glow and lift effects
- **Scroll-triggered animations** via intersection observer (fade-in / slide-up)
- **3D-style glowing service icons** with layered radial glows
- **Gradient heading treatments** and fire-gradient CTAs
- **Lead-generation contact form** with validation
- **SEO-friendly route-level metadata**
- **Fully responsive** layout for desktop, tablet, and mobile

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero, stats bar, services teaser, testimonials teaser, CTA banner |
| `/services` | All 5 service offerings with expanded detail and feature lists |
| `/portfolio` | Modern bento-style project grid with case studies and tech tags |
| `/about` | Mission, "Why Choose Us" cards, and team gallery |
| `/contact` | Contact form, contact details, and direct booking CTAs |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (or [Bun](https://bun.sh/))
- A package manager: `npm`, `yarn`, `pnpm`, or `bun`

### Install dependencies

```bash
bun install
# or
npm install
```

### Run the development server

```bash
bun dev
# or
npm run dev
```

The site will be available at `http://localhost:8080`.

### Build for production

```bash
bun run build
# or
npm run build
```

### Preview the production build

```bash
bun run preview
# or
npm run preview
```

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start the Vite dev server |
| `build` | Build the production bundle |
| `build:dev` | Build in development mode |
| `preview` | Preview the production build locally |
| `lint` | Run ESLint across the project |
| `format` | Format the codebase with Prettier |

---

## Project Structure

```text
src/
├── components/site/      # Shared site components (Nav, Footer, Reveal, GlowIcon, etc.)
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and shared data (site-data.ts)
├── routes/               # TanStack file-based routes
│   ├── __root.tsx        # Root layout (Nav + Footer + background)
│   ├── index.tsx         # Homepage
│   ├── services.tsx
│   ├── portfolio.tsx
│   ├── about.tsx
│   └── contact.tsx
├── assets/               # Project images and team portraits
├── styles.css            # Global design tokens, theme, and utilities
├── router.tsx            # Router configuration
└── start.ts              # TanStack Start entry configuration
```

---

## Customization

### Brand colors

The design system is centralized in `src/styles.css`:

```css
--brand-red: #FF2D2D;
--brand-orange: #FF6B00;
--brand-gold: #FFB800;
```

### Site content

All shared content — services, projects, stats, testimonials, and navigation links — lives in `src/lib/site-data.ts`. Update text, icons, images, and links there without touching individual pages.

### Fonts

The site uses **Space Grotesk** for display headings and **Inter** for body text. Fonts are loaded via `<link>` tags in `src/routes/__root.tsx`.

---

## Deployment

This project is configured for deployment on Lovable. You can also deploy the `dist/` output to any static or edge host that supports Vite-built React apps.

---

## License

This project is proprietary to Dev Culture. All rights reserved.
