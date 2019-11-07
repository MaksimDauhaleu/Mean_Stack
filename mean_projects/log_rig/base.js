const express = require("express");
const app = express();  
const mongoose = require('mongoose');
const flash = require('express-flash');


//File SetUp
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewUrlParser: true});



// Templates Engine SetUp
app.set('view engine', 'ejs');




// Database
const UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true, minlength: 2},
    last_name: { type: String, required: true, minlength: 2},
    email: { type: String, required: true, minlength: 2},
    password: { type: String, required: true, minlength: 2},
    conf_password: { type: String, required: true, minlength: 2},
   })
   const User = mongoose.model('User', UserSchema);

//Routes
app.get('/',(req,res) =>{
    res.redirect('login')
})




app.get('/login',(req,res) =>{
    res.render('login')
})

app.post('/login',(req,res) =>{
    
})


app.get('/regist',(req,res) =>{
    res.render('regist')
})


app.post('/regist_process',(req,res) =>{
    User.create({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: req.body.password, conf_password: req.body.conf_password}, function(err, user){
        if(err){
            console.log("~Something went wrong!~", err);
            res.redirect("/");
        }
        else{
            console.log("~Successfully registered!~");
            res.redirect("/success");
        }
    })
})


app.get('/success',(req,res) =>{
    res.render('success')
})





// Listening port
app.listen(8000, () => console.log("listening on port 8000"))