const express = require('express');
const router = express.Router();
const controller = require('../../controller/category.controller');
router.get('/', controller.listCategory);
router.get('/parent', controller.getParentCategory);
router.get('/:id', controller.inforCategory);
router.get('/sub/:id', controller.getSubCategory);

router.post('/', controller.addCategory);
router.put('/:id', controller.editCategory);
router.delete('/:id', controller.deleteCategory);
module.exports = router;
