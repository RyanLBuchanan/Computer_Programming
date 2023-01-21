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
function replaceElement(array, toReplace, replacement) {
  var i = 0;
  while (i < array.length) {
    if (array[i] === toReplace) {
        array.splice(i, 1, replacement);
    } else {
        ++i;
    }
  }
  document.write(unitedArray + "<br>");
}

replaceElement(unitedArray, "F", "A");

// STEP 5: Create a function that will move an element to the front of an array
function moveToFront(array, element) {
  var i = 0;
  let removed;
  while (i < array.length) {
    if (array[i] === element) {
        // removed = array.splice(i, 1);
        // unitedArray.unshift(removed);
        array.splice(i, 1);
        unitedArray.unshift(element);
    } else {
        ++i;
    }
  }
  document.write(unitedArray + "<br>");
}

moveToFront(unitedArray, "S");

// STEP 6: Use the previously created removeElement() function to remove all of the letter T's from the array
removeElement(unitedArray, "T");

// STEP 7: Use the splice() method to remove the first vowel in the array and a different method to remove the last consonant in the array 
unitedArray.splice(3, 1);
unitedArray.pop();
document.write(unitedArray + "<br>");

// STEP 8: Move the fourth and fifth letters to the end of the array
let switcheroo = unitedArray.splice(3, 2);
unitedArray.push(switcheroo);
document.write(unitedArray + "<br>");

// STEP 9: Use the previously created replaceElement() function to replace all letter S's with the letter L 
replaceElement(unitedArray, "S", "L");

// STEP 10: Remove the 6th, 7th, and 8th letters from the array 
unitedArray.splice(5, 3);
document.write(unitedArray + "<br>");

// STEP 11: Move the two letter L's to become the 3rd and 4th letters in the array
let removed = unitedArray.splice(0, 2);
unitedArray.splice(2, 0, removed);
document.write(unitedArray + "<br>");
