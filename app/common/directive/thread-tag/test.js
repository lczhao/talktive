(function($, angular){
	var app = angular.module("thread-container-directive",[
		"thread-tag-directive"
	]);

	app.constant("THREAD_CONTAINER_CONFIG", {
		tempalteDir:"/script/common/directive/thread-container/"
	});

	app.directive("ttThreadContainer", [
		"THREAD_CONTAINER_CONFIG",
		"$window",
		"$timeout",
	function(THREAD_CONTAINER_CONFIG, $window, $timeout){
		return {
			scope: {
				APIlink: "="
			},
			replace: true,
			templateUrl: THREAD_CONTAINER_CONFIG.tempalteDir + "thread-container.tpl.html",
			link: function(scope, element){
				var windows = $($window);

				scope.threadEntries = [];
				scope.loaded = 0;
				scope.loading = false;
				scope.lockScroll = false;

				scope.clearLoaded = function () {
					scope.loaded = 0;
					handler();
				}
				
				//implementing the scrolling functionality
				var handler = function () {
					
					
					//check if at the bottom
					if(windows.scrollTop() + windows.height() > element.height() - 100) {
						//if(scope.lockScroll) return;

						//don't load too much
						if(scope.loaded > 2) {
							scope.loading = false;
							return;
						};

						
						//apply the loading screen..
						scope.loading = true;
						scope.lockScroll = true;
						
						for(var i = 0; i < 5; i ++) {
							//right now we use a fake data, but in the future we would receive data from the back end
							scope.threadEntries.push({
								title: "Topic #" + i,
								summary: "test..."
							});
						}

						scope.loaded = scope.loaded + 1;
						
						//simulates downloading..
						$timeout(function(){
							scope.$apply();
							
							scope.loading = false;
						}, 1000);
					}
				}

				windows.on('scroll', handler);
				//clear data
		        scope.$on('$destroy', function() {
		        	return $window.off('scroll', handler);
		        });
		        //immediate check when the page first load up
		        $timeout(handler);
		        
			}
		}
	}]);
})($, angular);
