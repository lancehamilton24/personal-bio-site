import $ from 'jquery';
import './aboutMe.scss';


const introBuilder = () => {
  let domString = '';
  domString += `<div>
   <h1>Lance Hamilton</h1>
   <hr>
   <h3>Software Developer</h3>
   </div>`;
  $('#intro').html(domString);
};


const initializeIntroPage = () => {
  introBuilder();
};

export default initializeIntroPage;
