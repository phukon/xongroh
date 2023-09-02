import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timestamp: { type: Date, default: Date.now },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }, // Reference to the commented post
})

const Comment = mongoose.model('Comment', commentSchema)
export default Comment
