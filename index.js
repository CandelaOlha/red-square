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
    if (modeConverterButton.classList.contains("light-mode")) {
        const mode = {
            mode: "light", 
        }
        const modeIntoAJSON = JSON.stringify(mode);
        localStorage.setItem("mode", modeIntoAJSON);
    }
    else {
        const mode = {
            mode: "dark",
        }
        const modeIntoAJSON = JSON.stringify(mode);
        localStorage.setItem("mode", modeIntoAJSON);
    }
}

if (localStorage.getItem("mode")) {
    const JSONModePreference = localStorage.getItem("mode");
    const JSModePreference = JSON.parse(JSONModePreference);
    if (JSModePreference.mode === "light") {
        modeConverterButton.classList.add("light-mode");
        sunIcon.classList.add("light-mode");
        moonIcon.classList.add("light-mode");
        body.classList.add("light-mode");
        text.classList.add("light-mode");
        icon.classList.add("light-mode");
    } 
    else {
        modeConverterButton.classList.remove("light-mode");
        sunIcon.classList.remove("light-mode");
        moonIcon.classList.remove("light-mode");
        body.classList.remove("light-mode");
        text.classList.remove("light-mode");
        icon.classList.remove("light-mode");
    }
}