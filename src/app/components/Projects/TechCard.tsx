"use client"

interface TechCardProps {
    react?: boolean;
    node?: boolean;
    vue?: boolean;
    express?: boolean;
    cards: string[];
}

const techConfig = {
    react: { bg: "bg-react", text: "text-react-secondary", label: "React" },
    node: { bg: "bg-node", text: "text-node-secondary", label: "Node" },
    vue: { bg: "bg-vue", text: "text-vue-secondary", label: "Vue" },
    express: { bg: "bg-express", text: "text-express-secondary", label: "Express" },
};


export default function TechCard({ react, node, vue, express }: TechCardProps) {
    const activeTech = react
        ? "react"
        : node
            ? "node"
            : vue
                ? "vue"
                : express
                    ? "express"
                    : null;

    const tech = activeTech ? techConfig[activeTech] : null;

    return (
        <div className={`flex justify-center items-center w-[64px] h-[20px] ${tech?.bg ?? ''} ${tech?.text ?? ''} rounded mt-2`}>
            <span className="text-[14px]">{tech?.label ?? ''}</span>
        </div>
    );
}
