import type { Locale, LocalizedText } from '@/types/resume'

/** Resolve a LocalizedText field for the given locale, with a safe fallback. */
export function t(text: LocalizedText | undefined | null, locale: Locale): string {
  if (!text) return ''
  return text[locale] ?? text.es ?? text.en ?? ''
}
