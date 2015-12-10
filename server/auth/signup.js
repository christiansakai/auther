var router = require('express').Router();
var User = require('../api/users/user.model');

var HttpError = require('../utils/HttpError');

router.post('/',function(req,res,next) {
  // console.log(req.body)
  User.create({
    email: req.body.email,
    password: req.body.password
  })
  .then(function(user) {
    if (!user) throw HttpError(401);
    // console.log(user);
    // res.status(200).send(user);
    res.json(user);
  })
  .then(null,next)
})

module.exports = router;

//tom@fullstack.com
//tomtom