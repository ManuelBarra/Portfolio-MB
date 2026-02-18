# CLAUDE.md — AI Assistant Guide for Portfolio-MB

This file provides context and conventions for AI assistants working on this codebase.

---

## Project Overview

**Portfolio-MB** is a personal portfolio SPA (Single Page Application) for Manuel Barra, a Frontend Developer based in Barcelona. It is built with React + Vite and includes a private admin dashboard for managing portfolio projects.

- **Owner:** Manuel Barra (`manuelbarralazo@gmail.com`)
- **Language:** Spanish (UI content and code comments are in Spanish)
- **Primary goal:** Showcase frontend skills and serve as a live portfolio

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 19.x |
| Build tool | Vite | 7.x |
| Routing | React Router DOM | 7.x |
| Global state | Zustand | 5.x |
| Styling | SCSS + CSS Modules | via sass 1.x |
| HTTP client | Axios | 1.x (installed, not yet used) |
| Linting | ESLint (flat config) | 9.x |

---

## Development Commands

```bash
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Production build → ./dist
npm run preview   # Preview production build locally
npm run lint      # Run ESLint across all .js/.jsx files
```

No test runner is configured. There is no `test` script in `package.json`.

---

## Project Structure

```
Portfolio-MB/
├── index.html                  # HTML entry point (fonts loaded here)
├── vite.config.js              # Vite config (React plugin only)
├── eslint.config.js            # ESLint flat config
├── package.json
├── public/
│   └── vite.svg
└── src/
    ├── main.jsx                # React DOM root mount
    ├── App.jsx                 # Router + layout shell
    ├── assets/
    │   ├── images/
    │   │   └── mb-logo.png     # Site logo
    │   └── styles/
    │       ├── index.scss      # SCSS entry (imports all partials)
    │       ├── main.scss       # Base/global styles (body, headings, links)
    │       ├── _variables.scss # SCSS vars + CSS custom properties (:root)
    │       ├── _mixings.scss   # SCSS mixins (button-primary, etc.)
    │       ├── _reset.scss     # CSS reset
    │       └── _forms.scss     # Global form styles
    ├── components/
    │   ├── admin/
    │   │   └── ProjectForm.jsx        # Form for creating/editing projects (inline styles)
    │   ├── auth/
    │   │   └── ProtectedRoute.jsx     # Auth guard (redirects to /login)
    │   ├── layout/
    │   │   ├── Header/
    │   │   │   ├── Header.jsx         # Responsive nav + hamburger menu
    │   │   │   └── Header.module.scss
    │   │   └── Footer/
    │   │       ├── Footer.jsx
    │   │       └── Footer.module.scss
    │   └── ui/
    │       ├── FeaturedProject.jsx       # Large project showcase card
    │       ├── FeaturedProject.module.scss
    │       ├── ProjectCard.jsx           # Compact project card (dashboard list)
    │       ├── ProjectCard.module.scss
    │       └── Modal/
    │           ├── Modal.jsx             # Generic modal wrapper
    │           └── Modal.module.scss
    ├── data/
    │   └── content.js          # All UI text/copy for all pages (Spanish)
    ├── pages/
    │   ├── HomePage.jsx        # /
    │   ├── HomePage.module.scss
    │   ├── ProjectsPage.jsx    # /projects
    │   ├── ProjectsPage.module.scss
    │   ├── AboutPage.jsx       # /about
    │   ├── AboutPage.module.scss
    │   ├── ContactPage.jsx     # /contact
    │   ├── ContactPage.module.scss
    │   ├── LoginPage.jsx       # /login (hardcoded: admin / password)
    │   ├── LoginPage.module.scss
    │   ├── DashboardPage.jsx   # /dashboard (protected)
    │   └── DashboardPage.module.scss
    ├── services/
    │   └── projectsAPI.js      # In-memory CRUD simulation (not a real API)
    └── store/
        └── authStore.js        # Zustand store: isAuthenticated, user, login(), logout()
```

---

## Routing

Defined in `src/App.jsx` using React Router DOM v7:

| Path | Component | Access |
|---|---|---|
| `/` | `HomePage` | Public |
| `/projects` | `ProjectsPage` | Public |
| `/about` | `AboutPage` | Public |
| `/contact` | `ContactPage` | Public |
| `/login` | `LoginPage` | Public |
| `/dashboard` | `DashboardPage` | Private (via `ProtectedRoute`) |

`ProtectedRoute` reads `isAuthenticated` from the Zustand auth store. If `false`, it redirects to `/login`.

---

## State Management

### Auth Store (`src/store/authStore.js`)

Uses Zustand. State is **not persisted** — refreshing the page logs the user out.

```js
// Shape
{
  isAuthenticated: boolean,
  user: { username: string } | null,
  login(username, password): boolean,   // returns true on success
  logout(): void,
}
```

**Hardcoded credentials:** `admin` / `password`. This is intentional for demo purposes. Do not add real authentication without proper backend integration.

### Local State

Pages and components manage their own local state with `useState` and `useEffect` (standard React hooks).

---

## Data Layer

### Content (`src/data/content.js`)

All UI copy (titles, descriptions, CTAs, etc.) is centralized in a single exported `content` object. Pages import and destructure from it. When updating visible text, edit only this file.

### Projects API (`src/services/projectsAPI.js`)

Simulates a REST API with an in-memory array. **Data resets on page refresh.** Exposes:

```js
projectsAPI.getProjects()              // returns copy of projects array
projectsAPI.addProject(data)           // adds and returns new project
projectsAPI.updateProject(id, data)    // updates in place, returns updated
projectsAPI.deleteProject(id)          // removes, returns true
```

Each project object shape:
```js
{
  id: number,
  title: string,
  company: string,
  description: string,
  technologies: string[],
  imageUrl: string,
  repoUrl: string,
  demoUrl: string,
}
```

`FeaturedProject` component uses a different (richer) shape from `src/data/content.js` (adds `role`, `challenge`, `link` fields).

---

## Styling Conventions

### SCSS Architecture

- **Global styles** are imported once in `src/assets/styles/index.scss`
- **CSS custom properties** are defined in `_variables.scss` under `:root` and used everywhere
- **Component-scoped styles** use CSS Modules (`.module.scss` files)
- The mixin file is named `_mixings.scss` (note: typo — not `_mixins.scss`)

### CSS Custom Properties (Design Tokens)

Key variables from `_variables.scss`:

```scss
--primary-color: #64ffda          /* Green accent */
--background-color: #020c1b       /* Darkest navy (page bg) */
--background-color-secondary: #0a192f
--text-color: #a8b2d1             /* Main body text */
--text-color-lightest: #ccd6f6    /* Headings */
--font-family-headings: 'Jost'
--font-family-body: 'Nunito'
--font-family-mono: 'SF Mono', 'Fira Code', ...
--shadow-primary: 0 0 15px rgba(100, 255, 218, 0.2)
```

### Responsive Design

The Header implements a mobile hamburger menu using `useState`. When the menu is open, `body-no-scroll` class is added to `document.body` (defined in Header's SCSS or `main.scss`).

### Naming

- CSS Module class names use camelCase (`styles.projectCard`, `styles.mainTitle`)
- SCSS partial filenames use underscore prefix (`_variables.scss`)

---

## Key Conventions

1. **UI text lives in `content.js`** — pages must not have hardcoded display strings; import from `src/data/content`.
2. **CSS Modules for components** — each component or page has a matching `.module.scss` file; avoid global class names for component styles.
3. **No path aliases** — imports use relative paths (e.g., `../../store/authStore`). There is no `@/` alias configured in Vite.
4. **ESLint rule:** `no-unused-vars` with `varsIgnorePattern: '^[A-Z_]'` — uppercase variables are exempt (useful for React component imports).
5. **File extension:** `.jsx` for all React components, `.js` for data/services/store files.
6. **Comments are in Spanish** — match existing code convention when adding comments.
7. **`ProjectForm` uses inline styles** — unlike other components, it does not use a `.module.scss` file; this is intentional for simplicity.

---

## Known Limitations / Future Work

- **Auth state is not persisted** — Zustand store has no `persist` middleware; login is lost on refresh.
- **Projects API is in-memory** — data resets on refresh; no backend or localStorage integration yet.
- **Axios is installed but unused** — the `projectsAPI.js` service is entirely synchronous mock data. Axios is ready for when a real API is integrated.
- **Contact form is UI-only** — `ContactPage` renders the form but has no submission handler connected to a backend or email service.
- **CV link is static** — Header links to `/CV-Manuel-Barra.pdf` which must be placed in the `public/` directory.
- **Dashboard credentials are hardcoded and exposed in UI** — the `LoginPage` displays the credentials on screen. This is explicitly a demo pattern.

---

## Git Workflow

- Default branch: `master`
- Feature branches follow the pattern: `claude/<description>-<id>`
- No CI/CD configuration is present in the repository
