import type { Project } from "../types";
import workspacehubImg from "../assets/projects/workspacehub.png";
import meshaiImg from "../assets/projects/meshai.png";
import flashcardsImg from "../assets/projects/flashcards.png";

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
    liveUrl: "https://ai-se-project-workspacehub-pyoi.vercel.app",
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
    id: "flashcards",
    name: "Interactive Study Cards",
    description: [
      "A flashcard study app for creating and managing custom decks, flipping cards, and practicing in a carousel view.",
      "Built with vanilla JavaScript, HTML, and CSS, syncing decks through a remote REST API with the Fetch API.",
    ],
    image: flashcardsImg,
    githubUrl: "https://github.com/felix-pasillas/ai-se_project_flashcards",
    liveUrl: "https://felix-pasillas.github.io/ai-se_project_flashcards",
  },
];
