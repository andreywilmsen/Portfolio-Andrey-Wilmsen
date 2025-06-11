"use client"

import { useState } from "react"
import Hamburguer from "../Hamburguer"
import MenuItems from "../Header/MenuItems"
import Logo from "../Logo";
import { HeaderProps } from "./types";

export default function Header({ items }: HeaderProps) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={`flex bg-black ${isOpen ? "flex-col" : "flex-row"} min-h-14 items-center`}>

            <div className="w-full flex">
                <div className="w-1/3">
                    <Logo />
                </div>

                <div className="flex px-5 w-2/3 justify-end md:w-1/3 md:justify-center">
                    <MenuItems items={items} />

                    <div className="flex flex-col justify-center md:hidden items-center">
                        <button aria-expanded={isOpen} aria-label={isOpen ? "Fechar menu" : "Abrir menu"} className="flex justify-center items-center md:hidden" onClick={() => setIsOpen(!isOpen)}>
                            <Hamburguer open={isOpen} />
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div>
                    <MenuItems items={items} mobile />
                </div>
            )}
        </header>
    )
}