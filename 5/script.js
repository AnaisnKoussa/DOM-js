const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const sectionDisplayedSquare = document.querySelector('.displayedsquare-wrapper');
const actionSquares = document.querySelectorAll('.actionsquare');
const green = document.querySelector('.green');
const violet = document.querySelector('.violet');
const orange = document.querySelector('.orange');

const list = document.querySelector('ul');

function createDivDisplayedSquare(color) {
    let divDisplayedSquare = document.createElement("div");
    divDisplayedSquare.setAttribute("class", "displayedsquare");
    sectionDisplayedSquare.appendChild(divDisplayedSquare);
    divDisplayedSquare.style.backgroundColor = color;  
}

for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}

green.addEventListener('click', () => {
  createDivDisplayedSquare('lime')
  list.innerHTML += `<li>[${getElapsedTime()}] - Create a new green square</li>`
})

violet.addEventListener('click', () => {
  createDivDisplayedSquare('magenta')
  list.innerHTML += `<li>[${getElapsedTime()}] - Create a new violet square</li>`
})

orange.addEventListener('click', () => {
  createDivDisplayedSquare('orange')
  list.innerHTML += `<li>[${getElapsedTime()}] - Create a new orange square</li>`
})

function pickColor() {
  let oneColor = Math.floor(Math.random() * 255);
  return oneColor;
}

document.addEventListener('keypress', (e) => {
  const listLog = document.querySelectorAll("li");
  const deletedSquare = document.querySelectorAll(".displayedsquare");

  if (e.code === "Space") {
      document.body.style.backgroundColor = `rgb(${pickColor()}, ${pickColor()}, ${pickColor()})`;
      list.innerHTML += `<li>[${getElapsedTime()}] - Background color changed</li>`
  }
  
  if (e.code === "KeyL") {
      listLog.forEach(function logRemoved(log) { 
        log.remove();
      })
  }
  
  if (e.code === "KeyS") {
      deletedSquare.forEach(function squareRemoved(square) {
      square.remove();
    })
  }
})

document.addEventListener('click', (e) => {
  if (e.target.classList[0] === 'displayedsquare') {
    console.log(e.target.classList)
      alert(e.target.style.backgroundColor)
  }
})






