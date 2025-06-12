export type Links = "hero" | "about" | "projects"

export interface HeaderProps {
    items: { item: string; link: string }[];
    mobile?: boolean;
    onClickItem?: () => void;
}