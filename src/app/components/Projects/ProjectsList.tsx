"use client"

import TechCard from "./TechCard";
import ProjectListContent from "./ProjectListContent";

interface ProjectsListProps {
    listProjects: { name: string, link: string, card: string[] }[];
}

export default function Projects({ listProjects }: ProjectsListProps) {
    return (
        <ul className="text-secondary font-semibold text-[18px] mt-10">
            {listProjects.map((project, index) => (
                <li key={index} className="my-5">
                    <ProjectListContent project={project} />
                    <div className="flex gap-2">
                        {project.card.map((tech, i) => (
                            <TechCard cards={project.card} key={i} react={tech === "react"} node={tech === "node"} vue={tech === "vue"} express={tech === "express"}
                            />
                        ))}
                    </div>
                </li>
            ))}
        </ul>
    )
}