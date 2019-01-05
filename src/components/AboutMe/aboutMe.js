import $ from 'jquery';
import './aboutMe.scss';
import bioPhoto from '../../images/bioPhoto.png';


const introBuilder = () => {
  let domString = '';
  domString += `<div>
   <h1>Lance Hamilton</h1>
   <hr>
   <h3>Software Developer</h3>
   </div>`;
  $('#intro').html(domString);
};

const bioBuilder = () => {
  let domString = '';
  domString += `<div>
   <img class='card-img-top' src="${bioPhoto}" alt="linkedin">
   <h1>About Me</h1>
   <hr>
   <h3>Software Developer</h3>
   </div>`;
  $('#bioPage').html(domString);
};


const initializeIntroPage = () => {
  introBuilder();
  bioBuilder();
};

export default initializeIntroPage;
