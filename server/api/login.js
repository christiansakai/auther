var router = require('express').Router();
var User = require('./users/user.model');

var HttpError = require('../utils/HttpError');

router.post('/',function(req,res,next) {
  // console.log(req.body)
  User.findOne({ email: req.body.email })
  .then(function(user) {
    if (!user) throw HttpError(401);
    // console.log(user);
    if(user.password !== req.body.password) {
    	// console.log("This is the USER: ", user)
    	// console.log("user password is: ", user.password)
    	// console.log("req.body.password is: ", req.body.password)
    	throw HttpError(401);
    }
    else {
    	// console.log("This is user:", user)
    	req.session.userId = user._id
    	req.session.isAdmin = user.isAdmin
    	res.status(200).send(user);	
    }
  })
  .then(null,next)
})

module.exports = router;