"use client"

import { HeaderProps } from "./types";
import clsx from "clsx";

export default function MenuItems({ items, mobile = false, home, admin, onClickItem }: HeaderProps) {

    return (
        <nav className={clsx(admin ? "w-full" : "")}><ul
            className={clsx(admin ? "flex-col" : "", mobile ? "space-y-2 mt-4 text-center md:hidden w-dvw" : "space-x-6 justify-center hidden md:flex", "text-sm")}>
            {items.map((item, index) => (
                <a
                    key={index}
                    href={home ? `#${item.link}` : admin ? `/admin/${item.link || ""}` : item.link || "#"}
                    onClick={mobile ? onClickItem : undefined}
                    className={clsx(admin && "my-4 w-full justify-center")}>
                    <li className={clsx(mobile && "my-8", "text-text-secondary px-3 py-1 hover:scale-105 hover:text-white transition-transform duration-300")} key={index}>{item.item}</li></a>
            ))}
        </ul>
        </nav>)
}