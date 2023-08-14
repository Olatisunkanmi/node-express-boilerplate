const router = require('express').Router();
const { AuthController } = require('../../controllers');
const { validateRequest } = require('../../middleware');
const { RegisterRequest } = require('../../request');

router.post(
  '/register',
  validateRequest(RegisterRequest),
  AuthController.register
);

module.exports = router;
