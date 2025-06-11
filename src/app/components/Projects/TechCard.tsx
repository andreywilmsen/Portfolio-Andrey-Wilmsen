"use client"

import { TechCardProps } from "./types";

const techConfig = {
    react: { bg: "bg-react", text: "text-react-secondary", label: "React" },
    node: { bg: "bg-node", text: "text-node-secondary", label: "Node" },
    vue: { bg: "bg-vue", text: "text-vue-secondary", label: "Vue" },
    express: { bg: "bg-express", text: "text-express-secondary", label: "Express" },
};

export default function TechCard({ tech }: TechCardProps) {
    const config = techConfig[tech];

    return (
        <div className={`flex justify-center items-center w-[64px] h-[20px] ${config.bg} ${config.text} rounded mt-2`}>
            <span className="text-[14px]">{config.label}</span>
        </div>
    );
}
