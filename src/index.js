import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import axios from 'axios';

const projectsBuilder = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    newString += `<div class='col-sm-4  pet-card'>;
     <div class='card border-success'>;
    <div class='card-header bg-transparent border-success'>${project.title};
    <div class='card-body text-success'>;
    <h5 class='card-title'>${project.color}</h5>;
    <p class='card-text petSkill'>${project.description}</p>;
    <div class='card-footer bg-transparent border-success petType'>${project.available};
    </div>;
    </div>;
    </div>;
    </div>;
    </div>`;
  });
  $('#projectsPage').append(newString);
};

const getProjects = () => axios.get('../db/projects.json');

getProjects()
  .then((data) => {
    projectsBuilder(data.projects);
  })
  .catch((error) => {
    console.error({ error });
  });


$('#projectsPage').show();
