const express = require("express");
const app = express();  
const session = require('express-session');




//Static File SetUp
app.use(express.static(__dirname + "/static"));



// Templates Engine SetUp
app.set('view engine', 'ejs');



// Routes
app.get("/", (req, res) => {
    res.render('index.html');
});



app.get("/dogs", (req, res) => { 
    res.render('dogs');
});



app.get("/cars", (req, res) => { 
    res.render('dogs');
});



// Listening port
app.listen(8000, () => console.log("listening on port 8000"));

