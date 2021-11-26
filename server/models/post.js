const mongoose = require('mongoose');

const { Schema } = mongoose;

// const voteSchema = mongoose.model('Vote');
const commentSchema = require('./comment')
let Vote = require('./vote')

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
    vote_count: { type: Number, default: 0 },
    voters: [{ type: Schema.Types.ObjectId, ref: 'Vote'}],
    views: { type: Number, default: 1 },
    comments: [commentSchema]
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
  async vote(voter, vote) {
    const voterIdx = this.voters.indexOf(voter)
    if (voterIdx !== -1) {
      const voting = await this.voters[voterIdx].populate()
      if (vote === voting.vote_value) {
        this.vote_count -= voting.vote_value;
        this.voters.pull(voter);
        Vote.deleteOne({ voter, vote_value: vote, parent: this._id })
      }

      else {
        this.vote_count -= this.voters[voterIdx].vote_value;
        this.vote_count += vote;
        this.voters[voterIdx].vote_value = vote
      }
    }

    else {
      this.vote_count += vote;
      this.voters.push(voter);
      Vote.create({
        voter,
        vote_value: vote,
        parent: this._id
      })
    }
    return this.save();
  },

  addComment(author, text) {
    this.comments.push({ author, text });
    this.populate('comments.author', '-role')
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

postSchema.pre(/^find/, function () {
  this.populate('author');
  this.populate('comments.author', '-role')
    // .populate('comments.comments.author', '-role');
  this.populate('group');
});



module.exports = mongoose.model('Post', postSchema);
