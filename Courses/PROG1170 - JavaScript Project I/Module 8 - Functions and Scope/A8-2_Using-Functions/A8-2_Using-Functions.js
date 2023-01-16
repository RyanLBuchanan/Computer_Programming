// Step One
let addNumbers = function(number1, number2) {
  return number1 + number2
  };
let result1 = addNumbers(34, 8);
document.write("The result of part one is " + result1);
document.write("<br><br>")

// Step Two
let addNumbers2 = (number1, number2) => number1 + number2;
let result2 = addNumbers2(76, 12);
document.write(`The result of part two is ${result2}`);