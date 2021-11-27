const mongoose = require('mongoose');

const Post = require('../models/post');

exports.upvote = async (req, res) => {
  const voterId = mongoose.Types.ObjectId(req.user.id);
  const postId = mongoose.Types.ObjectId(req.params.post)
  const post = await Post.findById(postId)
  await post.vote(voterId, 1)
  res.json(post.vote_count)

};


exports.downvote = async (req, res) => {
  const voterId = mongoose.Types.ObjectId(req.user.id);
  const postId = mongoose.Types.ObjectId(req.params.post)
  const post = await Post.findById(postId)
  await post.vote(voterId, -1)
  res.json(post.vote_count)
};

exports.unvote = async (req, res) => {
  const { id } = req.user;

  if (req.comment) {
    req.comment.vote(id, 0);
    const post = await req.post.save();
    return res.json(post);
  }
  const post = await req.post.vote(id, 0);
  return res.json(post);
};
