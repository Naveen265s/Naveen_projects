//router file

const router=require('express').Router();
const userController=require('./user.controller');

router.post('/login',(req,res)=>{
    console.log('User Logged In')
});

router.post('/register',(req,res)=>{
    console.log('Sign Up')
});


module.exports=router