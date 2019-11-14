var mongoose = require("mongoose");
var Cake = mongoose.model("Cake");


module.exports = {
    index: function(req,res){
        Cake.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
}