const express = require ('express');

const getPosts = require ('../controllers/posts.js');
const getPosts1 = require ('../controllers/posts.js');
const createPost = require ('../controllers/posts.js');
const router = express.Router();

router.get('/',getPosts);
router.get('/first',getPosts1);
router.post('/create',createPost);

module.exports = router;

