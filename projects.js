//Javascript functions

function divDisplay(divId, hide1, hide2) {
    document.getElementById(divId).style.display = "block";
    document.getElementById(hide1).style.display = "none";
    document.getElementById(hide2).style.display = "none";

};

const writeToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

//Array of objects to display projects. 

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

//Display cards to provide project information. 

const createProjectCards = () => {

    let newString = '';
    for (let i = 0; i < projects.length; i++) {
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

//Navbar tabs show/hide specific div on click. 

const bioNav = document.getElementById('navToBio').addEventListener("click", function () {
    divDisplay('bioPage', 'technologyPage', 'projectsPage');
});

const techNav = document.getElementById('navToTechnologies').addEventListener("click", function () {
    divDisplay('technologyPage', 'bioPage', 'projectsPage');
});

const projectNav = document.getElementById('navToProjects').addEventListener("click", function () {
    divDisplay('projectsPage', 'technologyPage', 'bioPage');
});



createProjectCards();





