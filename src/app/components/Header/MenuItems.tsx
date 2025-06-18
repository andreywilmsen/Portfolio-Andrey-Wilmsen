"use client"

import { HeaderProps } from "./types";

export default function MenuItems({ items, mobile = false, home, admin, onClickItem }: HeaderProps) {

    return (
        <nav className={`${admin ? "w-full" : ""}`}><ul
            className={`text-sm ${admin ? "flex-col" : ""} ${mobile ? "space-y-2 mt-4 text-center md:hidden w-dvw" : "space-x-6 justify-center hidden md:flex"}`}>
            {items.map((item, index) => (
                <a className={`${admin && " my-4 w-full justify-center"}`} key={index} href={`${home ? "#" : ""}${admin ? "/admin/" : ""}${item.link || ""}`} onClick={mobile ? onClickItem : undefined}><li className={`text-text-secondary px-3 py-1 ${mobile && "my-8"} hover:scale-105 hover:text-white transition-transform duration-300`} key={index}>{item.item}</li></a>
            ))}
        </ul>
        </nav>)


}