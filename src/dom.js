import sunny from "./images/weather-icons/sunny.png";

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

    degBtn.textContent = "Fahrenheit";
    locInput.setAttribute("type", "text");
    locInput.setAttribute("id", "search-loc");
    locInput.setAttribute("placeholder", "location");

    mainBox.appendChild(degBtn);
    mainBox.appendChild(locInput);
    container.appendChild(mainBox);
}

function makeTodayContent() {
    const mainBox = document.createElement("div");
    const todayInfoDiv = document.createElement("div");
    const currLoc = document.createElement("div");
    const todayInfoTop = document.createElement("div");
    const todayInfoBot = document.createElement("div");
    const todayTemp = document.createElement("div");
    const todayWeatherImg = document.createElement("img");
    const todayWeatherType = document.createElement("div");
    const todayDate = document.createElement("div");

    mainBox.classList.add("today-content");
    todayInfoDiv.classList.add("today-info");
    todayInfoTop.classList.add("today-info-top");
    todayInfoBot.classList.add("today-info-bot");
    currLoc.classList.add("current-location");
    todayWeatherImg.classList.add("today-img");
    todayTemp.classList.add("today-temp");
    todayWeatherType.classList.add("today-weather-type");
    todayDate.classList.add("today-date");

    todayWeatherImg.src = sunny;
    currLoc.textContent = "Florida";
    todayTemp.textContent = "83°";
    todayWeatherType.textContent = "sunny";
    todayDate.textContent = "12/21";

    todayInfoTop.appendChild(todayTemp);
    todayInfoTop.appendChild(todayWeatherImg);
    todayInfoBot.appendChild(todayWeatherType);
    todayInfoBot.appendChild(todayDate);
    todayInfoDiv.appendChild(todayInfoTop);
    todayInfoDiv.appendChild(todayInfoBot);
    mainBox.appendChild(todayInfoDiv);
    mainBox.appendChild(currLoc);
    container.appendChild(mainBox);
}

function makeWeekContent() {
    const mainBox = document.createElement("div");
    mainBox.classList.add("week-content");
    
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

    for (let i = 0; i < 6; i++) {
        const dayDiv = document.createElement("div");
        const day = document.createElement("h3");
        const weatherType = document.createElement("img");
        const deg = document.createElement("p");

        dayDiv.classList.add("dayCard");
        day.textContent = daysOfWeek[i];
        weatherType.src = sunny;
        weatherType.alt = "Weather";
        deg.textContent = "73°";

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

export {container, body, makeDOM};