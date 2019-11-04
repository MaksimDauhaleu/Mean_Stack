const express = require("express");
const app = express();  

//Static File SetUp
app.use(express.static(__dirname + "/static"));


// Templates Engine SetUp
app.set('view engine', 'ejs');

// Routes
app.get("/", (req, res) => {
    res.render('index.html');
});

app.get("/main", (req, res) => { 
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    res.render('main', {users_array});
});





app.listen(8000, () => console.log("listening on port 8000"));

