import {
  setProjects,
  showProjects,
  projectsBuilder
} from "../components/projects.js";
function executeThisCodeAfterFileLoaded() {
  const data = JSON.parse(this.responseText);
  setProjects(data.projects);
  projectsBuilder(showProjects());
}

function executeThisCodeifXhrFails() {
  console.log("Looks broken");
}

const getProjects = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeifXhrFails);
  myRequest.open("GET", "./db/projects.json");
  myRequest.send();
};

export { getProjects };
