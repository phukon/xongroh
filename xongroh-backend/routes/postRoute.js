const { Router } = require('express');
const router = Router();
const verifyJWT = require('../middleware/verifyJWT')
const postsController = require('../controllers/postController.js');

router.use(verifyJWT)
router.route('/getAllPosts').get(postsController.getAllPosts);
router.route('/getPostById/:postId').get(postsController.getPostById);
router.route('/comments/:postId').post(postsController.comments)
router.route('/comments/:postId').patch(postsController.updateComment)
router.route('/comments/:commentId').delete(postsController.deleteComment)
router.route('/replies/:commentId').post(postsController.comments)
router.route('/createPost').post(postsController.createPost);
router.route('/updatePost').put(postsController.updatePost);
router.route('/likePost/:postId').patch(postsController.likePost);
router.route('/deletePost').delete(postsController.deletePost);

module.exports = router;
