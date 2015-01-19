(function(angular, $){
	var app = angular.module("app.dir.bottom-loader", []);

	app.directive("bottomLoader", [
		"$timeout", 
		"$window", 
	function ($timeout, $window){
		return {
			template: "<div></div>",
			scope: {
				handler: "=",
				disableWhen: "=",
				maximum: "@"
			},
			link: function(scope, element, attr){
				var windows = $($window);
				
				windows.scrollTop(0);
				windows.on('scroll', function (){
					if($window.scrollY + $window.innerHeight > element.position().top - 100) {
						
						if(scope.disableWhen) return;
						
						scope.handler();
					}
				});
			}
		}
	}])
})(angular, $);