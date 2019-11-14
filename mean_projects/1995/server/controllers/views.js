var mongoose = require("mongoose");
var People = mongoose.model("People");


module.exports = {
    index: function(req,res){
        People.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },


    create: function(req,res){
        People.create({name: req.params.name})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },

    delete: function(req,res){
        People.deleteOne({name : req.params.name})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
}