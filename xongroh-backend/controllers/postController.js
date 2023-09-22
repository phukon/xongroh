const Post = require('../models/Post.js');

// @desc Get all posts
// @route GET /posts
// @access Public
exports.getAllPosts = async (req, res) => {
  // Get all posts from MongoDB
  const posts = await Post.find().lean();

  if (!posts?.length) {
    return res.status(400).json({ message: 'No posts found' });
  }

  res.json(posts);
};

// @desc Create a post
// @route POST /posts
// @access Private
exports.createPost = async (req, res) => {
  const { title, content, cover, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  const postObject = { title, content, cover, author };
  const post = await Post.create(postObject);

  if (post) {
    res.status(201).json({ message: `New post ${title} created` });
  } else {
    res.status(400).json({ message: 'Invalid post data received' });
  }
};

// @desc Update a post
// @route PUT /posts/:id
// @access Private
exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content, cover, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const post = await Post.findByIdAndUpdate(
    id,
    { title, content, cover, author },
    { new: true }
  );

  if (post) {
    res.status(200).json({ message: `Post ${id} updated` });
  } else {
    res.status(400).json({ message: 'Invalid post data received' });
  }
};

// @desc Delete a post
// @route DELETE /posts/:id
// @access Private
exports.deletePost = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findByIdAndDelete(id);

  if (post) {
    res.status(200).json({ message: `Post ${id} deleted` });
  } else {
    res.status(400).json({ message: 'Invalid post data received' });
  }
};
