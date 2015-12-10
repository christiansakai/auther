'use strict'; 

var app = require('express')();
var path = require('path');
var session = require('express-session');
var passport = require('passport');

//We should put sessions above "/api" to intercept before login or signup
//because a user could already be logged in. (login and signup are api routes)

//Also, we want to know that a user has a session authorizing them to make changes
//to stories they've cteated (i.e. PUT / DELETE / POST) or their own user profile

//We should also place above where we serve our static middleware, 
//because that is where we serve index.html
//********************************************
app.use(session({
    // this mandatory configuration ensures that session IDs are not predictable
    secret: 'tongiscool'
    //we add in cookie below in the Session Bonus:
    // cookie: {
    // 	maxAge: 600000
    // }
}));

app.use(function (req, res, next) {
  // if (!req.session.counter) req.session.counter = 0;
  //we count up for each request w/in a given session
  // console.log("THIS IS THE counter", ++req.session.counter);
  // console.log("this is REQ SESSION", req.session)
  if(req.session.userId) console.log("Made a request from session: ", req.session.userId)
  next();
});
//********************************************

//PASSPORT:
app.use(passport.initialize());
app.use(passport.session());


app.use(require('./logging.middleware'));

app.use(require('./requestState.middleware'));

app.use(require('./statics.middleware'));


app.use('/api', require('../api/api.router'));

app.use('/auth', require('../auth/auth.router'));

var validFrontendRoutes = ['/', '/stories', '/users', '/stories/:id', '/users/:id', '/signup', '/login'];
var indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
	app.get(stateRoute, function (req, res) {
		res.sendFile(indexPath);
	});
});

app.use(require('./error.middleware'));

module.exports = app;