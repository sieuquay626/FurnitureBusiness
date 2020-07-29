const express = require('express');
const router = express.Router();
const controller = require('../../controller/comment.controller');
router.get('/', controller.listComment);
router.get('/:id', controller.inforComment);
router.post('/', controller.addComment);
router.delete('/:id', controller.deleteComment);
module.exports = router;
