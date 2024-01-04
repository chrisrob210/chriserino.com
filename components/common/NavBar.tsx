import React from 'react'
import Link from 'next/link'
export default function NavBar() {
    return (
        <div>
            <ul className='grid grid-flow-col w-fit grid-cols-2 gap-0 border border-slate-500'>
                <li className="col-span-1 px-1 border border-blue-500"><Link href={'/'}>Home</Link></li>
                <li className="col-span-1 px-1 border border-blue-500"><Link href={'/tutorials'}>Tutorials</Link></li>
            </ul>
        </div>
    )
}
