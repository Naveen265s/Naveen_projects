//asyn

// async function myFun(){
//     return "g F"
// }

// myFun().then(value => console.log(value));


//example two

// const getData = async () => {
//     var data ="hello World Example two";
//     return data;
// }
// getData().then(value => console.log(value));


//Example three await

const getData = async () => {
    let data = await 'Hello World';
    console.log(data);
} 
console.log(1);
getData();
console.log(2);
