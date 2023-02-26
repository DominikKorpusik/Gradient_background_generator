var _ = require('lodash');

var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer: ', _.without(array, 3));
const css = document.querySelector("h3");
const h4 = document.querySelector("h4");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const random = document.getElementById("random");

if (window.innerWidth <= 1200) {
    h4.textContent = "Click me"
    h4.addEventListener("click", randGradient)
}

function setGradient(cl1, cl2) {
    body.style.background =
        `linear-gradient(to right, ${cl1}, ${cl2})`;
    linearGradientText(cl1, cl2);
}

function linearGradientText(cl1, cl2) {
    css.textContent = `linear-gradient(to right, ${cl1}, ${cl2});`;
}

function randColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
}

function randGradient() {
    let c1 = randColor();
    let c2 = randColor();
    setGradient(c1, c2)
    color1.value = c1;
    color2.value = c2;
}

color1.addEventListener("input", () => {
    setGradient(color1.value, color2.value)
})

color2.addEventListener("input", () => {
    setGradient(color1.value, color2.value)
})

linearGradientText(color1.value, color2.value)

body.addEventListener("keydown", function (event) {
    if (event.key === ` `) {
        randGradient()
    }
})

