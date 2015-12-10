var router = require('express').Router();
var HttpError = require('../utils/HttpError');

router.delete('/',function(req,res,next) {
  req.session.destroy(function(err) {
    if(err) throw HttpError(401, err)
  })
  res.status(200).send("Logged out")
})

module.exports = router;