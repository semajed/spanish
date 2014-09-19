angular.module('spanishclass',['ngRoute'])
.config(function ($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'views/homepage.html',
			controller: 'mainController'
		})
		.when('/contactme', {
			templateUrl: 'views/contactme.html',
			controller: 'mainController'			
		})
		.when('/teacherinfo', {
			templateUrl: 'views/teacher.html',
			controller: 'mainController'
		})
		.when('/courseOptions', {
			templateUrl: 'views/courseOptions.html',
			controller: 'courseOptionsCtrl'
		})
		.when('/docsTEMPLATE', {
			templateUrl: 'views/docsTEMPLATE.html',
			controller: 'mainController'
		})
		.when('/newsTEMPLATE', {
			templateUrl: 'views/newsTEMPLATE.html',
			controller: 'mainController'
		})
		.when('/docsTEMPLATE', {
			templateUrl: 'views/docsTEMPLATE.html',
			controller: 'mainController'
		})
		.otherwise({
			template: "Page does not exist"
		});
});