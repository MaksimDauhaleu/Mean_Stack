var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
    title: {type: String, default: ""},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false},
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

mongoose.model("Product", ProductSchema);