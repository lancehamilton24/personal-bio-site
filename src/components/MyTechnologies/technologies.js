import $ from 'jquery';
import './technologies.scss';
import html5 from '../../images/html-5.png';
import picCSS from '../../images/CSS.png';
import github from '../../images/github1.png';
import picReact from '../../images/react.png';
import picFirebase from '../../images/firebase.png';
import javascript from '../../images/javascript.png';
import picBootstrap from '../../images/bootstrap.png';
import picJquery from '../../images/jquery.png';
import npm from '../../images/npm.png';
import SASS from '../../images/SASS.png';
import vscode from '../../images/vscode.png';

const technologyBuilder = () => {
  let domString = '';
  domString += `
   <div>
   <h1>TECHNOLOGIES</h1>
   <hr>
   <div class='techIcons'>
   <div class='technologyCard'>
   <div><img class='card-img-top' src="${html5}" alt="html5"></div>
   </div>
   <div class='technologyCard'>
   <div><img class='card-img-top' src="${picCSS}" alt="html5"></div>
   </div>
   <div class='technologyCard'>
   <div><img class='card-img-top' src="${github}" alt="html5"></div>
   </div>
   <div class='technologyCard'>
   <div><img class='card-img-top' src="${picReact}" alt="html5"></div>
   </div>
   <div class='technologyCard'>
   <div><img class='card-img-top' src="${picFirebase}" alt="html5"></div>
   </div>
   <div class='technologyCard'>
   <div><img class='card-img-top' src="${javascript}" alt="html5"></div>
   </div>
   <div class='technologyCard'>
   <div><img class='card-img-top' src="${picBootstrap}" alt="html5"></div>
   </div>
   <div class='technologyCard'>
   <div><img class='card-img-top' src="${picJquery}" alt="html5"></div>
   </div>
   <div class='technologyCard'>
   <div><img class='card-img-top' src="${npm}" alt="html5"></div>
   </div>
   <div class='technologyCard'>
   <div><img class='card-img-top' src="${SASS}" alt="html5"></div>
   </div>
   <div class='technologyCard'>
   <div><img class='card-img-top' src="${vscode}" alt="html5"></div>
   </div>
   </div>
   </div>`;
  $('#technologyPage').html(domString);
};


const initializeTechnologyPage = () => {
  technologyBuilder();
};

export default initializeTechnologyPage;
