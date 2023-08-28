import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide unique Username"],
      unique: [true, "Username Exist"]
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      unique: false,
    },
    email: {
      type: String,
      required: [true, "Please provide a unique email"],
      unique: true,
    },
    friends: {
      type: Array,
      default: []
    },
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: Number },
    address: { type: String },
    profile: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
