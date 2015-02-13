  myApp.controller("signupCtrl", ['$scope', '$location', '$window', 'UserService', 'AuthenticationService','$rootScope',
    function($scope, $location, $window, UserService, AuthenticationService,$rootScope) {
    	var email = $scope.email;
    	var password = $scope.password;
    	var role  = $scope.role;


    $scope.signup = function signup(email, password) {
    			
    			console.log(email +' --' + password + ' ---' + role);
                UserService.signup(email, password, 'User').success(function(data) {
                    AuthenticationService.isLogged = false;
                    $location.path("/login");
                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                });

    	console.log('signup clicked');
    };

  }]);  


  /*myApp.controller('signupCtrl', ['$scope', '$location', '$window', 'UserService', 'AuthenticationService','$rootScope',
    function AdminUserCtrl($scope, $location, $window, UserService, AuthenticationService,$rootScope) {
 
        //Admin User Controller (login, logout)
        $scope.logIn = function logIn(username, password) {
            if (username !== undefined && password !== undefined) {
 
                UserService.logIn(username, password).success(function(data) {
                    AuthenticationService.isLogged = true;
                    $rootScope.currentUser = data;
                    $window.sessionStorage.token = data.token;
                    $location.path("/home");
                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                });
            }
        }
    }
]);*/

