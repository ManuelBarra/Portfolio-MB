import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split('-')
  const date = new Date(Number(year), Number(month) - 1)
  return date.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })
}

export function getDateRange(startDate: string, endDate: string | null, current: boolean): string {
  const start = formatDate(startDate)
  if (current) return `${start} — Presente`
  if (!endDate) return start
  return `${start} — ${formatDate(endDate)}`
}

export function skillLevelLabel(level: number): string {
  const labels = ['', 'Básico', 'Intermedio', 'Avanzado', 'Experto', 'Maestro']
  return labels[level] ?? ''
}
