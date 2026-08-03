# AI Context — Bhavya Pant Portfolio

## 1. Tech Stack & Key Constraints
- **Core Framework**: React 18 + TypeScript + Vite 6
- **Styling**: Tailwind CSS v3.4 + Vanilla CSS Utilities (`src/styles/globals.css`)
- **Icons & Motion**: Lucide React (`lucide-react`) + Framer Motion (`framer-motion`)
- **Build Tooling**: `tsc && vite build` (Strict TS checking enabled)
- **Constraints**:
  - Do NOT modify business logic, routing, or state handlers unless requested.
  - Maintain fluid responsive design across all breakpoints (320px, 480px, 768px, 1024px, 1440px+).
  - Prefer responsive Tailwind utilities over fixed pixel dimensions.
  - Verify changes via `npm run build` after structural edits.

---

## 2. Folder Structure & Key File Responsibilities
```
portfolio/
├── public/                 # Static assets & public files
├── sequence/               # Canvas frame sequence images (for Hero scroll scrubbing)
├── src/
│   ├── components/         # Modular UI Components
│   │   ├── ContactModal.tsx       # Email copy & contact form modal
│   │   ├── ResumeModal.tsx        # Engineering resume summary & TXT download
│   │   ├── Footer/                # Site footer, IST live clock, navigation links
│   │   ├── HeroCanvas/            # Frame sequence canvas renderer & background lighting
│   │   ├── HeroOverlay/           # Hero title, 5-stage scroll story overlays & CTAs
│   │   ├── Navbar/                # Fixed glass navbar & mobile drawer navigation
│   │   ├── Projects/              # Interactive case study grid & modal details
│   │   │   ├── Diagrams/          # SVG architecture flow diagrams (Amcom, Solar)
│   │   │   └── CaseStudyModal.tsx # Full case study modal with architecture/highlights/tech tabs
│   ├── hooks/                     # Custom React hooks
│   │   ├── useFrameSequence.ts    # Preloads canvas animation image frames
│   │   └── useScrollProgress.ts   # Scroll progress scrub calculator (0.0 to 1.0)
│   ├── styles/
│   │   └── globals.css            # Base Tailwind imports, custom scrollbar & glass styles
│   ├── App.tsx                    # Root application component orchestrating sections & modals
│   └── main.tsx                   # React root entry point
├── index.html              # HTML entry point (fonts, dark mode class)
├── tailwind.config.js      # Custom colors, fonts, keyframe animations
└── vite.config.ts          # Vite build configuration
```

---

## 3. Feature Map

| Feature / Section | Primary Component / File | Description |
|---|---|---|
| Floating Navigation | [`src/components/Navbar/Navbar.tsx`](file:///c:/Users/hp/Downloads/portfolio/src/components/Navbar/Navbar.tsx) | Fixed header, brand logo, section scroll links, mobile drawer. |
| Hero Scrubbing Canvas | [`src/components/HeroCanvas/HeroCanvas.tsx`](file:///c:/Users/hp/Downloads/portfolio/src/components/HeroCanvas/HeroCanvas.tsx) | 2D canvas interpolation driven by frame sequence hooks & volumetric lights. |
| Hero Evolving Overlay | [`src/components/HeroOverlay/HeroOverlay.tsx`](file:///c:/Users/hp/Downloads/portfolio/src/components/HeroOverlay/HeroOverlay.tsx) | 5 scroll stages (0-20%, 20-40%, 40-60%, 60-80%, 80-100%) with animated CTAs. |
| Career Story Journey | [`src/components/ScrollStory/ScrollStory.tsx`](file:///c:/Users/hp/Downloads/portfolio/src/components/ScrollStory/ScrollStory.tsx) | Scrollytelling cards detailing Java, Kafka, AI, and DevOps domains. |
| Systems & Case Studies | [`src/components/Projects/ProjectsSection.tsx`](file:///c:/Users/hp/Downloads/portfolio/src/components/Projects/ProjectsSection.tsx) | Case study cards triggering interactive modal & SVG system diagrams. |
| Architecture Diagrams | [`src/components/Projects/Diagrams/`](file:///c:/Users/hp/Downloads/portfolio/src/components/Projects/Diagrams/) | Live animated flow diagrams (`AmcomDiagram.tsx`, `SolarDiagram.tsx`). |
| Experience Timeline | [`src/components/Timeline/Timeline.tsx`](file:///c:/Users/hp/Downloads/portfolio/src/components/Timeline/Timeline.tsx) | Work experience cards with metrics badges and tech pills. |
| Tech Stack Grid | [`src/components/Skills/SkillsVisualization.tsx`](file:///c:/Users/hp/Downloads/portfolio/src/components/Skills/SkillsVisualization.tsx) | Filterable grid (Backend, Messaging, AI, Cloud, DevOps, Frontend). |
| Contact Dialog | [`src/components/ContactModal.tsx`](file:///c:/Users/hp/Downloads/portfolio/src/components/ContactModal.tsx) | Direct email quick-copy & form submission modal. |
| Resume Dialog | [`src/components/ResumeModal.tsx`](file:///c:/Users/hp/Downloads/portfolio/src/components/ResumeModal.tsx) | Quick metrics summary & dynamic resume text downloader. |

---

## 4. Debugging Patterns & Known Quirks
- **Build Verification**: Always run `npm run build` to ensure zero TypeScript errors (`tsc`) and clean bundling.
- **Hero Canvas Scroll Height**: `App.tsx` sets `h-[550vh]` for the hero section to enable smooth Apple-style scroll scrubbing. Do not shorten without adjusting stage threshold math in `HeroOverlay.tsx`.
- **Responsive SVG Diagrams**: SVG flow lines (e.g. `AmcomDiagram.tsx`) use desktop horizontal coordinates and are hidden on mobile viewports (`hidden md:block`) where diagram nodes stack vertically (`grid-cols-1`).
- **Modal Horizontal Overflow**: Modal navigation tabs (`CaseStudyModal.tsx`) and skills filter tabs (`SkillsVisualization.tsx`) use `overflow-x-auto whitespace-nowrap` to prevent modal clipping on narrow screens (320px–480px).
- **Glassmorphic Utilities**: Custom glass styling (`glass-card`, `glass-panel`, `text-gradient`) is defined in `src/styles/globals.css`. Prefer standard Tailwind classes or existing glass utilities.
