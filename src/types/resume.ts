export interface ResumeMetadata {
  version: string
  lastUpdated: string
  author: string
}

export interface ResumeLinks {
  github?: string
  linkedin?: string
  website?: string
  twitter?: string
}

export interface ResumePersonal {
  firstName: string
  lastName: string
  title: string
  location: string
  email: string
  phone?: string
  bio: string
  links: ResumeLinks
  avatar?: string
}

export interface ResumeExperience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string | null
  current: boolean
  location: string
  description: string
  technologies: string[]
  highlights?: string[]
}

export interface ResumeSkill {
  id: string
  name: string
  category: string
  level: 1 | 2 | 3 | 4 | 5
  icon?: string
}

export interface ResumeProject {
  id: string
  name: string
  description: string
  url?: string
  repo?: string
  technologies: string[]
  featured: boolean
  image?: string
}

export interface ResumeEducation {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string | null
  current: boolean
  location: string
  description?: string
}

export interface ResumeTheme {
  primary: string
  secondary: string
  accent: string
}

export interface Resume {
  metadata: ResumeMetadata
  personal: ResumePersonal
  experience: ResumeExperience[]
  skills: ResumeSkill[]
  projects: ResumeProject[]
  education: ResumeEducation[]
  theme: ResumeTheme
}
