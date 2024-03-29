myApp.factory('Auth', ['$http', '$location', '$rootScope', '$cookieStore', '$alert','SessionService',
    function($http, $location, $rootScope, $cookieStore, $alert,SessionService) {
      $rootScope.currentUser = $cookieStore.get('user');
      $cookieStore.remove('user');

      return {
        login: function(user) {
          return $http.post('/api/login', user)
            .success(function(data) {
              $rootScope.currentUser = data;
              $location.path('/home');
              SessionService.setUserAuthenticated(true);
              $alert({
                title: 'Cheers!',
                content: 'You have successfully logged in.',
                placement: 'top-right',
                type: 'success',
                duration: 3
              });
            })
            .error(function() {
              //$alert({
                //title: 'Error!',
                //content: 'Invalid username or password.',
                //placement: 'top-right',
                //type: 'danger',
                //duration: 3
                $rootScope.isLogged = true;
                $rootScope.message= 'Invalid username or password.';
              //});
            });
        },
        signup: function(user) {
          return $http.post('/api/signup', user)
            .success(function() {
              $location.path('/login');

              $alert({
                title: 'Congratulations!',
                content: 'Your account has been created.',
                placement: 'top-right',
                type: 'success',
                duration: 3
              });
            })
            .error(function(response) {
              $alert({
                title: 'Error!',
                content: response.data,
                placement: 'top-right',
                type: 'danger',
                duration: 3
              });
            });
        },
        logout: function() {
          return $http.get('/api/logout').success(function() {
            $rootScope.currentUser = null;
            $cookieStore.remove('user');
            $rootScope.isLogged = false;
            $location.path('/');
            $alert({
              content: 'You have been logged out.',
              placement: 'top-right',
              type: 'info',
              duration: 3
            });
          });
        }
      };



    }]);