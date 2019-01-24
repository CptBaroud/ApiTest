var db = require('../dbconnection');

var Comment = {
    getCommentsImages: function (callback) {
        return db.query("SELECT * FROM comments_image", callback);
    },
    getCommentsActivity: function (callback) {
        return db.query("SELECT * FROM comments_activity", callback);
    },
    getCommentsFromImages: function (id, callback) {
        return db.query("SELECT * FROM  comments_image where id_image=?",[id], callback);
    }
};

module.exports = Comment;