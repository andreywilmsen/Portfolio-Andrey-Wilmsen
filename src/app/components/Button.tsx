interface HeaderProps {
    name: string;
    source: string;
    color: string;
}

export default function Button({ name, source, color }: HeaderProps) {
    return (
        <button className={`flex items-center w-full md:w-36 h-8 flex md:mx-4 rounded ${color} text-white py-5`}>
            <img src={`/icons/${source}`} alt={`${name} icon`} className="mx-2 w-[26px] h-[26px]" />
            <span className="w-2/3 hidden md:inline">{name}</span>
        </button>
    )
}