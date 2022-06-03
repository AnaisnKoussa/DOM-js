const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

var sectionDisplayedSquare = document.querySelector('.displayedsquare-wrapper');

function createDivDisplayedSquare() {
    let divDisplayedSquare = document.createElement("div");
    divDisplayedSquare.setAttribute("class", "displayedsquare");
    sectionDisplayedSquare.appendChild(divDisplayedSquare);
    divDisplayedSquare.style.backgroundColor = "lime";  
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
    actionSquare.addEventListener('click', createDivDisplayedSquare);
    actionSquare.addEventListener('click', clickOnSquare);
}
