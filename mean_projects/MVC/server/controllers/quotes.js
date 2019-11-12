var mongoose = require("mongoose");
var Quote = mongoose.model("Quote");
var moment = require("moment");

module.exports = {

    index: function(req, res){
        console.log("Root");
        res.render("index");
    },


    quotePage: function(req, res){
        console.log("Get!");
        Quote.find()
        .then(quotes =>{
            res.render('quotes',{quotes})
        })
        .catch(err => res.json(err))
    },


    addQuote: function(req, res){
        console.log("Post", req.body);
        const quote = new Quote();
        quote.name = req.body.name;
        quote.notName = req.body.notName;
        quote.save()
            .then(newUserData => {
                console.log('user created: ', newUserData);
                res.redirect('/quotes')
            })
            .catch(err => {
                console.log(err);
                res.redirect('/')
            });
    }
}