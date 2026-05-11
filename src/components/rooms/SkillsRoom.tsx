'use client'

import type { ResumeSkill } from '@/types/resume'

interface SkillsRoomProps {
  skills: ResumeSkill[]
}

export function SkillsRoom({ skills }: SkillsRoomProps) {
  const categories = skills.reduce<Record<string, ResumeSkill[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill)
    return acc
  }, {})

  return (
    <>
      <h2 className="section-title">
        <span className="section-title__accent">//</span> Skills
      </h2>
      <div className="skills-grid">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="skill-block">
            <div className="skill-block__category">{category}</div>
            <div className="skill-block__list">
              {items.map((skill) => (
                <div key={skill.id} className="skill-block__item">
                  <span>{skill.name}</span>
                  <div className="skill-block__level">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`skill-block__level-dot ${i < skill.level ? 'skill-block__level-dot--filled' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
