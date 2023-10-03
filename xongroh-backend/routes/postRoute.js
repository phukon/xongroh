const { Router } = require('express')
const router = Router()
const verifyJWT = require('../middleware/verifyJWT')
const postsController = require('../controllers/postController.js')

router.use(verifyJWT)
router.route('/getAllPosts').get(postsController.getAllPosts)
router.route('/getPostById/:postId').get(postsController.getPostById)
router.route('/createPost').post(postsController.createPost)
router.route('/updatePost').put(postsController.updatePost)
router.route('/deletePost').delete(postsController.deletePost)
router.route('/likePost/:postId').patch(postsController.likePost)
router.route('/savePost/:postId').patch(postsController.savePost)

// comments
router.route('/comments/:postId').post(postsController.comments)
router.route('/comments/:commentId').put(postsController.updateComment)
router.route('/comments/:commentId').delete(postsController.deleteComment)
router.route('/replies/:commentId').post(postsController.comments)
router.route('/likeComment/:commentId').patch(postsController.likeComment)

// feedbacks
router.route('/feedbacks/:postId').post(postsController.feedback)
router.route('/feedbacks/:feedbackId').put(postsController.updateFeedback)
router.route('/feedbacks/:feedbackId').delete(postsController.deleteFeedback)
router.route('/replies/:feedbackId').post(postsController.feedback)
router.route('/likeFeedback/:feedbackId').patch(postsController.likeFeedback)

module.exports = router
