(function(angular, $){
	var app = angular.module("app.dir.user-tool-bar", []);

	app.constant("userToolBarConfig", {
		templateUrl: "/common/directive/user-tool-bar"
	});

	app.directive("userToolBar", ["userToolBarConfig", function(userToolBarConfig){
		return {
			templateUrl: userToolBarConfig.templateUrl + "/user-tool-bar.tpl.html"
		}
	}])
})(angular, $);