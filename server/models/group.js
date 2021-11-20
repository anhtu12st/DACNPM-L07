const mongoose = require('mongoose');
const { Schema } = mongoose;

const { postSchema } = require('./post');

const groupSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, default: '' },
    posts: [postSchema]
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updatedAt' } }
);

groupSchema.set('toJSON', { getters: true });

groupSchema.options.toJSON.transform = (_, ret) => {
  const obj = { ...ret };
  delete obj._id;
  delete obj.__v;
  return obj;
};

module.exports = mongoose.model('Group', groupSchema);
exports.groupSchema = groupSchema;