app.factory('Auth', function($http) {
  var userSession;
  return {
    signup: function(email, password) {
      return $http.post('/auth/signup',{
        email: email,
        password: password
      })
      .then(function(res) {
        userSession = res.data;
        console.log('AUTH FACTORY',res);
        return res;
      })
    },
    login: function(email, password) {
      return $http.post('/auth/login',{
        email: email,
        password: password
      })
      .then(function(res) {
        userSession = res.data;
        return res;
      })
    },
    logout: function() {
      return $http.delete('/auth/logout')
    },
    getLoggedIn: function() {
      return $http.get('/auth/me')
      .then(function(res) {
        return res.data;
      });
      // return userSession ? true : false;
    },
    googleLogin: function() {
      return $http.get('/auth/google');
    }
    // getIsAdmin: function() {
    //   return userSession.isAdmin;
    // }
  }
})