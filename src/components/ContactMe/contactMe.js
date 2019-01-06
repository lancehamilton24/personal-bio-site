import $ from 'jquery';
import './contactMe.scss';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github1.png';

const contactBuilder = () => {
  let domString = '';
  domString += `
  <h1>Contact Me</h1>
   <hr>
   <div class='contactCard'>
   <div class='linkedinProfile' id='contactMe'>
   <div><a href="https://www.linkedin.com/in/lance-hamilton-766770125/" target="_blank"><img class='card-img contactImg' src="${linkedin}" alt="linkein"></a></div>
   <h4>Linkedin</h4>
   </div>
   <div class='emailProfile' id='contactMe'>
   <h2>Email: lance.d.hamilton24@gmail.com</h2>
   </div>
   <div class='githubProfile' id='contactMe'>
   <div><a href="https://github.com/lancehamilton24" target="_blank"><img class='card-img contactImg' src="${github}" alt="github"></a></div>
   <h4>Github</h4>
   </div>
   </div>`;
  $('#contactPage').html(domString);
};


const initializeContactPage = () => {
  contactBuilder();
};

export default initializeContactPage;
