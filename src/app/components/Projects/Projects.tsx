"use client"

import TechCard from "./TechCard";
import ProjectsList from "./ProjectsList";
import Button from "../Button";

interface ProjectsListInterface {
    listProjects: { name: string, link: string, card: string[] }[];
}

const projectData: ProjectsListInterface = {
    listProjects: [{
        name: "Sistema web desenvolvido consumindo a API do Pokemón",
        link: "https://poke-api-dep.vercel.app/",
        card: ["vue"]
    },
    {
        name: "API Node.js para Gerenciamento de Usuários e Autenticação",
        link: "https://github.com/andreywilmsen/Login-JWT-TDD",
        card: ["node", "express"]
    }, {
        name: "Sistema de gestão de notas fiscais",
        link: "https://github.com/andreywilmsen/getec_notas",
        card: ["react", "node", "express"]
    }]
};

export default function Projects() {
    return (
        <section className="bg-section-secondary flex flex-col justify-center items-center w-full min-h-screen">
            <div className="w-5/6 md:w-2/3 lg:w-3/6 xl:w-2/6">

                <h1 className="text-secondary my-3 text-[32px] md:text-[34px] font-medium">
                    <span className="border-b-2 border-b-highlight pb-2">PROJETOS</span>
                </h1>

                <ProjectsList listProjects={projectData.listProjects} />

                <div className="flex justify-center items-center mt-20">
                    <Button projectsButtons name="Todos projetos" source="github.png" color="bg-github" href="https://github.com/andreywilmsen" />
                </div>
            </div>
        </section>
    )
}
