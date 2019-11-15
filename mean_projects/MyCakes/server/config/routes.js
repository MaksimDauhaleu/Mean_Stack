var cakes = require("../controllers/views.js");


module.exports = function(app){     
    app.post("/", cakes.index)
}

