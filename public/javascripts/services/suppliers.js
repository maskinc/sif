myApp.factory('Suppliers', ['$resource', function($resource){
          return $resource('/suppliers/:id', null, {
            'update': { method:'PUT' }
          });
}]);

myApp.factory('Terms', ['$resource', function($resource){
          return $resource('/pterms', null);
}]);



myApp.factory('Currency', ['$resource', function($resource){
          return $resource('/currency', null);
}]);