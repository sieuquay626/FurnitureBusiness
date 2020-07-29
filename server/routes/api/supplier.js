const express = require('express');
const router = express.Router();
const controller = require('../../controller/supplier.controller');

router.get('/', controller.listSupplier);
router.get('/count', controller.countSupplier);
router.get('/:id', controller.inforSupplier);
router.post('/', controller.addSupplier);
router.put('/:id', controller.editSupplier);
router.delete('/:id', controller.deleteSupplier);

module.exports = router;
