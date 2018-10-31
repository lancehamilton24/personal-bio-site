import { printToDom } from "../helpers/util.js";

let projects = [];

const setProjects = newArray => {
  projects = newArray;
};

const showProjects = () => {
  return projects;
};

// const projectAvailability = e => {
//   const available = e.target.id;
//   if (available === true) {
//     projectsBuilder(projects);
//   } else if (available === false) {
//     const filteredProjects = projects.filter(x => x.available === available);
//     projectsBuilder(filteredProjects);
//   } else {
//     projectsBuilder(projects);
//   }
// };

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

$(document).ready(function() {
  $("#technologyPage").hide();
  $("#navToTechnologies").on("click", function() {
    $("#technologyPage").toggle();
    $("#bioPage").hide();
    $("#projectsPage").hide();
  });
  $("#projectsPage").hide();
  $("#navToProjects").on("click", function() {
    $("#projectsPage").toggle();
    $("#bioPage").hide();
    $("#technologyPage").hide();
  });
  $("#navToBio").on("click", function() {
    $("#bioPage").toggle();
    $("#technologyPage").hide();
    $("#projectsPage").hide();
  });
});

export { projectsBuilder, showProjects, setProjects };
