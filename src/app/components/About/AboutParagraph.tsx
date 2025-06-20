"use client"

import clsx from "clsx"

export default function AboutParagraph() {
    return (
        <p className={clsx("text-secondary font-normal text-[14px] md:text-[20px]")}>
            Sou um desenvolvedor Fullstack com experiência em <span className="text-highlight">Node.js, Next.js, React, TypeScript, Tailwind, MongoDB, SQL e testes com Jest e TDD.
            </span>. Apaixonado por tecnologia e pela criação de soluções eficientes, foco no desenvolvimento backend e frontend, otimização de sistemas e implementação de APIs REST. Sempre buscando aprimorar habilidades e contribuir para projetos inovadores.
        </p>
    )
}
