var mongoose = require('mongoose'),
    UserSchema = mongoose.model('User');

module.exports = function(app) {
    app.post('/account/create', function(req, res) {

        var user = new UserSchema();
        user.username = req.body.username;
        user.password = req.body.password;
        UserSchema.findOne({username: user.username}).exec(function(err, data) {
            console.log(data);
            if (err) {
                res.status(400).json({error: err});
            }
            else if (data) {
                res.status(201).json({msg: "That email is already being used..."});
            }
            else {
                user.token = generateToken();
                console.log(user);
                user.save(function(err, d) {
                    if (err) {
                        res.status(400).json({error: err});
                    } else if (d) {
                        res.status(200).json({msg: "Registration Successful"});
                    }
                });
            }
        });
    });

    app.post('/account/login', function(req, res) {
        console.log(req.body);
        var user = new UserSchema();
        user.username = req.body.username
        user.password = req.body.password
        UserSchema.findOne({username: user.username}).exec(function(err, data) {
            if (err) {
                res.status(400).json({error: err});
            }
            if (data) {
                //this means that the account already exists
                if (data.password == user.password) {
                    data.token = generateToken();
                    data.save(function(err, d) {
                        if (err) {
                            console.log(err);
                        } else if (d) {
                            res.status(200).json({msg: "Login successful"});
                        }
                    });
                } else {
                    res.status(201).json({msg: "Login Failed"});
                }
            } else {
                res.status(201).json({msg: "Login Failed"});
            }
        });
    });
}

function generateToken() {
    var t = "";
    var a = "abcdefghijklmnopqrstuvwyxz1234567890"
    for (var i = 0; i < 26; i++) {
        t = t.concat(a.substr(Math.floor(Math.random() * a.length), 1));
    }
    return t;
}