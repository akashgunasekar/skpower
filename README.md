# SK Power Cook & Maxwell Induction

> Premium Commercial Induction Kitchen Equipment & Industrial Food Processing Machinery by Maxwell Group.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## 🌟 Overview

**SK Power Cook** (part of Maxwell Group) manufactures and supplies heavy-duty commercial induction equipment and industrial kitchen processing machines. Built for commercial hotels, cloud kitchens, catering banquet halls, hospital institutions, and high-volume food processing plants across India and global export markets.

---

## 📂 Repository File Structure

```text
skpower/
├── public/
│   ├── brands/                       # Brand logos & vector SVG/PNG assets
│   │   ├── maxwell-induction.svg
│   │   ├── maxwell-induction.png
│   │   ├── maxwell-induction-light.svg
│   │   ├── sk-powercook-logo.svg
│   │   ├── sk-powercook-logo.png
│   │   ├── vector-logo.svg
│   │   └── vector-official-logo.png
│   └── images/                       # High-resolution machinery & industry imagery
│       ├── maxwell-hero-induction.jpg
│       ├── sk_power_cook_machinery.jpg
│       ├── ind_catering_banquet.jpg
│       ├── ind_hotel_restaurant.jpg
│       ├── ind_industrial_central.jpg
│       ├── ind_institutions_hospitals.jpg
│       └── ind_qsr_foodcourts.jpg
├── src/
│   ├── app/                          # Next.js App Router (All Pages & Routes)
│   │   ├── about/                    # About Company & Maxwell Group
│   │   │   └── page.tsx
│   │   ├── applications/             # Industry application verticals
│   │   │   └── page.tsx
│   │   ├── contact/                  # Contact & quote inquiry page
│   │   │   ├── page.tsx
│   │   │   └── ContactClient.tsx
│   │   ├── products/                 # Product catalog & detailed equipment specs
│   │   │   ├── page.tsx
│   │   │   ├── colino-mixer-machine/
│   │   │   │   └── page.tsx
│   │   │   └── planetary-mixer-machine-gas/
│   │   │       └── page.tsx
│   │   ├── why-us/                   # Engineering & energy efficiency benchmarks
│   │   │   └── page.tsx
│   │   ├── globals.css               # Global theme & typography styles
│   │   ├── HomeClient.tsx            # Interactive landing page client components
│   │   ├── layout.tsx                # Global layout with SEO headers & metadata
│   │   ├── not-found.tsx             # 404 error page
│   │   ├── page.tsx                  # Home landing page
│   │   ├── robots.ts                 # Dynamic search engine robots.txt
│   │   └── sitemap.ts                # Automatic XML sitemap generation
│   ├── components/                   # Reusable UI Design System
│   │   ├── ApplicationCard.tsx       # Industry solution cards
│   │   ├── Breadcrumbs.tsx           # Breadcrumb navigation
│   │   ├── ClientShell.tsx           # Global shell & state wrapper
│   │   ├── ContactForm.tsx           # Interactive RFQ & quote form
│   │   ├── Footer.tsx                # Corporate footer with Maxwell Group links
│   │   ├── GroupBrands.tsx           # Ecosystem brand switcher
│   │   ├── Header.tsx                # Responsive navigation header
│   │   ├── Hero.tsx                  # High-impact home hero section
│   │   ├── HomeIntro.tsx             # Technology & induction benefits overview
│   │   ├── Process.tsx               # Turnkey engineering & installation steps
│   │   ├── ProductCard.tsx           # Machinery catalog card
│   │   ├── ProductDetailView.tsx     # Technical specifications viewer
│   │   ├── ProductGrid.tsx           # Responsive filtered product grid
│   │   ├── ProductHero.tsx           # Machinery showcase banner
│   │   ├── ProductSchematicVisual.tsx# Engineering schematics & CAD visuals
│   │   ├── ProductSpecification.tsx  # Dynamic technical specification tables
│   │   ├── QuoteCTA.tsx              # Conversion CTA banners
│   │   ├── QuoteModal.tsx            # Quick quotation popup modal
│   │   ├── SectionHeading.tsx        # Section headers
│   │   ├── WhatsAppButton.tsx        # Direct WhatsApp sales inquiry button
│   │   └── WhyUs.tsx                 # Core advantages & comparison matrix
│   ├── data/                         # Structured Business & Product Data
│   │   ├── applications.ts           # Industry verticals & case studies
│   │   ├── products.ts               # Equipment specs, dimensions & power ratings
│   │   └── site.ts                   # Company info, phones, email & addresses
│   └── lib/
│       └── seo.ts                    # Structured JSON-LD schema & meta helpers
├── .gitignore                        # Git exclusion rules
├── eslint.config.mjs                 # ESLint rules configuration
├── next.config.ts                    # Next.js configuration
├── package.json                      # NPM project manifest
├── package-lock.json                 # Dependency lockfile
├── postcss.config.mjs                # PostCSS configuration
└── tsconfig.json                     # TypeScript compiler configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+ or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/akashgunasekar/skpower.git

# Navigate to project directory
cd skpower

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the active port shown in console) to view the application.

---

## 🛠️ Build for Production

```bash
# Compile and build static assets
npm run build

# Start production server
npm run start
```

---

## 🛡️ License

Private © Maxwell Group / SK Power Cook. All rights reserved.
