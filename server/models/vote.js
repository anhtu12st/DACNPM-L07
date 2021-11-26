const mongoose = require('mongoose');

const { Schema } = mongoose;

const voteSchema = new Schema(
  {
    voter: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    vote_value: { type: Number, required: true },
    parent: { type: Schema.Types.ObjectId, ref: 'Post', required: true }
  }
);

module.exports = mongoose.model('Vote', voteSchema);
