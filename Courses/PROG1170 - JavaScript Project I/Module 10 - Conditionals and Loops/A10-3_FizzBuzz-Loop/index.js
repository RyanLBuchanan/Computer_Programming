
function fizzBuzz(beginningNumber, endingNumber) {
  for (let i = 0 + beginningNumber; i <= endingNumber; i++) {
    if (i % 20 == 0) {
      document.write("FizzBuzz" + "<br>");
    }
    else if (i % 4 == 0) {
      document.write("Fizz" + "<br>");
    }
    else if (i % 5 == 0) {
      document.write("Buzz" + "<br>");
    }
    else {
      document.write(i + "<br>");
    }
  }
}

let beginningNumber = window.prompt("Please enter a beginning number: ", "");
let endingNumber = window.prompt("Please enter a ending number: ", "");
fizzBuzz(beginningNumber, endingNumber);


// function fizzBuzz(beginningNumber, endingNumber) {
//   for (var i = 1; i < endingNumber; i++) {
//     if (i % 20 == 0) {
//       document.write("FizzBuzz" + "<br>");
//     }
//     else if (i % 4 == 0) {
//       document.write("Fizz" + "<br>");
//     }
//     else if (i % 5 == 0) {
//       document.write("Buzz" + "<br>");
//     }
//     else {
//       document.write(i + "<br>");
//     }
//   }
// }

// let beginningNumber = window.prompt("Please enter a beginning number: ", "");
// let endingNumber = window.prompt("Please enter a ending number: ", "");
// fizzBuzz(beginningNumber, endingNumber);