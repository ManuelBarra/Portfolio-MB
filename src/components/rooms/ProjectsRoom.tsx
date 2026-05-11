'use client'

import type { ResumeProject } from '@/types/resume'

interface ProjectsRoomProps {
  projects: ResumeProject[]
}

export function ProjectsRoom({ projects }: ProjectsRoomProps) {
  return (
    <>
      <h2 className="section-title">
        <span className="section-title__accent">//</span> Projects
      </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card__name">{project.name}</div>
            <p className="project-card__desc">{project.description}</p>
            <div className="project-card__tech">
              {project.technologies.map((tech) => (
                <span key={tech} className="project-card__tech-tag">{tech}</span>
              ))}
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
              >
                Visit site &rarr;
              </a>
            )}
            {project.repo && (
              <a
                href={`https://${project.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
              >
                Source &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
