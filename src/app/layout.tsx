import type { Metadata } from 'next'
import { Space_Grotesk, Syne, JetBrains_Mono, VT323 } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LocaleProvider } from '@/hooks/useLocale'
import { JsonLd } from '@/components/JsonLd'
import { SITE_URL } from '@/lib/site'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const vt323 = VT323({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-vt323',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Manuel Barra Lazo — Frontend Developer & IA Lead',
  description:
    'Portfolio de Manuel Barra Lazo. JavaScript developer con 5+ años creando experiencias web interactivas. Especializado en Frontend moderno y liderazgo técnico en IA.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'Three.js', 'JavaScript', 'TypeScript', 'Barcelona'],
  authors: [{ name: 'Manuel Barra Lazo' }],
  creator: 'Manuel Barra Lazo',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
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
    <html
      lang="es"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${syne.variable} ${jetbrainsMono.variable} ${vt323.variable}`}
    >
      <body>
        <JsonLd />
        <ThemeProvider>
          <LocaleProvider>
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
