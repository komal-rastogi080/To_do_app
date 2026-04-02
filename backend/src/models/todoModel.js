const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
    },
    createdAt : {
        type : Date,
        default : Date.now 
    },
    updatedAt : {
        type : Date,
        default : Date.now
    }
},{
        versionKey: false
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
