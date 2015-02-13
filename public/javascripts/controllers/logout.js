myApp.controller('logoutCtrl', ['$scope', 'UserService', 'AuthenticationService', '$window','$location','$rootScope',
	function($scope, UserService, AuthenticationService, $window,$location,$rootScope) {

    $scope.logout = function () {
    	console.log('logout...');
            if (AuthenticationService.isLogged) {
                AuthenticationService.isLogged = false;
                $rootScope.currentUser = null;
                delete $window.sessionStorage.token;
                $location.path("/");
            }
        };
  }]);


        