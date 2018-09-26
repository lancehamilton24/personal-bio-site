let projects = [
            {
            title: "Cool Project", 
            screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
            description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
            technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
            available: true,
            url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
            githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
            },
        
           
            {
            title: "Cool Project", 
            screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
            description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
            technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
            available: false,
            url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
            githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
            },
        ]; 


const writeToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const createProjectCards = () => {

    let newString = '';
    for(let i=0; i<projects.length; i++){
        newString += `<div id="projectsPage">`
        newString += `<h6>${projects[i].title}</h6>`
        newString += `<a href="https://${projects.screenshot}" target="_blank">View Image</a>`
        newString += `<h6>${projects[i].description}</h6>`
        newString += `<h6>${projects[i].technologiesUsed}</h6>`
        newString += `<h6>${projects[i].available}</h6>`
        newString += `<a href="https://${projects.url}" target="_blank">View Project Here</a>`
        newString += `<a href="https://${projects.githubUrl}" target="_blank">View Github Here</a>`
        newString += '</div>'
        writeToDom(newString, "projectsPage")
    }
    
};

const bioNav = document.getElementById('navToBio');
const bio = document.getElementById('bioPage');
const techNav =  document.getElementById('navToTechnologies');
const tech = document.getElementById('technologyPage');
const projectNav = document.getElementById('navToProjects');
const allProjects = document.getElementById('projectsPage');




bioNav.addEventListener("click", (e) => {
    if (bio.style.display = 'none') {
        bio.style.display = 'block';
        
        

    } else {
        bio.style.display = 'none';
        
        
    }
}, false);

techNav.addEventListener("click", (e) => {
    if (tech.style.display = 'none') {
        tech.style.display = 'block';
        
    } else {
        tech.style.display = 'none'
        
    }
    
}, false);
 

projectNav.addEventListener("click", (e) => {
    if (allProjects.style.display = 'none') {
        allProjects.style.display = 'block';
        
    } else {
        allProjects.style.display = 'none'
        
    }
    
}, false);
 
//     e.preventDefault();
//     // console.log("clicked");
//     document.getElementById("technologiespage").style.display = 'none';
//   });
// document.getElementById('navToTechnologies').addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("clicked");
//   });
// document.getElementById('navToProjects').addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("clicked");
//   });

createProjectCards();


    
