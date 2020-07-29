const config = require('../config/config');
const jwt = require('jsonwebtoken');
const User = require('../model/User');

module.exports = {
  // authUser: async (req, res, next) => {
  //   let token;
  //   if (
  //     req.headers.authorization &&
  //     req.headers.authorization.startsWith('Bearer')
  //   ) {
  //     token = req.headers.authorization.split(' ')[1];
  //   }

  //   if (!token) {
  //     return res.status(403).json({ message: 'You need to sign in' });
  //   }

  //   //Verification token
  //   const decoded = jwt.verify(token, config.jwtSecret);
  //   console.log(decoded);

  //   //Kiem tra user trong token
  //   const freshUser = await User.findById(decoded._id);
  //   if (!freshUser) {
  //     res
  //       .status(401)
  //       .json('The user belonging to this token does no longer exist');
  //   }

  //   req.user = freshUser;

  //   next();
  // },
  authRole: (...roles) => {
    return (req, res, next) => {
      let token = req.headers.authorization.split(' ')[1];

      //Verification token
      const decoded = jwt.verify(token, config.jwtSecret);
      console.log(decoded.role);
      console.log(typeof decoded.role);
      console.log(roles);
      console.log(typeof roles);
      if (!roles.includes(decoded.role)) {
        res.status(403).json({ message: 'Not Allow' });
      } else {
        next();
      }
    };
  },
};
