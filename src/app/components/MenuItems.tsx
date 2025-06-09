"use client"

interface HeaderProps {
    items: string[];
    mobile?: boolean;
}

export default function MenuItems({ items, mobile = false }: HeaderProps) {

    return (
        <nav><ul className={
            mobile
                ? "space-y-2 text-sm text-center mt-4 md:hidden w-3/3"
                : "space-x-6 text-sm justify-center hidden md:flex"}>
            {items.map((item, index) => (
                <li className="text-text-secondary px-3 py-1" key={index}>{item}</li>
            ))}
        </ul>
        </nav>)


}