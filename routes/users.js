let express = require('express');
let router = express.Router()
let Users = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Users.getAllUsers(function (err, rows) {
        if (err){
            res.json(err)
        } else{
            res.json(rows);
        }
    });
});

router.get('/id/:id?', function (req, res, next) {
    if(req.params.id){
        Users.getUserById(req.params.id, function (err, rows) {
            if(err){
                res.json(err);
            }else{
                res.json(rows);
            }
        });
    }else{
        res.json("Pls put an id");
    }
});

router.get('/location/:location?', function (req, res, next) {
    if(req.params.location){
        Users.getUserByLocation(req.params.location, function (err, rows) {
            if(err){
                res.json(err);
            }else{
                res.json(rows);
            }
        })
    }else{
        res.json("Pls give a location");
    }
});

router.get('/permission/:permission?', function (req, res, next) {
    if(req.params.permission){
        Users.getUserByPermission(req.params.permission, function (err, rows) {
            if(err){
                res.json(err);
            }else{
                res.json(rows);
            }
        })
    }
});

module.exports = router;
