import Link from "next/link"
import Image from "next/image"
import { RepoCardProps, RepoProps } from "@/lib/definitions"

export default function RepoCard({ repo, repoIndex }: RepoCardProps) {
    return (
        <div key={`repo-${repoIndex}`} className="flex flex-col justify-between gap-3 w-auto px-6 py-4 border-[1px] rounded-lg border-white/20 shadow-md shadow-gray-500/50 bg-white/40 backdrop-blur-sm">
            <div className="text-lg font-bold text-center">{repo.title}</div>
            <div className="text-sm font-semibold flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-center text-center">
                {/* <span className="sm:mr-2">Tech:</span> */}
                <span className="text-center sm:text-left">Tech:</span>
                <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
                    {/* <li key={`repo-tech-${repoIndex}`}>Tech:</li> */}
                    {repo?.technologies?.map((tech: any, techIndex: number) => (
                        <li key={`repo-tech-${repoIndex}-${techIndex}`}>
                            {/* <Link key={`tech-link-${repoIndex}-${techIndex}`} href={tech?.href} target='_blank' rel="noopener noreferrer" className="text-black bg-gray-100 px-2 py-1 rounded-md hover:text-indigo-500 hover:bg-white whitespace-nowrap">{tech.title}</Link> */}
                            <Link key={`tech-link-${repoIndex}-${techIndex}`} href={tech?.href} target='_blank' rel="noopener noreferrer" className="text-black bg-gray-100 px-2 py-1 rounded-md border border-gray-300 hover:text-sky-700 hover:bg-white whitespace-nowrap">{tech.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex flex-row justify-center'><Image src={repo.image} alt={repo.title} width={256} height={128} className='rounded-lg' style={{ width: "768px", height: '128px' }} /></div>
            <div className="">{repo.description}</div>
            <div className="grid grid-cols-2 gap-3">
                <Link href={repo?.href} className='flex-1 rounded-md px-2 py-1 text-center whitespace-nowrap text-slate-100 bg-slate-500 hover:bg-slate-400'>View</Link>
                <Link href={repo?.github} className='flex-1 rounded-md px-2 py-1 text-center whitespace-nowrap text-slate-100 bg-slate-500 hover:bg-slate-400'>Github Repo</Link>
            </div>
        </div>
    )
}