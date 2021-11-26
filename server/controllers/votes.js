const mongoose = require('mongoose');

const Post = require('../models/post');

exports.upvote = async (req, res) => {
  const voterId = mongoose.Types.ObjectId(req.user.id);
  const postId = mongoose.Types.ObjectId(req.params.post)
  const post = await Post.findById(postId)
  post.vote(voterId, 1)
  return res.json(post.vote_count)
  // if (req.comment) {
  //   req.comment.vote(id, 1);
  //   const post = await req.post.save();
  //   return res.json(post);
  // }
  // const post = await req.post.vote(id, 1);
  // return res.json(post);
};


exports.downvote = async (req, res) => {
  const { voterId } = req.user;
  //
  // if (req.comment) {
  //   req.comment.vote(id, -1);
  //   const post = await req.post.save();
  //   return res.json(post);
  // }
  // const post = await req.post.vote(id, -1);

  const post = await Post.findById(req.post)
  post.vote(mongoose.Types.ObjectId(voterId), 1)
  return res.json(post.vote_count);
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
