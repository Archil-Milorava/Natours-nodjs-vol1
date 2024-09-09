const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Enter valid email address'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'please enter a valid email address'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Enter strong password'],
    minLength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, ' confirm password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'passwords are not identical',
    },
  },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash('password', 12);
  this.passwordConfirm = undefined;
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
