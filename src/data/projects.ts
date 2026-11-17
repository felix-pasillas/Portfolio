import type { Project } from "../types";
import workspacehubImg from "../assets/projects/workspacehub.png";
import meshaiImg from "../assets/projects/meshai.png";
import recipeBrowserImg from "../assets/projects/recipe-browser.png";

export const projects: Project[] = [
  {
    id: "workspacehub",
    name: "WorkspaceHub",
    description: [
      "A multi-tenant workspace app where teams manage projects, tasks, and bookings from a single dashboard, with role-based access and feature flags.",
      "Built with React, TypeScript, Express, and MongoDB, with JWT authentication.",
    ],
    image: workspacehubImg,
    githubUrl: "https://github.com/felix-pasillas/ai-se_project_workspacehub",
    liveUrl: "#",
  },
  {
    id: "meshai",
    name: "MeshAI",
    description: [
      "An AI knowledge base that brings an organization's documents into one secure workspace and makes them searchable through a simple chat interface.",
      "Uses retrieval-augmented generation (RAG) with an LLM API to answer questions from your documents. Built with React, TypeScript, Vite, and Express.",
    ],
    image: meshaiImg,
    githubUrl: "https://github.com/felix-pasillas/ai-se_project_mesh-ai",
    liveUrl: "https://mytodoapp.surfnet.ca",
  },
  {
    id: "recipe-browser",
    name: "Recipe Browser",
    description: [
      "A recipe app with live filtering, user accounts, and a personal favorites list that persists across sessions.",
      "Built with React, TypeScript, and Express, with Vitest tests.",
    ],
    image: recipeBrowserImg,
    githubUrl: "https://github.com/felix-pasillas/ai-se_recipe-browser-auth",
    liveUrl: "#",
  },
];
