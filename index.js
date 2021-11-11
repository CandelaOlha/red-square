const modeConverterButton = document.querySelector(".mode-converter");
const sunIcon = document.querySelector(".fa-sun");
const moonIcon = document.querySelector(".fa-moon");
const body = document.querySelector("body");
const text = document.querySelector(".text");

sunIcon.onclick = () => {
    body.classList.add("light-mode");
    text.classList.add("light-mode");
    modeConverterButton.style.backgroundColor = "#ededed";
    sunIcon.style.color = "#858585";
    moonIcon.style.color = "#858585";
}

moonIcon.onclick = () => {
    body.classList.remove("light-mode");
    text.classList.remove("light-mode");
    modeConverterButton.style.backgroundColor = "#343434";
    sunIcon.style.color = "#fefefe";
    moonIcon.style.color = "#fefefe";
}