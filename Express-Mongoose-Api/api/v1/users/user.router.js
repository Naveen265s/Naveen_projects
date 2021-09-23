//router file
 

const router=require('express').Router();
const userController=require('./user.controller');

router.post('/login',(req,res)=>{
    console.log('User Logged In')
    // userController.registerUser(req.body);
    // res.send();
});

router.post('/register',(req,res)=>{
    console.log('Sign Up')
    userController.registerUser(req.body);
    // res.send('thank you for register');
    res.send(req.body); 
});


module.exports=router