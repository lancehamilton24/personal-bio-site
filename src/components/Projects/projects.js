import $ from 'jquery';
import projectsData from '../../helpers/data/projectsData';

const projectsBuilder = (projectsArray) => {
  let projectString = '';
  projectString += '<h1 class="projects-header text-center">projectS</h1>';
  projectsArray.forEach((project) => {
    projectString += `
    <div class="col-sm-4 projectsCard ${project.available}">
      <div class="card">
        <img class="card-img-top" src="${project.screenshot}" alt="">
          <div class="projectsBody">
            <h6>${project.title}</h6>
            <h6>${project.description}</h6>
            <h6>${project.technologiesUsed}</h6>
            <a href="https://${project.url}" target="_blank">View Project Here</a>
            <a href="https://${project.githubUrl}" target="_blank">View Github Here</a>
          </div>
      </div>
    </div>`;
  });
  $('#projectsPage').html(projectString);
};

const projectsDisplay = () => {
  projectsData.getAllProjects()
    .then((projectsArray) => {
      projectsBuilder(projectsArray);
    })
    .catch((error) => {
      console.error('error in getting projects', error);
    });
};

const initializeProjectsPage = () => {
  projectsDisplay();
};

export default initializeProjectsPage;
