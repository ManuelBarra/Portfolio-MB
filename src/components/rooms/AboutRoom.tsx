'use client'

import type { ResumePersonal } from '@/types/resume'
import { useLocale, t } from '@/hooks/useLocale'

interface AboutRoomProps {
  personal: ResumePersonal
}

export function AboutRoom({ personal }: AboutRoomProps) {
  const { locale } = useLocale()
  const paragraphs = personal.about ?? [personal.bio]

  return (
    <div className="about-room">
      <div className="about-avatar-card">
        <div className="about-avatar-card__image">
          {personal.avatar ? (
            <img
              src={personal.avatar}
              alt={`${personal.firstName} ${personal.lastName}`}
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
            />
          ) : (
            <span>{personal.firstName[0]}{personal.lastName[0]}</span>
          )}
        </div>
        <div className="about-avatar-card__name">
          {personal.firstName} {personal.lastName}
        </div>
        <div className="about-avatar-card__title">{t(personal.title, locale)}</div>
        {personal.links.github && (
          <a
            href={`https://${personal.links.github}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}
          >
            {personal.links.github}
          </a>
        )}
      </div>

      <div className="about-bio">
        <span className="about-bio__label">// about.md</span>
        {paragraphs.map((text, i) => (
          <p key={i} className="about-bio__text">{t(text, locale)}</p>
        ))}
      </div>
    </div>
  )
}
