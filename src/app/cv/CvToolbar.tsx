'use client'

import type { Locale } from '@/types/resume'

interface CvToolbarProps {
  locale: Locale
}

const LABELS: Record<Locale, { print: string; back: string }> = {
  es: { print: 'Descargar / Imprimir PDF', back: '← Volver al portfolio' },
  en: { print: 'Download / Print PDF', back: '← Back to portfolio' },
}

export function CvToolbar({ locale }: CvToolbarProps) {
  return (
    <div className="cv-toolbar">
      <a className="cv-toolbar__back" href="/">{LABELS[locale].back}</a>
      <div className="cv-toolbar__actions">
        <a
          className="cv-toolbar__lang"
          href={locale === 'es' ? '/cv?lang=en' : '/cv?lang=es'}
        >
          {locale === 'es' ? 'EN' : 'ES'}
        </a>
        <button className="cv-toolbar__print" onClick={() => window.print()}>
          {LABELS[locale].print}
        </button>
      </div>
    </div>
  )
}
