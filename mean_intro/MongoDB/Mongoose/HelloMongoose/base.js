const express = require("express");
const app = express();  
const session = require('express-session');
const mongoose = require('mongoose');
const flash = require('express-flash');


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

// Database


const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 6},
    age: { type: Number, min: 10, max: 100 },
   })
   const User = mongoose.model('User', UserSchema);



// Templates Engine SetUp
app.set('view engine', 'ejs');


//Routes

app.get('/', (req, res) => {
    app.use(flash());
    User.find()
        .then(data => res.render("index", {users: data}))
        .catch(err => res.json(err));
    res.render('index')
});
app.get('/show', (req, res) => {
    const user = User()
    var name = user.name
    var age = user.age
    res.render('show',{name,age})
});
app.post('/data', (req, res) => {
    const user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.save()
        .then(newUserData => console.log('user created: ', newUserData))
        .catch(err => console.log(err));

    res.redirect('/show')
});

app.use(flash());
app.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(() => res.redirect('/'))
        .catch(err => {
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        });
});



// Listening port
app.listen(8000, () => console.log("listening on port 8000"))