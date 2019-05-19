import $ from 'jquery';
import './aboutMe.scss';
import bioPhoto from '../../images/bioImage2.png';


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
  <div id='aboutHeader'>  
   <h1>About Me</h1>
  </div>
  <hr>
  <div id='bioImage'>
  <img class='card-img-bio' src="${bioPhoto}" alt="linkedin">
  <div id='bioText'>
  <p>Nashville native and University of Rochester graduate with a love for technology and programming. Growing up with a passion for building and fixing computers, and using my free time to resolve hardware issues, has led me to pursue a career in software development.<br><br>
  After graduating from Rochester in 2016 with a Bachelor's degree in Intellectual and Cultural History, I worked in a variety of capacities—as an IT Consultant, baseball coach, and Jimmy John’s delivery driver. During this time I began to explore different career options, focusing 43primarily on technology-related fields. The multitude of free web resources online sparked my fascination with programming.<br><br>
  After taking several introductory classes and practicing on my own, I decided to delve deeper by applying to Nashville Software School to further my education. I am excited to use the development skills I have acquired through NSS to continue to solve complex problems and simplify daily processes for individuals and companies. 
  </p>
  </div>
  </div>
   </div>`;
  $('#bioPage').html(domString);
};


const initializeIntroPage = () => {
  introBuilder();
  bioBuilder();
};

export default initializeIntroPage;
