var express = require('express');
var app = express();
var bodyParse = require('body-parser');
app.use(bodyParse.json());
var mongoose = require('mongoose');

var db = mongoose.connect("mongodb://user:user1234user@ds047440.mlab.com:47440/new_gift_track",  {useNewUrlParser: true});
require('./models/user.model.server')
require('./models/group.model.server')
require('./models/items.model.server')

require('./routes/login.route.server')(app);

mongoose.connection.on('connected', err => {
    console.log("connected");
})
app.listen(3000, console.log("STARTING SERVER"));