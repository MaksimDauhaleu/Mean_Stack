// IMPORTS
const express = require("express");
const app = express();  
var session = require("express-session");
const mongoose = require('mongoose');
const flash = require('express-flash');
var bodyParser = require("body-parser");


// CONFIGURATIONS
app.use(flash());
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.static(__dirname + "/static"));
app.use(express.json());
app.use(bodyParser.urlencoded({useNewUrlParser: true}));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.set('views',__dirname + "/client/views");
app.set('view engine', 'ejs');



// DATABASE
mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewUrlParser: true});
require("./server/config/mongoose.js");



//ROUTES
require("./server/config/routes.js")(app);





//PORT
app.listen(8000, function(){
    console.log("Listening on port: 8000");
})

