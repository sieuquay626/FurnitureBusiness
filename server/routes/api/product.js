const express = require('express');
const moment = require('moment');
const router = express.Router();
const controller = require('../../controller/product.controller');
const fs = require('fs');
const multer = require('multer');
const imageMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
const strorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/');
  },
  filename: (req, file, cb) => {
    cb(null, moment() + '-' + file.originalname);
  },
});
const upload = multer({
  storage: strorage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: (req, file, cb) => {
    cb(null, imageMimeTypes.includes(file.mimetype));
  },
});
router.get('/', controller.listProduct);
router.get('/page/:numberPage', controller.listProduct);
router.get('/:id', controller.inforProduct);
router.post('/', upload.single('coverImage'), controller.addProduct);
router.put('/:id', controller.editProduct);
router.delete('/:id', controller.deleteProduct);
module.exports = router;
