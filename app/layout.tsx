import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import LayoutFooter from '@/components/LayoutFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Chriserino.com',
    description: 'A Dev Playground',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <div className="min-h-[500px] bg-slate-400 pt-5">{children}</div>
                <LayoutFooter />
            </body>
        </html>
    )
}
