import Link from 'next/link'
import React from 'react'

export default function PortfolioPage() {
    return (
        <main>
            <h1 className="text-lg font-bold text-center">Portfolio</h1>
            <div>
                <div>Ebay Barcode Search</div>
                <div><Link href="/portfolio/ebay-barcode">Demo</Link></div>
                <div><Link href="">Github Repo</Link></div>
            </div>
        </main>
    )
}
