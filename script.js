let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.getElementById("random")

function setGradient() {
    body.style.background =
        `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

function h3textContent(cl1, cl2) {
    css.textContent = `linear-gradient(to right, ${cl1}, ${cl2});`;
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

h3textContent(color1.value, color2.value)

const randColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
}

random.addEventListener("keydown", function (event) {
    var c1 = randColor();
    var c2 = randColor();
    if (event.key === ` `) {
        body.style.background =
            `linear-gradient(to right, ${c1}, ${c2})`;
        h3textContent(c1, c2)
    }
})
