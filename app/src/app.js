(function(angular, $){
	var app = angular.module("app", [
		"ngRoute",
		"app.dir.tt-navbar",
		"app.home"
	]);

	app.config(["$routeProvider", function($routeProvider){

		$routeProvider
			.when("/home", {
				templateUrl: "/home/home.tpl.html",
				//controller: "homeCtrl"
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
				caption: "About",
				link: "/about"
			}
		]
	}])
})(angular, $);