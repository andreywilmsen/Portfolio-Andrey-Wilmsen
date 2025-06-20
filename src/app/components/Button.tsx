
import clsx from "clsx";
import { ButtonProps } from "./types";

export default function Button({ name, source, color, href, hidden, projectsButtons, heroButtons, aboutButtons, tableButton, addItem, hov, noImage, onClick }: ButtonProps) {

    const baseClasses = clsx(
        "flex items-center rounded text-white py-5 transition-transform duration-300 cursor-pointer",
        projectsButtons && "w-[181px] h-[35px]",
        heroButtons && "md:w-36 h-8",
        aboutButtons && "w-[150px] h-[35px]",
        tableButton && "w-[40px] mx-2 h-[40px] justify-center",
        addItem && "md:w-36 h-8 w-[131px] justify-center",
        hov && "hover:scale-105",
        color
    )

    const content = (
        <>
            {!noImage && source && (
                <img src={`/icons/${source}`} alt={name ? `${name} icon` : "icon"} className="mx-2 w-[26px] h-[26px]" draggable={false} />)}
            <span className={clsx(hidden && "hidden", "justify-center w-2/3 md:flex")}> {name} </span>
        </>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses} > {content} </a>
        );
    }

    return (
        <button type="button" onClick={onClick} className={baseClasses}> {content} </button>
    );
}