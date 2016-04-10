var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');
var user = new User;

router.get("/", function (req, res, next) {
    user.getAll(function (err, data) {
        if (err) {
            res.json({err: "Error"})
        } else {
            res.json(data);
        }
    })
});

router.get("/user/:id", function (req, res, next) {
    user.getUserById(req.params.id, function (err, data) {
        if (err) {
            res.json({err: "Error"})
        } else {
            res.json(data);
        }
    })
});

router.post("/user", function (req, res, next) {
    console.log(req.body)
    user.addUser(req.body, function (err, data) {
        if (err) {
            res.json({err: "Error"})
        } else {
            console.log(data)
            res.json({status: "success", newUser: req.body});
        }
    });
});

module.exports = router;

