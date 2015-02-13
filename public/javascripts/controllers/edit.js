myApp.controller("editCtrl", ['$scope','$location','$routeParams','Suppliers', 'Currency',
    function ($scope, $location,$routeParams, Suppliers, Currency) {  
    
    $scope.suppliers = Suppliers.query();    
    $scope.currencies = Currency.query();    
    console.log('edit controller');


    Suppliers.get({id : $routeParams.id},  function(sif){
        console.log(' Fetching a single supplier --- ' + sif.supplier_name);
        $scope.sif =  sif;
    })

    $scope.save = function(){
        if ($scope.sif.status=='AP Review'){
            $scope.sif.status='PO Review';
        }else if ($scope.sif.status=='PO Review'){
            $scope.sif.status='Tax Review';
        }else if ($scope.sif.status=='Tax Review'){
            $scope.sif.status='AP Review2';
        }else if ($scope.sif.status=='AP Review2'){
            $scope.sif.status='DQM Review';
        }else if ($scope.sif.status=='DQM Review'){
            $scope.sif.status='Complete';
        }





        Suppliers.update({id: $routeParams.id}, $scope.sif, function(){});
        $location.url('/home');      
    }

    $scope.goHome = function(){
        $location.url('/home');
    }   
}]);

/*
myApp.controller("apCtrl", ['$scope','Suppliers','$location','$routeParams', function ($scope, Suppliers,$location,$routeParams) {  
    console.log('AP controller');
    //console.log('edit controller' + $routeParams.id);

    Suppliers.get({id : $routeParams.id}, $scope.sif, function(sif){
        $scope.sif =  sif;
    })

    $scope.save = function(){
        Suppliers.update({id: $routeParams.id}, $scope.sif, function(){});
        $location.url('/');
    }

   
    $scope.cancel = function(){
        $location.url('/');
    }
}]);

*/