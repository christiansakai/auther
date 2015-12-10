'use strict';

var router = require('express').Router();

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

router.use('/login', require('./login'));

router.use('/signup', require('./signup'));

router.use('/logout', require('./logout'));


module.exports = router;