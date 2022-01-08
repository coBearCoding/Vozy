const {Schema, model} = require('../config/database');

/**
 * @name userModel
 * @description Model and Schema of the User
 */
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    name: String,
    surname: String,
    password: {
        type: String,
        required: true
    },
    currentToken: String
});





module.exports = model('UserModel', userSchema);