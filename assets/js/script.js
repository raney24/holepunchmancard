var mancardApp = angular.module('mancardApp', ['ngRoute', 'ngAnimate']);

mancardApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'mainController'
		})

		.when('/about', {
			templateUrl : 'pages/about.html',
			controller : 'aboutController'
		})

		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller : 'contactController'
		})
})

mancardApp.controller('mainController', function($scope) {

	$scope.message = 'Providing men what they have needed: A MANCARD';
	$scope.pageClass = 'page-home';

});

mancardApp.controller('aboutController', function($scope) {

	$scope.message = 'Learn more about how this proves and disproves your manhood';
	$scope.pageClass= 'page-about';

});

mancardApp.controller('contactController', function($scope) {

	$scope.message = 'Email us if you have questions or suggestions';
	$scope.pageClass= 'page-contact';

});
