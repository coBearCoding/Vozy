const PostModel = require("../models/postModel");
const { getUser } = require("./mainController");
/**
 * @name getUserPosts
 * @param {String}{username
 * @returns {JSON}
 */
const getUserPosts = async(req, res) => {
    try{
        const username = req.body.username;
        const user = await getUser(username);
        const user_id = user.id;

        const posts = await PostModel.find({
            username: username,
            user_id: user_id
        });

        if(posts){
            return res.status(200).json({
                'posts': posts
            });
        }

        return res.status(200).json({
            'posts': 'No posts found'
        });
    }catch(err){
        console.log(err);
        return res.status(400).json({
            'error': err
        });
    }

}
/**
 * @name createPost
 * @description
 * @param title
 * @param description
 * @param username
 * @param user_id
 * @returns {JSON}
*/
const createPost = async (req, res) => {
    try{
        const title = req.body.title;
        const description = req.body.description;
        const username = req.body.username;
        const user = await getUser(username);
        const user_id = user.id;

        const postExists = await PostModel.findOne({title: title});
        if(postExists){
            return res.status(200).json({
                'msg': 'Post already created'
            });
        }
        

        const postDoc = new PostModel({
            title: title,
            description: description,
            username: username,
            user_id: user_id
        });

        const saved = await postDoc.save();
        if (saved){
            return res.status(201).json({
                'msg': 'post succesfully created',
                'post': [{
                    'title': title,
                    'description': description,
                    'username': username,
                    'user_id': user_id,
                }],
            });
        }

    }catch(err){
        console.log(err);
        return res.status(400).json({
            'error': err
        });
    }
}


module.exports = {
    createPost,
    getUserPosts
};