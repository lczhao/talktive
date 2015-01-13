(function(angular,$){
	var app = angular.module("app.dir.tt-navbar", [
		
	]);

	app.constant("ttNavBarConfig", {
		templateUrl: "/common/directive/navbar/"
	});
	
	app.directive("ttNavbar", [
		"ttNavBarConfig", 
		"$location",
	function(ttNavBarConfig, $location){
		return {
			scope: {
				items: "=",
				caption: "@",
				homeUrl: "@"
			},
			templateUrl: ttNavBarConfig.templateUrl + "navbar.tpl.html",
			controller: ["$scope", "$location", function($scope, $location){
				$scope.isActive = function(url) {
					//debugger;
					return url === $location.path();
				}
			}]
		}
	}]);
})(angular,$);