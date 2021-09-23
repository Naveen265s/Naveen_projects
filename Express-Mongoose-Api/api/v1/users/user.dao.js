const UserModel=require('./user.entity');
const loginUser=(userInfo)=>{
    console.log("Login User")
}
const registerUser=(userInfo)=>{
    console.log("Register User")
    //save()
    
    //creating instance
    var obje = new UserModel({userId : "123", userName : "naveen", password : "12345678"});
    obje.save(function(err, emp){
        if(err){
            console.log("Not saved");
        }else{
            console.log("Saved");
        }
    })

}
module.exports={
    loginUser,registerUser
}