import UserHelper from "../helper/user.js";

class UserHandler {

    async checkUser(req, res, next) {
        try {
            let body = req.body;
            let username = body.username;
            if(!username || username  == "") {
                res.status(400).json({
                    message : 'Username not provided'
                });
            }
            let userExists = await UserHelper.checkUser(username);
            if(!userExists) next();
            else {
                res.status(400).json({
                    message : 'User already exists'
                });
            }

        } catch(error) {
            res.status(500).json({
                message : 'Server Error'
            });
        }
    }

    async createUser(req, res, next) {
        try {
            let username = req.body.username;
            await UserHelper.createUser(username);
            res.status(200).json({
                message: 'User created successfully'
            });
        }catch(error) {
            res.status(500).json({
                message : 'Server Error'
            });
        }
    }
    init(app) {
        app.post('/user/create', this.checkUser, this.createUser);
    }
}

export default new UserHandler();
