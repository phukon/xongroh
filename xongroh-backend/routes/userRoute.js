const { Router } = require('express')
const router = Router()

const userController = require('../controllers/userController.js')
const { registerMail } = require('../controllers/mailer.js')
const verifyJWT = require('../middleware/verifyJWT.js')
const { localVariables } = require('../middleware/verifyJWT.js')
const loginLimiter = require('../middleware/rateLimiter.js')

router.route('/register').post(loginLimiter, userController.register)
router.use(verifyJWT)

/** POST Methods */
router.route('/registerMail').post(registerMail) // send the email
router.route('/authenticate').post(userController.verifyUser, (req, res) => res.end())
// router.route('/login').post(loginLimiter, userController.verifyUser, userController.login); // login in app

/** GET Methods */
router.route('/getAllUsers').get(userController.getAllUsers) // get all users
router.route('/getUserById/:id').get(userController.getUserById)
router.route('/generateOTP').get(userController.verifyUser, localVariables, userController.generateOTP)
router.route('/verifyOTP').get(userController.verifyUser, userController.verifyOTP)
router.route('/createResetSession').get(userController.createResetSession)

// router.route('/:username').get(userController.getUser); user with username
// In Express, routes are matched in the order they are declared. When you have a route with a
// parameter (e.g., /:username) followed by a route without any parameters (e.g., /generateOTP),
// the second route (/generateOTP) will be treated as if it matches any string, including the
// one that should have been handled by the first route (/:username).

/** PUT Methods */
router.route('/updateuser').patch(userController.updateUser)
router.route('/support/:supportedUserId').put(userController.supportUser)
router.route('/resetPassword').put(userController.verifyUser, userController.resetPassword)

module.exports = router
