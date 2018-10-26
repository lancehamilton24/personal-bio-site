import { printToDom } from "../helpers/util.js";

let projects = [];

const setProjects = newArray => {
  projects = newArray;
};

const showProjects = () => {
  return projects;
};

function divDisplay(divId, hide1, hide2) {
  document.getElementById(divId).style.display = "block";
  document.getElementById(hide1).style.display = "none";
  document.getElementById(hide2).style.display = "none";
}

const projectsBuilder = () => {
  let newString = "";
  for (let i = 0; i < projects.length; i++) {
    newString += `<div id="projectsPage">`;
    newString += `<div id="projects-card">`;
    newString += `<h6>${projects[i].title}</h6>`;
    newString += `<a href="https://${
      projects.screenshot
    }" target="_blank">View Image</a>`;
    newString += `<h6>${projects[i].description}</h6>`;
    newString += `<h6>${projects[i].technologiesUsed}</h6>`;
    newString += `<h6>${projects[i].available}</h6>`;
    newString += `<a href="https://${
      projects.url
    }" target="_blank">View Project Here</a>`;
    newString += `<a href="https://${
      projects.githubUrl
    }" target="_blank">View Github Here</a>`;
    newString += "</div>";
    newString += "</div>";
    printToDom(newString, "projectsPage");
  }
};

const projectAvailability = e => {
  const available = e.target.id;
  if (available !== true) {
    document.getElementById(projects).style.display = "none";
  }
};

const bioNav = document
  .getElementById("navToBio")
  .addEventListener("click", function() {
    divDisplay("bioPage", "technologyPage", "projectsPage");
  });

const techNav = document
  .getElementById("navToTechnologies")
  .addEventListener("click", function() {
    divDisplay("technologyPage", "bioPage", "projectsPage");
  });

const projectNav = document
  .getElementById("navToProjects")
  .addEventListener("click", function() {
    divDisplay("projectsPage", "technologyPage", "bioPage");
  });

projectAvailability();

export { projectsBuilder, showProjects, setProjects };
