'use client'

import { useState } from 'react'
import type { ResumeExperience } from '@/types/resume'
import { useLocale, t } from '@/hooks/useLocale'

interface ExperienceRoomProps {
  experience: ResumeExperience[]
}

function formatDate(date: string | null, current: boolean): string {
  if (current || !date) return 'Present'
  const [year, month] = date.split('-')
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${months[parseInt(month) - 1]} ${year}`
}

export function ExperienceRoom({ experience }: ExperienceRoomProps) {
  const [activeIdx, setActiveIdx] = useState(0)
  const active = experience[activeIdx]
  const { locale } = useLocale()

  return (
    <>
      <h2 className="section-title">
        <span className="section-title__accent">//</span> Experience
      </h2>
      <div className="exp-room">
        <div className="exp-rail">
          {experience.map((exp, i) => (
            <div
              key={exp.id}
              className={`exp-item ${i === activeIdx ? 'exp-item--active' : ''} ${exp.type === 'break' ? 'exp-item--break' : ''}`}
              onClick={() => setActiveIdx(i)}
              role="button"
              tabIndex={0}
              aria-label={`${exp.company} — ${t(exp.position, locale)}`}
              aria-current={i === activeIdx ? 'true' : undefined}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveIdx(i)
                }
              }}
            >
              <div className="exp-item__date">
                {formatDate(exp.startDate, false)} — {formatDate(exp.endDate, exp.current)}
                {exp.parallel && <span className="exp-item__parallel"> · en paralelo</span>}
              </div>
              {exp.type === 'break' ? (
                <div className="exp-item__break-label">{exp.company}</div>
              ) : (
                <div className="exp-item__company">{exp.company}</div>
              )}
              <div className="exp-item__role">{t(exp.position, locale)}</div>
            </div>
          ))}
        </div>

        <div className="exp-detail">
          <div className="exp-detail__header">
            <div className={`exp-detail__company${active.type === 'break' ? ' exp-detail__company--break' : ''}`}>
              {active.company}
            </div>
            <div className="exp-detail__role">{t(active.position, locale)}</div>
            <div className="exp-detail__meta">
              <span>{active.location}</span>
              <span>
                {formatDate(active.startDate, false)} — {formatDate(active.endDate, active.current)}
                {active.parallel && <span className="exp-item__parallel"> · en paralelo</span>}
              </span>
            </div>
          </div>

          <p className="exp-detail__desc">{t(active.description, locale)}</p>

          {active.highlights && active.highlights.length > 0 && (
            <ul className="exp-detail__highlights">
              {active.highlights.map((h, i) => (
                <li key={i} className="exp-detail__highlight">{t(h, locale)}</li>
              ))}
            </ul>
          )}

          <div className="exp-detail__tech">
            {active.technologies.map((tech) => (
              <span key={tech} className="exp-detail__tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
