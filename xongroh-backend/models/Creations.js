const mongoose = require('mongoose')

const creationSchema = new mongoose.Schema({
  creationType: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: String,
  media: [
    {
      type: {
        type: String,
        enum: ['Image', 'Video', 'Audio'],
        required: true,
      },
      url: String,
    },
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
  comments: [
    {
      comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    },
  ],
  feedback: [
    {
      feedback_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feedback',
      },
    },
  ],
  shares: Number,
  savedBy: [
    {
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
  isDraft: Boolean,
})

const Creation = mongoose.model('Creation', creationSchema)
module.exports = Creation
