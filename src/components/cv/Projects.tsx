'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export function Projects({ projects }: { projects: any[] }) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const cards = sectionRef.current.querySelectorAll('.project-card')

    cards.forEach((card, i) => {
      // Hover effects
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          boxShadow: '0 20px 40px rgba(255, 107, 53, 0.1)',
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          boxShadow: 'none',
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    })

    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              cards,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power3.out',
              }
            )
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [projects])

  if (!projects || projects.length === 0) return null

  return (
    <div ref={sectionRef} className="py-20 asymetric-content">
      <h2 style={{ color: 'var(--color-primary)' }} className="text-4xl mb-12">
        PROYECTOS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card flex flex-col justify-between"
            style={{
              padding: '2rem',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 'var(--radius-lg)',
              cursor: 'pointer'
            }}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text-light)' }}>
                  {project.name}
                </h3>
                {project.featured && (
                  <span
                    style={{
                      background: 'rgba(247, 179, 43, 0.2)',
                      color: 'var(--color-accent)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '1rem',
                      fontSize: '0.8rem',
                      fontWeight: 700
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>
              
              <p style={{ color: 'rgba(255,255,255,0.7)' }} className="mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies?.map((tech: string, i: number) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      background: 'rgba(255, 107, 53, 0.1)',
                      color: 'var(--color-primary)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    Ver en vivo ↗
                  </a>
                )}
                {project.repo && (
                  <a
                    href={`https://${project.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
