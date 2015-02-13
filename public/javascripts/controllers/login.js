myApp.controller('loginCtrl', ['$scope', '$location', '$window', 'UserService', 'AuthenticationService','$rootScope',
    function AdminUserCtrl($scope, $location, $window, UserService, AuthenticationService,$rootScope) {
 
        //Admin User Controller (login, logout)
        $scope.logIn = function logIn(username, password) {
            if (username !== undefined && password !== undefined) {
                console.log('login in progress...');
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
]);