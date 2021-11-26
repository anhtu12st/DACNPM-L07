const mongoose = require('mongoose');

const { Schema } = mongoose;

const voteSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    isPostVote: { type: Boolean, required: true }, // post's vote: true | comment's vote: false
    isUpvote: { type: Boolean, required: true }, // upvote: true | downvote: false
    post: { type: Schema.Types.ObjectId, ref: 'Post' },
    comment: { type: Schema.Types.Boolean, ref: 'Comment' }
  }
);

module.exports = mongoose.model('Vote', voteSchema);
