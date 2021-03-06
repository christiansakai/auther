var router = require('express').Router();

router.use('/login', require('./login'));

router.use('/signup', require('./signup'));

router.use('/logout', require('./logout'));

router.use('/me', require('./me'));

router.use('/google', require('./google'));

module.exports = router;