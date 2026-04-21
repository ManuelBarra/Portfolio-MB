# 🚀 QUICK START v2.0: ARQUITECTURA SIMPLIFICADA
## Git + Vercel + CMS Propietario

---

## ⚡ SETUP INICIAL (2 HORAS)

### Paso 1: Crear Proyecto Next.js

```bash
# Opción recomendada (con 3D preconfigurado)
npx create-r3f-app next portfolio-3d -ts

cd portfolio-3d

# Instalar dependencias (todo lo que necesitas)
pnpm install three @react-three/fiber @react-three/drei
pnpm install framer-motion gsap clsx
pnpm install zustand

# Dev server
pnpm dev
# Abierto en http://localhost:3000
```

### Paso 2: Estructura de Carpetas

```bash
mkdir -p src/{components,data,hooks,styles,lib}
mkdir -p src/components/{3d,admin,cv,ui}
mkdir -p public/{models,assets}

# Crear archivos iniciales
touch src/data/resume.json
touch src/data/theme.json
touch src/hooks/useResume.ts
```

### Paso 3: Archivo Maestro JSON

**`src/data/resume.json`:**
```json
{
  "metadata": {
    "version": "1.0",
    "lastUpdated": "2025-04-21",
    "author": "Manuel Barra Lazo"
  },
  "personal": {
    "firstName": "Manuel",
    "lastName": "Barra Lazo",
    "title": "Frontend Developer | IA Leadership",
    "location": "Barcelona, Cataluña, España",
    "email": "manuelbarralazo@gmail.com",
    "phone": "+34 669425094",
    "bio": "JavaScript developer con 5+ años creando experiencias web interactivas. Especializado en Frontend moderno y liderazgo técnico.",
    "links": {
      "github": "github.com/ManuelBarra",
      "linkedin": "linkedin.com/in/manuelbarra"
    }
  },
  "experience": [
    {
      "id": "genomcore",
      "company": "Genomcore",
      "position": "Frontend Developer | Lead IA",
      "startDate": "2025-01",
      "endDate": null,
      "current": true,
      "location": "Barcelona",
      "description": "Web del equipo Marketing + Piloto IA",
      "technologies": ["React", "JavaScript", "IA"]
    }
  ],
  "skills": [
    {
      "id": "js",
      "name": "JavaScript",
      "category": "Lenguaje",
      "level": 5,
      "icon": "⚡"
    }
  ],
  "projects": [],
  "education": [],
  "theme": {
    "primary": "#FF6B35",
    "secondary": "#004E89",
    "accent": "#F7B32B"
  }
}
```

### Paso 4: Hook para Cargar Datos

**`src/hooks/useResume.ts`:**
```typescript
import { useEffect, useState } from 'react'

interface Resume {
  personal: any
  experience: any[]
  skills: any[]
  [key: string]: any
}

export function useResume() {
  const [resume, setResume] = useState<Resume | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // En desarrollo: cargar del JSON local
    fetch('/data/resume.json')
      .then(res => res.json())
      .then(data => {
        setResume(data)
        setLoading(false)
      })
  }, [])

  const updateResume = (updates: Partial<Resume>) => {
    const updated = { ...resume, ...updates }
    setResume(updated)
    localStorage.setItem('resume_draft', JSON.stringify(updated))
  }

  return { resume, updateResume, loading }
}
```

### Paso 5: Página Principal

**`src/app/page.tsx`:**
```typescript
'use client'

import { useResume } from '@/hooks/useResume'
import { Scene } from '@/components/3d/Scene'
import { Hero } from '@/components/cv/Hero'
import { Experience } from '@/components/cv/Experience'

export default function Home() {
  const { resume, loading } = useResume()

  if (loading) return <div>Cargando...</div>

  return (
    <main className="bg-white text-gray-900">
      {/* Hero + Canvas 3D */}
      <section className="min-h-screen flex">
        <div className="w-[63%]">
          <Scene />
        </div>
        <div className="w-[37%] flex items-center p-12">
          <Hero resume={resume} />
        </div>
      </section>

      {/* Experiencia */}
      <section className="bg-gray-900 text-white py-20">
        <Experience resume={resume} />
      </section>

      {/* Más secciones... */}
    </main>
  )
}
```

### Paso 6: Componente 3D Base

**`src/components/3d/Scene.tsx`:**
```typescript
'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

export function Scene() {
  return (
    <Canvas className="w-full h-screen">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls autoRotate autoRotateSpeed={4} />
      
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#FF6B35" />
      
      {/* Phoenix Model va aquí (después) */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#FF6B35" />
      </mesh>
    </Canvas>
  )
}
```

### Paso 7: Verificar Setup

```bash
# Ctrl+C en terminal anterior
pnpm dev

# Debería verse:
# http://localhost:3000
# - Canvas naranja en izquierda
# - "Manuel Barra" en derecha
# - Responsive y funcional
```

---

## 🎨 AGREGAR DISEÑO ÚNICO (3 HORAS)

### Paso 8: Tema Global

**`src/styles/theme.css`:**
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  /* Phoenician Colors */
  --primary: #FF6B35;      /* Fire Orange */
  --secondary: #004E89;    /* Deep Blue */
  --accent: #F7B32B;       /* Gold */
  --bg-light: #FAFAFA;     /* Almost White */
  --bg-dark: #0A0E27;      /* Deep Blue-Black */
  --text-primary: #0A0E27; /* Dark Blue */
  --text-light: #F5F5F5;   /* Almost White */
  
  /* Typography */
  --font-serif: 'Playfair Display', serif;
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Spacing (Fibonacci) */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2.5rem;
  --space-2xl: 4rem;
  --space-3xl: 6.5rem;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  color: var(--text-primary);
  background: var(--bg-light);
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-serif);
  font-weight: 700;
  letter-spacing: -1px;
}

h1 {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-style: italic;
}

h2 {
  font-size: clamp(2rem, 6vw, 3.5rem);
}

/* Código */
code {
  font-family: var(--font-mono);
  background: rgba(255, 107, 53, 0.1);
  padding: 0.25em 0.5em;
  border-radius: 4px;
}

/* Links */
a {
  color: var(--primary);
  text-decoration: none;
  position: relative;
}

a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}
```

**`src/app/globals.css`:**
```css
@import './styles/theme.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Asymmetric Spacing */
.hero {
  padding-left: 5vw;
  padding-right: 8vw;
  padding-top: 120px;
}

.experience-item {
  margin-left: 0;
  margin-right: 20px;
  border-left: 4px solid var(--primary);
  padding-left: var(--space-lg);
}

/* Smooth scrolling */
@media (prefers-reduced-motion: no-preference) {
  * {
    scroll-behavior: smooth;
  }
}
```

### Paso 9: Componentes Visuales

**`src/components/cv/Hero.tsx`:**
```typescript
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function Hero({ resume }: any) {
  const containerRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Animación de entrada
    gsap.timeline()
      .fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
  }, [])

  return (
    <div ref={containerRef} className="space-y-6">
      <div>
        <h1 ref={nameRef} className="text-5xl font-bold mb-2">
          {resume?.personal?.firstName} {resume?.personal?.lastName}
        </h1>
        <p className="text-2xl text-gray-600">
          {resume?.personal?.title}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          📍 {resume?.personal?.location}
        </p>
      </div>

      <p className="text-lg leading-relaxed text-gray-700">
        {resume?.personal?.bio}
      </p>

      <div className="flex gap-4">
        {resume?.personal?.links?.github && (
          <a
            href={`https://${resume.personal.links.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
          >
            GitHub
          </a>
        )}
        {resume?.personal?.links?.linkedin && (
          <a
            href={`https://${resume.personal.links.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition"
          >
            LinkedIn
          </a>
        )}
      </div>

      <p className="text-sm text-gray-500 pt-6">
        ↓ Scroll para más
      </p>
    </div>
  )
}
```

### Paso 10: Commit a Git

```bash
git init
git add .
git commit -m "feat: initial setup with phoenix theme design"
git remote add origin https://github.com/ManuelBarra/portfolio-3d.git
git push -u origin main
```

---

## 🖼️ OBTENER MODELO PHOENIX 3D (1 HORA)

### Opción 1: Comprar/Descargar

```bash
# Fuentes:
# - Sketchfab.com (filtrar Phoenix, descargar .glb)
# - TurboSquid (más calidad)
# - CGTrader

# Guardar como:
public/models/phoenix.glb

# Tamaño recomendado: < 5MB
```

### Opción 2: Generar con IA

```
Ir a: https://spline.design
"Generate 3D model"
"Phoenix bird landing, wings spread, detailed, ready to export"
Descargar como .glb
Guardar en public/models/phoenix.glb
```

### Paso 11: Cargar Modelo

**`src/components/3d/Phoenix.tsx`:**
```typescript
'use client'

import { useGLTF } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Phoenix() {
  const { scene } = useGLTF('/models/phoenix.glb')
  const groupRef = useRef<THREE.Group>(null)

  useEffect(() => {
    if (groupRef.current) {
      // Scale del modelo
      groupRef.current.scale.set(1.5, 1.5, 1.5)
    }
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      // Rotación suave
      groupRef.current.rotation.y += 0.003
      // Movimiento vertical sutil
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return <primitive ref={groupRef} object={scene} />
}
```

Actualizar Scene:

```typescript
import { Phoenix } from './Phoenix'

export function Scene() {
  return (
    <Canvas>
      {/* ... */}
      <Phoenix />
    </Canvas>
  )
}
```

---

## 📝 CMS PROPIETARIO BÁSICO (2 HORAS)

### Paso 12: Admin Panel Simple

**`src/app/admin/page.tsx`:**
```typescript
'use client'

import { useResume } from '@/hooks/useResume'
import { useEffect, useState } from 'react'

export default function AdminPage() {
  const { resume, updateResume } = useResume()
  const [formData, setFormData] = useState<any>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Verificar autenticación simple
  useEffect(() => {
    const password = prompt('Contraseña admin:')
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setFormData(resume)
    } else {
      alert('Contraseña incorrecta')
    }
  }, [resume])

  if (!isAuthenticated) return <div>No autorizado</div>

  const handleSaveProfile = () => {
    updateResume({
      personal: formData.personal
    })
    // Guardar a localStorage
    localStorage.setItem('resume_draft', JSON.stringify(formData))
    alert('Perfil guardado')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl mb-8">Admin Panel</h1>

      <div className="grid grid-cols-2 gap-8">
        {/* Editor */}
        <div className="space-y-4">
          <h2 className="text-2xl mb-4">Editar Perfil</h2>
          
          <input
            type="text"
            placeholder="Nombre"
            value={formData?.personal?.firstName || ''}
            onChange={(e) =>
              setFormData({
                ...formData,
                personal: {
                  ...formData.personal,
                  firstName: e.target.value
                }
              })
            }
            className="w-full p-2 bg-gray-800 border border-orange-500 rounded"
          />

          <input
            type="text"
            placeholder="Título"
            value={formData?.personal?.title || ''}
            onChange={(e) =>
              setFormData({
                ...formData,
                personal: {
                  ...formData.personal,
                  title: e.target.value
                }
              })
            }
            className="w-full p-2 bg-gray-800 border border-orange-500 rounded"
          />

          <textarea
            placeholder="Bio"
            value={formData?.personal?.bio || ''}
            onChange={(e) =>
              setFormData({
                ...formData,
                personal: {
                  ...formData.personal,
                  bio: e.target.value
                }
              })
            }
            className="w-full p-2 bg-gray-800 border border-orange-500 rounded h-32"
          />

          <button
            onClick={handleSaveProfile}
            className="w-full px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Guardar Cambios
          </button>
        </div>

        {/* Preview */}
        <div className="border-2 border-orange-500 p-8 rounded">
          <h3 className="text-xl mb-4">Preview</h3>
          <h2 className="text-3xl font-bold">
            {formData?.personal?.firstName} {formData?.personal?.lastName}
          </h2>
          <p className="text-orange-500">{formData?.personal?.title}</p>
          <p className="mt-4">{formData?.personal?.bio}</p>
        </div>
      </div>
    </div>
  )
}
```

**`.env.local`:**
```
NEXT_PUBLIC_ADMIN_PASSWORD=tu_contraseña_aqui
```

---

## 🚀 DEPLOY A VERCEL (30 MIN)

### Paso 13: Preparar para Deploy

```bash
# Asegurar que todo está en Git
git add .
git commit -m "feat: add admin panel and phoenician design"
git push origin main
```

### Paso 14: Deploy a Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Seleccionar:
# - Project name: portfolio-3d
# - Framework: Next.js
# - Output: .next
# - Install deps: Yes
```

O directamente en vercel.com:

```
1. Ir a https://vercel.com
2. Conectar GitHub
3. Importar repositorio
4. Deploy automático
5. Tu site estará en vivo en 2 minutos
```

---

## ✅ CHECKLIST COMPLETAR

- [ ] Proyecto Next.js creado
- [ ] JSON resume.json con datos
- [ ] Hook useResume funcional
- [ ] Página principal renderiza
- [ ] Canvas 3D visible
- [ ] Diseño theme.css aplicado
- [ ] Modelo Phoenix descargado
- [ ] Phoenix cargado en escena 3D
- [ ] Admin panel funciona
- [ ] Contraseña en .env.local
- [ ] Código en GitHub
- [ ] Deployado en Vercel
- [ ] URL pública funcionando

---

## 🎯 PRÓXIMAS FASES

**Fase 2 (Semana 2):**
- Agregar más secciones (Experiencia, Skills, Proyectos)
- Animaciones GSAP avanzadas
- Micro-interacciones

**Fase 3 (Semana 3):**
- Animación Phoenix completa (6 segundos)
- Sistema de temas dinámicos
- Responsividad perfecta

**Fase 4 (Semana 4):**
- Analytics (opcional: Supabase)
- SEO completo
- Deploy a dominio custom

---

**¡Listo para empezar! 🚀**

En 2 horas tienes portfolio en vivo.
En 1 mes tienes portafolio profesional único.

