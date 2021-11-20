const router = require('express').Router();

const {
  validateUser,
  signup,
  authenticate,
  listUsers,
  search,
  find,
  updateUser,
  getAuthInfo,
} = require('./controllers/users');
const {
  loadPosts,
  postValidate,
  createPost,
  listPosts,
  listPostsByUser,
  removePost,
  modifyPost,
  showPost,
} = require('./controllers/post');
const { upvote, downvote, unvote } = require('./controllers/votes');
const {
  loadComments,
  validate,
  createComment,
  removeComment,
} = require('./controllers/comments');
const {
  loadChannel,
  channelValidate,
  groupInfo,
  createGroup,
} = require('./controllers/group');

const requireAuth = require('./middlewares/requireAuth');
const postAuth = require('./middlewares/postAuth');
const commentAuth = require('./middlewares/commentAuth');

// authentication
router.get('/auth', requireAuth, getAuthInfo);
router.post('/signup', validateUser, signup);
router.post('/authenticate', validateUser, authenticate);

// users
router.get('/users', listUsers);
router.get('/users/:search', search);
router.get('/user/:userId', find);
router.put('/user/:userId', requireAuth, updateUser);

// posts
router.param('post', loadPosts);
router.post('/post', [requireAuth, postValidate], createPost);
router.get('/post/user/:userId', listPostsByUser);
router.post('/post/modify/:post', [requireAuth, postAuth], modifyPost);
router.get('/post/:post', showPost);
router.get('/post', listPosts);
router.delete('/post/:post', [requireAuth, postAuth], removePost);

// comments
router.param('comment', loadComments);
router.post('/comment/:post/:comment?', [requireAuth, validate], createComment);
router.delete('/comment/:post/:comment', [requireAuth, commentAuth], removeComment);

// votes
router.get('/votes/upvote/:post/:comment?', requireAuth, upvote);
router.get('/votes/downvote/:post/:comment?', requireAuth, downvote);
router.get('/votes/unvote/:post/:comment?', requireAuth, unvote);

// group
router.param('group', loadChannel);
router.get('/group/:group', groupInfo);
router.post('/group', [requireAuth, channelValidate], createGroup);

module.exports = (app) => {
  app.use('/api', router);

  app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
  });

  // app.use((error, req, res, next) => { 'next' never used
  app.use((error, req, res) => {
    res.status(error.status || 500).json({
      message: error.message,
    });
  });
};
