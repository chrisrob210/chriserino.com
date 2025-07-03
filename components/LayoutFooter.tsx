import React from 'react'
import Link from 'next/link'

export default function LayoutFooter() {
    return (
        <div className="grid grid-cols-4 gap-0 text-base pt-4 bg-zinc-800">
            {/* About */}
            <div className="col-start-2 flex flex-col justify-center items-center">
                <div className="mb-1 font-semibold">About</div>
                <ul>
                    <li><Link href="" className="text-sm">About A</Link></li>
                </ul>
            </div>

            {/* Links */}
            <div className="flex flex-col justify-center items-center">
                <div className="mb-1 font-semibold">Links</div>
                <ul>
                    <li><Link href="" className="text-sm">Link A</Link></li>
                </ul>
            </div>
        </div>

    )
}
