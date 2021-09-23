// Write a JavaScript program to display the current day and time in the following format. 
// Sample Output : Today is : Friday. 
// Current time is : 4 PM : 50 : 22

function myFunction() {
    var d = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let i=0; i<days.length; i++){
        var n = days[d.getDay()];
    }
    return n;
}
console.log('Today is : ' + myFunction());

var time = new Date();
var hours = time.getHours();
var mintues = time.getMinutes();
var seconds = time.getSeconds();
var newformat = hours >= 12 ? 'PM' : 'AM'; 

console.log('Current time is : ' + hours +' ' + newformat + ' : ' + mintues + ' : ' + seconds);