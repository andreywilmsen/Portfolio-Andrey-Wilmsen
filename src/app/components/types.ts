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
    onClick?: () => void;
}

export interface LogoProps {
    hidden?: boolean;
}