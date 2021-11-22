const mongoose = require('mongoose');

const { Schema } = mongoose;

const voteSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true },
  },
  { _id: false },
);

exports.voteSchema = voteSchema;
