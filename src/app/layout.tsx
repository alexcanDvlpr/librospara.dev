import Navbar from '@/components/shared/Navbar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '📚 Libros de Desarrollo de Software | librospara.dev',
  description: 'Libros de Desarrollo de Software. librospara.dev es un sitio para la comunidad dev para tener un directorio de libros y guías para el desarrollo web y de software.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
