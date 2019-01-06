import $ from 'jquery';
import './projects.scss';
import projectsData from '../../helpers/data/projectsData';

// <img class="card-img" src="${project.screenshot}" alt="">
const projectsBuilder = (projectsArray) => {
  let projectString = '';
  projectString += '<h1 class="projects-header text-center">Projects</h1><hr>';
  projectsArray.forEach((project) => {
    projectString += `
    <div class ="projectsCard">
    <div class="card ${project.available}">
            <img class="card-img" src="${project.screenshot}" alt="">
            <h6>${project.title}</h6>
            <a href="https://${project.url}" target="_blank">View Project Here</a>
            <a href="https://${project.githubUrl}" target="_blank">View Github Here</a>
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
