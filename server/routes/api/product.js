const express = require('express');
const router = express.Router();
const controller = require('../../controller/product.controller');
const config = require('../../config/uploadFile');

router.get('/', controller.listProduct);
router.get('/page/:numberPage', controller.listProduct);
router.get('/:id', controller.inforProduct);
router.post('/', config.upload.single('coverImage'), controller.addProduct);
router.put('/:id', controller.editProduct);
router.delete('/:id', controller.deleteProduct);
module.exports = router;
