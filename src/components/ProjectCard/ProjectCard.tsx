import type { Project } from "../../types";
import githubIcon from "../../assets/icons/github.svg";
import externalLinkIcon from "../../assets/icons/external-link.svg";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLiveSite = project.liveUrl !== "#";

  return (
    <li className="project-card">
      <img
        className="project-card__image"
        src={project.image}
        alt={`Screenshot of ${project.name}`}
      />
      <div className="project-card__body">
        <h3 className="project-card__name">{project.name}</h3>
        {project.description.map((paragraph) => (
          <p key={paragraph} className="project-card__description">
            {paragraph}
          </p>
        ))}
        <div className="project-card__links">
          <a
            className="project-card__link"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="project-card__icon" src={githubIcon} alt="" />
            Code
          </a>
          {hasLiveSite && (
            <a
              className="project-card__link"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project-card__icon"
                src={externalLinkIcon}
                alt=""
              />
              Live
            </a>
          )}
        </div>
      </div>
    </li>
  );
}
