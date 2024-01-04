import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/common/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chriserino.com',
  description: 'Tutorials, solutions, and random apps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`w-3/4 mx-auto`}>
        <NavBar />
        {children}
        <footer>testing stuff</footer>
      </body>
    </html>
  )
}
