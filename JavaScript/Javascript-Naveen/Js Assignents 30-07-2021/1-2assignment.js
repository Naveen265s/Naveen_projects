// Challenge 02 - Camel-to-Title
// Convert a given sentence from camel case to title case. 
// Create a function which evaluates a given sentence argument in camel case and converts it to title case. 
// e.g. productDetails to product-details

const string = 'productDetailsUpperCase';
const result = string.replace(/([A-Z])/g, '-$1'); //reg exp
const finalResult = result.charAt(0) + result.slice(1).toLowerCase();
console.log(finalResult);