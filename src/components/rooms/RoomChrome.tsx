'use client'

interface RoomChromeProps {
  tag: string
  number: number
  children: React.ReactNode
}

export function RoomChrome({ tag, number, children }: RoomChromeProps) {
  return (
    <section className="room" aria-label={`${tag} room`}>
      <div className="room-grid" />
      <div className="room-floor" />
      <div className="room-corner room-corner--tl" />
      <div className="room-corner room-corner--tr" />
      <div className="room-corner room-corner--bl" />
      <div className="room-corner room-corner--br" />
      <span className="room-tag">{tag}</span>
      <span className="room-number">{String(number).padStart(2, '0')}</span>
      <div className="room-content">
        {children}
      </div>
    </section>
  )
}
