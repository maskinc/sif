myApp.factory('UserService', function($http) {
    return {
        logIn: function(username, password) {
            return $http.post('/api/login', {email: username, password: password});
        },
 
        logOut: function() {
 
        },

        signup: function(username, password, role){
        	return $http.post('/api/signup',{email: username, password: password, role: role});
        }
    }


});



myApp.factory('Users', ['$resource', function($resource){
          return $resource('/users/:id', null, {
            'update': { method:'PUT' }
          });
}]);