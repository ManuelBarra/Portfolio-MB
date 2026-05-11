'use client'

import { useEffect, useState } from 'react'

const ROOM_LABELS = ['Home', 'About', 'Experience', 'Education', 'Skills', 'Projects', 'Contact']

interface HudTopProps {
  activeIdx: number
}

export function HudTop({ activeIdx }: HudTopProps) {
  const [time, setTime] = useState('')

  useEffect(() => {
    function tick() {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="hud-top">
      <div className="hud-top__brand">
        <span className="hud-top__status-dot" />
        MANU.OS
      </div>

      <div className="hud-top__sector">
        <span>sector: {ROOM_LABELS[activeIdx]?.toLowerCase()}</span>
        <span>room {activeIdx + 1}/{ROOM_LABELS.length}</span>
      </div>

      <div className="hud-top__right">
        <span>{time}</span>
        <span>v3.0</span>
      </div>
    </div>
  )
}
