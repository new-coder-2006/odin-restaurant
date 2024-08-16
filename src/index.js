import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

home();

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");

homeButton.style.backgroundColor = "black";
menuButton.style.backgroundColor = "chocolate";
contactButton.style.backgroundColor = "chocolate";

homeButton.addEventListener("click", () => {
    home();
    homeButton.style.backgroundColor = "black";
    menuButton.style.backgroundColor = "chocolate";
    contactButton.style.backgroundColor = "chocolate";
});

menuButton.addEventListener("click", () => {
    menu();
    homeButton.style.backgroundColor = "chocolate";
    menuButton.style.backgroundColor = "black";
    contactButton.style.backgroundColor = "chocolate";
});

contactButton.addEventListener("click", () => {
    contact();
    homeButton.style.backgroundColor = "chocolate";
    menuButton.style.backgroundColor = "chocolate";
    contactButton.style.backgroundColor = "black";
});