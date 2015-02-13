myApp.config(function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'partials/login.html',
			controller: 'loginCtrl',
			access: { requiredLogin: false }
		})
		.when('/login',{
			templateUrl: 'partials/login.html',
			controller: 'loginCtrl',
			access: { requiredLogin: false }			
		})
		.when('/signup',{
			templateUrl: 'partials/signup.html',
			controller: 'signupCtrl',
			access: { requiredLogin: false }			
		})
		.when('/home',{
			templateUrl: 'partials/home.html',
			controller: 'homeCtrl',
			access: { requiredLogin: true }
		})
		.when('/create',{
			templateUrl: 'partials/create.html',
			controller: 'createCtrl',
			access: { requiredLogin: true }
		}).
		when('/admin',{
			templateUrl: 'partials/admin.html',
			controller: 'adminCtrl',
			access: { requiredLogin: true }			
		})
		.when('/:id',{
			templateUrl: 'partials/create.html',
			controller: 'createCtrl',
			access: { requiredLogin: true }			
		})
		.when('/suppliers/ap/:id',{
			templateUrl: 'partials/edit.html',
			controller: 'editCtrl',
			access: { requiredLogin: true }	
		})
		.when('/suppliers/view/:id',{
			templateUrl: 'partials/view.html',
			controller: 'viewCtrl',
			access: { requiredLogin: true }	
		})
		.otherwise({
			redirectTo: '/',
			access: { requiredLogin: false }			
		})
});


myApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
});

 
myApp.run(function($rootScope, $location, AuthenticationService) {
    $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
        if (nextRoute.access.requiredLogin && !AuthenticationService.isLogged) {
            $location.path("/");
        }
    });
});
