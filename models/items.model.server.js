var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var itemSchema = new Schema({
    item: String,
    uID: String,
    uName: String,
    gID: String,
    checked: Boolean
});

mongoose.model("Item", itemSchema);