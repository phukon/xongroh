const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  timestamp: { type: Date, default: Date.now },
  likes: {
    type: Map,
    of: Boolean,
  },
  parentId: { type: String, default: null }, // change to undefined if not working
})

const feedbackSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  timestamp: { type: Date, default: Date.now },
  likes: {
    type: Map,
    of: Boolean,
  },
  parentId: { type: String, default: null },
})

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cover: { type: String },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  likes: {
    type: Map,
    of: Boolean,
  },
  saves: {
    type: Map,
    of: Boolean,
  },
  comments: [commentSchema],
  feedbacks: [feedbackSchema],
  isDraft: { type: Boolean, default: false },
})

const Post = mongoose.model('Posts', postSchema)

module.exports = Post
