function pickOneColor() {
    let hue = Math.floor(Math.random() * 360);
    let saturation = Math.floor(Math.random() * 100);
    let lightness = Math.floor(Math.random() * 100);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

let article = document.querySelector("article");

let array = ["Henri", "Latifa", "Kevin", "Duc", "Olivier", "Nicolas", "Steeve", "Dorian", "Arthur", "Melih", "Medih", "Antoine", "Marya", "Dylan", "Louis", "Marlène", "Lynda", "Sébastien", "Semih", "Quentin"]

for (let name of array) {
  let section = article.appendChild(document.createElement("section")).appendChild(document.createElement("p")).appendChild(document.createTextNode(`${name}`));
}

let sections = document.querySelectorAll("section");

for (let section of sections) {
    section.style.backgroundColor = `${pickOneColor()}`;
}

function randomOrder() {
    let newOrder = [];
    for (let i = 0; i < sections.length; i++) {
        let randomIndex = Math.floor(Math.random() * sections.length);
        newOrder.push(sections[randomIndex]);
    }
    return newOrder;
}

let newOrder = randomOrder();
for (let i = 0; i < newOrder.length; i++) {
    article.appendChild(newOrder[i]);
} 



