import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ÉCLAT 2K26 - ECE Department Fest',
  description: 'ÉCLAT 2K26: The flagship annual festival of the Electronics and Communication Engineering department at AKITS. Explore technical competitions, cultural events, and celebrate engineering excellence.',
  generator: 'v0.app',
  keywords: ['ÉCLAT', 'ECE', 'AKITS', 'Engineering Fest', 'Competition'],
  icons: {
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUm7ewA5nX8BNbySXg4FQ5SY16E_TDpbg17g&s',
    apple: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUm7ewA5nX8BNbySXg4FQ5SY16E_TDpbg17g&s',
  },
  openGraph: {
    title: 'ÉCLAT 2K26 - ECE Department Fest',
    description: 'Experience the pinnacle of technical and cultural excellence at ÉCLAT 2K26',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
