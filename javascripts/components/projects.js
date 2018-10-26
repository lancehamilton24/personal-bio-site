import { printToDom } from "../helpers/util.js";

let projects = [];

const setProjects = newArray => {
  projects = newArray;
};

const showProjects = () => {
  return projects;
};

const projectAvailability = e => {
  const available = e.target.id;
  if (available === true) {
    projectsBuilder(projects);
  } else if (available === false) {
    const filteredProjects = projects.filter(x => x.available === available);
    projectsBuilder(filteredProjects);
  } else {
    projectsBuilder(projects);
  }
};
const projectsBuilder = projectsArray => {
  let domString = "";
  projectsArray.forEach(project => {
    domString += `<div class="col-sm-4  pet-card">`;
    domString += `<div class="card border-success">`;
    domString += `<div class="card-header bg-transparent border-success">${
      project.title
    }`;
    domString += `<div class="card-body text-success">`;
    domString += `<h5 class="card-title">${project.color}</h5>`;
    domString += `<p class="card-text petSkill">${project.description}</p>`;
    domString += `<div class="card-footer bg-transparent border-success petType">${
      project.available
    }`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  printToDom(domString);
};

// const projectsBuilder = () => {
//   let newString = "";
//   for (let i = 0; i < projects.length; i++) {
//     newString += `<div id="projectsPage">`;
//     newString += `<div id="projects-card">`;
//     newString += `<h6>${projects[i].title}</h6>`;
//     newString += `<a href="https://${
//       projects.screenshot
//     }" target="_blank">View Image</a>`;
//     newString += `<h6>${projects[i].description}</h6>`;
//     newString += `<h6>${projects[i].technologiesUsed}</h6>`;
//     newString += `<h6>${projects[i].available}</h6>`;
//     newString += `<a href="https://${
//       projects.url
//     }" target="_blank">View Project Here</a>`;
//     newString += `<a href="https://${
//       projects.githubUrl
//     }" target="_blank">View Github Here</a>`;
//     newString += "</div>";
//     newString += "</div>";
//     printToDom(newString, "projectsPage");
//   }
// };

function divDisplay(divId, hide1, hide2) {
  document.getElementById(divId).style.display = "block";
  document.getElementById(hide1).style.display = "none";
  document.getElementById(hide2).style.display = "none";
}

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

export { projectsBuilder, showProjects, setProjects, projectAvailability };
