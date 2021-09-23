// var mes:string;
var msg = "typescript string";
console.log(msg);
var num1 = 10;
if (num1 == 10) {
    console.log("it is a decade");
}
var i;
for (i = 0; i < 10; i++) {
    console.log(i);
}
//array
var numArray;
numArray = [1, 2, 3, 4, 5, 6];
//creating array using array object
var numArray1 = new Array(5);
var strArray = new Array(5);
var strNameArray = new Array("Naveen", "Kumar");
//functions
function display(userId, userName) {
    console.log("user Id", userId);
    console.log("user Name", userName);
}
display(123, "Naveen");
//optional parameter, use ?
function display1(userId, userName, userAdhaar) {
    console.log("User Id", userId);
    console.log("User Name", userName);
    console.log("User Adhaar", userAdhaar);
}
display1(1, "Praveen");
display1(1, "Praveen", "123456789098765");
//default parameter
function display2(userId, userName, userAdhaar) {
    if (userName === void 0) { userName = "Brillio"; }
    console.log("User Id", userId);
    console.log("User Name", userName);
    if (userAdhaar != undefined) {
        console.log("Adhaar", userAdhaar);
    }
}
display2(123, "Usha", "1234567");
display2(899);
//
function greeting() {
    return "greeting!";
}
// var greet =function():string{
//     return "Hello"
// }
// var greet = ():string => {
//     return "Hello"
// }
var greet = function () { return "Hello"; };
//modify this arrow function, so that it takes user name as a parameterand returns hello username
console.log(greeting());
console.log(greet());
var username = function (name) {
    console.log(name);
};
username('Naveen Kumar');
