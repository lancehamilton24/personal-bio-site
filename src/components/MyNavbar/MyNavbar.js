import $ from 'jquery';

// const navbarEvents = () => {
//   $('#navToBio').on('click', () => {
//     $('#bioPage').toggle();
//     $('#technologyPage').hide();
//     $('#projectsPage').hide();
//   });
//   $('#technologyPage').hide();
//   $('#navToTechnologies').on('click', () => {
//     $('#technologyPage').toggle();
//     $('#bioPage').hide();
//     $('#projectsPage').hide();
//   });
//   $('#projectsPage').hide();
//   $('#navToProjects').on('click', () => {
//     $('#projectsPage').toggle();
//     $('#bioPage').hide();
//     $('#technologyPage').hide();
//     $('.false').hide();
//   });
// };

const createNavbar = () => {
  const domString = `
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#introContainer">Lance Hamilton</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse mx-auto order-0" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link mx-auto" id="navToBio" href="#bioContainer">About Me<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" id="navToTechnologies" href="#technologyContainer">Technologies</a><span class="sr-only">(current)</span></a>

        </li>
        <li class="nav-item active">
          <a class="nav-link" id="navToProjects" href="#projectsContainer">Projects</a><span class="sr-only">(current)</span></a>

        </li>
        <li class="nav-item- active">
          <a class="nav-link" id="navToContact" href="#contactContainer">Contact Me</a><span class="sr-only">(current)</span></a>

        </li>
      </div>
  </nav>`;
  $('#myNavbar').html(domString);
  // navbarEvents();
};

export default createNavbar;
