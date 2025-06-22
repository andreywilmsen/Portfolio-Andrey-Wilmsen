"use client"

interface InputContainerTechProps {
    tech: { name: string }[],
}

export default function InputContainerTech({ tech }: InputContainerTechProps) {

    return (
        <div className="flex flex-wrap gap-4 my-5 justify-start items-center">
            {
                tech.map((item, index) => (
                    <div key={index} className="flex">
                        <input className="ml-2" type="radio" />
                        <span className="ml-2">{item.name}</span>
                    </div>))
            }
        </div>
    );
}
