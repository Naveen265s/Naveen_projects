// Challenge 01 - Padded Number
// In this challenge, an array is provided and stored in a variable, create a function which evaluates the strings in the array by adding a preceding 0 to single numbers (6 => 06, 5 => 05). Double figures remain as is.

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function numDouble() {
  for (i = 1; i <= array.length; i++) {
    if (i <= 9) {
      console.log('0' + i);
    } else {
      console.log(i);
    }
  }
}
numDouble();
