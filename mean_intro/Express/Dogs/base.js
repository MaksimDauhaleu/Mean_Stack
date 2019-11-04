const express = require("express");
const app = express();  

//Static File SetUp
app.use(express.static(__dirname + "/static"));


// Templates Engine SetUp
app.set('view engine', 'ejs');


//Routes

app.get('/dogs', (req,res) => {
    res.render('dogs');
})

app.get('/dogs_info',(req,res)=>{
    res.render('info');
})


// Listening port
app.listen(8000, () => console.log("listening on port 8000"));