const mongoose = require('mongoose');

const { Schema } = mongoose;

const voteSchema = require('./vote');
const commentSchema = require('./comment');

const postSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    group: {
      type: Schema.Types.ObjectId,
      ref: 'Group',
      required: true,
    },
    title: { type: String, required: true },
    text: { type: String, required: true },
    score: { type: Number, default: 0 },
    votes: [voteSchema],
    comments: [commentSchema],
    views: { type: Number, default: 0 },
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updatedAt' } },
);

postSchema.set('toJSON', { getters: true });

postSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj._id;
  delete obj.__v;
  return obj;
};

postSchema.methods = {
  vote(user, vote) {
    const existingVote = this.votes.find((v) => v.user._id.equals(user));

    if (existingVote) {
      this.score -= existingVote.vote;
      if (vote === 0)
        this.votes.pull(existingVote);
      else {
        this.score += vote;
        existingVote.vote = vote;
      }
    } else if (vote !== 0) {
      this.score += vote;
      this.votes.push({ user, vote });
    }

    return this.save();
  },

  addComment(author, body) {
    this.comments.push({ author, body, history: [{ body }] });
    return this.save();
  },

  modifyComment(id, body) {
    const comment = this.comments.id(id);
    if (!comment) throw new Error('Comment not found');
    comment.updateComment(body);
    return this.save();
  },

  removeComment(id) {
    const comment = this.comments.id(id);
    if (!comment) throw new Error('Comment not found');
    comment.remove();
    return this.save();
  },
};

postSchema.pre(/^find/, function () {
  this.populate('author')
    .populate('comments.author', '-role')
    .populate('comments.comments.author', '-role');
});

postSchema.pre('save', function (next) {
  this.wasNew = this.isNew;
  next();
});

postSchema.post('save', function (doc, next) {
  if (this.wasNew)
    this.vote(this.author._id, 1);

  doc
    .populate('author')
    .populate('comments.author', '-role')
    .populate('comments.comments.author', '-role')
    .execPopulate()
    .then(() => next());
});

module.exports = mongoose.model('Post', postSchema);
