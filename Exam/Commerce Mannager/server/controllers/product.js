var mongoose = require("mongoose");
var Product = mongoose.model("Product");
var User = mongoose.model("User");


module.exports = {

    login: function(req,res){
        res.json();
    },


    regist: function(req,res){
        res.json();
    },

    registUser: function(req,res){
        User.create({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: req.body.password, conf_password: req.body.conf_password}, function(err, user){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                console.log("~Successfully registered!~",user);
                res.json(user);
            }
        })
    },

    index: function(req, res){
        Product.find({}, function(err, products){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json(products);
            }
        })
    },

    show: function(req, res){
        let id = req.params.id;
        Product.findOne({_id: id},function(err, product){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json(product);
            }
        })
    },
    getUser: function(req, res){
        let id = req.params.id;
        User.findOne({_id: id},function(err, user){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json(user);
            }
        })
    },

    addProduct: function(req, res){
        console.log(req.body);
        Product.create({name: req.body.name, price: req.body.price, qty: req.body.qty}, function(err, product){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                console.log("******",product)
                res.json({message: "Success!", added: true, product: product});
            }
        })
    },

    editProduct: function(req, res){
        let id = req.params.id;
        Product.findById(id, function(err, product){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                if(req.body.name){
                    product.name = req.body.name; 
                }
                if(req.body.price){
                    product.price = req.body.price;
                }
                if(req.body.qty){
                    product.qty = req.body.qty;
                }
            }
            product.save(function(err){
                if(err){
                    res.json({message: "Error!", error: err});
                }
                else{
                    res.json({message: "Success!", product: product})
                }
            })
        })
    },

    resetParams: function(req, res){
        let id = req.params.id;
        Product.findById(id, function(err, product){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                if(req.body.name){
                    product.name = req.body.name; 
                }
                if(req.body.price){
                    product.price = null;
                }
                if(req.body.qty){
                    product.qty = null;
                }
            }
            product.save(function(err){
                if(err){
                    res.json({message: "Error!", error: err});
                }
                else{
                    res.json({message: "Success!", product: product})
                }
            })
        })
    },

    deleteProduct: function(req, res){
        let id = req.params.id;
        Product.remove({_id: id},function(err){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", removed: true});
            }
        })
    }    
}