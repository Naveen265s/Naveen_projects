let myVar = setInterval(myTimer, 1000);

function myTimer(){
    var d = new Date();
    var op = d.toLocaleDateString();
    document.getElementById('timer').innerText = op;
}
function myStopFunction(){
    clearInterval(myVar)
}
