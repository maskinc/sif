myApp.controller('homeCtrl', ['$scope', 'SessionService', 'Suppliers','$location','$rootScope',
	function($scope, SessionService,Suppliers,$location,$rootScope) {
	console.log('Home Controller');
	$scope.suppliers = Suppliers.query();
	$scope.homeFilter = {};

	$scope.launchCreate = function(){
        $location.url('/create');
    };  

    console.log('Role : ' + $rootScope.currentUser.role);

    switch($rootScope.currentUser.role){
    	case 'AP':
    		$scope.homeFilter = "AP Review";
    		break;
    	case 'PO':
    		$scope.homeFilter = "PO Rev";
    		break;
    	case 'DQM':
    		$scope.homeFilter = "DQM Rev";
    		break;    	
    	case 'TAX':
    		$scope.homeFilter = "Tax Rev";
    		break;    	
    	case 'User':
    		$scope.homeFilter = "Saved";
    		break;    	   		
    };

    console.log($scope.homeFilter);


  }]);
