var router = require('express').Router();
var passport = require('passport');
var HttpError = require('../utils/HttpError');

//google authentication and login 
router.get('/',passport.authenticate('google', { scope : 'email' }));

// handle the callback after google has authenticated the user
router.get('/callback',passport.authenticate('google', {
    successRedirect : '/home',
    failureRedirect : '/'
  }));

module.exports = router;