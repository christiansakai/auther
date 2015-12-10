'use strict';

app.directive('navbar', function ($state, $location, Auth) {
	return {
		restrict: 'E',
		templateUrl: '/browser/components/navbar/navbar.html',
		link: function (scope) {
			scope.pathStartsWithStatePath = function (state) {
				var partial = $state.href(state);
				var path = $location.path();
				return path.startsWith(partial);
			}
			scope.logout = function() {
				Auth.logout()
				.then(function(response) {
					console.log(response)
				})
			}
			// scope.getLoggedIn = function() {
			// 	return Auth.getLoggedIn();
			// }
			Auth.getLoggedIn()
			.then(function(loginJson) {
				scope.isLoggedIn = loginJson.loggedIn;
				console.log("SCOPE",loginJson);
			});
		}
	}
});