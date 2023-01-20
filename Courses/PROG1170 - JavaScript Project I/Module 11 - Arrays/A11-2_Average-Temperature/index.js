// Ask user to enter the number of temperatures they desire to enter and then calculate the average of those temperatures.
let tempRange = window.prompt("How many temperatures would you like to average. please? ", "");
tempReport(tempRange);

function tempReport(tempRange) {
  let temperatures = [];
  document.write(`There are ${tempRange} temperatures to average.<br>`)
  
  for (let i = 1; i <= tempRange; i++) {
    let input = parseInt(window.prompt(`Please enter temperature # ${i}.`));
    temperatures.push(input);
    document.write(input + "<br>");
  }

  // Average input temperatures
  var total = 0;
  for (let i = 0; i < temperatures.length; i++) {
    total += temperatures[i];
  }

  let tempAverage = total / temperatures.length;

  document.write(`The average of your temperatures is: ${tempAverage}`);
}
