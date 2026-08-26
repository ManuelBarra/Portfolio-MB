'use client'

import type { ResumeEducation } from '@/types/resume'
import { useLocale, t } from '@/hooks/useLocale'

interface EducationRoomProps {
  education: ResumeEducation[]
}

function formatDate(date: string | null, current: boolean): string {
  if (current || !date) return 'Present'
  const [year, month] = date.split('-')
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${months[parseInt(month) - 1]} ${year}`
}

function EduCard({ edu, locale }: { edu: ResumeEducation; locale: 'es' | 'en' }) {
  return (
    <div className={`edu-card${edu.status ? ' edu-card--planned' : ''}`}>
      <div className="edu-card__date">
        {formatDate(edu.startDate, false)} — {formatDate(edu.endDate, edu.current)}
        {edu.status && <span className="edu-card__status">{t(edu.status, locale)}</span>}
      </div>
      <div className="edu-card__institution">{edu.institution}</div>
      <div className="edu-card__degree">{t(edu.degree, locale)}</div>
      <div className="edu-card__field">{t(edu.field, locale)}</div>
      <div className="edu-card__location">{edu.location}</div>
    </div>
  )
}

export function EducationRoom({ education }: EducationRoomProps) {
  const { locale } = useLocale()
  const completed = education.filter((edu) => !edu.status)
  const planned = education.filter((edu) => edu.status)

  return (
    <>
      <h2 className="section-title">
        <span className="section-title__accent">//</span> Education
      </h2>
      <div className="edu-grid">
        {completed.map((edu) => (
          <EduCard key={edu.id} edu={edu} locale={locale} />
        ))}
        {planned.length > 0 && (
          <>
            <div className="edu-grid__subhead">
              {locale === 'es' ? 'Formación en curso · 2026' : 'In-progress training · 2026'}
            </div>
            {planned.map((edu) => (
              <EduCard key={edu.id} edu={edu} locale={locale} />
            ))}
          </>
        )}
      </div>
    </>
  )
}
