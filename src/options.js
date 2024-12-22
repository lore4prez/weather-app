import {updateUI} from "./weather-api.js";

function changeUnit() {
    const btn = document.querySelector(".degree-btn");

    btn.addEventListener("click", () => {
        if (btn.textContent === "Fahrenheit") {
            btn.textContent = "Celsius";
        }
        else {
            btn.textContent = "Fahrenheit";
        }
        updateUI();
    });
}

function getLocInput() {
    const currLoc = document.querySelector(".current-location");
    const inputBox = document.querySelector("#search-loc");

    inputBox.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const inputVal = inputBox.value;
            currLoc.textContent = inputVal;
            updateUI();
            inputBox.value = "";
        }
    });
}

function changeOptions() {
    changeUnit();
    getLocInput();
}

export {changeOptions};