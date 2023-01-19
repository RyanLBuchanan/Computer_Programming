// Function for hash tag square
function hashtagSquare(rows, columns) {
  for (let i = 1; i <= rows; i++) {
    // Print #'s
    for (let j = 1; j <= columns; j++) {
      document.write("#");
    }
    // Move to the next line/row
    document.write("<br>");
  }
}

let rows = window.prompt("Please enter the number of rows: ", "");
let columns = window.prompt("Please enter the number of columns: ", "");
hashtagSquare(rows, columns);