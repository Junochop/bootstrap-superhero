const printToDom = (domString, divID) => {
    document.getElementById(divID).innerHTML += domString;

};

const builddomString = (superHeroArray) => {
    let domString = "";
    superHeroArray.forEach((hero) => {
      
        domString += `<div class="col-sm-3">`
        domString += `<div class="panel">`;
        domString +=    `<div class="panel-heading">`;
        domString +=        `<h3 class="panel-title">${hero.name}</h3>`;
        domString +=    `</div>`;
        domString +=    `<div class="panel-body">`;

        if (hero.gender === "Female") {
            domString += `<img class="charImage femaleImage" src="${hero.image}">`;

        } else {
            domString += `<img class="charImage maleImage" src="${hero.image}">`
        }




        
        domString += `<p class="charDescription">${hero.description}</p>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
       


    });

    printToDom(domString, "hero-container");
};


function executeThisFunctionAfterFileLoads() {

    const data = JSON.parse(this.responseText);
    console.log("data", data);
    builddomString(data.superheroes);
   
}

function WTF() {
    console.log("something went wrong");
}

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisFunctionAfterFileLoads);
    myRequest.addEventListener("error", WTF);
    myRequest.open("GET", "../db/superheroes.json");
    myRequest.send();
    console.log("myrequest", myRequest);
};

startApplication();