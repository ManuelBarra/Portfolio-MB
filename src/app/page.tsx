'use client'

import dynamic from 'next/dynamic'
import { useResume } from '@/hooks/useResume'
import { Hero } from '@/components/cv/Hero'
import { Experience } from '@/components/cv/Experience'
import { Skills } from '@/components/cv/Skills'
import { Projects } from '@/components/cv/Projects'

const Scene = dynamic(() => import('@/components/3d/Scene').then((m) => m.Scene), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: '100%',
        height: '100svh',
        background: 'linear-gradient(180deg, #0A0E27 0%, #0F1535 60%, #1A0A05 100%)',
      }}
    />
  ),
})

function LoadingScreen() {
  return (
    <div
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-bg-dark)',
        color: 'var(--color-text-light)',
        fontFamily: 'var(--font-serif)',
        fontSize: '1.5rem',
        fontStyle: 'italic',
      }}
    >
      <span style={{ color: 'var(--color-primary)' }}>✦</span>&nbsp;Cargando…
    </div>
  )
}

export default function Home() {
  const { resume, loading } = useResume()

  if (loading) return <LoadingScreen />
  if (!resume) return null

  return (
    <main>
      {/* ── Hero Section: Canvas 3D + Info ─────────────────── */}
      <section className="asymmetric-layout" style={{ minHeight: '100svh' }}>
        {/* Canvas 3D — 63% */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <Scene />
        </div>

        {/* Hero Info — 37% */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: 'clamp(2rem, 5vw, 4rem)',
            background: 'var(--color-bg-light)',
            borderLeft: '1px solid var(--color-border)',
          }}
        >
          <Hero resume={resume} />
        </div>
      </section>

      {/* ── Experience ─────────────────────────────────────── */}
      <section className="section-dark" style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="container-portfolio">
          <Experience experience={resume.experience} />
        </div>
      </section>

      {/* ── Skills ─────────────────────────────────────────── */}
      <section style={{ padding: 'var(--spacing-3xl) 0', background: 'var(--color-bg-light)' }}>
        <div className="container-portfolio">
          <Skills skills={resume.skills} />
        </div>
      </section>

      {/* ── Proyectos ──────────────────────────────────────── */}
      <section className="section-dark" style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="container-portfolio">
          <Projects projects={resume.projects} />
        </div>
      </section>
    </main>
  )
}
