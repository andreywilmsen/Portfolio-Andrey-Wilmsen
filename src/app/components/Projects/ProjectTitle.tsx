"use client"

import clsx from "clsx"

export default function ProjectTitle() {
    return (
        <h1 className={clsx("text-secondary my-3 text-[32px] md:text-[34px] font-medium")}>
            <span className={clsx("border-b-2 border-b-highlight pb-2")}>PROJETOS</span>
        </h1>

    )
}