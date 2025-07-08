import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '../components/Navbar'
import LayoutFooter from '@/components/LayoutFooter'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {

    title: 'Chriserino.com',
    description: 'My Dev Playground',

}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <body className={inter.className + " bg-slate-300  text-slate-900"}>
                <Navbar />
                <div className="min-h-[500px] pt-5">{children}</div>
                <LayoutFooter />
            </body>
        </html>
    )

}
