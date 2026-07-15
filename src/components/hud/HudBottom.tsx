'use client'

const ROOM_LABELS = ['Home', 'About', 'Exp', 'Edu', 'Skills', 'Projects', 'Contact']

interface HudBottomProps {
  activeIdx: number
  onNavigate: (idx: number) => void
}

export function HudBottom({ activeIdx, onNavigate }: HudBottomProps) {
  return (
    <div className="hud-bottom">
      <div className="minimap">
        {ROOM_LABELS.map((label, i) => (
          <button
            key={label}
            className={`minimap__dot ${i === activeIdx ? 'minimap__dot--active' : ''}`}
            onClick={() => onNavigate(i)}
            aria-label={`Go to ${label}`}
            aria-current={i === activeIdx ? 'true' : undefined}
            title={label}
          />
        ))}
        <span className="minimap__label">{ROOM_LABELS[activeIdx]}</span>
      </div>

      <div className="hud-keys">
        <kbd>&larr;</kbd> <kbd>&rarr;</kbd> navigate
        &nbsp;&middot;&nbsp;
        <kbd>1</kbd>-<kbd>7</kbd> jump
      </div>
    </div>
  )
}
