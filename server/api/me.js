var router = require('express').Router();
var HttpError = require('../utils/HttpError');

//This route checks for whether req.session.userID exists because,
//at the start of our middleware chain, we attach a session object to the response.

//Meaning there is always a req.session
//But... there is not always a req.session.userId. 

//userId is only added to req.session upon login.

router.get('/',function(req,res,next) {
  if(req.session.userId) res.json({loggedIn: true});
  else res.json({loggedIn: false});
})

module.exports = router;