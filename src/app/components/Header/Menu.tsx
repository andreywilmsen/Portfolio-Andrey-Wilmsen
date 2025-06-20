"use client"

import clsx from "clsx";
import { useState } from "react"
import Hamburguer from "../Hamburguer"
import MenuItems from "../Header/MenuItems"
import Logo from "../Logo";
import { HeaderProps } from "./types";

export default function Header({ items, home, admin }: HeaderProps) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={clsx(admin && "md:fixed md:w-50 bg-section-primary md:min-h-dvh items-center", home && "flex bg-black min-h-14 items-center", isOpen ? "flex-col" : "flex-row")}>
            <div className={clsx(admin && "bg-section-primary md:flex-col flex", home && "w-full flex")}>
                <div className={clsx(admin && "w-full my-3", home && "w-1/3")}>
                    <Logo />
                </div>

                <div className={clsx(home && "flex px-5 w-2/3 justify-end md:w-1/3 md:justify-center")}>

                    <MenuItems home={home} admin={admin} items={items} />

                    <div className={clsx(admin && "m-3 lg:hidden", "flex flex-col justify-center md:hidden items-center")}>
                        <button aria-expanded={isOpen} aria-label={isOpen ? "Fechar menu" : "Abrir menu"} className={clsx("flex justify-center items-center md:hidden")} onClick={() => setIsOpen(!isOpen)}>
                            <Hamburguer open={isOpen} />
                        </button>
                    </div>

                </div>
            </div>
            {isOpen && (
                <div>
                    <MenuItems home={home} admin={admin} items={items} mobile onClickItem={() => setIsOpen(false)} />
                </div>
            )}
        </header>
    )
}