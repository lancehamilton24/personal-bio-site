import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import axios from 'axios';

const getProjects = () => axios.get('https://api.myjson.com/bins/1cgbmu');

const projectsBuilder = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    newString += `
      <div id="projectsPage">
          <h6>${project.title}</h6>
          <h6>${project.description}</h6>
          <h6>${project.technologiesUsed}</h6>
          <a href="https://${project.url}" target="_blank">View Project Here</a>
          <a href="https://${project.githubUrl}" target="_blank">View Github Here</a>
      </div>`;
  });
  $('#projectsPage').append(newString);
};

getProjects()
  .then((data) => {
    projectsBuilder(data.data.projects);
  })
  .catch((error) => {
    console.error({ error });
  });

$('#projectsPage').show();
