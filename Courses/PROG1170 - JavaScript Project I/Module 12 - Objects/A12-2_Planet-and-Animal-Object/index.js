// FIRST OBJECT (Planet)
document.write("<h2>Planet</h2>");
let planet = new Object();
planet.name = "Earth";
planet.location = "3rd rock from the Sun";
planet.temperature = "Within in the human range of heat and cold";

document.write(`Planet name: ${planet.name}<br>`);
document.write(`Planet location: ${planet.location}<br>`);
document.write(`Planet temperature: ${planet.temperature}<br>`);

// SECOND OBJECT (Animal)
document.write("<h2>My Animal</h2>");
function Animal(species, color, animalName) {
  this.species = species;
  this.color = color;
  this.animalName = animalName;
}

let cat = new Animal("Cat", "Orange", "Seamus");
document.write(`Animal species: ${cat.species}<br>`);
document.write(`Animal color: ${cat.color}<br>`);
document.write(`Animal name: ${cat.animalName}<br>`);

// USER INPUT Animal Object
document.write("<h2>User Animal</h2>");
species = window.prompt("What is the animal's species?", "");
color = window.prompt("What is the animal's color?", "");
animalName = window.prompt("What is the animal's name'?", "");

let userAnimal = new Animal(species, color, animalName);
document.write(`Animal species: ${userAnimal.species}<br>`);
document.write(`Animal color: ${userAnimal.color}<br>`);
document.write(`Animal name: ${userAnimal.animalName}<br>`);

