var products = require("../controllers/product.js");
var user = require("../controllers/product.js");
var path = require("path")


module.exports = function(app){

    app.get("/login_u", user.login)

    app.get("/regist_u", user.regist)

    app.get('/getUser/:id', user.getUser)
    
    app.post("/regist_user", user.registUser)

    app.get("/products", products.index)

    app.get("/products/:id", products.show)

    app.post("/add", products.addProduct)

    app.put("/edit/:id", products.editProduct)

    app.delete("/delete/:id", products.deleteProduct)

    app.put("/reset/:id", products.resetParams)

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}