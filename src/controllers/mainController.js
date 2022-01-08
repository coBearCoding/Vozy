const UserModel = require("../models/userModel");
const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * @name getUser
 * @description
 * @param {String} username
 * @returns {Object}
 */
const getUser = (username) => {
    return new Promise((resolve, reject) => {
        const user = UserModel.findOne({
            username: username
        });

        if(user !== null){
            return resolve(user);
        }else{
            return reject();
        }
    });
}
/**
 * @name getUser
 * @description
 * @param {String} username
 * @param {String} password
 * @param {String} name
 * @param {String} surname
 * @returns {JSON}
 */
const registerUser = async(req, res) => {
    try{
        const username = req.body.username;
        const password = req.body.password;
        const name = req.body.name;
        const surname = req.body.surname;

        const userExists = await UserModel.findOne({username: username});
        if(userExists){
            return res.status(200).json({
                'msg': 'User already created'
            });
        }
        const privateKey = process.env.PRIVATEKEY;
        const token = jwt.sign({password:password}, privateKey)

        const userDoc = new UserModel({
            username: username,
            name: name,
            surname: surname,
            password: password,
            currentToken: token
        });

        const saved = await userDoc.save();
        if (saved){
            return res.status(201).json({
                'msg': 'user succesfully created',
                'user': [{
                    'username': username,
                    'name': name,
                    'surname': surname,
                    'password': password,
                    'token': token
                }],
            });
        }
    }catch(err){
        console.log(err);
        return res.json({
            'msg': err,
        });
    }
}


module.exports = {
    registerUser,
    getUser
};