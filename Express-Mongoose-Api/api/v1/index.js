// /api/v1/index.js
// routing for the api

const router=require('express').Router();
router.use('/users',require('./users'));

module.exports=router;