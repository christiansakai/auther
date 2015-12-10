var router = require('express').Router();
var User = require('./users/user.model');

var HttpError = require('../utils/HttpError');

router.post('/',function(req,res,next) {
  console.log(req.body)
  User.find({ email: req.body.email })
  .then(function(user) {
    if (!user) throw HttpError(401);
    console.log(user);
    res.status(200).send(user);
  })
  .then(null,next)
})

module.exports = router;