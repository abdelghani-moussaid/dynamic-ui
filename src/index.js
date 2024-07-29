import "./style.css";
import toggleDropdown from "./modules/toggleDropdown.js";

const dropdown = document.querySelector(".dropdown");
const menu = document.querySelector(".menu");

// toggleDropdown(menu, dropdown, "click");

toggleDropdown(menu, dropdown, "mouseover");
