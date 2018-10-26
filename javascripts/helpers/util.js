const printToDom = stringToPrint => {
  const selectedDiv = document.getElementById("projectsPage");
  selectedDiv.innerHTML = stringToPrint;
};

export { printToDom };
