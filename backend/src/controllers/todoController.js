
const Todo = require('../models/todoModel');

const createTodo = async (req,res) => {
    try{
      
        const todo = await Todo.create(req.body);
        res.status(200).send('created successfully');
    }catch(error){
        res.status(500).json({error: 'Failed to create todo'});
    }
}

const updateTodo = async (req, res) => {
    try{
        const {id} = req.params;
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body);

        res.status(200).json({message : "todo updated", data : updatedTodo});
    }catch(error){
        res.status(500).json({error : 'Failed to update todo'});
    }
}

const getTodo = async (req,res) => {
    try{
        const todo = await Todo.find();
        res.status(200).json({todo});
    }catch(error){
        res.status(500).json({error : 'Failed to get todo'});
    }
}

const deleteTodo = async (req,res) => {
    try{
        const {id} = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        res.status(200).json({message : "Deleted successfully"});
    }catch(error){
        res.status(500).json({error : "Failed to delete id"});
    }
}

module.exports = {
    createTodo,
    updateTodo,
    getTodo,
    deleteTodo
}