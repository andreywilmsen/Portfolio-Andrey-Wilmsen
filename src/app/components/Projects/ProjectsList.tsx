"use client"

import TechCard from "./TechCard";
import ProjectListContent from "./ProjectListContent";
import { ProjectListData } from "./types";

export default function Projects({ listProjects }: ProjectListData) {
    return (
        <ul className="text-secondary font-semibold text-[18px] mt-10">
            {/* Recebe o array de objetos com seus nomes do projeto, os links deles e as tecnologias utilizadas (card) */}

            {listProjects.map((project, index) => (
                <li key={index} className="my-5">
                    {/* Passa os nomes e os links para esse componente */}
                    <ProjectListContent project={project} />

                    <div className="flex gap-2">

                        {/* Faz um map nos cards de cada projeto e cria os cards necessários (independente da quantidade) */}
                        {project.card.map((tech, i) => (
                            <TechCard key={i} tech={tech as "react" | "node" | "vue" | "express"} />
                        ))}

                    </div>
                </li>
            ))}
        </ul>
    )
}