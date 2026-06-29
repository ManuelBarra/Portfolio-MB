'use client'

import { useState, useEffect, useCallback } from 'react'
import type { ResumeProject } from '@/types/resume'

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

  return (
    <div className="proj-gallery-root">
      <h2 className="section-title">
        <span className="section-title__accent">//</span> Projects
        <span className="proj-gallery-counter">
          {String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </span>
      </h2>

      <div className="proj-gallery-stage">
        <div className="proj-gallery-fan">
          {projects.map((project, i) => {
            const offset   = i - active
            const abs      = Math.abs(offset)
            if (abs > 2) return null

            const accent = accentFor(project.technologies)

            return (
              <div
                key={project.id}
                className={`proj-card${i === active ? ' proj-card--active' : ''}`}
                style={{
                  '--card-accent':  accent,
                  '--card-tx':      `${offset * 290}px`,
                  '--card-tz':      `${-abs * 110}px`,
                  '--card-ry':      `${offset * -28}deg`,
                  '--card-scale':   `${1 - abs * 0.11}`,
                  '--card-opacity': `${1 - abs * 0.32}`,
                  zIndex: 10 - abs,
                } as React.CSSProperties}
                onClick={() => i !== active && setActive(i)}
              >
                {/* Visual header */}
                <div
                  className="proj-card__visual"
                  style={{ background: gradientFor(project.technologies) }}
                >
                  <div className="proj-card__visual-grid" />
                  {project.image
                    ? <img src={project.image} alt={project.name} className="proj-card__visual-img" />
                    : (
                      <span className="proj-card__visual-label" style={{ color: accent }}>
                        {project.name}
                      </span>
                    )
                  }
                  {project.featured && (
                    <span className="proj-card__badge">FEATURED</span>
                  )}
                </div>

                {/* Content */}
                <div className="proj-card__body">
                  <div className="proj-card__name">{project.name}</div>
                  <p className="proj-card__desc">{project.description}</p>
                  <div className="proj-card__tech">
                    {project.technologies.slice(0, 4).map(t => (
                      <span key={t} className="proj-card__tech-tag">{t}</span>
                    ))}
                  </div>
                  <div className="proj-card__links">
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="proj-card__link">
                        Visit site →
                      </a>
                    )}
                    {project.repo && (
                      <a href={`https://${project.repo}`} target="_blank" rel="noopener noreferrer" className="proj-card__link proj-card__link--muted">
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Arrows */}
        <button className="proj-arrow proj-arrow--left"  onClick={prev} disabled={active === 0}>‹</button>
        <button className="proj-arrow proj-arrow--right" onClick={next} disabled={active === projects.length - 1}>›</button>

        {/* Dots */}
        <div className="proj-dots">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`proj-dot${i === active ? ' proj-dot--active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
