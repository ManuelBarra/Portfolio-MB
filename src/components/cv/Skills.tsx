'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { ResumeSkill } from '@/types/resume'
import { skillLevelLabel } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

interface SkillsProps {
  skills: ResumeSkill[]
}

const CATEGORIES = ['Lenguajes', 'Frameworks', '3D & Visual', 'Estilos', 'Especialidades', 'Herramientas']

export function Skills({ skills }: SkillsProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-card',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const skillsByCategory = CATEGORIES.reduce<Record<string, ResumeSkill[]>>((acc, cat) => {
    const filtered = skills.filter((s) => s.category === cat)
    if (filtered.length) acc[cat] = filtered
    return acc
  }, {})

  return (
    <div ref={sectionRef}>
      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontStyle: 'italic',
          color: 'var(--color-text-primary)',
          marginBottom: '0.5rem',
        }}
      >
        Habilidades
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
        {Object.entries(skillsByCategory).map(([category, catSkills]) => (
          <div key={category}>
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-primary)',
                marginBottom: '1rem',
              }}
            >
              {category}
            </h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {catSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="skill-card"
                  title={skillLevelLabel(skill.level)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 1rem',
                    background: 'var(--color-bg-light)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    opacity: 0,
                    transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast)',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-primary)'
                    e.currentTarget.style.boxShadow = '0 0 0 2px rgba(255, 107, 53, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {skill.icon && <span aria-hidden style={{ fontSize: '1rem' }}>{skill.icon}</span>}
                  <span style={{ fontWeight: 500, fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
                    {skill.name}
                  </span>
                  <SkillLevel level={skill.level} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SkillLevel({ level }: { level: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }} aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: i < level ? 'var(--color-primary)' : 'var(--color-border)',
            transition: 'background var(--duration-fast)',
          }}
        />
      ))}
    </div>
  )
}
