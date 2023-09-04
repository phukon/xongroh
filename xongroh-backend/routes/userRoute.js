import { Router } from 'express'
const router = Router()

import * as userController from '../controllers/userController.js'
import { registerMail } from '../controllers/mailer.js'
import verifyJWT, { localVariables } from '../middleware/verifyJWT.js'
import rateLimiter from '../middleware/rateLimiter.js'

/** POST Methods */
router.route('/register').post(rateLimiter, userController.register) // register user
router.route('/registerMail').post(registerMail) // send the email
router.route('/authenticate').post(userController.verifyUser, (req, res) => res.end()) // authenticate user
// router.route('/login').post(rateLimiter, userController.verifyUser, userController.login) // login in app

/** GET Methods */
router.route('/getAllUsers').get(userController.verifyUser, userController.getAllUsers) // get all users
router.route('/generateOTP').get(userController.verifyUser, localVariables, userController.generateOTP) // generate random OTP
router.route('/verifyOTP').get(userController.verifyUser, userController.verifyOTP) // verify generated OTP
router.route('/createResetSession').get(userController.createResetSession) // reset all the variables

router.route('/:username').get(userController.getUser) // user with username
// In Express, routes are matched in the order they are declared. When you have a route with a
// parameter (e.g., /:username) followed by a route without any parameters (e.g., /generateOTP),
// the second route (/generateOTP) will be treated as if it matches any string, including the
// one that should have been handled by the first route (/:username).

/** PUT Methods */
router.route('/updateuser').put(verifyJWT, userController.updateUser) // to update the user profile
router.route('/resetPassword').put(userController.verifyUser, userController.resetPassword) // use to reset password

export default router
