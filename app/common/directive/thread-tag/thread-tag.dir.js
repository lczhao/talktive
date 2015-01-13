(function(angular, $){
	var app = angular.module("app.dir.thread-tag", []);

	app.constant("threadTagConfig", {
		templateUrl: "/common/directive/thread-tag/"
	})

	app.directive("ttThreadTag", [
		"threadTagConfig", 
	function(threadTagConfig){
		return {
			templateUrl: threadTagConfig.templateUrl + "thread-tag.tpl.html"
		}
	}])
})(angular, $);