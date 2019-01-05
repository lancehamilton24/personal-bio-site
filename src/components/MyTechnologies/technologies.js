import $ from 'jquery';
import './technologies.scss';
import html5 from '../../images/html-5.png';

const technologyBuilder = () => {
  let domString = '';
  domString += `<div class='card technologyCard'>
   <div><img class='card-img-top' src="${html5}" alt="html5"></div>
   <div><img class='card-img-top' src="${html5}" alt="linkedin"></div>
   <div><img class='card-img-top' src="${html5}" alt="linkedin"></div>
   <div><img class='card-img-top' src="${html5}" alt="linkedin"></div>
   <div><img class='card-img-top' src="${html5}" alt="linkedin"></div>
   <div><img class='card-img-top' src="${html5}" alt="linkedin"></div>
   <div><img class='card-img-top' src="${html5}" alt="linkedin"></div>
   <div><img class='card-img-top' src="${html5}" alt="linkedin"></div>
   <div><img class='card-img-top' src="${html5}" alt="linkedin"></div>
   <div><img class='card-img-top' src="${html5}" alt="linkedin"></div>
   </div>`;
  $('#technologyPage').html(domString);
};


const initializeTechnologyPage = () => {
  technologyBuilder();
};

export default initializeTechnologyPage;
