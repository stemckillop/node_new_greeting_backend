var express = require('express');
var app = express();

require('./routes/login.route.server')(app);

app.listen(3000, console.log("STARTING SERVER"));