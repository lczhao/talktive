(function(angular, $){
	var app = angular.module("app", [
		"ngRoute",
		//directives
		"app.dir.tt-navbar",
		"app.dir.user-tool-bar",
		//features
		"app.home"
	]);

	app.config(["$routeProvider", function($routeProvider){

		$routeProvider
			.when("/home", {
				templateUrl: "/home/home.tpl.html",
				controller: "homeCtrl"
			})
			.when("/forums", {
				templateUrl: "/forums/forums.tpl.html"
			})
			.when("/thread/:t", {
				templateUrl: "/thread/thread.tpl.html",
			})
			.otherwise({
				redirectTo: "/home"
			});
	}]);

	app.controller("mainCtrl", ["$scope", function($scope) {
		$scope.items = [
			{
				caption: "Home",
				link: "/home"
			}, {
				caption: "Forums",
				link: "/forums"
			}
		]
	}])
})(angular, $);