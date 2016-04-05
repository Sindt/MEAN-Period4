var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    email: {type: String, unique: true},
    created: {type: Date, default: Date.now},
    modified: Date,
    lastLogin: Date
});

userSchema.methods = {
    getAll: function (callback) {
        this.model('User').find({}, function (err, res) {
            if (err) {
                return callback(err);
            } else {
                callback(null, res);
            }
        });
    },
    getUserById: function (id, callback) {
        this.model('User').findById(id, function (err, res) {
            if (err) {
                return callback(err);
            } else {
                callback(null, res);
            }
        });
    },

    addUser: function (user, callback) {
        this.model('User').create(user, function (err, res) {
            if (err) {
                return callback(err);
            } else {
                callback(null, res);
            }
        });
    }
};

// Build the User model
mongoose.model('User', userSchema);
module.exports = mongoose.model('User');
