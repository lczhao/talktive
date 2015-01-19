(function(angular, $){
	var app = angular.module("app.dir.thread-tag", []);

	app.constant("threadTagConfig", {
		templateUrl: "/common/directive/thread-tag/"
	})

	app.directive("ttThreadTag", [
		"threadTagConfig", 
		"$window",
		"$sce",
	function(threadTagConfig, $window, $sce){
		return {
			templateUrl: threadTagConfig.templateUrl + "thread-tag.tpl.html",
			scope: {
				caption: "=",
				auther: "=",
				votes: "=",
				discription: "="
			},
			link: function (scope, element){
				scope.discription = $sce.trustAsHtml(scope.discription);
				scope.upCountIncrease = function () {
					scope.votes ++;
				}
				scope.upCountDecrease = function () {
					scope.votes --;
				}
			}
		}
	}])
})(angular, $);