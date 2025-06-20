
import clsx from "clsx";

interface ButtonProps {
    name?: string;
    source?: string;
    color: string;
    href?: string;
    noImage?: boolean;
    projectsButtons?: boolean;
    heroButtons?: boolean;
    addItem?: boolean;
    hidden?: boolean;
    hov?: boolean;
    aboutButtons?: boolean;
    tableButton?: boolean;
}

export default function Button({ name, source, color, href, hidden, projectsButtons, heroButtons, aboutButtons, tableButton, addItem, hov, noImage }: ButtonProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer"
            className={clsx(
                "flex items-center rounded text-white py-5 transition-transform duration-300 cursor-pointer",
                projectsButtons && "w-[181px] h-[35px]",
                heroButtons && "md:w-36 h-8",
                aboutButtons && "w-[150px] h-[35px]",
                tableButton && "w-[40px] mx-2 h-[40px] justify-center",
                addItem && "md:w-36 h-8 w-[131px] justify-center",
                hov && "hover:scale-105",
                color
            )}>
            {!noImage && <img src={`/icons/${source}`} alt={`${name} icon`} className="mx-2 w-[26px] h-[26px]" />}
            <span className={clsx(hidden && "hidden", "justify-center w-2/3 md:flex")}>{name}</span>
        </a>
    )
}