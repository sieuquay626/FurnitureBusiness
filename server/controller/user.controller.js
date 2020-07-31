const config = require('../config/config');
const User = require('../model/User');
const validateRegister = require('../config/validator/register');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { generateToken } = require('../config/createToken');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: config.SENGIRD_API,
    },
  })
);
module.exports = {
  listAccount: async (req, res) => {
    try {
      const users = await User.find();
      if (!users[0]) res.status(400).json({ msg: 'No users exist' });
      delete users.password;
      res.status(200).json(users);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  },

  listAccountPage: async (req, res) => {
    const { pageCurrent, pageSize, search = '' } = { ...req.query };
    try {
      // const users = await User.find().skip((pageCurrent - 1) * pageSize).limit(pageSize);
      const users = await User.find();
      if (!users[0]) res.status(400).json({ msg: 'No users in database' });
      delete users.password;

      let user = users.filter((x) => {
        return x.username.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });

      user = user.slice((pageCurrent - 1) * pageSize, pageCurrent * pageSize);
      res.status(200).json({ user });
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  },

  register: async (req, res, next) => {
    await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    })
      .then((user) => {
        if (user) {
          if (user.username === req.body.username) {
            return res.status(400).json({ msg: 'Username already exists' });
          }

          if (user.email === req.body.email) {
            return res.status(400).json({ msg: 'Email already exists' });
          }
        } else {
          console.log(req.file);

          const avatar =
            req.file != null
              ? req.file.path
              : gravatar.url(req.body.email, {
                  s: '200',
                  r: 'pg',
                  d: 'mm',
                });

          const newUser = new User({
            ...req.body,
            avatar,
          });

          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => res.json({ msg: err }));
        }
      })
      .catch((err) => {
        res.status(400).json({ msg: err.message });
      });
  },

  login: async (req, res) => {
    await User.findOne({ username: req.body.username })
      .then((user) => {
        if (!user) {
          res.status(400).json({ msg: 'User not found' });
        }

        if (user.comparePassword(req.body.password)) {
          generateToken(user._doc, '2h')
            .then((token) => {
              const result = { ...user };
              delete result._doc.password;
              result._doc.token = `Bearer ${token}`;
              let x = result._doc;
              return res.status(200).json(x);
            })
            .catch((err) => {
              return res.status(400).json({ msg: 'Pasword is wrong' });
            });
        } else {
          return res.status(400).json({ msg: 'Password incorrect' });
        }
      })
      .catch((err) => {
        console.log('teo');
      });
  },
  refreshToken: async (req, res) => {
    const refreshTokenFromClient = req.body.refreshToken;
    console.log(refreshTokenFromClient);

    // await User.findById(req.params.id)
    //   .then((user) => {
    //     res.status(200).json(user);
    //   })
    //   .catch((err) => {
    //     res.status(400).json({ msg: err });
    //   });
  },
  inforAccount: async (req, res) => {
    await User.findById(req.params.id)
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  },

  editProfile: async (req, res) => {
    try {
      await User.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true }
      )
        .then((user) => {
          user
            .save()
            .then((sup) => {
              res.status(200).json(user);
            })
            .catch((err) => {
              res.status(400).json({ msg: err });
            });
        })
        .catch((err) => {
          res.status(400).json({ msg: 'User Not Found' });
        });
    } catch (err) {
      res.status(400).json({ msg: err });
    }
  },

  sendEmail: async (req, res) => {
    await User.findOne({ email: req.body.email })
      .then((user) => {
        console.log(user);

        if (!user) {
          req.status(400).json({
            msg: `No account found with this email ${req.body.email} `,
          });
        }

        user.resetToken = uuidv4();
        user.resetTokenExpiration = Date.now() + 3600000;
        user.save();

        transporter.sendMail(
          {
            to: req.body.email,
            from: 'FurnitureShopNTP.com',
            subject: 'Reset Password!',
            html: `<p> You have requested to a reset password.</p>
        <p>Click this <a href='http://192.168.1.31:3000/reset-password/${user.resetToken}'>link</a> to set a new password.</p>
  `,
          },
          function (err, infor) {
            if (err) {
              console.log(err);
            }
            console.log(infor);
          }
        );

        res.status(200).json({
          resetToken: user.resetToken,
          message: 'The actions is success.You can check email',
        });
      })
      .catch((err) => {
        res
          .status(400)
          .json({ msg: `No account found with this  ${req.body.email} ` });
      });
  },

  resetPassword: async (req, res) => {
    await User.findOne({
      resetToken: req.params.tokenReset,
      resetTokenExpiration: { $gt: Date.now() },
    })
      .then((user) => {
        user.password = req.body.newPassword;

        user.save().then((result) => {
          res.status(400).json({ msg: 'Success change password', result });
        });
      })
      .catch((err) => {
        res
          .status(400)
          .json({ msg: 'Tokken is Wrong or Expiration Token is over ' });
      });
  },

  dashBoard: (req, res) => {
    res.json({ msg: 'dashboard' });
  },
  delete: async (req, res) => {
    try {
      await User.findByIdAndRemove(req.params.id)
        .then((user) => {
          res
            .status(200)
            .json({ msg: 'User deleted successfully!', delete: user });
        })
        .catch((err) => {
          res.status(400).json({ msg: 'User Not Found  ' });
        });
    } catch (err) {
      res.status(400).json({ msg: err });
    }
  },
};
