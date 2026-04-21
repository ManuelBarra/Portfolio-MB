# 🚀 CV/PORTAFOLIO 3D INTERACTIVO v2.0
## ARQUITECTURA SIMPLIFICADA + CMS PROPIETARIO ÚNICO

---

## 🎯 CAMBIOS DISRUPTIVOS

### ❌ ELIMINADO
- ❌ Sanity CMS (pago + dependencia externa)
- ❌ NextAuth complejo (overkill para un usuario)
- ❌ Dashboard con admin routes (innecesario)
- ❌ Base de datos real-time
- ❌ Complejidad innecesaria

### ✅ NUEVA VISIÓN

**Contenido estático + CMS PROPIETARIO en el mismo repo**

```
Portfolio 3D (Vercel) ← Contenido estático (Git)
                      ← Admin Panel en React (mismo repo)
                      ← Base de datos: JSON + Supabase (opcional)
```

**Ventajas:**
- 📝 Editas en tu computadora (simple)
- 🚀 Cambios = git push = deploy automático (5 segundos)
- 💎 Dashboard es parte del código = control total
- 🎨 Diseño 100% personalizado (NO genérico)
- ⚡ Sin dependencias externas complejas
- 💰 Gratis (Git + Vercel + Supabase free)

---

## 📊 NUEVA ARQUITECTURA

```
┌─────────────────────────────────────────────────────────────┐
│                    PROYECTO UNICO EN GIT                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  📂 /src                                                    │
│  ├─ /app                                                   │
│  │  ├─ page.tsx → CV 3D Público                            │
│  │  ├─ admin/                                              │
│  │  │  └─ page.tsx → CMS Propietario (privado)             │
│  │  └─ api/ → Funciones serverless (ediciones)             │
│  │                                                          │
│  ├─ /components                                            │
│  │  ├─ 3d/                                                 │
│  │  │  ├─ Phoenix.tsx (animación única)                    │
│  │  │  └─ Scene.tsx (escena personalizada)                 │
│  │  ├─ admin/                                              │
│  │  │  ├─ EditorPanel.tsx (editor visual único)            │
│  │  │  ├─ PreviewCanvas.tsx (preview en tiempo real)       │
│  │  │  └─ CodeEditor.tsx (edición JSON directo)            │
│  │  └─ cv/                                                 │
│  │     └─ secciones (componentes dinámicas)                │
│  │                                                          │
│  ├─ /data                                                  │
│  │  ├─ resume.json → Contenido maestro                     │
│  │  ├─ theme.json → Temas visuales                         │
│  │  └─ animations.json → Parámetros 3D                     │
│  │                                                          │
│  └─ /hooks                                                 │
│     ├─ useResume.ts → Hook de contenido                    │
│     └─ useLocalStorage.ts → Persistencia                   │
│                                                             │
│  📂 /public                                                │
│  ├─ models/                                                │
│  │  └─ phoenix.glb → Modelo 3D                             │
│  └─ assets/                                                │
│                                                             │
│  📂 /scripts                                               │
│  └─ updateContent.ts → CLI para editar JSON                │
│                                                             │
│  🔐 .env.local (NUNCA en git)                              │
│  └─ SUPABASE_URL, SUPABASE_KEY (opcional)                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 DISEÑO VISUAL EXCLUSIVO

### Concepto: "Minimalismo Visceral con Energía 3D"

No es:
- ❌ Diseño material design genérico
- ❌ Glassmorphism (lo hace todos)
- ❌ Dark mode por defecto (aburrido)

Es:
- ✅ **Contraste alto:** Blanco puro + Negro profundo + naranja quemado
- ✅ **Tipografía:** Serif moderna (Playfair Display) + Mono (JetBrains Mono)
- ✅ **Micro-interacciones:** Animaciones suaves, sin transiciones rígidas
- ✅ **Espaciado asimétricamente:** No grid perfecto
- ✅ **Colores vibrantes pero elegantes:** Tema phoenicia (fuego)
- ✅ **Desorden controlado:** Algunos elementos fuera del alineamiento

### Paleta de Colores Única

```css
/* Tema Principal: Phoenix Fire */
--primary: #FF6B35;      /* Naranja quemado (fuego del fénix) */
--secondary: #004E89;    /* Azul profundo (noche) */
--accent: #F7B32B;       /* Dorado (renacimiento) */
--bg-light: #FAFAFA;     /* Casi blanco con calidez */
--bg-dark: #0A0E27;      /* Negro con tono azul */
--text-primary: #0A0E27; /* Negro profundo */
--text-light: #F5F5F5;   /* Casi blanco */
```

### Tipografía Única

```css
/* Headings: Serif moderno (elegancia) */
font-family: "Playfair Display", serif;
font-weight: 700;
letter-spacing: -2px;
font-size: clamp(2rem, 5vw, 4rem);

/* Body: Sans-serif limpio */
font-family: "Inter", sans-serif;
font-weight: 400;
letter-spacing: 0.3px;
line-height: 1.6;

/* Code/Admin: Monospace */
font-family: "JetBrains Mono", monospace;
font-size: 0.875rem;
```

### Animaciones Exclusivas

```typescript
// NO CSS vanilla transitions
// SÍ gsap timelines personalizadas

// Entrada página:
gsap.timeline()
  .fromTo(".hero", { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, 0)
  .fromTo(".phoenix-canvas", { clipPath: "inset(0% 100% 0% 0%)" }, 
          { clipPath: "inset(0% 0% 0% 0%)" }, 0.2)
  .fromTo(".info-panel", { x: 100, opacity: 0 }, 
          { x: 0, opacity: 1 }, 0.3)

// Scroll trigger (parallax no convencional):
gsap.registerPlugin(ScrollTrigger)
gsap.to(".experience-item", {
  scrollTrigger: { trigger: ".experience-list", start: "top center" },
  y: -20,
  stagger: 0.1,
  ease: "power3.out"
})

// Hover efectos:
// NO hover color change simple
// SÍ animación de "enfoque" con blur + glow dinámico
```

---

## 📝 ESTRUCTURA DE DATOS (JSON)

### `/src/data/resume.json`

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
    "bio": "JavaScript developer con experiencia en proyectos de alto impacto. Especialidad: Frontend, UX interactiva, y liderazgo técnico.",
    "email": "manuelbarralazo@gmail.com",
    "phone": "+34 669425094",
    "links": {
      "github": "github.com/ManuelBarra",
      "linkedin": "linkedin.com/in/manuelbarra",
      "twitter": "opcional"
    },
    "image": "/assets/profile.jpg"
  },
  "summary": "Programador JavaScript especializado en Frontend con 5+ años de experiencia. He liderado proyectos en CaixaBank, Roca, y otras empresas Fortune 500. Actualmente dirijo iniciativas de IA en Genomcore.",
  "experience": [
    {
      "id": "genomcore",
      "company": "Genomcore",
      "position": "Desarrollador Web Frontend | Lead IA",
      "startDate": "2025-01",
      "endDate": null,
      "current": true,
      "location": "Barcelona, España",
      "description": "Web del equipo de Marketing + Liderazgo del piloto de IA",
      "highlights": [
        "Desarrollo frontend con React",
        "Liderazgo técnico en implementación IA",
        "Arquitectura de aplicaciones web"
      ],
      "technologies": ["React", "JavaScript", "IA/ML"],
      "logo": null
    },
    {
      "id": "digitalmakers",
      "company": "DigitalMakers",
      "position": "Frontend Web Developer",
      "startDate": "2022-04",
      "endDate": "2024-06",
      "current": false,
      "duration": "2 años 3 meses",
      "location": "Barcelona, España",
      "description": "Maquetación y desarrollo frontend para proyectos banking",
      "projects": [
        "Roca",
        "Guía Repsol",
        "AgroBank Hub",
        "CaixaBank Talks",
        "Banca Privada & Banca Premier",
        "CaixaBank International (IT, FR, DE, MA, PL, UK)",
        "CaixaBank Wealth Management Luxembourg"
      ],
      "highlights": [
        "Componentes dinámicos React",
        "Gestión de datos y filtros",
        "Temas visuales customizados",
        "Incidencias y mejoras continuas"
      ],
      "technologies": ["JavaScript", "Liferay", "jQuery", "SASS", "Bootstrap", "Figma"]
    }
  ],
  "education": [
    {
      "id": "skylab",
      "institution": "Skylab Coders Academy",
      "certification": "Frontend Developer",
      "field": "Desarrollo de aplicaciones web",
      "startDate": "2021-07",
      "endDate": "2021-09"
    }
  ],
  "skills": [
    {
      "id": "js",
      "name": "JavaScript",
      "category": "Lenguaje",
      "level": 5,
      "icon": "⚡"
    },
    {
      "id": "react",
      "name": "React.js",
      "category": "Framework Frontend",
      "level": 5,
      "icon": "⚛️"
    },
    {
      "id": "vue",
      "name": "Vue.js",
      "category": "Framework Frontend",
      "level": 4,
      "icon": "💚"
    }
  ],
  "projects": [
    {
      "id": "portfolio-3d",
      "title": "Portfolio 3D Interactivo",
      "description": "CV en 3D con Pájaro Fénix animado",
      "image": "/assets/portfolio-3d.jpg",
      "technologies": ["Three.js", "React Three Fiber", "Next.js", "GSAP"],
      "links": {
        "github": "github.com/...",
        "demo": "portfolio.manuelbarra.dev"
      },
      "featured": true
    }
  ],
  "theme": {
    "primary": "#FF6B35",
    "secondary": "#004E89",
    "accent": "#F7B32B",
    "darkMode": false
  },
  "3d": {
    "phoenixAnimation": {
      "duration": 6000,
      "entryHeight": 500,
      "landingHeight": 0,
      "particleIntensity": 0.8,
      "cameraZoom": 5
    }
  }
}
```

### `/src/data/theme.json`

```json
{
  "colors": {
    "primary": "#FF6B35",
    "secondary": "#004E89",
    "accent": "#F7B32B",
    "background": {
      "light": "#FAFAFA",
      "dark": "#0A0E27"
    },
    "text": {
      "primary": "#0A0E27",
      "secondary": "#666666",
      "light": "#F5F5F5"
    },
    "borders": "#E0E0E0",
    "success": "#10B981",
    "warning": "#F59E0B",
    "danger": "#EF4444"
  },
  "typography": {
    "fontSerif": "'Playfair Display', serif",
    "fontSans": "'Inter', sans-serif",
    "fontMono": "'JetBrains Mono', monospace",
    "sizes": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem"
    }
  },
  "spacing": {
    "base": 8,
    "xs": 4,
    "sm": 8,
    "md": 16,
    "lg": 24,
    "xl": 32,
    "2xl": 48
  },
  "animations": {
    "transitionFast": "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionNormal": "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionSlow": "500ms cubic-bezier(0.4, 0, 0.2, 1)"
  },
  "breakpoints": {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px",
    "2xl": "1536px"
  }
}
```

---

## 🛠️ CMS PROPIETARIO (Dashboard Admin)

### Concepto: "Editor Visual Tipo Figma"

**NO es:**
- ❌ Formularios aburridos
- ❌ Admin panel genérico
- ❌ WYSIWYG bloatware

**SÍ es:**
- ✅ Editor visual interactivo
- ✅ Preview en tiempo real al lado
- ✅ Manejo JSON directo
- ✅ Atajos teclado personalizados
- ✅ Historial con Git (commits automáticos)
- ✅ Drag & drop para reordenar

### Ruta: `/admin`

**Protección: Token simple en localStorage + check de email**

```typescript
// NO NextAuth complejo
// SÍ verificación simple con correo
interface AdminAuth {
  email: string;
  token: string; // Generado al primer login
  expiresAt: number;
}

// En .env.local
NEXT_PUBLIC_ADMIN_EMAIL=manuelbarralazo@gmail.com
NEXT_PUBLIC_ADMIN_TOKEN=tu_token_seguro_aqui
```

### Secciones del Admin

#### 1. **Dashboard Overview**
```
┌─────────────────────────────────────────────────────┐
│ ADMIN PANEL                          [Cerrar sesión] │
├─────────────────────────────────────────────────────┤
│                                                      │
│  📊 Últimos cambios                                 │
│  ├─ Editaste perfil (hace 2 horas)                 │
│  ├─ Agregaste proyecto (ayer)                      │
│  └─ Actualizaste experiencia (hace 3 días)         │
│                                                      │
│  🔗 Links rápidos                                   │
│  ├─ [Editar Perfil]                                │
│  ├─ [Editar Experiencia]                           │
│  ├─ [Ver CV en vivo]                               │
│  └─ [Personalizar Tema]                            │
│                                                      │
│  📈 Estadísticas (si Supabase activado)            │
│  ├─ Visitas totales: 234                           │
│  ├─ País top: España                               │
│  └─ Dispositivo: Desktop 80%                       │
│                                                      │
└─────────────────────────────────────────────────────┘
```

#### 2. **Editor Perfil**
```typescript
interface ProfileEditor {
  // Lado izquierdo: Formularios
  // Lado derecho: Preview en vivo
  
  // Campos editables en tiempo real:
  firstName, lastName, title, location
  bio, email, phone
  links (github, linkedin, etc.)
  profileImage (upload)
}
```

#### 3. **Editor Experiencia** (tipo Notion/Figma)
```
┌──────────────┬──────────────────────────────────────┐
│ Experiencias │  Genomcore                          │
├──────────────┤                                      │
│ Genomcore ✏️ │  Empresa: [input]                   │
│ Digital...   │  Puesto: [input]                    │
│ inMotion  ✏️ │  Período: [dates]                   │
│ Vins Nus  ✏️ │  Descripción: [textarea]            │
│              │  Tecnologías: [tags con autocomplete]│
│              │  Destacar: [toggle]                  │
│              │                                      │
│ [+ Agregar]  │  [Guardar] [Eliminar] [Duplicar]  │
│              │                                      │
│              │  PREVIEW EN VIVO                    │
│              │  ────────────────────────────       │
│              │  Genomcore                          │
│              │  Desarrollador Web Frontend | Lead IA│
│              │  Enero 2025 - Presente              │
│              │  Barcelona, España                  │
│              │  ...                                │
└──────────────┴──────────────────────────────────────┘
```

#### 4. **Editor Habilidades** (Kanban estilo)
```
┌──────────────┬──────────────┬──────────────┬──────────┐
│  Lenguajes   │  Frameworks  │  Herramientas│  Otros  │
├──────────────┼──────────────┼──────────────┼─────────┤
│ JavaScript ⭐⭐⭐⭐⭐│ React ⭐⭐⭐⭐⭐ │ Git      │ Scrum  │
│ PHP ⭐⭐⭐⭐ │ Vue ⭐⭐⭐⭐  │ GitHub   │ Figma  │
│ HTML ⭐⭐⭐⭐⭐│ Next.js ⭐⭐⭐⭐│ Figma    │        │
│ CSS ⭐⭐⭐⭐⭐│ Liferay ⭐⭐⭐│ Adobe XD │        │
│              │              │ Jira     │        │
│ [+ Agregar]  │ [+ Agregar] │ [+ Agregar]│[+ Agregar]
│              │              │           │        │
└──────────────┴──────────────┴──────────────┴─────────┘
```

#### 5. **Editor de Tema Personalizado**
```
┌─────────────────────────────────────────────┐
│ PERSONALIZAR TEMA                           │
├─────────────────────────────────────────────┤
│                                             │
│ 🎨 COLORES                                  │
│ ┌──────────────────────────────────────┐   │
│ │ Primary:   [#FF6B35] ⬜              │   │
│ │ Secondary: [#004E89] ⬜              │   │
│ │ Accent:    [#F7B32B] ⬜              │   │
│ │ Background:[#FAFAFA] ⬜              │   │
│ │                                      │   │
│ │ [Presets] [Custom Picker]            │   │
│ └──────────────────────────────────────┘   │
│                                             │
│ 🌓 MODO                                     │
│ ○ Light   ● Dark                           │
│                                             │
│ ✍️ TIPOGRAFÍA                               │
│ Headings: [Playfair Display ▼]             │
│ Body:     [Inter ▼]                        │
│ Code:     [JetBrains Mono ▼]               │
│                                             │
│ ⚡ 3D ANIMACIONES                            │
│ Phoenix Duration:  [6000ms] ◄─────────►   │
│ Particles:         [0.8] ◄─────────►      │
│ Camera Zoom:       [5] ◄─────────►        │
│                                             │
│ [Guardar] [Resetear a Default]             │
│                                             │
│ PREVIEW EN VIVO ▶                          │
│                                             │
└─────────────────────────────────────────────┘
```

#### 6. **Editor de Proyectos**
```
Igual que experiencia, pero:
- Cards estilo galería
- Upload de imágenes (con preview)
- Links validados (GitHub, demo, etc.)
- Drag & drop para cambiar orden
```

#### 7. **Editor de Código JSON Directo**
```typescript
// Para usuarios avanzados (tú mismo)
// Panel de código JSON editable
// Con syntax highlighting y validación

<MonacoEditor
  language="json"
  value={resume}
  onChange={(newValue) => updateResume(newValue)}
  options={{ 
    minimap: { enabled: false },
    fontSize: 14,
    fontFamily: "JetBrains Mono"
  }}
/>
```

#### 8. **Historial de Cambios (Git)**
```
┌─────────────────────────────────┐
│ HISTORIAL                       │
├─────────────────────────────────┤
│ Hoy                             │
│ ├─ 14:32 - Editaste perfil     │
│ ├─ 10:15 - Agregaste proyecto  │
│ │                              │
│ Ayer                            │
│ ├─ 16:45 - Actualizaste skills │
│ │                              │
│ Hace 3 días                     │
│ └─ 09:00 - Cambio inicial      │
│                                │
│ [Ver commit] [Revertir]         │
│                                │
└─────────────────────────────────┘
```

---

## 🔄 FLUJO DE EDICIÓN (Simple)

### Escenario: Actualizas tu experiencia

```
1. Abre admin (/admin)
2. Click en "Editar Experiencia"
3. Panel se divide:
   - Izquierda: Edita "Puesto" en input
   - Derecha: CV público actualiza en TIEMPO REAL
4. Cambio es automáticamente guardado en localStorage
5. Cuando estés listo: [Commit a Git]
6. Git push → Vercel redeploy automático (5 segundos)
7. CV público actualizado en vivo
```

### Flujo Técnico

```typescript
// Hook personalizado (sin Sanity, sin NextAuth)
function useResume() {
  const [resume, setResume] = useState(null)
  
  useEffect(() => {
    // 1. Carga resume.json
    fetch('/data/resume.json')
      .then(res => res.json())
      .then(data => setResume(data))
  }, [])
  
  const updateResume = (section, data) => {
    // 2. Actualiza en memoria
    const updated = { ...resume, [section]: data }
    setResume(updated)
    
    // 3. Guarda en localStorage (backup local)
    localStorage.setItem('resume_draft', JSON.stringify(updated))
    
    // 4. Envía a API para guardar a JSON
    fetch('/api/update-resume', {
      method: 'POST',
      body: JSON.stringify(updated)
    })
  }
  
  return { resume, updateResume }
}
```

---

## 🚀 DEPLOYAR CAMBIOS (Súper Fácil)

### Opción 1: Editar en GitHub Web
```
1. Abre github.com/ManuelBarra/portfolio-3d
2. Navega a src/data/resume.json
3. Click en lápiz (edit)
4. Edita JSON directamente
5. Click "Commit changes"
6. Vercel redeploy automático
7. Cambios en vivo en 5 segundos
```

### Opción 2: Editar Localmente + CLI
```bash
# Terminal en tu proyecto

# Editar via CLI interactiva
npm run edit:resume
# → Menú interactivo para actualizar datos

# Commit automático con mensaje descriptivo
npm run commit-changes "feat: actualizar perfil"

# Push a GitHub
git push

# Vercel detecta push → redeploy automático
# https://portfolio.manuelbarra.dev está actualizado
```

### Opción 3: Admin Panel Integrado (/admin)
```
1. Abierto en localhost:3000/admin (desarrollo)
2. Edita en UI visual
3. Click [Guardar]
4. Genera commit automático
5. Git push automático (opcional)
6. Deploy automático en Vercel
```

---

## 🗄️ DATOS: GIT + SUPABASE (OPCIONAL)

### Arquitectura Dual

```
┌─ Desarrollo -────────────┐
│  localStorage            │
│  (ediciones en progreso) │
└──────────────────────────┘
         ↓ [Guardar]
┌─ Producción ─────────────┐
│  resume.json en Git      │
│  (versión final/publicada)
└──────────────────────────┘
         ↓ (opcional)
┌─ Analytics ──────────────┐
│  Supabase (visitas)      │
│  (solo si lo activas)    │
└──────────────────────────┘
```

### Opción: Agregar Supabase (Para Analytics)

**SOLO si quieres ver:**
- Cuántas personas te visitaron
- De dónde vienen
- Qué secciones leen más

**NO necesarias para editar contenido**

```typescript
// Supabase solo para INSERT eventos de visita
const trackPageView = async () => {
  await supabase.from('page_views').insert([
    { 
      path: window.location.pathname,
      timestamp: new Date(),
      userAgent: navigator.userAgent,
      country: geoLocation // De GeoIP
    }
  ])
}
```

---

## 🎨 DISEÑO EXCLUSIVO: DETALLES

### 1. **Navegación NO convencional**

```
Típico (aburrido):
[Home] [About] [Experience] [Contact]

Propuesta (exclusive):
╱─────────────────────────────╲
│ MANUEL BARRA                │  ← Nombre como título
│                             │
│ Scroll para más ↓           │  ← Hint elegante
└─────────────────────────────┘

Secciones se revelan al scroll:
1. Al top: Perfil + Canvas 3D
2. Scroll down: Sobre mí (aparecer con fade)
3. Más scroll: Experiencia (timeline)
4. Más scroll: Educación
5. Final: Contacto
```

### 2. **Animación Phoenix ÚNICA**

```
NO es:
❌ Rotating model genérico
❌ Simple flying left-to-right
❌ Estándar Three.js example

SÍ es:
✅ Entrada: Desvanecimiento de arriba (fuego)
✅ Descenso: Parpadeo de fuego a su alrededor
✅ Aterrizaje: Impacto con particulas explosivas
✅ Reposo: Respiración sutil + movimiento cola
✅ Loop: Seamless sin jump visual
```

### 3. **Paleta de Colores Temática**

```
Fénix es símbolo de renacimiento
→ Colores: Fuego + Noche + Oro

#FF6B35 (Naranja fuego)     → Vitalidad, energía
#004E89 (Azul noche)        → Calma, profundidad
#F7B32B (Dorado)            → Renacimiento, éxito
#FAFAFA (Casi blanco)       → Claridad, aire
#0A0E27 (Negro azulado)     → Profesionalismo
```

### 4. **Tipografía Jerárquica**

```
Títulos principales:
"Manuel Barra"              → Playfair 72px, peso 700
"Frontend Developer"         → Playfair 48px, peso 400

Subtítulos:
"Barcelona, España"          → Inter 18px, color gris

Cuerpo:
Descripciones                → Inter 16px, line-height 1.6

Código/Técnico:
Tags de tecnologías          → JetBrains Mono 12px
```

### 5. **Espaciado Asimétricamente Elegante**

```
NO:
Perfect grid, todo alineado, robótico

SÍ:
Canvas 3D: ocupa 65% (no 50%)
Info panel: ocupa 35% (no 50%)
Espacios: 24px / 48px / 16px (no uniformes)
Algunas secciones: margen izquierdo 10%, otras 20%
```

---

## 📦 STACK FINAL (SIMPLIFICADO)

```json
{
  "frontend": {
    "framework": "Next.js 15",
    "renderer3d": "Three.js + React Three Fiber",
    "ui": "Tailwind CSS v4 + Custom CSS",
    "animations": "GSAP 3",
    "state": "React Hooks + localStorage"
  },
  "admin": {
    "type": "React SPA en /admin",
    "auth": "Token simple + localStorage",
    "editor": "Code Monaco + Visual UI"
  },
  "data": {
    "source": "JSON en /src/data/",
    "storage": "Git (version control)",
    "analytics": "Supabase (opcional)"
  },
  "deployment": {
    "hosting": "Vercel",
    "versionControl": "GitHub",
    "cost": "€0/mes"
  },
  "dependencies": {
    "core": ["next", "react", "three", "@react-three/fiber"],
    "ui": ["tailwindcss", "gsap", "clsx"],
    "dev": ["typescript", "eslint", "prettier"]
  }
}
```

---

## 🚀 VENTAJAS ESTA ARQUITECTURA

| Aspecto | Antes (Sanity) | Ahora (Git+JSON) |
|---------|---|---|
| **Complejidad** | 🔴 Alta | 🟢 Baja |
| **Dependencias** | 🔴 5+ servicios | 🟢 2 (Git + Vercel) |
| **Costo** | 🔴 Posible $20/mes | 🟢 $0/mes |
| **Control** | 🔴 Limitado | 🟢 Total |
| **Velocidad deploy** | 🔴 1-2 min | 🟢 5 segundos |
| **Customización** | 🔴 Sanity UI limitada | 🟢 100% tuya |
| **Mantenimiento** | 🔴 Externo + config | 🟢 Solo tu código |
| **Edición rápida** | 🔴 Sanity Studio | 🟢 Admin panel tuyo |

---

## 📝 PRÓXIMOS PASOS

1. **Crear proyecto Git** con estructura simple
2. **Diseñar Admin Panel** único y exclusivo
3. **Implementar Phoenix 3D** con GSAP
4. **Crear tema visual** custom (sin templates)
5. **Deploy a Vercel** (gratuito)
6. **Optional: Supabase** para analytics

---

**ESTA ES LA VERSIÓN MEJORADA: Simple, poderosa, única, y 100% bajo tu control.**

