var mongoose = require("mongoose");


var PeopleSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    }, {timestamps: true});

    const People  = mongoose.model("People", PeopleSchema);