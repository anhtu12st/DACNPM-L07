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
    const cur_vote = await Vote.findOne({ voter, parent: this._id }).exec()
    if (cur_vote) {
      if (cur_vote.vote_value === vote) {
        this.voters.pull(cur_vote._id)
        await Vote.deleteOne(cur_vote)
        this.vote_count -= vote
      } else {
        await Vote.updateOne({voter, parent: this._id}, {$set: {vote_value: vote}})
        this.vote_count += vote * 2
      }
    }
    else {
      this.vote_count += vote
      const new_vote = await Vote.create({ voter, vote_value: vote, parent: this._id })
      this.voters.push(new_vote._id)
    }
    // this person has voted
    // if (voterIdx !== -1) {
    //   console.log(this)
    //   const voting = populatedPost.voters
    //   // unvote?
    //   if (vote === voting.vote_value) {
    //     this.vote_count -= voting.vote_value;
    //     this.voters.pull(voter);
    //     Vote.deleteOne({ voter: voter, vote_value: vote, parent: this._id })
    //   }
    //   // change upvote to downvote or vice versa?
    //   else {
    //     this.vote_count -= this.voters[voterIdx].vote_value;
    //     this.vote_count += vote;
    //     this.voters[voterIdx].vote_value = vote
    //   }
    // }
    // // this person has not voted yet
    // else {
    //   this.vote_count += vote;
    //   const newVote = await Vote.create({
    //     voter: voter,
    //     vote_value: vote,
    //     parent: this._id
    //   })
    //   this.voters.push(newVote._id);
    // }
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
