"use client"

import { ProjectListContentProps } from "./types"

export default function ProjectListContent({ project }: ProjectListContentProps) {
    return (
        <div className="flex items-center" >
            <span >{project.name}</span>
            <img src="/icons/icone_link_externo.png" alt="Link Externo" className="w-[24px] h-[24px] ml-4" />
        </div>
    )
}