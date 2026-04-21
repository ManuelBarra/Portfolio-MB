'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { ResumeExperience } from '@/types/resume'
import { getDateRange } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

interface ExperienceProps {
  experience: ResumeExperience[]
}

export function Experience({ experience }: ExperienceProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.experience-item').forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef}>
      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontStyle: 'italic',
          color: 'var(--color-text-light)',
          marginBottom: '0.5rem',
        }}
      >
        Experiencia
      </h2>
      <div
        style={{
          width: '3rem',
          height: '3px',
          background: 'var(--color-primary)',
          borderRadius: '2px',
          marginBottom: '3rem',
        }}
        aria-hidden
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {experience.map((exp) => (
          <article
            key={exp.id}
            className="experience-item"
            style={{
              borderLeft: '3px solid var(--color-primary)',
              paddingLeft: '1.5rem',
              opacity: 0,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '0.5rem',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    color: 'var(--color-text-light)',
                    marginBottom: '0.2rem',
                  }}
                >
                  {exp.position}
                </h3>
                <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.95rem' }}>
                  {exp.company}
                  <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>
                    {' '}· {exp.location}
                  </span>
                </p>
              </div>

              <time
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-mono)',
                  whiteSpace: 'nowrap',
                  paddingTop: '0.2rem',
                }}
              >
                {getDateRange(exp.startDate, exp.endDate, exp.current)}
              </time>
            </div>

            <p
              style={{
                color: 'rgba(245, 245, 245, 0.75)',
                lineHeight: 1.65,
                fontSize: '0.95rem',
                marginBottom: '1rem',
              }}
            >
              {exp.description}
            </p>

            {exp.highlights && exp.highlights.length > 0 && (
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem',
                  marginBottom: '1rem',
                }}
              >
                {exp.highlights.map((h, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(245, 245, 245, 0.65)',
                      display: 'flex',
                      gap: '0.5rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span style={{ color: 'var(--color-primary)', flexShrink: 0 }}>✦</span>
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    padding: '0.2rem 0.6rem',
                    background: 'rgba(255, 107, 53, 0.15)',
                    color: 'var(--color-primary)',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 107, 53, 0.3)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
