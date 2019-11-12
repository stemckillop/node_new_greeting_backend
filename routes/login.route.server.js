module.exports = function(app) {
    app.post('/account/login', function(req, res) {
        res.send({msg: "account/login"});
    });

    app.post('/account/create', function(req, res) {
        res.send({msg: "account/create"});
    });

    
}