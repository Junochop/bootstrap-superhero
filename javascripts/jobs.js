const printToDom = (domString, divID) => {
    document.getElementById(divID).innerHTML += domString;

};

const builddomString = (superHeroArray) => {
    let domString = "";
    superHeroArray.forEach((hero) => {

        domString += `<li>`;
        domString += `<a href="#" data-hero-id="${hero.id}">${hero.name}</a>`;
        domString += `</li>`;
        



    });

    printToDom(domString, "awesome-dropdown");
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