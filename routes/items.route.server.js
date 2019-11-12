module.exports = function(app) {

    app.get("/group/:groupid", function(req, res) {
        //this will GET all items from a group
    })

    app.post("/group/:groupid/new", function(req, res) {
        //this will POST a new item to the group
    })

    app.post("/group/:groupid/:itemid/status", function(req, res) {
        //this will UPDATE the checked/unchecked status of the item
    })

    app.post("/group/:groupid/:itemid", function(req, res) {
        //this will UPDATE the item
    })



}