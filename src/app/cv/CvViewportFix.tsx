'use client'

import { useEffect } from 'react'

/**
 * The main site locks html/body scroll + hides the cursor for the
 * full-viewport 3D "world" (see globals.css). This route is a plain
 * scrollable document, so undo those two globals while it's mounted.
 */
export function CvViewportFix() {
  useEffect(() => {
    document.documentElement.classList.add('cv-route')
    document.body.classList.add('cv-route')
    return () => {
      document.documentElement.classList.remove('cv-route')
      document.body.classList.remove('cv-route')
    }
  }, [])

  return null
}
