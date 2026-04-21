# Portfolio Manuel Barra — CLAUDE.md

## Proyecto
Portfolio 3D interactivo personal de Manuel Barra Lazo.

## Stack
- **Framework:** Next.js 15 (App Router, turbopack en dev)
- **Lenguaje:** TypeScript strict
- **Estilos:** Tailwind CSS v4 + CSS custom properties (sin config file)
- **3D:** React Three Fiber + @react-three/drei + @react-three/postprocessing
- **Animaciones:** GSAP + ScrollTrigger + Framer Motion
- **Estado:** Zustand + React hooks locales
- **Datos:** JSON estático en `src/data/resume.json` (source of truth)
- **Package manager:** pnpm

## Tema Visual "Phoenician"
```
--color-primary:   #FF6B35  (Naranja fuego)
--color-secondary: #004E89  (Azul profundo)
--color-accent:    #F7B32B  (Dorado)
--color-bg-dark:   #0A0E27  (Noche azul)
--color-bg-light:  #FAFAFA  (Casi blanco)
```

## Tipografía
- Headings: `Playfair Display` (serif, italic)
- Body: `Inter` (sans)
- Código: `JetBrains Mono`

## Layout
- Hero: grid asimétrico `63fr 37fr` (canvas 3D / info)
- Fibonacci spacing: `--spacing-*` en globals.css

## Componentes existentes
| Componente | Ruta |
|---|---|
| Scene (Canvas 3D) | `src/components/3d/Scene.tsx` |
| FireSphere (placeholder Phoenix) | `src/components/3d/FireSphere.tsx` |
| Phoenix (modelo GLB) | `src/components/3d/Phoenix.tsx` |
| Hero | `src/components/cv/Hero.tsx` |
| Experience | `src/components/cv/Experience.tsx` |
| Skills | `src/components/cv/Skills.tsx` |
| Button | `src/components/ui/Button.tsx` |
| Input | `src/components/ui/Input.tsx` |
| Admin Panel | `src/app/admin/page.tsx` |

## Datos del resume
- Archivo maestro: `src/data/resume.json`
- Hook: `src/hooks/useResume.ts` (carga JSON, persiste en localStorage como borrador)
- Tipos TypeScript: `src/types/resume.ts`
- Store Zustand: `src/stores/resumeStore.ts`

## Modelo Phoenix 3D
- Placeholder activo: `FireSphere` (esfera de fuego animada con GSAP + partículas)
- Modelo final: colocar en `public/models/phoenix.glb`
- Activar: importar `Phoenix` en `Scene.tsx` y reemplazar `FireSphere`

## Admin Panel
- URL: `/admin`
- Auth: `NEXT_PUBLIC_ADMIN_PASSWORD` en `.env.local`
- Guarda en localStorage. Para persistir en producción se necesita endpoint Git.

## Convenciones
- Estilos inline con CSS variables para componentes 3D (no mezclar Tailwind en canvas)
- Tailwind solo para componentes UI (`Button`, `Input`, admin)
- `gsap.context()` siempre con cleanup `ctx.revert()` en useEffect
- `'use client'` solo donde se use hooks/DOM/Three.js

## Modelo Phoenix — próximos pasos
1. Descargar de Sketchfab (buscar "phoenix bird" formato GLB, < 5MB)
2. Optimizar con https://gltf.report o `gltf-pipeline`
3. Copiar a `public/models/phoenix.glb`
4. En `Scene.tsx`, reemplazar `<FireSphere />` por `<Phoenix />`

## Documentación
Ver `/docs/` para la documentación de diseño y arquitectura original del proyecto.
