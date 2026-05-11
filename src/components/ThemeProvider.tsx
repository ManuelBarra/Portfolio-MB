'use client'

import { useEffect } from 'react'
import { useResume } from '@/hooks/useResume'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { resume } = useResume()

  useEffect(() => {
    if (!resume?.theme) return

    const root = document.documentElement
    
    // Inyectar variables de color a nivel raíz
    if (resume.theme.primary) {
      root.style.setProperty('--color-primary', resume.theme.primary)
      // Ajuste para el resplandor 
      root.style.setProperty('--shadow-glow', `0 0 30px ${resume.theme.primary}50`)
    }
    
    if (resume.theme.secondary) {
      root.style.setProperty('--color-secondary', resume.theme.secondary)
    }
    
    if (resume.theme.accent) {
      root.style.setProperty('--color-accent', resume.theme.accent)
      root.style.setProperty('--shadow-glow-gold', `0 0 20px ${resume.theme.accent}60`)
    }
  }, [resume?.theme])

  return <>{children}</>
}
