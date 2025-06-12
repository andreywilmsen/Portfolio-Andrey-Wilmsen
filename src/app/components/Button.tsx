interface ButtonProps {
    name?: string;
    source: string;
    color: string;
    href?: string;
    projectsButtons?: boolean;
    heroButtons?: boolean;
    hidden?: boolean;
    hov?: boolean;
}

export default function Button({ name, source, color, href, hidden, projectsButtons, heroButtons, hov }: ButtonProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`flex items-center ${projectsButtons && "w-[181px] h-[35px]"}  ${heroButtons && "md:w-36 h-8"} rounded ${color} text-white py-5 ${hov && "hover:scale-105"} transition-transform duration-300 `}>
            <img src={`/icons/${source}`} alt={`${name} icon`} className="mx-2 w-[26px] h-[26px]" />
            <span className={`justify-center w-2/3 ${hidden && "hidden"} md:flex`}>{name}</span>
        </a>
    )
}