var mongoose = require('mongoose');
var connection;

var connect = function (url, done) {
    if (connection) return done();
    mongoose.connect(url, function (err, db) {
        if (err) {
            return done(err);
        }
        connection = db;
        done();
    })
};

var get = function () {
    return connection;
};

var close = function (done) {
    if (connection) {
        connection.close(function (err, result) {
            connection = null;
            done(err)
        })
    }
};

module.exports.connect = connect;
module.exports.get = get;
module.exports.close = close;