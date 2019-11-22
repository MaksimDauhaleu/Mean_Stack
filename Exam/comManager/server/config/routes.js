var product = require("../controllers/views.js");

module.exports = function(app){

    app.get("/", product.index)


    app.get("/products", product.products)

}