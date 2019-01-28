let express = require('express');
let jwt = require('jsonwebtoken');

let router = express.Router();
let Comment = require('../models/comment');

const JWT_SECRET_SIGN = 'tMKcN2BMKEgg6kK9eRuLRrjpqrd2m92v8NmmZ4jVTqTZVFBwAGUrwRCTpPtCLbpedgAv7Fx8DMbynS3RV4rLaUvjgWxEwpavRt76';

router.get('/', function (req, res) {
    Comment.getCommentsImages(function (error, rows) {
        jwt.verify(req.headers['token'], JWT_SECRET_SIGN, function (err) {
            if (err) {
                res.json(err);
            } else {
                if (error) {
                    res.json(error);
                } else {
                    res.json(rows);
                }
            }
        });
    })
});

router.get('/images/:id?', function (req, res) {
    Comment.getCommentsFromImages(req.params.id,function (error, rows) {
        jwt.verify(req.headers['token'], JWT_SECRET_SIGN, function (err) {
            if (err) {
                res.json(err);
            } else {
                if (error) {
                    res.json(error);
                } else {
                    res.json(rows);
                }
            }
        });
    })
});

module.exports = router;