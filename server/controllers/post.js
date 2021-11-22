const { body } = require('express-validator');

const Post = require('../models/post');
const User = require('../models/user');

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
  try {
    const { title, text } = req.body;
    const author = req.user.id;
    const post = await Post.create({
      title,
      author,
      text,
    });
    res.status(201).json(post);
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
    res.json({ ...post._doc });
  } catch (error) {
    next(error);
  }
};

exports.listPosts = async (req, res, next) => {
  try {
    const { sortType = '-score' } = req.body;
    const posts = await Post.find().sort(sortType);
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

exports.listPostsByUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { sortType = '-created' } = req.body;
    const author = await User.findOne({ _id: userId });
    const posts = await Post.find({ author: author.id }).sort(sortType);
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
];
