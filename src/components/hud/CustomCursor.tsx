'use client'

import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function CustomCursor() {
  const reticleRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    // Reduced motion: move the cursor directly, no eased RAF loop.
    if (prefersReducedMotion) {
      function onMouseMoveDirect(e: MouseEvent) {
        if (reticleRef.current) {
          reticleRef.current.style.left = `${e.clientX}px`
          reticleRef.current.style.top = `${e.clientY}px`
        }
        if (dotRef.current) {
          dotRef.current.style.left = `${e.clientX}px`
          dotRef.current.style.top = `${e.clientY}px`
        }
      }
      window.addEventListener('mousemove', onMouseMoveDirect)
      return () => window.removeEventListener('mousemove', onMouseMoveDirect)
    }

    function onMouseMove(e: MouseEvent) {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    function animate() {
      pos.current.x += (target.current.x - pos.current.x) * 0.15
      pos.current.y += (target.current.y - pos.current.y) * 0.15

      if (reticleRef.current) {
        reticleRef.current.style.left = `${pos.current.x}px`
        reticleRef.current.style.top = `${pos.current.y}px`
      }
      if (dotRef.current) {
        dotRef.current.style.left = `${target.current.x}px`
        dotRef.current.style.top = `${target.current.y}px`
      }

      rafId = requestAnimationFrame(animate)
    }

    let rafId = requestAnimationFrame(animate)
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [prefersReducedMotion])

  return (
    <>
      <div ref={reticleRef} className="cursor-reticle" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
