const validator = require('validator');
const isEmpty = require('./empty');

module.exports = function validateRegisterInput(req, res, next) {
  if (isEmpty(req.body.username)) {
    return res.status(400).json({ msg: 'Username field is requied' });
  }
  if (isEmpty(req.body.email)) {
    return res.status(400).json({ msg: 'Email field is requied' });
  }

  if (isEmpty(req.body.password)) {
    return res.status(400).json({ msg: 'Password field is requied' });
  }

  if (isEmpty(data.confirmPassword)) {
    return res.status(400).json({ msg: 'Confirm password field is requied' });
  }

  if (!validator.isLength(data.name, { min: 3, max: 30 })) {
    return res
      .status(400)
      .json({ msg: 'Name must be between 3 and 30 characters' });
  }

  if (!validator.isEmail(data.email)) {
    return res.status(400).json({ msg: 'Email is invalid' });
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    return res
      .status(400)
      .json({ msg: 'Password must be at least 6 characters' });
  }

  if (data.password !== data.confirmPassword) {
    return res.status(400).json({ msg: 'Passwords must match' });
  }
};
