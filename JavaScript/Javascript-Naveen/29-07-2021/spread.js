//spread
function sum(...a){
    let sum = 0;
    for(let k of a){
        sum = sum + k;
    }
    console.log(sum);
}
sum(12,23,30,40,60);

let arr = [1,3,4,5,6]
let arr1 = [7,8,9,10]
let newarr = [...arr, ...arr1]
// console.log(newarr);

for(let k of newarr){
    console.log(k);
}