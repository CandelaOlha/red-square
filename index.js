const modeConverterButton = document.querySelector(".mode-converter");
const sunIcon = document.querySelector(".fa-sun");
const moonIcon = document.querySelector(".fa-moon");
const body = document.querySelector("body");
const text = document.querySelector(".text");
const icon = document.querySelector(".icon");

modeConverterButton.onclick = () => {
    modeConverterButton.classList.toggle("light-mode");
    sunIcon.classList.toggle("is-hidden");
    moonIcon.classList.toggle("is-hidden");
    sunIcon.classList.toggle("light-mode");
    moonIcon.classList.toggle("light-mode");
    body.classList.toggle("light-mode");
    text.classList.toggle("light-mode");
    icon.classList.toggle("light-mode");
}