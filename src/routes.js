'use strict';
var spanishClass = angular.module('spanishClass', ['ngRoute']);

spanishClass.config(function ($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'partials/homepage.html'

		})
		.when('/contactme', {
			templateURL: 'partials/contactme.html'
			
		})
		.when('/teacherinfo', {
			templateURL: 'partials/teacher.html'
			
		})
		.otherwise({
			template: "Page does not exist"
		});
});


function mainCtrl ($scope) {
    console.log('saysomething');
}


// app.config(function ($routeProvider){
// 	$routeProvider
// 		.when('/',{
// 			templateUrl: "home.html"
// 		})
// 		.when('/home2',{
// 			templateUrl: "home2.html",
// 			controller: "employeeController"
// 		})
// 		.otherwise({
// 			template: "This does not exist br0!"
// 		});
// });