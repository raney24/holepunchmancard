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

		.when('/sheets', {
			templateUrl : 'pages/sheets.html',
			controller : 'sheetsController'
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

mancardApp.controller('sheetsController', function($scope) {

	$scope.message = 'test with sheets';
	$scope.pageClass= 'page-sheets';

});


// Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com
var CLIENT_ID = '731651960622-boiud3ee80gsc4d4bnl2j55g5q2oqukf.apps.googleusercontent.com';

var SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

/**
 * Check if current user has authorized this application.
 */
 function checkAuth() {
  gapi.auth.authorize(
  {
    'client_id': CLIENT_ID,
    'scope': SCOPES.join(' '),
    'immediate': true
  }, handleAuthResult);
}

/**
 * Handle response from authorization server.
 *
 * @param {Object} authResult Authorization result.
 */
 function handleAuthResult(authResult) {
  var authorizeDiv = document.getElementById('authorize-div');
  if (authResult && !authResult.error) {
    // Hide auth UI, then load client library.
    authorizeDiv.style.display = 'none';
    loadSheetsApi();
  } else {
    // Show auth UI, allowing the user to initiate authorization by
    // clicking authorize button.
    authorizeDiv.style.display = 'inline';
  }
}

/**
 * Initiate auth flow in response to user clicking authorize button.
 *
 * @param {Event} event Button click event.
 */
 function handleAuthClick() {
  gapi.auth.authorize(
    {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
    handleAuthResult);
  return false;
}

/**
 * Load Sheets API client library.
 */
 function loadSheetsApi() {
  var discoveryUrl = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
  gapi.client.load(discoveryUrl).then(getOffenses);
}

/*
 * Get the data from our spreadsheet
 */
var data = [];

function getOffenses() {
  gapi.client.sheets.spreadsheets.values.get({
  	// id from url
    spreadsheetId: '1ZM8a6shTTMdHe4O1jh7CpzrEBSAXHQkvLdheR5MFWuo',
    // sheet name (at the bottom) followed by cells
    range: 'Form Responses!B2:C',
  }).then(function(response) {
    range = response.result;
    if (range.values.length > 0) {
    	for (i = 0; i < range.values.length; i++) {
    		var row = range.values[i];
    		if (row[0] != null) {
	    		var obj = {
	    			offender: row[0],
	    			offense: row[1]
	    		};
	    		data.push(obj);
	    	}
    	}
    }
  }, function(response) {
    alert('Error: ' + response.result.error.message);
  });
}

/*
 * Call this once we have the data
 */
function returnData() {
	return data;
}

mancardApp.controller('OffensesController', function($scope, $timeout) {
	$scope.click = function() {
		handleAuthClick();	
		handleAuthResult();
	}

	/*
	 * Wait 3 seconds then call so that Google Sheets API has been loaded
	 */
	$timeout(function() {
		$scope.data = returnData();
		if ($scope.data === null) {
			getOffenses();
			$scope.data = returnData();
		}
		console.log($scope.data);
	}, 3000);
});



