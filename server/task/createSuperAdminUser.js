require('dotenv').config();
const connect = require('../db/connection');
const bcrypt = require('bcryptjs');
const User = require('../model/User');
const mongoose = require('mongoose');
const gravatar = require('gravatar');

const createSuperAdminUser = () => {
  try {
    User.findOne({ role: 'SuperAdmin' }).then((user) => {
      if (!user) {
        const avatar = gravatar.url(process.env.EMAIL_SUPERADMIN, {
          s: '200',
          r: 'pg',
          d: 'mm',
        });
        const newUserSuperAdmin = new User({
          email: process.env.EMAIL_SUPERADMIN,
          username: process.env.USERNAME_SUPERADMIN,
          avatar,
          password: process.env.PASSWORD_SUPERADMIN,
          active: true,
          role: 'SuperAdmin',
        });
        newUserSuperAdmin
          .save()
          .then((user) => {
            console.log(newUserSuperAdmin);
            console.log('Admin user created!!');
            mongoose.disconnect();
          })
          .catch((err) => console.log(err));
      } else {
        console.log('Admin user already exist');
        mongoose.disconnect();
      }
    });
  } catch (err) {
    console.error(err);
  }
};
createSuperAdminUser();
