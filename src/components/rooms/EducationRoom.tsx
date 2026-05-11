'use client'

import type { ResumeEducation } from '@/types/resume'

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
            </div>
            <div className="edu-card__institution">{edu.institution}</div>
            <div className="edu-card__degree">{edu.degree}</div>
            <div className="edu-card__field">{edu.field}</div>
            <div className="edu-card__location">{edu.location}</div>
          </div>
        ))}
      </div>
    </>
  )
}
