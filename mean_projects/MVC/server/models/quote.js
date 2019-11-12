var mongoose = require("mongoose");

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    notName: { type: String},
    }, {timestamps: true});

    const Quote = mongoose.model("Quote", QuoteSchema);