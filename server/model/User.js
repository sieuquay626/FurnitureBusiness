const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = Schema({
  username: {
    type: String,
    unique: true,
    required: [true],
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
    require: true,
  },
  phone: {
    type: String,
  },
  gender: {
    type: String,
    default: 'Male',
    enum: ['Male', 'FeMale'],
  },
  role: {
    type: String,
    enum: ['Customer', 'Admin', 'SuperAdmin'],
    default: 'Customer',
  },
  active: {
    type: Boolean,
    default: true,
  },
  avatar: {
    type: String,
  },
  resetToken: {
    type: String,
  },
  resetTokenExpiration: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', function (next) {
  let user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      console.log(user);
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (password) {
  let user = this;
  return bcrypt.compareSync(password, user.password);
};

module.exports = model('users', UserSchema);
