'use strict';

var app = angular.module('auther', ['ui.router']);

app.config(function ($urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
  //for google button:
  $urlRouterProvider.when('/auth/:provider', function () {
    window.location.reload();
  });
});