const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide a unique username'],
      unique: [true, 'Username already exists'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
    },
    email: {
      type: String,
      required: [true, 'Please provide a unique email'],
      unique: [true, 'Email already exists'],
      validate: {
        validator: function (value) {
          // Use a regular expression to validate email format
          return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)
        },
        message: 'Please provide a valid email address',
      },
    },
    user_type: {
      type: String,
      enum: ['creator', 'patron', 'admin'],
    },
    dob: {
      type: Date,
    },
    phone: String,
    created_at: {
      type: Date,
      default: Date.now,
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Posts' }],
    supporting: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
    portfolio: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Portfolio' }],
    communities: {
      type: Map,
      of: Boolean,
    },
    tribe: {
      type: Map,
      of: Boolean,
    },
    saved: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Posts' }],
    bio: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: String },
    address: { type: String },
    profilePicture: { type: String },
    cover: { type: String },
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
  },
  { timestamps: true }
)



module.exports = mongoose.model('Users', userSchema)
