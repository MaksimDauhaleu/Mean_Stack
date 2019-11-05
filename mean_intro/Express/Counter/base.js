const express = require("express");
const app = express();  
const session = require('express-session');



//File SetUp
app.use(express.static(__dirname + "/static"));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));


// Templates Engine SetUp
app.set('view engine', 'ejs');


//Routes
app.get('/', (req,res) => {
    if(!req.session.count){
        req.session.count = 1;
    }else{
        req.session.count += 1;
    }
    var count = req.session.count
    res.render('counter',{count});
})

app.get('/reset', (req,res) =>{
    req.session.destroy();
    res.redirect('/');
})
app.get('/addTwo', (req,res) =>{
    req.session.count += 1;
    res.redirect('/')
})



// Listening port
app.listen(8000, () => console.log("listening on port 8000"));