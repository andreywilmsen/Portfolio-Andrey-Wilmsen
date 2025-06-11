"use client"

interface ProjectListContentProps {
    project: { name: string, link: string },
}

export default function ProjectListContent({ project }: ProjectListContentProps) {
    return (
        <div className="flex items-center">
            <span>{project.name}</span>
            <a href={`${project.link}`} target="_blank">
                <img src="/icons/icone_link_externo.png" className="w-[24px] h-[24px] ml-4"></img>
            </a>
        </div>
    )
}