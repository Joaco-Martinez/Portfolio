import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Joaquín Martínez | Full Stack Developer',
  description: 'Desarrollador Full Stack con foco en frontend, especializado en construir plataformas web robustas, escalables y orientadas a negocio. React, Next.js, TypeScript.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Frontend', 'Backend', 'Node.js', 'Argentina'],
  authors: [{ name: 'Joaquín Martínez' }],
  creator: 'Joaquín Martínez',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    title: 'Joaquín Martínez | Full Stack Developer',
    description: 'Desarrollador Full Stack con foco en frontend, especializado en construir plataformas web robustas, escalables y orientadas a negocio.',
    siteName: 'Joaquín Martínez Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joaquín Martínez | Full Stack Developer',
    description: 'Desarrollador Full Stack con foco en frontend, especializado en construir plataformas web robustas, escalables y orientadas a negocio.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1f35',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
