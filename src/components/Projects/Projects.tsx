import { projects } from "../../data/projects";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Projects.css";

export function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Projects</h2>
      <ul className="projects__list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}
