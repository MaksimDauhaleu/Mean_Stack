const express = require("express");
const app = express();  
const mongoose = require('mongoose');
const flash = require('express-flash');


//File SetUp
app.use(express.static(__dirname + "/static"));
app.use('views',__dirname + "/client/views");
app.use(express.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewUrlParser: true});



// Templates Engine SetUp
app.set('view engine', 'ejs');




// Database
const QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 6},
    notName: { type: String},
   })
   const Quote = mongoose.model('Quote', QuoteSchema);





//Routes
app.get('/',(req,res)=>{
    res.render('index')
})


app.post('/quotes',(req,res)=>{
    const quote = new Quote();
    quote.name = req.body.name;
    quote.notName = req.body.notName;
    quote.save()
        .then(newUserData => {
            console.log('user created: ', newUserData);
            res.redirect('/quotes')
        })
        .catch(err => {
            console.log(err);
            res.redirect('/')
        });
    })


app.get('/quotes',(req,res)=>{
    Quote.find()
        .then(quotes =>{
            res.render('quotes',{quotes})
        })
        .catch(err => res.json(err))
})



// Listening port
app.listen(8000, () => console.log("listening on port 8000"))