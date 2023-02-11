let css = document.querySelector("h3");
let h4 = document.querySelector("h4");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.getElementById("random");

if (window.innerWidth <= 768) {
    h4.textContent = "Click me"
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
    var c1 = randColor();
    var c2 = randColor();
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

body.addEventListener("click", randGradient)
