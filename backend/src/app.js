const express = require('express');
const app = express()
const todoRoutes = require('./routes/todoRoutes.js');

const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());

app.get("/set-cookie", (req, res) => {
    res.cookie("name", "user-1");
    res.send("Cookie has been set");
});

app.get("/get-cookie", (req, res) => {
    res.send(req.cookies);

});

app.use(session({
    secret : "mysecretkey",
    resave: false,
    saveUninitialized: true,
}));

app.use('/api/todos', todoRoutes);


//Session based authentication routes
app.post("/login", (req,res) => {
    const {userName} = req.body;
    req.session.user = userName;
    res.send("User logged in");
});
app.get("/profile", (req,res) => {
    if(!req.session.user){
        return res.status(401).send("User not logged in");
    }
    res.send(`Welcome ${req.session.user}`);
});


app.get("/logout", (req,res) => {
    req.session.destroy()
    return res.send("User logged out");
});
module.exports = app;