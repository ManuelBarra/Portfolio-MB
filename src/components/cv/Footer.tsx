'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import type { ResumePersonal } from '@/types/resume'

interface FooterProps {
  personal: ResumePersonal
}

export function Footer({ personal }: FooterProps) {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!footerRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            footerRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
          )
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={footerRef}
      style={{
        background: 'var(--color-bg-dark)',
        color: 'var(--color-text-light)',
        padding: '6rem 0 3rem',
        opacity: 0,
      }}
    >
      <div className="container-portfolio">
        {/* Headline */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--color-primary)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            ✦ Contacto
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontStyle: 'italic',
              marginBottom: '1.5rem',
              color: 'var(--color-text-light)',
            }}
          >
            Trabajemos juntos
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(245,245,245,0.6)',
              maxWidth: '480px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}
          >
            ¿Tienes un proyecto en mente? Estoy disponible para freelance, colaboraciones y oportunidades de equipo.
          </p>
          {personal.email && (
            <a
              href={`mailto:${personal.email}`}
              style={{
                display: 'inline-block',
                padding: '0.85rem 2.5rem',
                background: 'var(--color-primary)',
                color: 'white',
                fontWeight: 700,
                fontSize: '1rem',
                borderRadius: 'var(--radius-md)',
                letterSpacing: '0.04em',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-glow)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {personal.email}
            </a>
          )}
        </div>

        {/* Divisor */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'rgba(245,245,245,0.35)',
            }}
          >
            {personal.firstName} {personal.lastName}
          </p>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {personal.links.github && (
              <a
                href={`https://${personal.links.github}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  fontSize: '0.85rem',
                  color: 'rgba(245,245,245,0.45)',
                  fontFamily: 'var(--font-mono)',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,245,245,0.45)')}
              >
                GitHub
              </a>
            )}
            {personal.links.linkedin && (
              <a
                href={`https://${personal.links.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  fontSize: '0.85rem',
                  color: 'rgba(245,245,245,0.45)',
                  fontFamily: 'var(--font-mono)',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,245,245,0.45)')}
              >
                LinkedIn
              </a>
            )}
          </div>

          <p
            style={{
              fontSize: '0.75rem',
              color: 'rgba(245,245,245,0.2)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            © {new Date().getFullYear()} — Phoenician Design V2
          </p>
        </div>
      </div>
    </footer>
  )
}
