app.factory('Auth', function($http) {
  return {
    signup: function(email, password) {
      return $http.post('/api/signup',{
        email: email,
        password: password
      })
    },
    login: function(email, password) {
      return $http.post('/api/login',{
        email: email,
        password: password
      })
    }
  }
})