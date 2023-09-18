const mongoose = require('mongoose')

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
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
  shares: Number,
})

const Portfolio = mongoose.model('Portfolio', portfolioSchema)

module.exports = Portfolio
