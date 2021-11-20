const mongoose = require('mongoose');
const { Schema } = mongoose;

const { voteSchema } = require('./vote');

const commentSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    text: { type: String, required: true },
    score: { type: Number, default: 0 },
    votes: [voteSchema],
    comments: [commentSchema],
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updatedAt' } }
);

commentSchema.set('toJSON', { getters: true });
commentSchema.options.toJSON.transform = (_, ret) => {
  const obj = { ...ret };
  delete obj._id;
  return obj;
};

commentSchema.methods = {
  vote(user, vote) {
    const existingVote = this.votes.find((v) => v.user._id.equals(user));
    if (existingVote) {
      this.score -= existingVote.vote;
      if (vote === 0) {
        this.votes.pull(existingVote);
      } else {
        this.score += vote;
        existingVote.vote = vote;
      }
    } else if (vote !== 0) {
      this.score += vote;
      this.votes.push({ user, vote });
    }
    return this.save();
  },

  updateComment(text) {
    this.text = text;
    return this;
  },

  addComment(author, text) {
    this.comments.push({ author, text });
    return this.save();
  },

  modifyComment(id, text) {
    const comment = this.comments.id(id);
    if (!comment) throw new Error('Comment not found');
    comment.updateComment(text);
    return this.save();
  },

  removeComment(id) {
    const comment = this.comments.id(id);
    if (!comment) throw new Error('Comment not found');
    comment.remove();
    return this.save();
  },
};

module.exports = mongoose.model('Comment', commentSchema);
exports.commentSchema = commentSchema;
