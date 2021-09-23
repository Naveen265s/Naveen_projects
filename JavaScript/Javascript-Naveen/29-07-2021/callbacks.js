//callbacks
//A callback is function passed as an argumnet to another function
//Callbacks allows a fuction to call another function
//Acallback function can run after another function has finished



function callFunc(){
    console.log(n);   
}
function Calculate(n1,n2,callbackvalue){
    let sum = n1+n2;
    callbackvalue(sum);
}

Calculate(4,5,callFunc);