var db = require('../dbconnection');

var Users = {
    getAllUsers: function (callback) {
        return db.query("SELECT * FROM users", callback);
    },
    getUserById(id, callback) {
        return db.query("SELECT * FROM users WHERE id_user =?", [id], callback);
    },
    getUserByLocation(location, callback) {
        return db.query("SELECT * FROM users WHERE location =?", [location], callback);
    },
    getUserByPermission(permission, callback) {
        return db.query("SELECT * FROM users WHERE permissions=?", [permission], callback);
    }
};

module.exports = Users;