var people = require("../controllers/views.js");


module.exports = function(app){     
    app.get("/l", people.index)

    app.get('/new/:name', people.create)

    app.get('/d/:name', people.delete)
}