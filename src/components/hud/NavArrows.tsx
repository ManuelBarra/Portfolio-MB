'use client'

interface NavArrowsProps {
  activeIdx: number
  total: number
  onPrev: () => void
  onNext: () => void
}

export function NavArrows({ activeIdx, total, onPrev, onNext }: NavArrowsProps) {
  return (
    <>
      <button
        className="nav-arrow nav-arrow--left"
        onClick={onPrev}
        disabled={activeIdx === 0}
        aria-label="Previous room"
      >
        &#8249;
      </button>
      <button
        className="nav-arrow nav-arrow--right"
        onClick={onNext}
        disabled={activeIdx === total - 1}
        aria-label="Next room"
      >
        &#8250;
      </button>
    </>
  )
}
