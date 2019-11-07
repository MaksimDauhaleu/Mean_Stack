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
const AnimalSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    class: { type: String, required: true, minlength: 2},
    family: { type: String, required: true, minlength: 2},
   })
   const Animal = mongoose.model('Animal', AnimalSchema);

//Routes
app.get('/',(req,res)=>{
    Animal.find()
        .then(Animals =>{
            console.log(Animals)
            res.render('index',{Animals})
        })
        .catch(err => res.json(err));
})      
app.get('/create',(req,res)=>{
    res.render('create')
})


app.post('/create', (req,res) =>{
    const animal = new Animal();
    animal.name = req.body.name;
    animal.class = req.body.class;
    animal.family = req.body.family;
    animal.save()
        .then(Animals => {
            console.log("New Animal", Animals)
            res.redirect('/')
        })
        .catch(err => {
            console.log(err);
            res.redirect('/')
        });
})


app.get('/edit/:id',(req,res)=>{
    const { id } = req.params;
    Animal.findOne({_id:id})
        .then(data => {
            console.log(data)
            res.render('edit',{data})
        })
        .catch(err => res.json(err))
    }) 



app.post('/edit_pr/:id',(req,res)=>{
    const { id } = req.params;
    Animal.findOneAndUpdate({_id : id}, req.body )
        .then(data => {
            res.redirect('/')
        })
        .catch(err => res.json(err))
})

app.get('/delete/:id',(req,res)=>{
    var id = req.params.id;
    Animal.findByIdAndRemove(id, (err) => {
        if(err) {
            res.redirect('/');
        } else {
            res.redirect('/')
        }
    });
});






// Listening port
app.listen(8000, () => console.log("listening on port 8000"))