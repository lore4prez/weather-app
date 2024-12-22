import "./styles.css"
import {container, body, makeDOM} from "./dom.js";
import {updateUI} from "./weather-api.js";
import {changeOptions}from "./options.js";

makeDOM();
changeOptions();
updateUI();