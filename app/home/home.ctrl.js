(function(angular, $){
	var app = angular.module("app.home", [
		"app.dir.thread-tag",
		"app.dir.bottom-loader"
	]);

	app.controller("homeCtrl", [
		"$scope", 
		"$window",
		"$timeout",
		"$document",
	function($scope, $window, $timeout, $document){
		$scope.loading = false;
		$scope.threads = [];

		$scope.loadThread = function () {
			$scope.loading = true;
			
			$scope.$digest();
			
			//simulates http request here..
			$timeout(function (){
				for(var i = 0; i < 5; i ++) {
					$scope.threads.push({
						caption: "Sample thread title " + i,
						auther: "LC Zhao",
						votes: 0,
						discription: "Sample content...<br/>Sample content...<br/>Sample content...<br/>Sample content...<br/>"
					});
				}
				$scope.loading = false;
			}, 1000);
		}

		var initialLoad = function () {
			for(var i = 0; i < 10; i ++) {
				$scope.threads.push({
					caption: "Sample thread title " + i,
					auther: "LC Zhao",
					votes: 0,
					discription: "Sample content...<br/>Sample content...<br/>Sample content...<br/>Sample content...<br/>"
				});
			}
		}

		initialLoad();
	}])

})(angular, $);