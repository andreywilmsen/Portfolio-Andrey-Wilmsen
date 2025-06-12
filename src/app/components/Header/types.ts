export type Links = "hero" | "about" | "projects"

export interface HeaderProps {
    items: { item: string, link: Links }[];
    mobile?: boolean;
}