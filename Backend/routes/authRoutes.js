const express = require('express');
const { signIn, signUp } = require('../controllers/authController');
const { forgotPassword, resetPassword } = require('../controllers/authController');

const router = express.Router();

router.post('/signin', signIn);
router.post('/signup', signUp);

router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
module.exports = router;