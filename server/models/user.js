const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    role: { type: String, required: true, default: 'user' },
    profilePhoto: {
      type: String,
      default() {
        return `https://secure.gravatar.com/avatar/${this._id}?s=90&d=identicon`;
      }
    },
    groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }],
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updatedAt' } }
);

userSchema.set('toJSON', { getters: true });
userSchema.options.toJSON.transform = (_, ret) => {
  const obj = { ...ret };
  delete obj._id;
  delete obj.__v;
  delete obj.password;
  return obj;
};

module.exports = mongoose.model('User', userSchema);
