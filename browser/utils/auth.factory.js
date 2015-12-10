app.factory('Auth', function($http) {
  var userSession;
  return {
    signup: function(email, password) {
      return $http.post('/api/signup',{
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
      return $http.post('/api/login',{
        email: email,
        password: password
      })
      .then(function(res) {
        userSession = res.data;
        return res;
      })
    },
    logout: function() {
      return $http.delete('/api/logout')
    },
    getLoggedIn: function() {
      return $http.get('/api/me')
      .then(function(res) {
        return res.data;
      });
      // return userSession ? true : false;
    }
    // getIsAdmin: function() {
    //   return userSession.isAdmin;
    // }
  }
})