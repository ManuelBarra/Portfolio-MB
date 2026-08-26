'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import type { ResumeProject } from '@/types/resume'
import { useLocale, t } from '@/hooks/useLocale'

const SWIPE_THRESHOLD = 70

interface ProjectsRoomProps {
  projects: ResumeProject[]
}

const TECH_COLOR: Record<string, string> = {
  'Next.js':       '#3DDCFF',
  'React':         '#61DAFB',
  'Vue.js':        '#42D392',
  'Three.js':      '#FF3CAC',
  'GSAP':          '#FFB800',
  'TypeScript':    '#5B7CFF',
  'JavaScript':    '#FFB800',
  'Python':        '#00FF88',
  'AEM':           '#FF4757',
  'WordPress':     '#9B8AFF',
  'Framer Motion': '#FF3CAC',
  'Canvas 2D':     '#3DDCFF',
}

function accentFor(techs: string[]): string {
  for (const t of techs) if (TECH_COLOR[t]) return TECH_COLOR[t]
  return '#3DDCFF'
}

function gradientFor(techs: string[]): string {
  const c1 = accentFor(techs)
  const c2 = TECH_COLOR[techs[1]] ?? '#5B7CFF'
  return `linear-gradient(135deg, ${c1}18 0%, ${c2}10 100%)`
}

export function ProjectsRoom({ projects: allProjects }: ProjectsRoomProps) {
  const projects = allProjects.filter(p => p.image)
  const [active, setActive] = useState(0)
  const { locale } = useLocale()

  const prev = useCallback(() => setActive(i => Math.max(0, i - 1)), [])
  const next = useCallback(() => setActive(i => Math.min(projects.length - 1, i + 1)), [projects.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  { e.stopPropagation(); prev() }
      if (e.key === 'ArrowRight') { e.stopPropagation(); next() }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [prev, next])

  const stageRef = useRef<HTMLDivElement>(null)
  const dragStartX = useRef<number | null>(null)

  // Native touch listeners just to stop the page-level room-swipe (page.tsx)
  // from also firing while dragging inside the gallery — stopPropagation on
  // React's synthetic PointerEvent doesn't stop the paired native TouchEvent.
  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const stop = (e: TouchEvent) => e.stopPropagation()
    el.addEventListener('touchstart', stop)
    el.addEventListener('touchend', stop)
    return () => {
      el.removeEventListener('touchstart', stop)
      el.removeEventListener('touchend', stop)
    }
  }, [])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    dragStartX.current = e.clientX
  }, [])

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (dragStartX.current === null) return
    const delta = e.clientX - dragStartX.current
    dragStartX.current = null

    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta < 0) next()
      else prev()
      return
    }

    // Not a swipe — treat as a tap/click on whichever card was hit.
    const target = (e.target as HTMLElement).closest<HTMLElement>('[data-project-index]')
    if (target) {
      const idx = Number(target.dataset.projectIndex)
      if (!Number.isNaN(idx) && idx !== active) setActive(idx)
    }
  }, [active, next, prev])

  const handlePointerCancel = useCallback(() => {
    dragStartX.current = null
  }, [])

  return (
    <div className="proj-gallery-root">
      <h2 className="section-title">
        <span className="section-title__accent">//</span> Projects
        <span className="proj-gallery-counter" aria-live="polite" aria-atomic="true">
          {String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </span>
      </h2>

      <div
        className="proj-gallery-stage"
        ref={stageRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        <div className="proj-gallery-fan">
          {projects.map((project, i) => {
            const offset   = i - active
            const abs      = Math.abs(offset)
            if (abs > 2) return null

            const accent = accentFor(project.technologies)
            const isActive = i === active

            // Only non-active ("peek") cards get button semantics — their one
            // action is "bring this into focus". The active card has no such
            // action, so it stays a plain container and its real <a> links
            // are natural, un-nested tab stops. This avoids putting focusable
            // links inside a role="button" ancestor (invalid ARIA nesting).
            const cardInteractiveProps = !isActive
              ? {
                  role: 'button' as const,
                  tabIndex: 0,
                  'aria-label': project.name,
                  onKeyDown: (e: React.KeyboardEvent) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActive(i)
                    }
                  },
                }
              : {}

            return (
              <div
                key={project.id}
                data-project-index={i}
                className={`proj-card${isActive ? ' proj-card--active' : ''}`}
                style={{
                  '--card-accent':  accent,
                  '--card-tx':      `${offset * 290}px`,
                  '--card-tz':      `${-abs * 110}px`,
                  '--card-ry':      `${offset * -28}deg`,
                  '--card-scale':   `${1 - abs * 0.11}`,
                  '--card-opacity': `${1 - abs * 0.32}`,
                  zIndex: 10 - abs,
                } as React.CSSProperties}
                {...cardInteractiveProps}
              >
                {/* Visual header */}
                <div
                  className="proj-card__visual"
                  style={{ background: gradientFor(project.technologies) }}
                >
                  <div className="proj-card__visual-grid" />
                  {project.image
                    ? (
                      <Image
                        src={project.image}
                        alt={isActive ? project.name : ''}
                        fill
                        sizes="320px"
                        className="proj-card__visual-img"
                      />
                    )
                    : (
                      <span className="proj-card__visual-label" style={{ color: accent }}>
                        {project.name}
                      </span>
                    )
                  }
                  {project.featured && (
                    <span className="proj-card__badge">FEATURED</span>
                  )}
                  {project.status && (
                    <span className="proj-card__badge proj-card__badge--status">
                      {t(project.status, locale)}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="proj-card__body">
                  <div className="proj-card__name">{project.name}</div>
                  {project.impact && (
                    <div className="proj-card__impact" style={{ color: accent }}>
                      ▲ {t(project.impact, locale)}
                    </div>
                  )}
                  <p className={`proj-card__desc${isActive ? ' proj-card__desc--full' : ''}`}>
                    {t(project.description, locale)}
                  </p>
                  <div className="proj-card__tech">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="proj-card__tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="proj-card__links">
                    {project.url && (
                      isActive ? (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="proj-card__link">
                          Visit site →
                        </a>
                      ) : (
                        <span className="proj-card__link" aria-hidden="true">Visit site →</span>
                      )
                    )}
                    {project.repo && (
                      isActive ? (
                        <a href={`https://${project.repo}`} target="_blank" rel="noopener noreferrer" className="proj-card__link proj-card__link--muted">
                          GitHub →
                        </a>
                      ) : (
                        <span className="proj-card__link proj-card__link--muted" aria-hidden="true">GitHub →</span>
                      )
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Arrows */}
        <button
          className="proj-arrow proj-arrow--left"
          onClick={prev}
          disabled={active === 0}
          aria-label="Previous project"
        >‹</button>
        <button
          className="proj-arrow proj-arrow--right"
          onClick={next}
          disabled={active === projects.length - 1}
          aria-label="Next project"
        >›</button>

        {/* Dots */}
        <div className="proj-dots">
          {projects.map((project, i) => (
            <button
              key={i}
              className={`proj-dot${i === active ? ' proj-dot--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Go to project ${i + 1}: ${project.name}`}
              aria-current={i === active ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
