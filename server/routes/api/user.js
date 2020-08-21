const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const controller = require('../../controller/user.controller');
const auth = require('../../middleware/authRole');
const config = require('../../config/uploadFile');

router.get('/', controller.listAccount);
router.get('/pgs', controller.listAccountPage);
router.get('/', controller.listAccount);
router.post('/', controller.register);
router.get(
  '/dashboard',
  passport.authenticate('jwt', { session: false }),
  auth.authRole('Admin', 'SuperAdmin'),
  controller.dashBoard
);

router.get('/testdata', controller.datatest);
router.get('/:id', controller.inforAccount);
router.put('/:id', controller.editProfile);
router.delete('/:id', controller.delete);
router.post('/login', controller.login);
router.post('/reset', controller.sendEmail);
router.put('/reset/:tokenReset', controller.resetPassword);
router.post('/refresh-token', controller.refreshToken);

module.exports = router;
