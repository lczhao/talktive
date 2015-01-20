(function(angular, $){
	var app = angular.module("app.dir.thread-tag", []);

	app.constant("threadTagConfig", {
		templateUrl: "./common/directive/thread-tag/"
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
				hotness: "=",
				discription: "=",
                liked: "="
			},
			link: function (scope, element){
			    scope.discription = $sce.trustAsHtml(scope.discription);
			    
			    scope.toggleHotness = function () {
			        if (scope.liked) {
			            scope.hotness--;
			            scope.liked = false;
			        } else {
			            scope.hotness = scope.hotness + 1;
			            scope.liked = true;
			        };
				    
				}
			}
		}
	}])
})(angular, $);