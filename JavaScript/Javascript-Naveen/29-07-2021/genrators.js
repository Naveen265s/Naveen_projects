//generator

//yield: pauses the generator exection
//after the yield keyword.

//yeild Example

function* collection(){
    yield 1;
    yield 3;
    yield 5;
}
for(var k of collection()){
    console.log(k)
}
var gen = collection();

console.log(gen.next().value);
console.log(gen.next().value);

for (let i=0; i<4; i++){
    console.log(gen.next().value)
}



// generator example

// let arr = ['a','b','c']
// function* generator(arr){
//     let i=0;
//     while(i<arr.length){
//         yield arr[i++]
//     }
// }
// const v = generator(arr);
// console.log(v.next());


// another example

// let arr = ['a','b','c']
// function* generator(){
//    yield 1;
//    yield* arr;
//    yield 2;
// }
// for(let v of generator()){
//     console.log(v);
// }