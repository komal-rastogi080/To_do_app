const validateTodo = (req, res, next) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    next(); //this is to call next middleware if present or run next function in the route handler
}
 //Route Level middleware for validating the request body of todo creation
module.exports = {
    validateTodo
}