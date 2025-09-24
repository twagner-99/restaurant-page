import { createHomepage } from "./homepage";
import { createMenuPage } from "./menu";
import { createAboutPage } from "./about";
import "./styles.css";

createHomepage();

const homeBtn = document.querySelector('#homeBtn');
const menuBtn = document.querySelector('#menuBtn');
const aboutBtn = document.querySelector('#aboutBtn');

homeBtn.addEventListener('click', createHomepage);
menuBtn.addEventListener('click', createMenuPage);
aboutBtn.addEventListener('click', createAboutPage);

// Could also get a nodelist of all buttons with querySelectorAll
// Then cycle through them and use if or switch statements
// to apply the correct function on click depending on the button id.
// Seems harder for no benefit though. Maybe if you had a million buttons
// it would be useful?