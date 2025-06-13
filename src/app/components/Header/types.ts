export type Links = "hero" | "about" | "projects" |"contact"

export interface HeaderProps {
    items: { item: string; link: string }[];
    mobile?: boolean;
    onClickItem?: () => void;
}