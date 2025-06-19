
import clsx from "clsx";

interface ButtonProps {
    name?: string;
    source: string;
    color: string;
    href?: string;
    projectsButtons?: boolean;
    heroButtons?: boolean;
    hidden?: boolean;
    hov?: boolean;
    aboutButtons?: boolean;
}

export default function Button({ name, source, color, href, hidden, projectsButtons, heroButtons, aboutButtons, hov }: ButtonProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer"
            className={clsx(
                "flex items-center rounded text-white py-5 transition-transform duration-300",
                projectsButtons && "w-[181px] h-[35px]",
                heroButtons && "md:w-36 h-8",
                aboutButtons && "w-[150px] h-[35px]",
                hov && "hover:scale-105",
                color
            )}>
            <img src={`/icons/${source}`} alt={`${name} icon`} className="mx-2 w-[26px] h-[26px]" />
            <span className={clsx(hidden && "hidden", "justify-center w-2/3 md:flex")}>{name}</span>
        </a>
    )
}