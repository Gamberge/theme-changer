const buttonRed = document.querySelector("#buttonRed");

buttonRed.addEventListener("click", function () {
    themeRed();
});

function themeRed() {
    const navbar = document.querySelector(".container .navbar");
    navbar.classList.remove("red-theme", "green-theme", "blue-theme", "yellow-theme");
    navbar.classList.add("red-theme");
}

const buttonGreen = document.querySelector("#buttonGreen");

buttonGreen.addEventListener("click", function () {
    themeGreen();
});

function themeGreen() {
    const navbar = document.querySelector(".container .navbar");
    navbar.classList.remove("red-theme", "green-theme", "blue-theme", "yellow-theme");
    navbar.classList.add("green-theme");
}

const buttonBlue = document.querySelector("#buttonBlue");

buttonBlue.addEventListener("click", function () {
    themeBlue();
});

function themeBlue() {
    const navbar = document.querySelector(".container .navbar");
    navbar.classList.remove("red-theme", "green-theme", "blue-theme", "yellow-theme");
    navbar.classList.add("blue-theme");
}

const buttonYellow = document.querySelector("#buttonYellow");

buttonYellow.addEventListener("click", function () {
    themeYellow();
});

function themeYellow() {
    const navbar = document.querySelector(".container .navbar");
    navbar.classList.remove("red-theme", "green-theme", "blue-theme", "yellow-theme");
    navbar.classList.add("yellow-theme");
}

const buttonReset = document.querySelector("#buttonReset");

buttonReset.addEventListener("click", function () {
    themeReset();
});

function themeReset() {
    const navbar = document.querySelector(".container .navbar");
    navbar.classList.remove("red-theme", "green-theme", "blue-theme", "yellow-theme");
}