const {registerUser, getUser} = require('../controllers/mainController');
const{getUserPosts, createPost} = require('../controllers/postsController')

describe('Get User with username', () => {
    it('Should return an user', async() => {
        try{
            const user = await getUser(username);
            expect(user).not.to.be.null;
        }catch(error){
            expect(error).to.be.null;
        }
    });
});

describe('Register User with username', () => {
    it('Should return an user', async() => {
        try{
            const user = await registerUser(username, password, name, surname);
            expect(user).not.to.be.null;
        }catch(error){
            expect(error).to.be.null;
        }
    });
});

describe('Get a user posts', () => {
    it('Should return an user', async() => {
        try{
            const userPost = await getUserPosts(username);
            expect(userPost).not.to.be.null;
        }catch(error){
            expect(error).to.be.null;
        }
    });
});

describe('Create a post with user', () => {
    it('Should return an user', async() => {
        try{
            const post = await createPost(title, description, username, user_id);
            expect(post).not.to.be.null;
        }catch(error){
            expect(error).to.be.null;
        }
    });
});