const Group = require('../models/group');
const { body } = require('express-validator');

exports.loadChannel = async (req, res, next, id) => {
  try {
    const group = await BlogChannel.findById(id);
    if (!group) return res.status(404).json({ message: 'This group is unavailable.' });
    req.group = group;
  } catch (error) {
    return next(error);
  }
  next();
};

exports.groupInfo = async (req, res, next) => {
  try {
    const { id } = req.group;
    const group = await Group.findById(id);
    res.json({ ...group._doc });
  } catch (error) {
    next(error);
  }
};

exports.createGroup = async (req, res, next) => {
  try {
    const { title, desc } = req.body;
    const group = await Group.create({
      moderator: req.user.id,
      title,
      desc
    });
    res.status(201).json(group);
  } catch (error) {
    next(error);
  }
};

exports.getTrendingGroup = async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups)
  } catch (error) {
    next(error);
  }
}

exports.channelValidate = [
  body('title')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isLength({ min: 5, max: 50 })
    .withMessage('must be at most 180 characters long'),

  body('desc')
    .exists()
    .trim()

    .isLength({ min: 10 })
    .withMessage('must be at least 10 characters long')

    .isLength({ max: 5000 })
    .withMessage('must be at most 5000 characters long'),

  body('thumbnail').exists()
];
