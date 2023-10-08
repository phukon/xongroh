const UserModel = require('../models/Users.js')
const bcrypt = require('bcryptjs')
const otpGenerator = require('./otp-gen.js')
const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose')

/** middleware for verify user */

exports.verifyUser = asyncHandler(async (req, res, next) => {
  const { userId } = req.method === 'GET' ? req.query : req.body

  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).send({ error: 'Invalid userId format' })
    }
    let exist = await UserModel.findById(userId)
    if (!exist) {
      return res.status(404).send({ error: "Can't find User!" })
    }
    next()
  } catch (error) {
    console.error('Error verifying user:', error)
    return res.status(500).send({ error: 'Internal server error' })
  }
})

// @desc Create new user
// @route POST /users
// @access Private
exports.register = async (req, res) => {
  const { username, password, email } = req.body
  const placeholderImg =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBWRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAAEsAAAAAQAAASwAAAAB/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAPHAFaAAMbJUccAQAAAgAEAP/hDIFodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J0ltYWdlOjpFeGlmVG9vbCAxMC4xMCc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp0aWZmPSdodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyc+CiAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICA8dGlmZjpYUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpYUmVzb2x1dGlvbj4KICA8dGlmZjpZUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpZUmVzb2x1dGlvbj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wTU09J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8nPgogIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnN0b2NrOjUyNmZhNjhhLWJjOWUtNDViYi1hYmI0LThkM2VmOWM5MzZkOTwveG1wTU06RG9jdW1lbnRJRD4KICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjM3MDJhYjI4LTdhNzMtNGFlMC05YmUxLTQwYjcxZDVhMjljZTwveG1wTU06SW5zdGFuY2VJRD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/8AACwgBaAFoAQERAP/EABwAAQACAwEBAQAAAAAAAAAAAAAFBgMEBwECCP/EAEEQAQACAQICBQoEAgcJAQAAAAABAgMEBQYREiExQVETFCJhcYGRocHRIzJysUJSJDVic4KSohUWJTRDVMLh8IP/2gAIAQEAAD8A/ZYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8tataza0xER2zMtDU71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'
  const user_type = 'creator'
  // Confirm data
  if (!username || !password || !email) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  // Check for duplicate username
  const duplicateUsername = await UserModel.findOne({ username }).collation({ locale: 'en', strength: 2 }).lean().exec()

  if (duplicateUsername) {
    return res.status(409).json({ message: 'Duplicate username' })
  }

  // Check for duplicate mail
  const duplicateMail = await UserModel.findOne({ username }).collation({ locale: 'en', strength: 2 }).lean().exec()

  if (duplicateMail) {
    return res.status(409).json({ message: 'Duplicate mail' })
  }

  // Hash password
  const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

  const userObject = {
    username,
    password: hashedPwd,
    email,
    profilePicture: placeholderImg,
    cover: placeholderImg,
    user_type: user_type,
    communities: new Map(),
    tribe: new Map(),
  }

  // Create and store new user
  const user = await UserModel.create(userObject)

  if (user) {
    //created
    res.status(201).json({ message: `New user ${username} created` })
  } else {
    res.status(400).json({ message: 'Invalid user data received' })
  }
}

// @desc Get all users
// @route GET /usersAllUsers
// @access Private
exports.getAllUsers = asyncHandler(async (req, res) => {
  // Get all users from MongoDB
  const users = await UserModel.find().select('-password').exec()
  //  const users = await UserModel.find().populate({ path: 'teamMembers', model: 'Agent' }'posts').select('-password').lean()

  // If no users
  if (!users?.length) {
    return res.status(400).json({ message: 'No users found' })
  }

  res.json(users)
})

// @desc support a user
// @route POST /users/support
// @access Private
exports.supportUser = async (req, res) => {
  const userId = req.userId
  const userObjectId = new mongoose.Types.ObjectId(userId)

  const { supportedUserId } = req.params
  const supportedUserObjectId = new mongoose.Types.ObjectId(supportedUserId)

  try {
    if (userId === supportedUserId) {
      return res.status(400).json({ error: 'You cannot support yourself' })
    }

    const supportedUser = await UserModel.findById(supportedUserObjectId)

    if (!supportedUser) {
      return res.status(404).json({ error: 'Supporting user not found' })
    }

    const user = await UserModel.findById(userObjectId)

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }


    const isAlreadySupporting = user.supporting.includes(supportedUserObjectId)

    if (isAlreadySupporting) {

      user.supporting = user.supporting.filter((supportingId) => supportingId.toString() !== supportedUserId)

      supportedUser.followers = supportedUser.followers.filter((followerId) => followerId.toString() !== userId)
    } else {
      user.supporting.unshift(supportedUserObjectId)

      supportedUser.followers.unshift(userObjectId)
    }

    await user.save()
    await supportedUser.save()

    res.json({ message: `Supported ${supportedUser.username}!` })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
}

// @desc Get a user by id
// @route GET /users/:id
// @access Private
exports.getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params
  try {
    const user = await UserModel.findById(id).select('-password').exec()
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
})

// @desc Update a user
// @route PATCH /users
// @access Private
exports.updateUser = async (req, res) => {
  const { username, email, firstName, lastName, profilePicture, id, cover, user_type } = req.body

  // Confirm data
  if (!username || !email || !firstName || !lastName || !profilePicture || !id || !cover || !user_type) {
    return res.status(400).json({ message: 'All fields except password are required' })
  }

  // Does the user exist to update?
  const user = await UserModel.findById(id).exec()

  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  // Check for duplicate
  const duplicate = await UserModel.findOne({ username }).collation({ locale: 'en', strength: 2 }).lean().exec()

  // Allow updates to the original user
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: 'Duplicate username' })
  }

  user.username = username
  user.email = email
  user.firstName = firstName
  user.lastName = lastName
  user.profilePicture = profilePicture
  user.cover = cover
  user.user_type = user_type

  // if (password) {
  //   // Hash password
  //   user.password = await bcrypt.hash(password, 10) // salt rounds
  // }

  const updatedUser = await user.save()

  res.json({ message: `${updatedUser.username} updated` })
}

/** GET: http://localhost:8080/api/generateOTP */
exports.generateOTP = asyncHandler(async (req, res) => {
  req.app.locals.OTP = await otpGenerator(6)

  res.status(201).send({ code: req.app.locals.OTP })
})

/** GET: http://localhost:8080/api/verifyOTP */
exports.verifyOTP = asyncHandler(async (req, res) => {
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
exports.createResetSession = asyncHandler(async (req, res) => {
  if (req.app.locals.resetSession) {
    req.app.locals.resetSession = false // check check check check!!!!!!
    return res.status(201).send({ flag: req.app.locals.resetSession })
  }

  return res.status(440).send({ error: 'Session expired!' })
})

// update the password when we have valid session
/** PUT: http://localhost:8080/api/resetPassword */
exports.resetPassword = asyncHandler(async (req, res) => {
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

      await UserModel.updateOne({ username: user.username }, { password: hashedPassword })

      req.app.locals.resetSession = false // Reset session

      return res.status(201).send({ msg: 'Record Updated...!' })
    } catch (error) {
      return res.status(500).send({ error: 'Enable to hash password' })
    }
  } catch (error) {
    return res.status(401).send({ error })
  }
})
