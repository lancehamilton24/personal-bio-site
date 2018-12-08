import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import axios from 'axios';

$('#navToBio').on('click', () => {
  $('#bioPage').toggle();
  $('#technologyPage').hide();
  $('#projectsPage').hide();
});
$('#technologyPage').hide();
$('#navToTechnologies').on('click', () => {
  $('#technologyPage').toggle();
  $('#bioPage').hide();
  $('#projectsPage').hide();
});
$('#projectsPage').hide();
$('#navToProjects').on('click', () => {
  $('#projectsPage').toggle();
  $('#bioPage').hide();
  $('#technologyPage').hide();
  $('.false').hide();
});

const getProjects = () => axios.get('https://api.myjson.com/bins/1cgbmu');

const projectsBuilder = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    newString += `
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
  $('#projectsPage').append(newString);
};

getProjects()
  .then((data) => {
    projectsBuilder(data.data.projects);
  })
  .catch((error) => {
    console.error({ error });
  });
