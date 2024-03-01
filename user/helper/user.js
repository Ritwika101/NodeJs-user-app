const user = require('../model/user');
class UserHelper {
    async checkUser(req, res, next) {
        try {
            let body = req.body;
            let username = body.username;
            let docs = await user.find({username : username}).exec();
            if(docs.length == 0) {
                console.log("checkUser success");
                next();
            } else {
                res.status(400).json({
                    message: 'User already exists'
                });
            }
        } catch(error) {
            console.log("checkUser failure");
            res.status(500).json({
                message : 'Server Error'
            });
        }
    }

    async createUser(req, res, next) {
        try {
            if(!req.body.username || req.body.username  == "") {
                res.status(400).json({
                    message : 'Username not provided'
                });
            }
            await user.insertMany([{
                username : req.body.username
            }]);
            console.log("createUser success");
            res.status(200).json({
                message: 'User created successfully'
            });
        } catch(error) {
            console.log("createUser failure");
            res.status(500).json({
                message : 'Server Error'
            });
        }

    }
}

module.exports = new UserHelper();