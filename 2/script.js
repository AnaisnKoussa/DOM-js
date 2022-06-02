//document.querySelectorAll(".important").setAttribute("important", "This is an important item");
let images = document.querySelectorAll("img");
for (let image of images) {
    if(image.className !== "important") {
        image.style.display = "none";
    }
}

function pickColor() {
    let oneColor = Math.floor(Math.random() * 255);
    return oneColor;
}
let paragraphes = document.querySelectorAll("p");
for (let paragraphe of paragraphes) {
    console.log(`Content of the paragraphe : ${paragraphe.innerText} AND Class name of the paragraph : ${paragraphe.className}`);
    if(paragraphe.className == false) {
    paragraphe.style.color = `rgb(${pickColor()}, ${pickColor()}, ${pickColor()})`;
    }
}



