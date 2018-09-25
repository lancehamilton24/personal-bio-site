let projectsPage = { 
    
        projects: [
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
            available: true,
            url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
            githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
            },
        ],
    };

    
    
 


const writeToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const createProjectCards = () => {

    let newString = '';
    for(let i=0; i<projectsPage.projects.length; i++){
        newString += `<div id="projectsPage">`
        newString += `<h6>${projectsPage.projects[i].title}</h6>`
        newString += `<a href="https://${projectsPage.projects.screenshot}" target="_blank">View Image</a>`
        newString += `<h6>${projectsPage.projects[i].description}</h6>`
        newString += `<h6>${projectsPage.projects[i].technologiesUsed}</h6>`
        newString += `<h6>${projectsPage.projects[i].available}</h6>`
        newString += `<a href="https://${projectsPage.projects.url}" target="_blank">View Project Here</a>`
        newString += `<a href="https://${projectsPage.projects.githubUrl}" target="_blank">View Github Here</a>`
        newString += '</div>'
    }
    writeToDom(newString, "projectsPage")
};


createProjectCards();


// target divs

const bioDiv = document.getElementById('bio')

const techDiv = document.getElementById('technology')

// click event functions

const techButtonMessage = () => {
    console.log("tech button clicked")
    techDiv.textContent =  "text button clicked"
    
};

const navButtonMessage = () => {
    console.log("navbutton clicked")
    let pEl = document.createElement("p");
    let bioText = "navButton clicked"
    pEl.textContent = bioText;
    bioDiv.appendChild(pEl);
    techDiv.style.display = "none";
};
    

// buttons

const navButton = document.getElementById('navToBio') 
navButton.addEventListener('click', navButtonMessage)

const techButton = document.getElementById('navToTechnologies')
techButton.addEventListener('click', techButtonMessage)






