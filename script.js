const container = document.querySelector("#container");
container.style.display = "flex";
container.style.justifyContent = "space-between";

createMultipleColumns(createSingleColumn, 16);

function createSingleColumn() {
  const verticalContainer = document.createElement("div");

  for (let i = 0; i < 16; i++) {
    const verticalGrid = document.createElement("div");

    verticalGrid.style.backgroundColor = "pink";
    verticalGrid.textContent = "x";
    verticalGrid.style.flexDirection = "row";
    verticalGrid.style.border = "5px";
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
