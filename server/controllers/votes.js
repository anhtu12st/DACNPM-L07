exports.upvote = async (req, res) => {
  const { id } = req.user;

  if (req.comment) {
    req.comment.vote(id, 1);
    const post = await req.post.save();
    return res.json(post);
  }
  const post = await req.post.vote(id, 1);
  return res.json(post);
};

exports.downvote = async (req, res) => {
  const { id } = req.user;

  if (req.comment) {
    req.comment.vote(id, -1);
    const post = await req.post.save();
    return res.json(post);
  }
  const post = await req.post.vote(id, -1);
  return res.json(post);
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
