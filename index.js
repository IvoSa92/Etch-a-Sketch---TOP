const gridContainer = document.querySelector(".grid-container");
// Function to create a Grid

function grid(squares) {
  for (i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
  }
}

let allSquares = document.querySelectorAll(".square");

// Function to add a Class to every square
/*for (j = 0; j < allSquares.length; j++) {
  allSquares[j].addEventListener("mouseenter", function () {
    this.classList.add("square-hover");
  });
}*/

// Creating a Button and a Function witch creates as many squares as the user inputs

const button = document.querySelector("button");
let input;

button.addEventListener("click", function () {
  gridContainer.innerHTML = "";
  let input = prompt("Enter Grid Size between 0 - 100");
  let squares = input * input;
  gridContainer.style.gridTemplateColumns = `repeat(${input},1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${input},1fr)`;

  if (input <= 100) {
    grid(squares);
  } else {
    alert("Please enter a Number between 0-100 :)");
  }
  input = 0;
  const allSquares = document.querySelectorAll(".square");
  for (j = 0; j < allSquares.length; j++) {
    allSquares[j].addEventListener("mouseenter", function () {
      this.classList.add("square-hover");
    });
  }
});
