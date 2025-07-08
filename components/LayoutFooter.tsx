import React from 'react'
import Link from 'next/link'

export default function LayoutFooter() {
    const currentYear = new Date().getFullYear()
    return (
        <div className="flex flex-row justify-center text-sm bg-zinc-800">
            &copy; {currentYear} Christopher Robinson. All rights reserved.
        </div>

    )
}
