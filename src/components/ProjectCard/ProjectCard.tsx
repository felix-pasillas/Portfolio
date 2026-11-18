import type { Project } from "../../types";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className="project-card">
      <h3 className="project-card__name">{project.name}</h3>
    </li>
  );
}
