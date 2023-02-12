const container = document.querySelector("#container");
container.style.display = "flex";
container.style.justifyContent = "center";

let numberOfSquares;

function createSingleColumn(numOfColumns = 16) {
  const verticalContainer = document.createElement("div");

  for (let i = 0; i < numOfColumns; i++) {
    const verticalGrid = document.createElement("div");

    verticalGrid.setAttribute("class", "gridSquare");
    verticalGrid.style.width = `${480 / numOfColumns}px`;
    verticalGrid.style.height = `${480 / numOfColumns}px`;
    verticalGrid.style.backgroundColor = "#d5d5d5";
    verticalGrid.style.flexDirection = "row";
    verticalGrid.style.border = "0.25px solid grey";
    verticalGrid.style.borderRadius = "0.5px";
    verticalGrid.style.boxShadow = "2px 2px 10px #888888";
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
    element.style.backgroundColor = "red";
  }

  function mouseOut(element) {
    element.style.backgroundColor = "red";
  }
}

const btnSize = document.querySelector("#btn-size");
const btnReset = document.querySelector("#btn-reset");

btnSize.onclick = () => {
  numberOfSquares = prompt(
    "Enter number between 1 - 100. Example, 16 creates a pad 16 x 16."
  );

  if (numberOfSquares > 100) {
    alert(`The maximum value is 100, you provided '${numberOfSquares}'`);
    return;
  } else if (numberOfSquares < 1) {
    alert(
      `You must provide a value greater than 0, you provided '${numberOfSquares}'`
    );
    return;
  }

  clearGrid();
  createMultipleColumns(createSingleColumn, numberOfSquares);
  addMouseListeners();
};

btnReset.onclick = () => {
  clearGrid();
  createMultipleColumns(createSingleColumn, numberOfSquares);
  addMouseListeners();
};

function clearGrid() {
  const gridSquare = document.querySelectorAll(".gridSquare");

  for (let i = 0; i < gridSquare.length; i++) {
    gridSquare[i].remove();
  }
}

createMultipleColumns(createSingleColumn, numberOfSquares);
addMouseListeners();
