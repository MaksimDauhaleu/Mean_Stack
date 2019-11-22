const express = require("express");
const app = express();  
const mongoose = require('mongoose');
const flash = require('express-flash');
const session = require('express-session');


//File SetUp
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewUrlParser: true});
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))


// Templates Engine SetUp
app.set('view engine', 'ejs');




// Database
const UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true, minlength: 2},
    last_name: { type: String, required: true, minlength: 2},
    email: { type: String, required: true, minlength: 2},
    password: { type: String, required: true, minlength: 2},
    conf_password: { type: String, required: true, minlength: 2},
   }, {timestamps: true });
   const User = mongoose.model('User', UserSchema);

//Routes
app.get('/',(req,res) =>{
    res.redirect('login')
})



app.use(flash())


app.get('/login',(req,res) =>{
    res.render('login')
})


app.post('/user_login',(req,res) =>{
    User.findOne({email : req.body.email})
        .then((user) => {
            if(user == null){
                req.flash('registration', "User not found")
            }
            console.log("Logged in",user)
            req.session.email = user.email
            res.redirect('/success')
        })
        .catch((err) => {
            console.log("error", err)
            res.redirect('/')
        })
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
            req.session.email = user.email
            console.log("~Successfully registered!~");
            res.redirect("/success");
        }
    })
})


app.get('/success',(req,res) =>{
    var email = req.session.email
    console.log(User.find())
    User.findOne({email:email}, (err, user) =>{
        if(err){
            console.log("error")
        
        }else{
            res.render('success',{user})
        }
    })
})

app.get('/logout',(req,res) =>{
    req.session.destroy();
    res.redirect('/')
})




// Listening port
app.listen(8000, () => console.log("listening on port 8000"))