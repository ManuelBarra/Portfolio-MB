import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Manuel Barra Lazo — Frontend Developer & IA Lead',
  description:
    'Portfolio de Manuel Barra Lazo. JavaScript developer con 5+ años creando experiencias web interactivas. Especializado en Frontend moderno y liderazgo técnico en IA.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'Three.js', 'JavaScript', 'TypeScript', 'Barcelona'],
  authors: [{ name: 'Manuel Barra Lazo' }],
  creator: 'Manuel Barra Lazo',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    title: 'Manuel Barra Lazo — Frontend Developer & IA Lead',
    description: 'Portfolio 3D interactivo. Frontend moderno, animaciones y experiencias web únicas.',
    siteName: 'Manuel Barra Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manuel Barra Lazo — Frontend Developer',
    description: 'Portfolio 3D interactivo. Frontend moderno, animaciones y experiencias web únicas.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
