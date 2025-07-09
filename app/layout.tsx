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
            <body className={inter.className + " min-h-screen flex flex-col bg-slate-400  text-slate-800"}>
                <Navbar />
                <main className="flex flex-row justify-center flex-grow">
                    <div className="w-full">
                        {children}
                    </div>
                </main>
                <LayoutFooter />
            </body>
        </html>
    )

}
