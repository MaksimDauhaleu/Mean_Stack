const express = require("express");
const app = express();  
const session = require('express-session');


//File SetUp
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));


// Templates Engine SetUp
app.set('view engine', 'ejs');


//Routes

// app.get('/survey', (req,res) =>{
//     res.render('survey')
// });
app.get('/show', (req,res) =>{
    res.render('show');
});
app.post('/data', (req, res) => {
    var name = req.name;
    var location = req.location;
    var language = req.language;
    var comments = req.comments;
    res.render('survey',{'name' : name, 'location' : location,'language' : language,'comments' : comments})
});



// Listening port
app.listen(8000, () => console.log("listening on port 8000"));