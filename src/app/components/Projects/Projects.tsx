"use client"

import ProjectTitle from "./ProjectTitle";
import ProjectsList from "./ProjectsList";
import Button from "../Button";

// Dados mockados para lista de projetos (temporário)
import { projectData } from "./projectData";

export default function Projects() {
    return (
        <section className="bg-section-secondary flex flex-col justify-center items-center w-full min-h-screen">
            <div className="w-5/6 md:w-2/3 lg:w-3/6 xl:w-2/6">
                <ProjectTitle />
                <ProjectsList listProjects={projectData.listProjects} />
                <div className="flex justify-center items-center mt-20">
                    <Button projectsButtons name="Todos projetos" source="github.png" color="bg-github" href="https://github.com/andreywilmsen" />
                </div>
            </div>
        </section>
    )
}