"use strict";

function mainController ($scope, $location, $rootScope){
	
	

	$rootScope.course = {
		'name': "",
		'description': ""
	}

	$scope.navigateTo = function (url, course){
		$location.path(url);
		$scope.currentPage = url;
		$rootScope.course.name = course;
	}

	// $scope.isOpen = false;
	// $scope.toggle = function(){
	// 	if($scope.isOpen = false){
	// 		$scope.isOpen = true;
	// 		$('#myModal').show();
	// 	}else{
	// 		$scope.isOpen = false;
	// 		$('#myModal').hide();
	// 	}
	// }

};
