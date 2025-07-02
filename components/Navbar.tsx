import React from 'react'
import Link from 'next/link'
import { navlinks } from '../constants/navlinks'
import { Navlink } from '@/lib/definitions'

export default function Navbar() {

    return (
        // <>
        //     <ul className='flex flex-row justify-center bg-slate-800'>
        //         {navlinks.map((navlink, index) => (
        //             <li className='pt-1 px-2'>
        //                 <Link key={`navlink-${index}`} href={navlink.href}>{navlink.title}</Link>
        //             </li>
        //         ))}
        //     </ul>
        // </>
        <>
            <ul className='flex flex-row justify-center gap-3 p-1 bg-slate-800'>
                {navlinks.map((navlink, index) => (
                    <li key={`nav-ul-li-${navlink.title.toLowerCase()}`} className='whitespace-nowrap'>
                        <Link key={`navlink-${navlink.title.toLowerCase()}`} href={navlink.href}>{navlink.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
