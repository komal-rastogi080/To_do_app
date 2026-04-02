const fs = require('fs');
const {getTodo, createTodo, updateTodo, deleteTodo} = require('../controllers/todoController.js');
const {validateTodo} = require('../middleware/validateMiddleware.js');
const express = require('express');
const router = express.Router();

router.get('/', getTodo);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;