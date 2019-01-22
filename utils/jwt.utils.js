var jwt = require('jsonwebtoken');
var user = require('../models/login');

const JWT_SECRET_SIGN = 'tMKcN2BMKEgg6kK9eRuLRrjpqrd2m92v8NmmZ4jVTqTZVFBwAGUrwRCTpPtCLbpedgAv7Fx8DMbynS3RV4rLaUvjgWxEwpavRt76';

module.exports = {
    generatedToken: function () {
        return jwt.sign({
            userId: user.username,
            email: user.email
        }, JWT_SECRET_SIGN, {
            expiresIn: '15m'
        })
    }
}