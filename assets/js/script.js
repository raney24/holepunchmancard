var mancardApp = angular.module('mancardApp', ['ngRoute', 'ngAnimate']);

mancardApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'mainController'
		})

		.when('/buynow', {
			templateUrl : 'pages/buynow.html',
			controller : 'buynowController'
		})

		.when('/discount', {
			templateUrl : 'pages/discount.html',
			controller : 'discountController'
		})

		.when('/about', {
			templateUrl : 'pages/about.html',
			controller : 'aboutController'
		})

		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller : 'contactController'
		})

		.when('/thanks', {
			templateUrl : 'pages/thanks.html',
			controller : 'thanksController'
		})

		.when('/signup', {
			templateUrl : 'pages/signup.html',
			controller : 'signupController'
		})

		.when('/form', {
			templateUrl : 'pages/form.html',
			controller : 'formController'
		})
})

mancardApp.controller('mainController', function($scope) {

	$scope.message = 'Providing men what they have needed: A MANCARD';
	$scope.pageClass = 'page-home';

});

mancardApp.controller('buynowController', function($scope) {

	$scope.message = 'These cards show your true manhood';
	$scope.pageClass = 'page-buynow';

});

mancardApp.controller('discountController', function($scope) {

	$scope.message = 'Thank your manly friend who you referred you';
	$scope.pageClass = 'page-discount';

});

mancardApp.controller('aboutController', function($scope) {

	$scope.message = 'Learn more about how this proves and disproves your manhood';
	$scope.pageClass= 'page-about';

});

mancardApp.controller('contactController', function($scope) {

	$scope.message = 'Email us if you have questions or suggestions';
	$scope.pageClass= 'page-contact';

});

mancardApp.controller('thanksController', function($scope) {

	$scope.message = 'We will be contacting you for your order details';
	$scope.pageClass= 'page-thanks';

});

mancardApp.controller('signupController', function($scope) {

	$scope.message = 'Signup to receive updates about mancards and all other manly things';
	$scope.pageClass= 'page-signup';

});

mancardApp.controller('formController', function($scope) {

	$scope.message = 'Fill out this form to receive your mancard';
	$scope.pageClass= 'page-form';

});
