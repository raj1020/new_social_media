const PostMessage = require('../models/postMessage.js')


const getPosts =  (req, res) => {
    res.send("Welcome to the Posts");
};
const getPosts1 =  (req, res) => {
    res.send("Here are your first posts.");
};
const createPost =  (req, res) => {
    res.send("Now create your posts.");
};

module.exports = getPosts;
module.exports = getPosts1;
module.exports = createPost;