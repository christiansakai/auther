app.controller('LoginCtrl', function($scope, Auth) {
  $scope.login = function() {
    Auth.login($scope.email,$scope.password)
    .then(function(user) {
    	console.log(user)
      // console.log(Auth.getUserSession())
    })
    // console.log($scope.email);
    // console.log($scope.password);
    // console.log($scope.loginForm);  
  }
  $scope.googleLogin = function() {
    Auth.googleLogin()
    .then(function(stuff) {
      console.log(stuff);
    });
  }

})