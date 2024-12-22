const body = document.querySelector("body");
const container = document.createElement("div");
container.setAttribute("id", "container");

function makeOptions() {
    const mainBox = document.createElement("div");
    const degBtn = document.createElement("button");
    const locInput = document.createElement("input");

    mainBox.classList.add("options-overhead");
    degBtn.classList.add("degree-btn");
    locInput.classList.add("change-location");

    mainBox.appendChild(degBtn);
    mainBox.appendChild(locInput);
    container.appendChild(mainBox);
}

function makeTodayContent() {
    const mainBox = document.createElement("div");
    const todayInfoDiv = document.createElement("div");
    const currLoc = document.createElement("div");
    const todayTemp = document.createElement("div");
    const todayWeatherType = document.createElement("div");
    const todayDate = document.createElement("div");

    mainBox.classList.add("today-content");
    todayInfoDiv.classList.add("today-info");
    currLoc.classList.add("current-location");
    todayTemp.classList.add("today-temp");
    todayWeatherType.classList.add("today-weather-type");
    todayDate.classList.add("today-date");

    todayInfoDiv.appendChild(todayTemp);
    todayInfoDiv.appendChild(todayWeatherType);
    todayInfoDiv.appendChild(todayDate);
    mainBox.appendChild(todayInfoDiv);
    mainBox.appendChild(currLoc);
    container.appendChild(mainBox);
}

function makeWeekContent() {
    const mainBox = document.createElement("div");
    mainBox.classList.add("week-content");
    
    for (let i = 0; i < 6; i++) {
        const dayDiv = document.createElement("div");
        const day = document.createElement("h3");
        const weatherType = document.createElement("img");
        const deg = document.createElement("p");

        dayDiv.appendChild(day);
        dayDiv.appendChild(weatherType);
        dayDiv.appendChild(deg);
        mainBox.appendChild(dayDiv);
    }
    container.appendChild(mainBox);    
}

function makeDOM() {
    makeOptions();
    makeTodayContent();
    makeWeekContent();
}

body.appendChild(container);

export {container, makeDOM};