'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { navlinks } from '../constants/navlinks'
import { Navlink } from '@/lib/definitions'

export default function Navbar() {
    const pathname = usePathname(); // get current path
    return (
        <>
            <ul className='flex flex-row justify-center gap-3 p-1 bg-slate-800'>
                {navlinks.map((navlink, index) => (
                    <li key={`nav-ul-li-${navlink.title.toLowerCase()}`} className={`whitespace-nowrap ${pathname === navlink.href ? `text-slate-400` : `text-white`}`}>
                        <Link key={`navlink-${navlink.title.toLowerCase()}`} href={navlink.href} className='font-semibold'>{navlink.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
