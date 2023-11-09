const gridContainer = document.querySelector(".grid-container");

function grid(squares) {
  for (i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
  }
}

grid(256);

const allSquares = document.querySelectorAll(".square");

for (j = 0; j < allSquares.length; j++) {
  allSquares[j].addEventListener("mouseenter", function () {
    this.classList.add("square-hover");
  });
}
