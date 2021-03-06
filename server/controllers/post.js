const { body } = require('express-validator');
var mongoose = require('mongoose');

const Group = require('../models/group');
const Post = require('../models/post');
const User = require('../models/user');
const jwt = require("jsonwebtoken");
const config = require("../config");

exports.loadPosts = async (req, res, next, id) => {
  try {
    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: 'Post not found.' });
    req.post = post;
  } catch (error) {
    if (error.name === 'CastError')
      return res.status(400).json({ message: 'Invalid post id.' });
    next(error);
  }
  next();
};

exports.createPost = async (req, res, next) => {
  const author = mongoose.Types.ObjectId(req.user.id);
  try {
    const { title, text, group } = req.body;
    const post = await Post.create({
      title,
      author,
      text,
      group: mongoose.Types.ObjectId(group)
    });
    await post.vote(author, 1)
    const postData = {...post._doc, vote_value: 1}
    postData.id = postData._id
    delete postData._id
    res.status(201).json(postData)
  } catch (error) {
    next(error);
  }
};

exports.showPost = async (req, res, next) => {
  try {
    const { id } = req.post;
    const post = await Post.findByIdAndUpdate(
      id,
      { $inc: { views: 1 } },
      { new: true, timestamps: false },
    );
    const token = req.headers.authorization
    if (token) {

      const decodedToken = jwt.verify(token.slice(7), config.jwt.secret, {
        algorithm: 'HS256',
      });

      const userId = mongoose.Types.ObjectId(decodedToken.id)
      const vote_value = await post.hasVoted(userId)
      const postData = {...post._doc, vote_value: vote_value}
      postData.id = postData._id
      delete postData._id
      res.json(postData);
    }
    else {
      res.json({...post._doc})
    }
  } catch (error) {
    next(error);
  }
};

exports.listPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    next(error);
  }
};


exports.listPostsGroupFollowing = async (req, res, next) => {
  try {
    const user = await User.findOne({_id: req.user.id})
    const userGroup = user.groups
    var group = await Group.find()
    var allPosts = []
    const userId = mongoose.Types.ObjectId((req.user.id))

    var postx = userGroup.map(async(id) => {
      const groupId = id.toString()
      const groupById = group.find(x => x._id.toString() === groupId)
      var postsInGroup = await Post.find({ group: groupById._id})
      allPosts.push(...postsInGroup)
    })
    await Promise.all(postx)

    let allPostsWithVotedValue = []
    const postsVotePromise = allPosts.map(async(doc) => {
      const vote_value = await doc.hasVoted(userId)
      let new_doc = {...doc._doc, vote_value: vote_value}
      new_doc.id = new_doc._id
      delete new_doc._id
      allPostsWithVotedValue.push(new_doc)
    })
    await Promise.all(postsVotePromise)
    res.json(allPostsWithVotedValue);
  } catch (error) {
    next(error);
  }
};


exports.listPostsByGroup = async (req, res, next) => {
  try {
    const groupId = req.params.id
    const group = await Group.find()
    const groupById = group.find(x => x._id.toString() == groupId)
    const posts = await Post.find({ group: groupById._id});
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

exports.listPostsByUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    // const { sortType = '-created' } = req.body;
    const author = await User.find({ _id: userId });
    const authorById = author.find(x => x._id.toString() == userId)
    const posts = await Post.find({ author: authorById._id });
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

exports.removePost = async (req, res, next) => {
  try {
    await req.question.remove();
    res.json({ message: 'Your question successfully deleted.' });
  } catch (error) {
    next(error);
  }
};

exports.modifyPost = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }
  try {
    const { title, text, tags } = req.body;
    const _id = req.question;

    const question = await Post.findById(_id);
    question.title = title;
    question.text = text;
    question.tags = tags;
    question.history.push({
      title,
      text,
      tags,
      desc: '',
      updatedAt: new Date(),
    });
    await question.save();

    res.status(201).json(question);
  } catch (error) {
    next(error);
  }
};

exports.postValidate = [
  body('title')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isLength({ max: 180 })
    .withMessage('must be at most 180 characters long'),

  body('text')
    .exists()
    .trim()
    .withMessage('is required')

    .isLength({ min: 10 })
    .withMessage('must be at least 10 characters long')

    .isLength({ max: 5000 })
    .withMessage('must be at most 5000 characters long'),

  body('group')
      .exists()
      .trim()
      .withMessage('is required')
];
