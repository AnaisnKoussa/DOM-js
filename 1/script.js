console.log(document.title);
document.title = "Explore the DOM";
console.log(document.title);
document.body.style.backgroundColor = "#FF69B4";
function pickColor() {
    let oneColor = Math.floor(Math.random() * 255);
    return oneColor;
}
document.body.style.backgroundColor = `rgb(${pickColor()}, ${pickColor()}, ${pickColor()})`;

let bodyChildren = document.body.children;
console.log(bodyChildren);
for (let child of bodyChildren)  {
    console.log(child);
}





