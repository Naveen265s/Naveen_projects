//promises

//inpromises are used to hnadle asyn operations
//they are easy to manage when dealing with multiple asyn opreations
//it is idel for handling asynchronus operations in the simple manner
//they can hnalde multiple asyn operations easily
//they can provide better error handling than callbacks and events.

//benifits or promises

//improves code readablity.
//better error-handling
//better flow of control definisation of asyn logic

//Apromise has four states:

//filfilled:acion related to the promise succeeded
//rejected: action related to the promise is failed
//pending: promise is still pending i.e not fullfilled or rejected yet.
//settled: promise had fullfilled or rejected

//declaration
// var promise = new Promise(function(resolve,reject){
    //condition;
// })


//example one

// var promise = new Promise(function(resolve,reject){
//     const x='Hello';
//     const y ="Hello";
//     if(x==y){
//         resolve();
//     }else{
//         reject();
//     }
// });

// promise.then(
//     function(){
//         console.log("Sucess,u r the robot")
//     },function(){
//         console.log("sorry, You are a Human")
//     }
// )


//example two

// var promise = new Promise(function(resolve,reject){
//     let result = true;
//     if(result){
//         resolve("Hello Team");
//     }else{
//         reject("Good Luck...");
//     }
// });

// promise.then(
//     function(successMsg){
//         console.log("Sucess,u r the robot")
//     },function(errorMsg){
//         console.log("sorry, You are a Human")
//     }
// )


//Example three

let myPromise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve("I love learning")
    }, 3000)
})

myPromise.then((value) => console.log(value));





