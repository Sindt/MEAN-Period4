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
    user.addUser(req.body.user, function (err, data) {
        if (err) {
            res.json({err: "Error"})
        } else {
            res.json({status: "success", newUser: req.body.user});
        }
    });
});

module.exports = router;

