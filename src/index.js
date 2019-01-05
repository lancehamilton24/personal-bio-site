// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import createNavbar from './components/MyNavbar/MyNavbar';
import initializeProjectsPage from './components/Projects/projects';
import initializeTechnologyPage from './components/MyTechnologies/technologies';
import initializeIntroPage from './components/AboutMe/aboutMe';
// import pictureCarousel from './components/Biography/Biography';

const initializeApp = () => {
  createNavbar();
  initializeProjectsPage();
  initializeTechnologyPage();
  initializeIntroPage();
  // pictureCarousel();
};

// const footerTab = () => {
//   let newString = '';
//   newString += `
//   <div class ="footer">
//   <div><a href="https://www.linkedin.com/in/lance-hamilton-766770125/" target="_blank"><img src="./img/linkedin.png" alt="instagram"></a></div>
//       <div><a href="https://www.linkedin.com/in/lance-hamilton-766770125/" target="_blank"><img src="./img/linkedin.png" alt="instagram"></a></div>

//       <h5> &copy; 2019 Lance Hamilton </h5>
// </div>`;
//   $('#footer').append(newString);
// };

// footerTab();
initializeApp();
