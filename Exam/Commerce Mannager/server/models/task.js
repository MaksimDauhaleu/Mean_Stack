var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is Required"], minlength: [3, "Name is less than 3"] },
    qty: {type: Number, min:[0, "Qty can't be negative"] },
    price: {type: Number, min:[0, "Price can't be negative"] },
}, {timestamps: {createdAt: true}});

mongoose.model("Product", ProductSchema);

const UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true, minlength: 2},
    last_name: { type: String, required: true, minlength: 2},
    email: { type: String, required: true, minlength: 2},
    password: { type: String, required: true, minlength: 2},
    conf_password: { type: String, required: true, minlength: 2},
}, {timestamps: true });

mongoose.model("User", UserSchema);