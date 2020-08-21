const express = require('express');
const router = express.Router();
const controller = require('../../controller/brand.controller');
router.get('/', controller.listBrand);

module.exports = router;
