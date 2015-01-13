(function(angular, $){
	var app = angular.module("app", ["ngRoute"]);

	app.config(["$routeProvider", function($routeProvider){
		
		$routeProvider
			.when("/home", {
				templateUrl: "/home/home.tpl.html"
			})
			.otherwise({
				redirectTo: "/home"
			});
	}]);
})(angular, $);