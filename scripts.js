$(document).ready(function() {
  // Keeps track of state after equal button is pressed
  var afterEqual= false;

  // Stores result after equal button is pressed
  var lastTotal;

  // Stores inputs from user
  var inputs = [""];

  // Stores string of inputs
  var total;

  // For validation- without decimal
  var operators1 = ["+", "-", "/", "*"];

  // For validation- decimal
  var operators2 = ["."];

  // For validation- numbers
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Validates operators and calls update function
  function getVal(input) {
    /*
    After equal button is pressed,
    set inputs and total to current result
    and change afterEqual to false
    */
    if (afterEqual === true) {
      lastTotal = $("#output").html();
      inputs = [lastTotal];
      total = inputs;
      afterEqual = false;
    }

    // Does not allow two decimals next to each other
    if (operators2.includes(inputs[inputs.length-1]) === true && input === ".") {
      console.log("Duplicate '.' ");
    }

    // Limits input to 23 characters
    else if (inputs.length === 24) {
      console.log("Too many inputs");
    }

    // Validation to not start with operator
    else if (inputs.length===1 && operators1.includes(input)===false) {
      inputs.push(input);
    }

    // Does not allow two operators next to each other
    else if (operators1.includes(inputs[inputs.length-1])===false) {
      inputs.push(input);
    }

    // Validates numbers
    else if (numbers.includes(Number(input))) {
      inputs.push(input);
    }

  } // End getVal function

}); // End document ready function
