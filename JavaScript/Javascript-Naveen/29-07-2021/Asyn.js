//Asynchrous function
//Functions runing in parallel with other functions are called asynchronous


function f(){
    console.log("hello callbacks")
}

// setTimeout(f, 3000);

// setTimeout(() => console.log('hello'), 3000);


function fucn(){
    let d = new Date();
    console.log(d.getHours()+ ":" +d.getMinutes()+":"+d.getSeconds());
}
setInterval(fucn, 1000);