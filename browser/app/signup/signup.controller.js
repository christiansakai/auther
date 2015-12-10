app.controller('SignupCtrl', function($scope, Auth) {
  $scope.signup = function() {
    Auth.signup($scope.email,$scope.password);
    console.log($scope.email);
    console.log($scope.password);
    console.log($scope.signupForm);
  }
})