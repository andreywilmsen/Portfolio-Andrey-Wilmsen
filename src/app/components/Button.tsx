interface ButtonProps {
    name: string;
    source: string;
    color: string;
    href?: string;
}

export default function Button({ name, source, color, href }: ButtonProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`flex items-center h-8 md:w-36 rounded ${color} text-white py-5`}>
            <img src={`/icons/${source}`} alt={`${name} icon`} className="mx-2 w-[26px] h-[26px]" />
            <span className="justify-center w-2/3 hidden md:flex">{name}</span>
        </a>
    )
}