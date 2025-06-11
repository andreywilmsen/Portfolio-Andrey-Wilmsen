export type Tech = "react" | "node" | "vue" | "express";

export interface TechCardProps {
    tech: Tech;
}

export interface Project {
    name: string;
    link: string;
    card: Tech[];
}

export interface ProjectListData {
    listProjects: Project[];
}

export interface ProjectListContentProps {
    project: { name: string, link: string },
}