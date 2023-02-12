const container = document.querySelector("#container");
container.style.display = "flex";

createMultipleColumns(createSingleColumn, 16);

function createSingleColumn() {
  const verticalContainer = document.createElement("div");

  for (let i = 0; i < 16; i++) {
    const verticalGrid = document.createElement("div");

    verticalGrid.setAttribute("class", "gridSquare");
    verticalGrid.style.width = "20px";
    verticalGrid.style.height = "20px";
    verticalGrid.style.flexDirection = "row";
    verticalGrid.style.borderColor = "black";
    verticalContainer.appendChild(verticalGrid);
  }

  container.appendChild(verticalContainer);
}

function createMultipleColumns(createSingleColumn, numOfColumns) {
  for (let i = 0; i < numOfColumns; i++) {
    createSingleColumn();
  }
}

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
