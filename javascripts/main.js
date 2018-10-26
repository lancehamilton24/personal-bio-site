import { getProjects } from "./data/projectData.js";
import { projectAvailability } from "./components/projects.js";

const initializeApp = () => {
  getProjects();
  projectAvailability();
};

initializeApp();
