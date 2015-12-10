'use strict';

app.controller('StoryDetailCtrl', function ($scope, story, users, Auth) {
  $scope.session = Auth.getLoggedIn();
  console.log('SCOPE.SESSION',$scope.session);
	$scope.story = story;
	$scope.users = users;
	$scope.$watch('story', function () {
		$scope.story.save();
	}, true);
});