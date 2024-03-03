import User from '../model/user.js';
class UserHelper {
    async checkUser(username) {
        try {
            let docs = await User.find({username : username}).exec();
            if(docs.length == 0) {
                return false;
            } else {
                return true;
            }
        } catch(error) {
            throw error;
        }
    }

    async createUser(username) {
        try {
            await User.insertMany([{
                username : username
            }]);
        } catch(error) {
            throw error;
        }

    }
}

export default new UserHelper();