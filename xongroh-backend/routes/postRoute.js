import { Router } from 'express'
const router = Router()

import * as postsController from '../controllers/postController.js'

router.route('/getAllPosts').get(postsController.getAllPosts)
router.route('/createPost').post(postsController.createPost)
router.route('/updatePost').put(postsController.updatePost)
router.route('/deletePost').delete(postsController.deletePost)

export default router
