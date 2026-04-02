const fs = require('fs');
const {getTodo, createTodo, updateTodo, deleteTodo} = require('../controllers/todoController.js');
const {validateTodo} = require('../middleware/validateMiddleware.js');
const {showLog} = require('../middleware/logMiddleware.js');
const express = require('express');
const router = express.Router();

router.get('/', showLog, getTodo);
router.post('/', validateTodo, createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;