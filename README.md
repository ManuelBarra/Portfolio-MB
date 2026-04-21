# Manuel Barra — Portfolio 3D

Portfolio personal con escena 3D interactiva. Tema visual **Phoenician**: fuego, oro y noche.

## Stack

- **Next.js 15** (App Router, Turbopack)
- **React Three Fiber** + Drei (Canvas 3D)
- **GSAP** + ScrollTrigger (animaciones)
- **Tailwind CSS v4** + CSS custom properties
- **TypeScript** strict
- **pnpm**

## Setup

```bash
# Prerrequisitos: Node.js 20+, pnpm

pnpm install
cp .env.example .env.local   # Edita la contraseña de admin

pnpm dev
# → http://localhost:3000
```

## Scripts

| Script | Descripción |
|---|---|
| `pnpm dev` | Dev server con Turbopack |
| `pnpm build` | Build de producción |
| `pnpm lint` | ESLint |
| `pnpm type-check` | TypeScript sin emitir |
| `pnpm format` | Prettier |

## Variables de entorno

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_ADMIN_PASSWORD` | Contraseña para `/admin` |

## Estructura

```
src/
├── app/
│   ├── layout.tsx          Metadata + fonts
│   ├── page.tsx            Página principal (Hero + Experience + Skills)
│   └── admin/page.tsx      Panel de administración
├── components/
│   ├── 3d/
│   │   ├── Scene.tsx       Canvas principal R3F
│   │   ├── FireSphere.tsx  Placeholder animado (mientras no hay modelo)
│   │   └── Phoenix.tsx     Componente GLB (activar cuando tengas el modelo)
│   ├── cv/
│   │   ├── Hero.tsx        Nombre, título, bio, links
│   │   ├── Experience.tsx  Timeline de experiencia
│   │   └── Skills.tsx      Grid de habilidades por categoría
│   └── ui/
│       ├── Button.tsx      Botón con variantes
│       └── Input.tsx       Input con label/error
├── data/resume.json        Source of truth de todos los datos
├── hooks/useResume.ts      Carga JSON + localStorage draft
├── stores/resumeStore.ts   Zustand store
├── types/resume.ts         Tipos TypeScript
├── styles/globals.css      Tokens CSS + reset
└── lib/utils.ts            cn(), formatters

docs/                       Documentación del proyecto
public/models/              Modelos 3D (.glb) — ver .gitignore
```

## Agregar el modelo Phoenix

1. Descarga un modelo de [Sketchfab](https://sketchfab.com) en formato `.glb` (< 5MB)
2. Optimiza con [gltf.report](https://gltf.report)
3. Guarda en `public/models/phoenix.glb`
4. En `src/components/3d/Scene.tsx`, reemplaza `<FireSphere />` por `<Phoenix />`

## Admin Panel

Accede en `/admin` con la contraseña de `.env.local`.
Los cambios se guardan en `localStorage` como borrador.

## Deploy

```bash
vercel            # Primera vez
vercel --prod     # Producción
```

Añade `NEXT_PUBLIC_ADMIN_PASSWORD` en las variables de entorno de Vercel.
