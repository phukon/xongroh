const Post = require('../models/Posts.js')
const mongoose = require('mongoose')
const UserModel = require('../models/Users.js')

// @desc Get all posts
// @route GET /posts
// @access Public
exports.getAllPosts = async (req, res) => {
  // Get all posts from MongoDB
  const posts = await Post.find().lean()

  if (!posts?.length) {
    return res.status(400).json({ message: 'No posts found' })
  }

  res.json(posts)
}

// @desc Get a post by id
// @route GET /getPostById/:id
// @access Public
exports.getPostById = async (req, res) => {
  const { postId } = req.params
  try {
    const post = await Post.findById(postId).lean()
    if (!post) {
      return res.status(404).json({ error: 'Post not found' })
    }
    res.json(post)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
}

exports.getPostsByUserId = async (req, res) => {
  const { userId } = req.params

  try {
    const user = await UserModel.findById(userId).populate('posts').exec()

    if (user.posts.length === 0) {
      return res.status(404).json({ message: 'No posts found for this user.' })
    }
    res.json(user.posts)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
}

// @desc Create a post
// @route POST /posts
// @access Private
exports.createPost = async (req, res) => {
  const { title, content, cover, author } = req.body

  if (!title || !content || !author) {
    return res.status(400).json({ message: 'All fields are required' })
  }
  const authorObjectId = new mongoose.Types.ObjectId(author)
  const postObject = { title, content, cover, author: authorObjectId, likes: new Map(), saves: new Map() }

  const post = await Post.create(postObject)
  const user = await UserModel.findById(authorObjectId)
  if (!user) {
    return res.status(400).json({ message: 'Invalid author' })
  }
  const postId = post._id
  user.posts.push(postId)
  await user.save()

  if (post) {
    res.status(201).json({ message: `New post ${title} created` })
  } else {
    res.status(400).json({ message: 'Invalid post data received' })
  }
}

// @desc Update a post
// @route PUT /posts/:id
// @access Private
exports.updatePost = async (req, res) => {
  const { id } = req.params
  const { title, content, cover, author } = req.body

  if (!title || !content || !author) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  const post = await Post.findByIdAndUpdate(id, { title, content, cover, author }, { new: true })

  if (post) {
    res.status(200).json({ message: `Post ${id} updated` })
  } else {
    res.status(400).json({ message: 'Invalid post data received' })
  }
}

// @desc Like a post
// @route PUT /posts/:id
// @access Private
exports.likePost = async (req, res) => {
  try {
    const { postId } = req.params
    const userId = req.userId
    const post = await Post.findById(postId)
    const isLiked = post.likes.get(userId)

    if (isLiked) {
      post.likes.delete(userId)
      message = 'Post has been unliked.'
    } else {
      post.likes.set(userId, true)
      message = 'Post has been liked.'
    }

    const updatedPost = await Post.findByIdAndUpdate(postId, { likes: post.likes }, { new: true })

    res.status(200).json({ message, updatedPost })
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

exports.savePost = async (req, res) => {
  try {
    const { postId } = req.params
    const userId = req.userId
    const post = await Post.findById(postId)
    const isSaved = post.saves.get(userId)

    const authorObjectId = new mongoose.Types.ObjectId(userId)
    const user = await UserModel.findById(authorObjectId)
    if (!user) {
      return res.status(400).json({ message: 'Invalid author' })
    }

    if (isSaved) {
      post.saves.delete(userId)
      user.saved.pop(postId)
      message = 'Post has been unsaved.'
    } else {
      post.saves.set(userId, true)
      user.saved.push(postId)
      message = 'Post has been saved.'
    }

    const updatedPost = await Post.findByIdAndUpdate(postId, { saves: post.saves }, { new: true })
    await user.save()

    res.status(200).json({ message, updatedPost })
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

exports.likeComment = async (req, res) => {
  try {
    const { commentId } = req.params
    const userId = req.userId

    const post = await Post.findOne({ 'comments._id': commentId })
    if (!post) {
      return res.status(404).json({ message: 'Post not found' })
    }

    const comment = post.comments.find((comment) => comment._id.toString() === commentId)

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' })
    }

    const isLiked = comment.likes.get(userId)

    if (isLiked) {
      comment.likes.delete(userId)
      message = 'Comment has been unliked.'
    } else {
      comment.likes.set(userId, true)
      message = 'Comment has been liked.'
    }

    await post.save()

    res.status(200).json({ message, updatedPost: post })
  } catch (err) {
    res.status(500).json({ message: err.message })
    ror
  }
}

exports.comments = async (req, res) => {
  try {
    const postId = req.params.postId
    const { text, parentId } = req.body
    const userId = req.userId

    const post = await Post.findById(postId)

    if (!post) {
      return res.status(404).json({ message: 'Post not found' })
    }

    const newComment = {
      text,
      author: userId,
      parentId,
      likes: new Map(),
    }

    post.comments.push(newComment)

    await post.save()

    const newCommentId = post.comments[post.comments.length - 1]._id
    const timestamp = post.comments[post.comments.length - 1].timestamp

    res.status(201).json({
      message: 'Comment added successfully',
      comment: { _id: newCommentId, timestamp: timestamp, ...newComment },
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc UPDATE a comment
// @route PUT /posts/comments/:commentId
// @access Private
exports.updateComment = async (req, res) => {
  try {
    const { text } = req.body
    const { commentId } = req.params
    const userId = req.userId
    console.log(commentId)
    const post = await Post.findOne({ 'comments._id': commentId })

    if (!post) {
      return res.status(404).json({ message: 'Post not found' })
    }

    const comment = post.comments.find((comment) => comment._id.toString() === commentId)

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' })
    }

    if (comment.author.toString() !== userId) {
      return res.status(401).json({ message: 'You are not authorized to update this comment' })
    }

    comment.text = text

    await post.save()

    res.status(200).json({ message: 'Comment updated successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc Delete a comment
// @route DELETE /posts/comments/:commentId
// @access Private
exports.deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params
    const userId = req.userId

    const post = await Post.findOne({ 'comments._id': commentId })

    if (!post) {
      return res.status(404).json({ message: 'Post not found' })
    }

    const comment = post.comments.find((comment) => comment._id.toString() === commentId)

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' })
    }

    if (comment.author.toString() !== userId) {
      return res.status(401).json({ message: 'You are not authorized to delete this comment' })
    }

    const index = post.comments.findIndex((comment) => {
      comment._id === commentId
    })

    post.comments.splice(index, 1)

    await post.save()

    res.status(200).json({ message: 'Comment deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

//------------------feedback---------
exports.likeFeedback = async (req, res) => {
  try {
    const { feedbackId } = req.params
    const userId = req.userId

    const post = await Post.findOne({ 'feedbacks._id': feedbackId })
    if (!post) {
      return res.status(404).json({ message: 'Post not found' })
    }

    const feedback = post.feedbacks.find((feedback) => feedback._id.toString() === feedbackId)

    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' })
    }

    const isLiked = feedback.likes.get(userId)

    if (isLiked) {
      feedback.likes.delete(userId)
      message = 'Comment has been unliked.'
    } else {
      feedback.likes.set(userId, true)
      message = 'Comment has been liked.'
    }

    await post.save()

    res.status(200).json({ message, updatedPost: post })
  } catch (err) {
    res.status(500).json({ message: err.message })
    ror
  }
}

exports.feedback = async (req, res) => {
  try {
    const postId = req.params.postId
    const { text, parentId } = req.body
    const userId = req.userId

    const post = await Post.findById(postId)

    if (!post) {
      return res.status(404).json({ message: 'Post not found' })
    }

    const newFeedback = {
      text,
      author: userId,
      parentId,
      likes: new Map(),
    }

    post.feedbacks.push(newFeedback)

    await post.save()

    const newFeedbackId = post.feedbacks[post.feedbacks.length - 1]._id
    const timestamp = post.feedbacks[post.feedbacks.length - 1].timestamp

    res.status(201).json({
      message: 'Feedback added successfully',
      feedback: { _id: newFeedbackId, timestamp: timestamp, ...newFeedback },
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc UPDATE a comment
// @route PUT /posts/comments/:commentId
// @access Private
exports.updateFeedback = async (req, res) => {
  try {
    const { text } = req.body
    const { feedbackId } = req.params
    const userId = req.userId
    const post = await Post.findOne({ 'feedbacks._id': feedbackId })

    if (!post) {
      return res.status(404).json({ message: 'Post not found' })
    }

    const feedback = post.feedbacks.find((feedback) => feedback._id.toString() === feedbackId)

    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' })
    }

    if (feedback.author.toString() !== userId) {
      return res.status(401).json({ message: 'You are not authorized to update this feedback' })
    }

    feedback.text = text

    await post.save()

    res.status(200).json({ message: 'Feedback updated successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc Delete a comment
// @route DELETE /posts/comments/:commentId
// @access Private
exports.deleteFeedback = async (req, res) => {
  try {
    const { feedbackId } = req.params
    const userId = req.userId

    const post = await Post.findOne({ 'feedbacks._id': feedbackId })

    if (!post) {
      return res.status(404).json({ message: 'Post not found' })
    }

    const feedback = post.feedbacks.find((feedback) => feedback._id.toString() === feedbackId)

    if (!feedback) {
      return res.status(404).json({ message: 'feedback not found' })
    }

    if (feedback.author.toString() !== userId) {
      return res.status(401).json({ message: 'You are not authorized to delete this comment' })
    }

    const index = post.feedbacks.findIndex((feedback) => feedback._id === feedbackId)

    post.feedbacks.splice(index, 1)

    await post.save()

    res.status(200).json({ message: 'feedback deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// ----------------------------------

// @desc Delete a post
// @route DELETE /posts/:id
// @access Private
exports.deletePost = async (req, res) => {
  const { id } = req.params

  const post = await Post.findByIdAndDelete(id)

  if (post) {
    res.status(200).json({ message: `Post ${id} deleted` })
  } else {
    res.status(400).json({ message: 'Invalid post data received' })
  }
}
