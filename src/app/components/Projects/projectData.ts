import { ProjectListData } from "./types";

export const projectData: ProjectListData = {
    listProjects: [
        {
            name: "Sistema web desenvolvido consumindo a API do Pokemón",
            link: "https://poke-api-dep.vercel.app/",
            card: ["vue"]
        },
        {
            name: "API Node.js para Gerenciamento de Usuários e Autenticação",
            link: "https://github.com/andreywilmsen/Login-JWT-TDD",
            card: ["node", "express"]
        },
        {
            name: "Sistema de gestão de notas fiscais",
            link: "https://github.com/andreywilmsen/getec_notas",
            card: ["react", "node", "express"]
        }
    ]
};
