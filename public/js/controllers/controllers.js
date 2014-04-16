budApp.controller('HomeController', function($scope) {
	$scope.findBud = function () {
		console.log('bud searched');
		navigator.geolocation.getCurrentPosition(function(position) {
			console.dir(position);
		});
	}
});