myApp.controller('adminCtrl', ['$scope', 'SessionService', 'Users','$location',
	function($scope, SessionService,Users,$location) {
	console.log('Admin Controller');
	$scope.users = Users.query();

  }]);
