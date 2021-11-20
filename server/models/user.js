const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema(
  {
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: { type: String, required: true, default: 'user' },
    profilePhoto: {
      type: String,
      default() {
        return `https://secure.gravatar.com/avatar/${this._id}?s=90&d=identicon`;
      }
    },
    groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }],
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updatedAt' } }
);

userModel.set('toJSON', { getters: true });
userModel.options.toJSON.transform = (_, ret) => {
  const obj = { ...ret };
  delete obj._id;
  delete obj.__v;
  delete obj.password;
  return obj;
};

module.exports = mongoose.model('User', userModel);
