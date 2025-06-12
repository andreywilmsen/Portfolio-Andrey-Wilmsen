"use client"

import TechCard from "./TechCard";
import ProjectListContent from "./ProjectListContent";
import { ProjectListData } from "./types";

export default function Projects({ listProjects }: ProjectListData) {
    return (
        <ul className="text-secondary font-semibold text-[18px] mt-10">
            {/* Recebe o array de objetos com seus nomes do projeto, os links deles e as tecnologias utilizadas (card) */}

            {listProjects.map((project, index) => (
                <a key={index} href={project.link} target="_blank">
                    <li key={index} className="my-5 hover:scale-105 transition-transform duration-300">
                        {/* Passa os nomes e os links para esse componente */}
                        <ProjectListContent project={project} />

                        <div className="flex gap-2">

                            {/* Faz um map nos cards de cada projeto e cria os cards necessários (independente da quantidade) */}
                            {project.card.map((tech, i) => (
                                <TechCard key={i} tech={tech as "react" | "node" | "vue" | "express"} />
                            ))}

                        </div>
                    </li>
                </a>
            ))}
        </ul>
    )
}