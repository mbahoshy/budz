
var budApp = angular.module('budApp', ['ngRoute']);
budApp.config(['$routeProvider', function ($routeProvider){
	$routeProvider.when('/', {
		template: '<div><h2>Does this Work?</h2></div>'
	});
}]);
console.log('wow');