var mongoose = require("mongoose");


var CakeSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    img: { data: Buffer, contentType: String },
    baker: {type: String, required: true, minlength: 3},
    comments: {type: String, required: true, minlength: 3},
    rating: {type: Number, required: true, minlength: 3},
    }, {timestamps: true});

    const Cake  = mongoose.model("Cake", CakeSchema);