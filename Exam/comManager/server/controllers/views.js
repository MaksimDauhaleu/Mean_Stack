var mongoose = require("mongoose");
var Product = mongoose.model("Product");


module.exports = {

index: function(req, res){
    return redirect("/products")
},

products: function(req, res){
    Product.find({}, function(err, task){
        if(err){
            res.json({message: "Error!", error: err});
        }
        else{
            res.json({message: "Success!", task: task});
        }
    })
},

}