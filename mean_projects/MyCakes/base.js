const express = require("express");
const app = express();  
const mongoose = require('mongoose');
const flash = require('express-flash');


// config
app.use(flash());
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.json());
app.set('views',__dirname + "/client/views");
app.set('view engine', 'ejs');

//database
mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewUrlParser: true});
require("./server/config/mongoose.js");


//ROUTES
require("./server/config/routes.js")(app);


app.listen(8000, function(){
    console.log("Listening on port: 8000");
})