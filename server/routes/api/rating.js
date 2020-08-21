const express = require('express');
const router = express.Router();
const controller = require('../../controller/rating.controller');

router.get('/', controller.listRating);
router.post('/recomment', controller.recommentDataRating);
router.get('/:id', controller.inforRating);
router.post('/', controller.adddRating);
router.put('/:id', controller.editRating);

module.exports = router;
