const gridContainer = document.querySelector(".grid-container");

for (i = 0; i < 265; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  gridContainer.appendChild(square);
}
