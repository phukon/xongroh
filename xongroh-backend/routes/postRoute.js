const { Router } = require('express');
const router = Router();

const postsController = require('../controllers/postController.js');

router.route('/getAllPosts').get(postsController.getAllPosts);
router.route('/createPost').post(postsController.createPost);
router.route('/updatePost').put(postsController.updatePost);
router.route('/deletePost').delete(postsController.deletePost);

module.exports = router;
