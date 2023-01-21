// Create a function that allows a user to remove elements from an array that are chosen by the user
let unitedArray = ["T", "H", "E", "U", "N", "I", "T", "E", "D", "S", "T", "A", "T", "E", "S", "O", "F", "A", "M", "E", "R", "I", "C", "A"];
document.write(unitedArray + "<br>");

function removeElement(array, element) {
  var i = 0;
  while (i < array.length) {
    if (array[i] === element) {
        array.splice(i, 1);
    } else {
        ++i;
    }
  }
  document.write(array + "<br>");
}

// STEP 1: Remove all letter E's
removeElement(unitedArray, "E");

// STEP 2: Remove all letter A's
removeElement(unitedArray, "A");

// STEP 3: Remove first letter I
unitedArray.splice(4, 1);
document.write(unitedArray + "<br>");

// STEP 4: Create a function that will replace an element in the array with a new element
function replaceElement (array, toReplace, replacement) {
  
}

replaceElement(unitedArray, "F", "A");
document.write(unitedArray + "<br>");

