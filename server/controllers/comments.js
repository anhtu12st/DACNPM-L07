const { body } = require('express-validator');

exports.loadComments = async (req, res, next, id) => {
  try {
    let comment;

    if (req.post) comment = await req.post.comments.id(id);
    else comment = await req.comment.comments.id(id);

    if (!comment) return res.status(404).json({ message: 'Comment not found.' });
    req.comment = comment;
  } catch (error) {
    if (error.name === 'CastError') return res.status(400).json({ message: 'Invalid comment id.' });
    return next(error);
  }
  next();
};

exports.createComment = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { comment: text } = req.body;
    
    if (req.params.comment) {
      req.comment.addComment(id, text);
      const post = await req.post.save();
      return res.status(201).json(post);
    } else if (req.post) {
      const post = await req.post.addComment(id, text);
      return res.status(201).json(post);
    }
  } catch (error) {
    next(error);
  }
};

exports.removeComment = async (req, res, next) => {
  const { comment } = req.params;

  try {
    if (req.post) {
      const post = await req.post.removeComment(comment);
      return res.json(post);
    }
  } catch (error) {
    next(error);
  }
};

exports.validate = [
  body('comment')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isLength({ max: 1000 })
    .withMessage('must be at most 1000 characters long')
];
