const { Router } = require('express')
const router = Router()

const authController = require('../controllers/authController.js')
const loginLimiter = require('../middleware/rateLimiter.js')

router.route('/login').post(loginLimiter, authController.login)

router.route('/refresh').get(authController.refresh)

router.route('/logout').post(authController.logout)

module.exports = router
