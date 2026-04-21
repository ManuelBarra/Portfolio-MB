import { useEffect, useState } from 'react'
import type { Resume } from '@/types/resume'

export function useResume() {
  const [resume, setResume] = useState<Resume | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const draft = localStorage.getItem('resume_draft')
    if (draft) {
      try {
        setResume(JSON.parse(draft))
        setLoading(false)
        return
      } catch {
        localStorage.removeItem('resume_draft')
      }
    }

    import('@/data/resume.json')
      .then((data) => {
        setResume(data.default as Resume)
        setLoading(false)
      })
      .catch(() => {
        setError('Error cargando datos del portfolio')
        setLoading(false)
      })
  }, [])

  const updateResume = (updates: Partial<Resume>) => {
    setResume((prev) => {
      if (!prev) return prev
      const updated = { ...prev, ...updates }
      localStorage.setItem('resume_draft', JSON.stringify(updated))
      return updated
    })
  }

  const resetToDraft = () => {
    localStorage.removeItem('resume_draft')
    window.location.reload()
  }

  return { resume, loading, error, updateResume, resetToDraft }
}
