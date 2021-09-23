exports.Add = (a,b) =>{
    return a+b;
}
exports.sub = (a,b) => {
    return a-b;
}

exports.mul = (a,b) => {
    return a*b;
}

exports.div = (a,b) => {
    if(b==0){
        return 0;
    }else{
        return a/b;
    }
}