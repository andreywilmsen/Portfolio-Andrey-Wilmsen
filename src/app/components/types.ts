export interface ButtonProps {
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
    modalButton?: boolean;
    onClick?: () => void;
}

export interface LogoProps {
    hidden?: boolean;
}

export interface ModalProps {
    nome?: string;
    blog?: boolean;
    projects?: boolean;
    last_updates?: boolean;
}

export interface InputProps {
    tipo: string;
    place?: string;
    small?: boolean;
    medium?: boolean;
    large?: boolean;
}


export const tech = [
    { name: "Vue" },
    { name: "React" },
    { name: "Node" },
    { name: "Next" },
    { name: "MongoDB" },
    { name: "MySQL" },
    { name: "Tailwind" },
    { name: "Express" },
    { name: "JWT" },
    { name: "Javascript" },
    { name: "Java" },
]

export interface TableProps {
    blog?: boolean;
    projects?: boolean;
    last_updates?: boolean;
}

interface ModalInputContainerProps {
    blog?: boolean;
    projects?: boolean;
    last_updates?: boolean;
}