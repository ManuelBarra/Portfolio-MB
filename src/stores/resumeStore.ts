import { create } from 'zustand'
import type { Resume } from '@/types/resume'

interface ResumeStore {
  resume: Resume | null
  loading: boolean
  activeSection: string
  setResume: (resume: Resume) => void
  setLoading: (loading: boolean) => void
  setActiveSection: (section: string) => void
}

export const useResumeStore = create<ResumeStore>((set) => ({
  resume: null,
  loading: true,
  activeSection: 'hero',
  setResume: (resume) => set({ resume }),
  setLoading: (loading) => set({ loading }),
  setActiveSection: (section) => set({ activeSection: section }),
}))
