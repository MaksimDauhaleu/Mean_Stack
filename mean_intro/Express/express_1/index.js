const express = require("express");
const app = express();
const nunjucks = require("nunjucks")   

//Static File SetUp
app.use(express.static(__dirname + "/static"));




// Templates Engine SetUp
app.set('view engine', 'njk');
nunjucks.configure('views', {
    express: app
})

// Routes
app.get("/", (req, res) => {
    res.render('cars');
});

app.get("/users", (req, res) => { 
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    res.render('users', users_array);
});





app.listen(8000, () => console.log("listening on port 8000"));

