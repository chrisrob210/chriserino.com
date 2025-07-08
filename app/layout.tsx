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
            <body className={inter.className + "min-h-screen bg-zinc-800  text-slate-800"}>
                <Navbar />
                <div className="flex flex-col items-center min-h-[90vh] bg-slate-400 border pt-5">
                    <div className='w-2/3'>{children}</div>
                </div>
                <LayoutFooter />
            </body>
        </html>
    )

}
