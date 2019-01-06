import $ from 'jquery';
import './aboutMe.scss';
import bioPhoto from '../../images/bioPhoto1.png';


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
   <h1>About Me</h1>
   <hr>
   <img class='card-img' src="${bioPhoto}" alt="linkedin">
   </div>`;
  $('#bioPage').html(domString);
};


const initializeIntroPage = () => {
  introBuilder();
  bioBuilder();
};

export default initializeIntroPage;
