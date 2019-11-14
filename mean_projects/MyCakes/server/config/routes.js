var cakes = require("../controllers/views.js");


module.exports = function(app){     
    app.get("/l", cakes.index)
}

