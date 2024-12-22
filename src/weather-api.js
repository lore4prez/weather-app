import clear from "./images/weather-icons/sunny.png";
import partlyCloudy from "./images/weather-icons/pcloudy.png";
import cloudy from "./images/weather-icons/mcloudy.png";
import rain from "./images/weather-icons/rain.png";
import snow from "./images/weather-icons/Snow.png";

async function getLocStats(unit, loc) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=${unit}&key=RPMTADBL844JT8D5Z4XN7U2N8`);
    const textData = await response.json();

    console.log(textData);

    let daysArr = [];

    const currTemp = textData.currentConditions.temp;
    const currCond = textData.days[0].icon;
    const currDate = textData.days[0].datetime;

    daysArr = [[currTemp, currCond, currDate]];

    for (let i = 1; i < 7; i++) {
        const day = [];
        day[0] = textData.days[i].temp;
        day[1] = textData.days[i].icon;
        day[2] = textData.days[i].datetime;
        daysArr[i] = day;
    }

    // console.log(daysArr);
    return daysArr;
}
// clear-day, partly-cloudy-day, snow, rain, cloudy

async function changeInfo(unit, loc) {
    const daysArr = await getLocStats(unit, loc);
    console.log(daysArr);

    let imgMap = new Map();
    imgMap.set("clear-day", clear);
    imgMap.set("partly-cloudy-day", partlyCloudy);
    imgMap.set("cloudy", cloudy);
    imgMap.set("rain", rain);
    imgMap.set("snow", snow);

    const todayTemp = document.querySelector(".today-temp");
    todayTemp.textContent = daysArr[0][0] + "°";

    const todayWeatherType = document.querySelector(".today-weather-type");
    todayWeatherType.textContent = daysArr[0][1];

    const todayWeatherImg = document.querySelector(".today-img");
    todayWeatherImg.src = imgMap.get(daysArr[0][1]);

    const todayDate = document.querySelector(".today-date");
    todayDate.textContent = daysArr[0][2];

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    let today = new Date();
    let todayNum = today.getDay();
    let week = document.querySelectorAll(".dayCard > h3");
    let weekArr = [...week];
    
    let weekTemp = document.querySelectorAll(".dayCard > p");
    let weekTempArr = [...weekTemp];

    let weekImg = document.querySelectorAll(".dayCard > img");
    let weekImgArr = [...weekImg];

    for (let i = 0; i < 6; i++) {
        weekArr[i].textContent = daysOfWeek[(i + 1 + todayNum) % 7];
        weekTempArr[i].textContent = daysArr[i+1][0] + "°";
        weekImgArr[i].src = imgMap.get(daysArr[i+1][1]);
    }
}

function updateUI() {
    const btn = document.querySelector(".degree-btn");
    const currLoc = document.querySelector(".current-location");

    let unit; 
    let loc = currLoc.textContent;

    if (btn.textContent === "Fahrenheit")
        unit = "us";
    else 
        unit = "metric";
    
    changeInfo(unit, loc);
}


export {updateUI};