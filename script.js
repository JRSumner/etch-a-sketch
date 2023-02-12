const container = document.querySelector("#container");
container.style.display = "flex";
container.style.justifyContent = "space-between";

for (let i = 0; i < 16; i++) {
  const horizontalGrid = document.createElement("div");

  horizontalGrid.style.backgroundColor = "pink";
  horizontalGrid.textContent = "x";
  horizontalGrid.style.flexDirection = "row";
  horizontalGrid.style.border = "5px";
  horizontalGrid.style.borderColor = "black";
  container.appendChild(horizontalGrid);
}
