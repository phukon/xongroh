import { Router } from 'express'
const router = Router()

import * as authController from '../controllers/authController.js'
import loginLimiter from '../middleware/rateLimiter.js'

router.route('/login')
    .post(loginLimiter, authController.login)

router.route('/refresh')
    .get(authController.refresh)

router.route('/logout')
    .post(authController.logout)

export default router