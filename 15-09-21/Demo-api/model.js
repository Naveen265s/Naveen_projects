//to create for collections, to create schema 

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password :{
        type : String,
        require : true
    }
})

const Player = mongoose.model("Player", playerSchema );
module.exports = Player;