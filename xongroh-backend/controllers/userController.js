import UserModel from '../models/User.js'
import bcrypt from 'bcrypt'
import otpGenerator from './otp-gen.js'
import asyncHandler from 'express-async-handler'

/** middleware for verify user */
export const verifyUser = asyncHandler(async (req, res, next) => {
  const { username } = req.method === 'GET' ? req.query : req.body

  // Check the user existence
  let exist = await UserModel.findOne({ username })
  if (!exist) {
    return res.status(404).send({ error: "Can't find User!" })
  }
  next()
})

/** POST: http://localhost:8080/api/register 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
  "email": "example@gmail.com",
  "firstName" : "bill",
  "lastName": "william",
  "mobile": 8009860560,
  "address" : "Apt. 556, Kulas Light, Gwenborough",
  "profile": ""
}
*/
export const register = asyncHandler(async (req, res) => {
  const { username, password, profile, email } = req.body

  // Check the existing user
  const existUsername = UserModel.findOne({ username }).then((user) => {
    if (user) {
      throw { error: 'Please use unique username' }
    }
  })

  const existEmail = UserModel.findOne({ email }).then((email) => {
    if (email) {
      throw { error: 'Please use unique Email' }
    }
  })

  try {
    await Promise.all([existUsername, existEmail])

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10)

      const user = new UserModel({
        username,
        password: hashedPassword,
        profile: profile || '',
        email,
      })

      // Return save result as a response
      const result = await user.save()
      return res.status(201).send({ msg: 'User Register Successfully' })
    }
  } catch (error) {
    return res.status(500).send({ error })
  }
})

// @desc Get all users
// @route GET /usersAllUsers
// @access Private
export const getAllUsers = asyncHandler(async (req, res) => {
  // Get all users from MongoDB
  const users = await UserModel.find().select('-password').lean()

  // If no users
  if (!users?.length) {
    return res.status(400).json({ message: 'No users found' })
  }

  res.json(users)
})

/** GET: http://localhost:8080/v1/user/example123 */
export const getUser = asyncHandler(async (req, res) => {
  const { username } = req.params

  if (!username) {
    return res.status(501).send({ error: 'Invalid Username' })
  }

  try {
    const user = await UserModel.findOne({ username })
    if (!user) {
      return res.status(501).send({ error: "Couldn't Find the User" })
    }

    /** Remove password from user */
    // Mongoose returns unnecessary data with the object, so convert it into JSON
    const { password, ...rest } = Object.assign({}, user.toJSON())

    return res.status(201).send(rest)
  } catch (error) {
    return res.status(404).send({ error: 'Cannot Find User Data' })
  }
})

/** PUT: http://localhost:8080/api/updateuser 
 * @param: {
  "header" : "<token>"
}
body: {
    firstName: '',
    address : '',
    profile : ''
}
*/
export const updateUser = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.user

    if (userId) {
      const body = req.body

      // Update the data
      await UserModel.updateOne({ _id: userId }, body)

      return res.status(201).send({ msg: 'Record Updated...!' })
    } else {
      return res.status(401).send({ error: 'User Not Found...!' })
    }
  } catch (error) {
    return res.status(401).send({ error })
  }
})

/** GET: http://localhost:8080/api/generateOTP */
export const generateOTP = asyncHandler(async (req, res) => {
  req.app.locals.OTP = await otpGenerator(6)

  res.status(201).send({ code: req.app.locals.OTP })
})

/** GET: http://localhost:8080/api/verifyOTP */
export const verifyOTP = asyncHandler(async (req, res) => {
  const { code } = req.query

  if (parseInt(req.app.locals.OTP) === parseInt(code)) {
    req.app.locals.OTP = null // Reset the OTP value
    req.app.locals.resetSession = true // Start session for reset password
    return res.status(201).send({ msg: 'Verified Successfully!' })
  }

  return res.status(400).send({ error: 'Invalid OTP' })
})

// successfully redirect user when OTP is valid
/** GET: http://localhost:8080/api/createResetSession */
export const createResetSession = asyncHandler(async (req, res) => {
  if (req.app.locals.resetSession) {
    req.app.locals.resetSession = false // check check check check!!!!!!
    return res.status(201).send({ flag: req.app.locals.resetSession })
  }

  return res.status(440).send({ error: 'Session expired!' })
})

// update the password when we have valid session
/** PUT: http://localhost:8080/api/resetPassword */
export const resetPassword = asyncHandler(async (req, res) => {
  try {
    if (!req.app.locals.resetSession) {
      return res.status(440).send({ error: 'Session expired!' })
    }

    const { username, password } = req.body

    try {
      const user = await UserModel.findOne({ username })
      if (!user) {
        return res.status(404).send({ error: 'Username not Found' })
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      await UserModel.updateOne(
        { username: user.username },
        { password: hashedPassword },
      )

      req.app.locals.resetSession = false // Reset session

      return res.status(201).send({ msg: 'Record Updated...!' })
    } catch (error) {
      return res.status(500).send({ error: 'Enable to hash password' })
    }
  } catch (error) {
    return res.status(401).send({ error })
  }
})
