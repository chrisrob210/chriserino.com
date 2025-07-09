import Link from 'next/link'
import React from 'react'
import { repos } from '@/constants/repos'
import Image from 'next/image'

export default function PortfolioPage() {

    const avatar = '/images/placeholder.png'

    return (
        <main className="flex flex-row justify-center">
            <div className="flex flex-col items-center">
                {/* <h1 className="text-lg font-bold text-center mb-3">Portfolio</h1> */}

                {/* Picture & Info */}
                {/* <div className='flex flex-col gap-4'>
                    <Image src={avatar} alt="avatar" width={128} height={128} className='rounded-full' style={{ width: "128px", height: '128px' }} />
                    <div></div>
                </div> */}

                {/* Experience */}
                {/* <div>
                    Experience
                </div> */}

                {/* Git Repos */}
                <div className="grid grid-flow-row grid-cols-2 gap-4">
                    {/* Loop through Repos */}
                    {repos.map((repo: any, repoIndex: number) => (
                        <div key={`repo-${repoIndex}`} className="flex flex-col justify-between gap-3 w-auto px-6 py-4 bg-gray-300 border-[1px] rounded-lg border-slate-100 shadow-md shadow-gray-500">
                            <div className="text-lg font-bold text-center">{repo.title}</div>
                            <div className="flex flex-row justify-center text-center text-sm font-semibold">
                                <ul className="flex flex-row gap-3 px-2 py-1 justify-center">
                                    <li>Tech:</li>
                                    {repo?.technologies?.map((tech: any, techIndex: number) => (
                                        <li>
                                            <Link key={`tech-link-${repoIndex}-${techIndex}`} href={tech.href} className="text-black bg-gray-100 px-2 py-1 rounded-md hover:text-indigo-500 hover:bg-white">{tech.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex flex-row justify-center'><Image src={repo.image} alt="" width={256} height={128} className='rounded-lg' style={{ width: "768px", height: '128px' }} /></div>
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
