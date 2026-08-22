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

export function EducationRoom({ education }: EducationRoomProps) {
  const { locale } = useLocale()

  return (
    <>
      <h2 className="section-title">
        <span className="section-title__accent">//</span> Education
      </h2>
      <div className="edu-grid">
        {education.map((edu) => (
          <div key={edu.id} className="edu-card">
            <div className="edu-card__date">
              {formatDate(edu.startDate, false)} — {formatDate(edu.endDate, edu.current)}
              {edu.status && <span className="edu-card__status">{t(edu.status, locale)}</span>}
            </div>
            <div className="edu-card__institution">{edu.institution}</div>
            <div className="edu-card__degree">{t(edu.degree, locale)}</div>
            <div className="edu-card__field">{t(edu.field, locale)}</div>
            <div className="edu-card__location">{edu.location}</div>
          </div>
        ))}
      </div>
    </>
  )
}
