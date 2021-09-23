//clousers
function fun(){
    var i = 1;
    function innerFun(){
        // console.log(i);
        return i;
    }
    // innerFun();
    return innerFun;
}
// fun();

var get_inner = fun();
console.log(get_inner()); 

////

function foo(outerFoo){
    function innerFoo(innerFooo){
        return outerFoo+innerFooo;
    }
    return innerFoo;

}

var get_foo = foo(10);
console.log(get_foo(6));


////


function greeting(message){
    return (name) => {
        return message + " " + name;
    }
}
let sayHi = greeting('hi');
let sayHello = greeting('hello');
console.log(sayHi('Naveen'));
console.log(sayHello('Kumar'));
