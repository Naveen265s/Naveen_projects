//program to connect to MongoDB
const e = require('express');
var mongoose = require('mongoose');

//make a connection
mongoose.connect('mongodb://localhost:27017/test');

//get reference to database
var db = mongoose.connection;

db.on('error', console.error.bind(console,'connection Error:'));

db.once('open',function(){
    console.log("connection successful");
    //define schema
    var EmployeeSchema = mongoose.Schema({
        id:String,
        first_name:String,
        last_name:String,
        age:Number,
        city:String
    })
    
    //compile schema to a model
    var Employee = mongoose.model('Employee',EmployeeSchema, 'employee'); //model name, schema name, collection name

    //document instance
    var empObj = new Employee({id: '12345', first_name:"Naveen",last_name:"A", age:25, city:"Hyderabad"});
    empObj.save(function(err,emp){
        if(err){
            console.log("Not insterted Data");
        }else{
            console.log("Data inserted");
        }
    });

    // //retrive data
    // function getEmployee(){
    //     const emps = Employee.find().exec(function(err, emp){
    //         if(err){
    //             console.log("Error !!");
    //         }else{
    //             console.log(emp);
    //         }
    //     })
    // }
    // // getEmployee();


    // function getEmployeeCity(){
    //     const emps = Employee.find({City: "Mumbai"}).exec(function(err, emp){
    //         if(err){
    //             console.log("Error !!");
    //         }else{
    //             console.log(emp);
    //         }
    //     })
    // }
    // getEmployeeCity();

    // async function updateEmployees(id){
    //     const emp = await Employee.findOneAndUpdate({id: `${id}`}, {city:"Bangalore"});
    //     if(!emp){
    //         console.log("could not Update !!");
    //     }else{
    //         console.log(`${id} updated`);
    //     }
    // }  
    // updateEmployees("123");

    // async function deleteEmployees(id){
    //     const emp = await Employee.findOneAndDelete({id: `${id}`});
    //     if(!emp){
    //         console.log("could not delete !!");
    //     }else{
    //         console.log(`${id} Deleted`);
    //     }
    // }  
    // deleteEmployees("123");

})