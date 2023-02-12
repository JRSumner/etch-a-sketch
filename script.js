const container = document.querySelector("#container");
container.style.display = "flex";

let numberOfSquares;

createMultipleColumns(createSingleColumn, numberOfSquares);
addMouseListeners();

function createSingleColumn(numOfColumns = 16) {
  const verticalContainer = document.createElement("div");

  for (let i = 0; i < numOfColumns; i++) {
    const verticalGrid = document.createElement("div");

    verticalGrid.setAttribute("class", "gridSquare");
    verticalGrid.style.width = `${480 / numOfColumns}px`;
    verticalGrid.style.height = `${480 / numOfColumns}px`;
    verticalGrid.style.backgroundColor = "grey";
    verticalGrid.style.flexDirection = "row";
    verticalGrid.style.borderColor = "black";
    verticalContainer.appendChild(verticalGrid);
  }

  container.appendChild(verticalContainer);
}

function createMultipleColumns(createSingleColumn, numOfColumns = 16) {
  for (let i = 0; i < numOfColumns; i++) {
    createSingleColumn(numOfColumns);
  }
}

function addMouseListeners() {
  const element = document.getElementsByClassName("gridSquare");

  for (let i = 0; i < element.length; i++) {
    element[i].addEventListener("mouseover", function () {
      mouseOver(element[i]);
    });
    element[i].addEventListener("mouseout", function () {
      mouseOut(element[i]);
    });
  }

  function mouseOver(element) {
    element.style.backgroundColor = "blue";
  }

  function mouseOut(element) {
    element.style.backgroundColor = "red";
  }
}

const btn = document.querySelector("#btn");

btn.onclick = () => {
  numberOfSquares = prompt("Enter number of squares between 1 - 100.");

  if (numberOfSquares > 100) {
    alert(`The maximum value is 100, you provided ${numberOfSquares}`);
    return;
  } else if (numberOfSquares < 1) {
    alert(
      `You must provide a value greater than 0, you provided ${numberOfSquares}`
    );
  }

  const gridSquare = document.querySelectorAll(".gridSquare");

  for (let i = 0; i < gridSquare.length; i++) {
    gridSquare[i].remove();
  }

  createMultipleColumns(createSingleColumn, numberOfSquares);
  addMouseListeners();
};
