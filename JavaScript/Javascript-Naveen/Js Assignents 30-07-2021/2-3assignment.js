// Write a JavaScript program to get the current date.                     
// Expected Output : 
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 

var time = new Date();
var day = time.getDay();
var month = time.getMonth();
var year = time.getFullYear();

console.log('Current date is : ' + day +' / ' + month + ' / ' + year);