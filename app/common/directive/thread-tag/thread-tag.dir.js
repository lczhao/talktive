(function(angular, $){
	var app = angular.module("app.dir.thread-tag", []);

	app.constant("threadTagConfig", {
		templateUrl: "/common/directive/thread-tag/"
	})

	app.directive("ttThreadTag", [
		"threadTagConfig", 
	function(threadTagConfig){
		return {
			templateUrl: threadTagConfig.templateUrl + "thread-tag.tpl.html",
			scope: {},
			controller: ["$scope", "$http", function($scope, $http){
				//get the up count using rest
				$scope.upCount = 0;
				$scope.upCountIncrease = function (){
					$scope.upCount ++;
				};
				$scope.upCountDecrease = function () {
					$scope.upCount --;
				}
			}]
		}
	}])
})(angular, $);