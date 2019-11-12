var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var groupSchema = new Schema({
    name: String,
    pin: String,
    gID: String
})

mongoose.model("Group", groupSchema);