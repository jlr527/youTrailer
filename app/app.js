//creating angular module
var app=angular.module('app',['ngRoute', 'youtube-embed', 'ui.materialize', 'firebase', 'slickCarousel']);

// config routes angular
app.config(function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/home', {
			templateUrl	: 'app/views/home.html',
			controller 	: 'homeController'
		})
		.when('/insertar', {
			templateUrl	: 'app/views/insertTrailers.html',
			controller 	: 'insertController'
		})
		.otherwise({
			redirectTo: '/home'
		});
	/*$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
	});*/
});
