var db = require('../dbconnection');

var Users = {
    getAllUsers: function (callback) {
        return db.query("SELECT * FROM users", callback);
    },
    getUserById: function(id, callback) {
        return db.query("SELECT * FROM users WHERE id_user =?", [id], callback);
    },
    getUserByLocation: function(location, callback) {
        return db.query("SELECT * FROM users WHERE location =?", [location], callback);
    },
    getUserByPermission: function(permission, callback) {
        return db.query("SELECT * FROM users WHERE permissions=?", [permission], callback);
    }
};

module.exports = Users;