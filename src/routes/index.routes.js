const {Router} = require('express');
const router = Router();

const {registerUser} = require('../controllers/mainController');
const {createPost, getUserPosts} = require('../controllers/postsController');


router.post('/register', registerUser);

router.post('/posts', getUserPosts)
router.post('/posts/create', createPost);

module.exports = router;