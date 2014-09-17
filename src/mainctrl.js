
function mainController ($scope, $location, $rootScope){

		$scope.navigateTo = function (url){
			$location.path(url);
			$scope.currentPage = url;
		}

		$scope.ctrlSetup = function(){
			$scope.currentPage = '/home';
		}

		$scope.ctrlSetup();
};
