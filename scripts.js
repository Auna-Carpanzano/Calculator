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

    }

  } // End getVal function

}); // End document ready function
