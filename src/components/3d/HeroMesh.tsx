'use client'

import { useEffect, useRef } from 'react'

const COLS = 40
const ROWS = 25
const SPACING = 30
const PERSPECTIVE = 600
const BASE_Z = -200

export function HeroMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: 0.5, y: 0.5 })
  const time = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId: number
    let w = 0
    let h = 0

    function resize() {
      if (!canvas) return
      const dpr = Math.min(window.devicePixelRatio, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx!.scale(dpr, dpr)
    }

    function project(x: number, y: number, z: number): [number, number, number] {
      const scale = PERSPECTIVE / (PERSPECTIVE - z)
      const px = w / 2 + x * scale
      const py = h / 2 + y * scale
      return [px, py, scale]
    }

    function draw() {
      if (!ctx) return
      time.current += 0.008

      ctx.clearRect(0, 0, w, h)

      const mx = mouse.current.x
      const my = mouse.current.y
      const centerX = (mx - 0.5) * COLS * SPACING
      const centerY = (my - 0.5) * ROWS * SPACING

      // Glow at cursor position
      const [glowX, glowY] = project(centerX, centerY, BASE_Z + 80)
      const grd = ctx.createRadialGradient(glowX, glowY, 0, glowX, glowY, 200)
      grd.addColorStop(0, 'rgba(61, 220, 255, 0.06)')
      grd.addColorStop(1, 'rgba(61, 220, 255, 0)')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, w, h)

      const points: [number, number, number][][] = []

      for (let row = 0; row < ROWS; row++) {
        points[row] = []
        for (let col = 0; col < COLS; col++) {
          const x = (col - COLS / 2) * SPACING
          const y = (row - ROWS / 2) * SPACING

          // Gaussian peak at cursor
          const dx = x - centerX
          const dy = y - centerY
          const dist = Math.sqrt(dx * dx + dy * dy)
          const peak = 80 * Math.exp(-(dist * dist) / (2 * 15000))

          // Waves
          const wave = 8 * Math.sin(col * 0.3 + time.current * 2) * Math.cos(row * 0.2 + time.current * 1.5)

          // Breathing
          const breath = 5 * Math.sin(time.current + col * 0.1 + row * 0.1)

          const z = BASE_Z + peak + wave + breath

          points[row][col] = project(x, y, z)
        }
      }

      // Draw lines
      ctx.strokeStyle = 'rgba(61, 220, 255, 0.12)'
      ctx.lineWidth = 0.5

      // Horizontal lines
      for (let row = 0; row < ROWS; row++) {
        ctx.beginPath()
        for (let col = 0; col < COLS; col++) {
          const [px, py] = points[row][col]
          if (col === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.stroke()
      }

      // Vertical lines
      for (let col = 0; col < COLS; col++) {
        ctx.beginPath()
        for (let row = 0; row < ROWS; row++) {
          const [px, py] = points[row][col]
          if (row === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.stroke()
      }

      // Draw dots at intersections near cursor
      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const [px, py, scale] = points[row][col]
          const x = (col - COLS / 2) * SPACING
          const y = (row - ROWS / 2) * SPACING
          const dx = x - centerX
          const dy = y - centerY
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 300) {
            const alpha = Math.max(0, 0.5 - dist / 600)
            ctx.fillStyle = `rgba(61, 220, 255, ${alpha})`
            ctx.beginPath()
            ctx.arc(px, py, Math.max(1, 1.5 * scale), 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      rafId = requestAnimationFrame(draw)
    }

    function onMouseMove(e: MouseEvent) {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      mouse.current.x = (e.clientX - rect.left) / rect.width
      mouse.current.y = (e.clientY - rect.top) / rect.height
    }

    resize()
    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="hero-mesh-container"
      style={{ width: '100%', height: '100%' }}
    />
  )
}
