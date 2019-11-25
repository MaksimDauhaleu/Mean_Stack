var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is Required"], minlength: [3, "Name is less than 3"] },
    type: {type: String, required: [true, "Type is Required"], minlength: [3, "Type is less than 3"] },
    description: {type: String, required: [true, "Description is Required"], minlength: [3, "Description is less than 3"] },
    image: {type:String, required: [true, "Image is Required"],},
    skill_1: String,
    skill_2: String,
    skill_3: String,
    likes:  {type:Number,default:0}

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