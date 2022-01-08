const {Schema, model} = require('../config/database');

/**
 * @name postModel
 * @description Model and Schema of posts
 */
const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required:true
    },
    user_id: {
        type:String,
        required:true
    }
});





module.exports = model('PostModel', postSchema);