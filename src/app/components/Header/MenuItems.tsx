"use client"

import { HeaderProps } from "./types";

export default function MenuItems({ items, mobile = false }: HeaderProps) {

    return (
        <nav><ul className={
            mobile
                ? "space-y-2 text-sm mt-4 text-center md:hidden w-dvw"
                : "space-x-6 text-sm justify-center hidden md:flex"}>
            {items.map((item, index) => (
                <a key={index} href={`#${item.link}`}><li className={`text-text-secondary px-3 py-1 ${mobile && "my-8"}`} key={index}>{item.item}</li></a>
            ))}
        </ul>
        </nav>)


}