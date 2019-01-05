import $ from 'jquery';
import './contactMe.scss';
import github from '../../images/github.png';

const contactBuilder = () => {
  let domString = '';
  domString += `<div class='card contactCard'>
   <div><a href="https://www.linkedin.com/in/lance-hamilton-766770125/" target="_blank"><img class='card-img contactImg' src="${github}" alt="html5"></div>
   <div><a href="https://www.linkedin.com/in/lance-hamilton-766770125/" target="_blank"><img class='card-img contactImg' src="${github}" alt="html5"></div>
   <div><a href="https://www.linkedin.com/in/lance-hamilton-766770125/" target="_blank"><img class='card-img contactImg' src="${github}" alt="html5"></div>
   <div><a href="https://www.linkedin.com/in/lance-hamilton-766770125/" target="_blank"><img class='card-img contactImg' src="${github}" alt="html5"></div>
   </div>`;
  $('#contactPage').html(domString);
};


const initializeContactPage = () => {
  contactBuilder();
};

export default initializeContactPage;
