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
    nome: string,
}

export interface InputProps {
    tipo: string;
    place?: string;
    small?: boolean;
    medium?: boolean;
    large?: boolean;
}

export interface TableProps {
    blog?: boolean;
    projects?: boolean;
    last_updates?: boolean;
}
