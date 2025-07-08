import Link from 'next/link'
import React from 'react'
import { repos } from '@/constants/repos'
import Image from 'next/image'

export default function PortfolioPage() {
    return (
        <main className="flex flex-row justify-center">
            <div className="flex flex-col items-center">
                <h1 className="text-lg font-bold text-center mb-3">Portfolio</h1>

                {/* Git Repos */}


                <div className="grid grid-flow-row grid-cols-2 gap-4">

                    {/* Loop through Repos */}
                    {repos.map((repo: any, repoIndex: number) => (
                        <div key={`repo-${repoIndex}`} className="flex flex-col justify-between gap-3 w-auto px-6 py-4 bg-gray-300 border-[1px] rounded-lg border-slate-100 shadow-md shadow-gray-500">
                            <div className="text-lg font-bold text-center">{repo.title}</div>
                            <div className="text-center text-sm font-semibold">Tech/Stack: <span className='text-slate-500'>{repo.technologies}</span></div>
                            <div className='flex flex-row justify-center'><Image src={repo.image} alt="" width={256} height={128} className='rounded-lg' style={{ width: "512px", height: '128px' }} /></div>
                            <div className="">{repo.description}</div>
                            <div className="flex flex-row justify-between">
                                <Link href={repo.href} className='w-1/3 border-0 rounded-md p-1 text-center text-slate-100 bg-slate-500 hover:bg-slate-400'>View</Link>
                                <Link href={repo.github} className='w-1/3 border-0 rounded-md p-1 text-center text-slate-100 bg-slate-500 hover:bg-slate-400'>Github Repo</Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </main>
    )
}
