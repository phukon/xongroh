import mongoose from 'mongoose'

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
      enum: ['Creator', 'Patron', 'Admin'],
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    phone: String,
    created_at: {
      type: Date,
      default: Date.now,
    },
    creations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Creations' }],
    supporting: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    portfolio: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Portfolio' }],
    communities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Community' }],
    tribe: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tribe' }],
    saved: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Creations' }],
    bio: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: String }, // Use a string for mobile numbers to support international formats
    address: { type: String },
    profilePicture: { type: String }, // Add a field for profile pictures
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
)

export default mongoose.model('User', userSchema)
