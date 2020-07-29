const validator = require('validator');
const isEmpty = require('../../config/validator/empty');

module.exports = function validateRegisterInput(req, res, next) {
  if (isEmpty(req.body.username)) {
    res.status(400).json({ msg: 'Username field is requied' });
  }

  if (isEmpty(req.body.password)) {
    res.status(400).json({ msg: 'Password field is requied' });
  }

  if (!validator.isEmail(req.body.email)) {
    res.status(400).json({ msg: 'Email is invalid' });
  }

  if (!validator.isLength(req.body.password, { min: 6, max: 30 })) {
    res.status(400).json({ msg: 'Password must be at least 6 characters' });
  }
};
