function hue() {
    let oneHue = Math.floor(Math.random() * 360);
    return oneHue;
}

function saturation() {
    let oneSaturation = Math.floor(Math.random() * 100);
    return oneSaturation;
}

function lightness() {
    let oneLightness = Math.floor(Math.random() * 100);
    return oneLightness;
}

function pickOneColor() {
    return `${hue()}, ${saturation()}%, ${lightness()}%`;
}

let article = document.querySelector("article");

let array = ["Henri", "Latifa", "Kevin", "Duc", "Olivier", "Nicolas", "Steeve", "Dorian", "Arthur", "Melih", "Medih", "Antoine", "Marya", "Dylan", "Louis", "Marlène", "Lynda", "Sébastien", "Semih", "Quentin"]

for (let name of array) {
  let section = article.appendChild(document.createElement("section")).appendChild(document.createElement("p")).appendChild(document.createTextNode(`${name}`));
}

let sections = document.querySelectorAll("section");

for (let section of sections) {
    section.style.backgroundColor = `hsl(${pickOneColor()})`;
    console.log(section.style.backgroundColor = `hsl(${pickOneColor()})`);
}




