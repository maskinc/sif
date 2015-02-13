myApp.service('SessionService', function(){
    var userIsAuthenticated = false;
    console.log('session service');
    this.setUserAuthenticated = function(value){
        userIsAuthenticated = value;
    };

    this.getUserAuthenticated = function(){
        return userIsAuthenticated;
    };
});