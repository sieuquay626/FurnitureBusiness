const multer = require('multer');
const moment = require('moment');
const imageMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
const strorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/');
  },
  filename: (req, file, cb) => {
    cb(null, moment() + '-' + file.originalname);
  },
});
module.exports = {
  upload: multer({
    storage: strorage,
    limits: {
      fileSize: 1024 * 1024 * 5,
    },
    fileFilter: (req, file, cb) => {
      cb(null, imageMimeTypes.includes(file.mimetype));
    },
  }),
};
